(function () {
  "use strict";

  var toggle = document.getElementById("nav-toggle");
  var panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;

  function menuLabel(open) {
    if (window.Unit23I18n) {
      var lang =
        document.documentElement.getAttribute("data-lang") ||
        window.Unit23I18n.detect();
      return window.Unit23I18n.t(
        lang,
        open ? "a11y.closeMenu" : "a11y.openMenu"
      );
    }
    return open ? "Close menu" : "Open menu";
  }

  function setOpen(open) {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", menuLabel(open));
    if (open) {
      panel.removeAttribute("hidden");
    } else {
      panel.setAttribute("hidden", "");
    }
  }

  toggle.addEventListener("click", function () {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  panel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 900px)").matches) {
      setOpen(false);
    }
  });

  window.addEventListener("unit23:langchange", function () {
    var open = document.body.classList.contains("nav-open");
    toggle.setAttribute("aria-label", menuLabel(open));
  });
})();
