#!/usr/bin/env bash
# Create DNS records so unit23.xyz / www point at the Pages project.
# Requires CLOUDFLARE_API_TOKEN with Zone.DNS Edit on unit23.xyz
set -euo pipefail

ZONE_ID="${CLOUDFLARE_ZONE_ID:-877217d9b95c0aef88da94fff4157787}"
TARGET="${PAGES_TARGET:-unit23-xyz.pages.dev}"
TOKEN="${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN (Zone.DNS Edit)}"

api() {
  local method=$1 path=$2 data=${3:-}
  if [[ -n "$data" ]]; then
    curl -sS -X "$method" "https://api.cloudflare.com/client/v4${path}" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json" \
      --data "$data"
  else
    curl -sS -X "$method" "https://api.cloudflare.com/client/v4${path}" \
      -H "Authorization: Bearer ${TOKEN}" \
      -H "Content-Type: application/json"
  fi
}

upsert_cname() {
  local name=$1
  local existing
  existing=$(api GET "/zones/${ZONE_ID}/dns_records?type=CNAME&name=${name}")
  local id
  id=$(python3 -c 'import json,sys; d=json.load(sys.stdin); print(d["result"][0]["id"] if d.get("success") and d["result"] else "")' <<<"$existing")
  local body
  body=$(python3 -c "import json; print(json.dumps({'type':'CNAME','name':'''$name''','content':'''$TARGET''','proxied':True,'ttl':1}))")
  if [[ -n "$id" ]]; then
    echo "Updating CNAME ${name} -> ${TARGET}"
    api PUT "/zones/${ZONE_ID}/dns_records/${id}" "$body" | python3 -c 'import json,sys; d=json.load(sys.stdin); print("  ok" if d.get("success") else d)'
  else
    echo "Creating CNAME ${name} -> ${TARGET}"
    api POST "/zones/${ZONE_ID}/dns_records" "$body" | python3 -c 'import json,sys; d=json.load(sys.stdin); print("  ok" if d.get("success") else d)'
  fi
}

echo "Zone ${ZONE_ID}, target ${TARGET}"
upsert_cname "unit23.xyz"
upsert_cname "www.unit23.xyz"
echo "Done. SSL for Pages custom domains may take a few minutes."
