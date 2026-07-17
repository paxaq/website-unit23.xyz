/**
 * UNIT23 site i18n — en-US, ar-SA, fr, es
 */
(function (global) {
  "use strict";

  var STORAGE_KEY = "unit23-lang";
  var SUPPORTED = ["en", "ar", "fr", "es"];

  var META = {
    en: { htmlLang: "en-US", dir: "ltr", short: "EN", label: "English (US)" },
    ar: { htmlLang: "ar-SA", dir: "rtl", short: "AR", label: "العربية" },
    fr: { htmlLang: "fr", dir: "ltr", short: "FR", label: "Français" },
    es: { htmlLang: "es", dir: "ltr", short: "ES", label: "Español" },
  };

  var T = {
    en: {
      "meta.title":
        "UNIT23 LIMITED — Cross-border Trade & Information Consulting | Hong Kong",
      "meta.description":
        "UNIT23 LIMITED is a Hong Kong company specialising in cross-border trade—import & export, online retail, logistics—and information consulting in supply chain, online marketing, and channel management.",
      "meta.ogTitle": "UNIT23 LIMITED — Cross-border Trade & Consulting",
      "meta.ogDescription":
        "Hong Kong trading company: cross-border trade and information consulting services.",
      "a11y.skip": "Skip to content",
      "a11y.home": "UNIT23 home",
      "a11y.primaryNav": "Primary",
      "a11y.mobileNav": "Mobile",
      "a11y.openMenu": "Open menu",
      "a11y.closeMenu": "Close menu",
      "a11y.lang": "Language",
      "a11y.businessFocus": "Business focus",
      "top.location": "Hong Kong SAR",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.why": "Why UNIT23",
      "nav.process": "How we work",
      "nav.capabilities": "Capabilities",
      "nav.contact": "Contact",
      "nav.enquire": "Enquire",
      "nav.emailUs": "Email hello@unit23.xyz",
      "hero.eyebrow": "Hong Kong · Trade & consulting",
      "hero.title": "Cross-border commerce, structured for clarity.",
      "hero.lede":
        "UNIT23 LIMITED helps partners move goods, sell online, and coordinate logistics—while advising on supply chain, digital marketing, and multi-channel growth from Hong Kong.",
      "hero.ctaServices": "Explore services",
      "hero.ctaContact": "Talk to our team",
      "hero.focusTitle": "What we focus on",
      "hero.focus1.title": "Cross-border trade",
      "hero.focus1.body":
        "Import & export, online retail, and logistics coordination.",
      "hero.focus2.title": "Information consulting",
      "hero.focus2.body":
        "Supply chain, online marketing, and channel management.",
      "hero.focus3.title": "Hong Kong base",
      "hero.focus3.body":
        "A practical hub for regional and international commerce.",
      "about.kicker": "About the company",
      "about.title":
        "A Hong Kong firm built around trade execution and practical advice.",
      "about.p1":
        "UNIT23 LIMITED is a Hong Kong trading and advisory company. We work with counterparties who need reliable support moving products across borders—and clear information to make commercial decisions with confidence.",
      "about.p2":
        "Our trade work covers import and export coordination, online retail operations, and logistics arrangements with delivery partners. Our consulting work strengthens supply chain visibility, online marketing direction, and channel management for brands and distributors.",
      "about.p3":
        "We keep engagements structured and proportionate: define the commercial objective, agree the scope, execute with transparent updates, and hand over a clean operating picture.",
      "about.profile": "Company profile",
      "about.legalName": "Legal name",
      "about.location": "Location",
      "about.focus": "Focus",
      "about.contact": "Contact",
      "about.focusValue": "Cross-border trade & consulting",
      "about.quote":
        "“Commerce across borders works best when operations and information move together.”",
      "about.quoteAttr": "UNIT23 operating principle",
      "services.kicker": "Services",
      "services.title": "Two pillars. Six service lines.",
      "services.lede":
        "Engage us for a single service line or a coordinated package across trade execution and commercial consulting.",
      "trade.index": "Pillar 01",
      "trade.title": "Cross-border trade",
      "trade.intro":
        "Commercial support for moving products across markets—buying, selling, and fulfilment coordination from Hong Kong.",
      "trade.s1.title": "Import & export",
      "trade.s1.body":
        "Cross-border procurement and sales support, commercial coordination with suppliers and buyers, and trade documentation assistance for international shipments.",
      "trade.s2.title": "Online retail",
      "trade.s2.body":
        "Digital storefront and marketplace retail operations for regional and overseas customers, including listing cadence and order-handling workflows.",
      "trade.s3.title": "Logistics services",
      "trade.s3.body":
        "Shipping, warehousing coordination, and last-mile arrangements with logistics partners—aligned to product type and destination market.",
      "consulting.index": "Pillar 02",
      "consulting.title": "Information consulting",
      "consulting.intro":
        "Practical advisory work to improve how goods, brands, and channels perform across borders.",
      "consulting.s1.title": "Supply chain management",
      "consulting.s1.body":
        "Visibility, planning, and process improvement across suppliers, inventory positions, and delivery timelines for more predictable fulfilment.",
      "consulting.s2.title": "Online marketing",
      "consulting.s2.body":
        "Digital campaign planning, platform selection, and performance-oriented content direction for product and brand launches across markets.",
      "consulting.s3.title": "Channel management",
      "consulting.s3.body":
        "Distributor, marketplace, and partner channel setup, alignment of commercial terms, and ongoing coordination to protect sell-through quality.",
      "why.kicker": "Why UNIT23",
      "why.title": "Enterprise basics, without unnecessary complexity.",
      "why.lede":
        "We design engagements to be understandable to commercial, operations, and leadership stakeholders alike.",
      "why.c1.title": "Hong Kong vantage point",
      "why.c1.body":
        "Positioned in a major trading hub for regional connectivity, banking access, and international counterparties.",
      "why.c2.title": "Trade + insight together",
      "why.c2.body":
        "Execution and information under one roof—so logistics plans and go-to-market choices stay aligned.",
      "why.c3.title": "Clear commercial scope",
      "why.c3.body":
        "Defined deliverables, decision owners, and update cadence—so projects do not drift into open-ended activity.",
      "why.c4.title": "Partner-ready posture",
      "why.c4.body":
        "Built for B2B collaboration with suppliers, brands, platforms, and logistics providers across markets.",
      "process.kicker": "How we work",
      "process.title": "A straightforward engagement path.",
      "process.lede":
        "From first conversation to ongoing operations, the sequence stays visible and easy to follow.",
      "process.s1.title": "Discover",
      "process.s1.body":
        "Clarify markets, products, constraints, and the commercial outcome you need.",
      "process.s2.title": "Scope",
      "process.s2.body":
        "Agree service lines, responsibilities, timelines, and how success will be measured.",
      "process.s3.title": "Execute",
      "process.s3.body":
        "Run trade operations and/or consulting workstreams with regular status checkpoints.",
      "process.s4.title": "Optimise",
      "process.s4.body":
        "Review results, refine channel or supply chain settings, and plan the next cycle.",
      "cap.kicker": "Capabilities",
      "cap.title": "Where we typically create leverage.",
      "cap.intro":
        "Whether you need a single cross-border shipment programme or a fuller market-entry support package, we organise work around durable operating capabilities—not one-off tactics.",
      "cap.c1.title": "Market entry support",
      "cap.c1.body":
        "Structure first sales, partners, and fulfilment paths into a new region.",
      "cap.c2.title": "Supplier coordination",
      "cap.c2.body":
        "Align lead times, quality expectations, and commercial terms with vendors.",
      "cap.c3.title": "Marketplace operations",
      "cap.c3.body":
        "Stand up and maintain online retail presence with clean order handling.",
      "cap.c4.title": "Fulfilment orchestration",
      "cap.c4.body":
        "Connect warehousing and shipping options to service-level targets.",
      "cap.c5.title": "Performance marketing direction",
      "cap.c5.body":
        "Prioritise channels and messaging for measurable demand generation.",
      "cap.c6.title": "Partner channel governance",
      "cap.c6.body":
        "Keep distributors and platforms aligned on pricing, stock, and brand rules.",
      "cta.title": "Planning a cross-border initiative?",
      "cta.body":
        "Share your product category, target markets, and timeline. We will respond with a clear view on fit and next steps.",
      "cta.email": "Email UNIT23",
      "cta.services": "Review services",
      "contact.kicker": "Contact",
      "contact.title": "Start a conversation.",
      "contact.lede":
        "For trade enquiries, consulting discussions, or partnership introductions.",
      "contact.direct": "Direct contact",
      "contact.directBody":
        "Write to us with a short brief. We typically reply within one business day.",
      "contact.emailLabel": "Email",
      "contact.companyLabel": "Company",
      "contact.locationLabel": "Location",
      "contact.websiteLabel": "Website",
      "contact.tipsTitle": "Helpful details to include",
      "contact.tipsBody":
        "A concise note helps us respond with a relevant next step rather than a generic reply.",
      "contact.tip1": "Product or category and estimated volume",
      "contact.tip2": "Origin and destination markets",
      "contact.tip3": "Whether you need trade execution, consulting, or both",
      "contact.tip4": "Target timeline and any hard constraints",
      "footer.blurb":
        "Hong Kong trading company focused on cross-border trade and information consulting.",
      "footer.company": "Company",
      "footer.trade": "Cross-border trade",
      "footer.consulting": "Consulting",
      "footer.copy": "© 2026 UNIT23 LIMITED · Hong Kong",
    },

    ar: {
      "meta.title":
        "UNIT23 LIMITED — التجارة عبر الحدود والاستشارات | هونغ كونغ",
      "meta.description":
        "UNIT23 LIMITED شركة هونغ كونغ متخصصة في التجارة عبر الحدود—الاستيراد والتصدير والتجزئة الإلكترونية واللوجستيات—وفي استشارات المعلومات لسلاسل الإمداد والتسويق الرقمي وإدارة القنوات.",
      "meta.ogTitle": "UNIT23 LIMITED — التجارة والاستشارات عبر الحدود",
      "meta.ogDescription":
        "شركة تجارية في هونغ كونغ: تجارة عبر الحدود وخدمات استشارات المعلومات.",
      "a11y.skip": "تخطّ إلى المحتوى",
      "a11y.home": "الصفحة الرئيسية UNIT23",
      "a11y.primaryNav": "التنقل الرئيسي",
      "a11y.mobileNav": "قائمة الجوال",
      "a11y.openMenu": "فتح القائمة",
      "a11y.closeMenu": "إغلاق القائمة",
      "a11y.lang": "اللغة",
      "a11y.businessFocus": "محاور العمل",
      "top.location": "منطقة هونغ كونغ الإدارية الخاصة",
      "nav.about": "من نحن",
      "nav.services": "الخدمات",
      "nav.why": "لماذا UNIT23",
      "nav.process": "كيف نعمل",
      "nav.capabilities": "القدرات",
      "nav.contact": "تواصل",
      "nav.enquire": "استفسر",
      "nav.emailUs": "راسلنا hello@unit23.xyz",
      "hero.eyebrow": "هونغ كونغ · التجارة والاستشارات",
      "hero.title": "تجارة عبر الحدود، بهيكلة واضحة.",
      "hero.lede":
        "تساعد UNIT23 LIMITED شركاءها على نقل البضائع والبيع عبر الإنترنت وتنسيق اللوجستيات—مع تقديم المشورة حول سلاسل الإمداد والتسويق الرقمي والنمو متعدد القنوات انطلاقاً من هونغ كونغ.",
      "hero.ctaServices": "استكشف الخدمات",
      "hero.ctaContact": "تحدث مع فريقنا",
      "hero.focusTitle": "ما نركّز عليه",
      "hero.focus1.title": "التجارة عبر الحدود",
      "hero.focus1.body":
        "الاستيراد والتصدير والتجزئة الإلكترونية وتنسيق اللوجستيات.",
      "hero.focus2.title": "استشارات المعلومات",
      "hero.focus2.body":
        "إدارة سلاسل الإمداد والتسويق الإلكتروني وإدارة القنوات.",
      "hero.focus3.title": "قاعدة في هونغ كونغ",
      "hero.focus3.body":
        "مركز عملي للتجارة الإقليمية والدولية.",
      "about.kicker": "عن الشركة",
      "about.title":
        "شركة في هونغ كونغ مبنية على تنفيذ التجارة والمشورة العملية.",
      "about.p1":
        "UNIT23 LIMITED شركة تجارية واستشارية في هونغ كونغ. نعمل مع أطراف تحتاج دعماً موثوقاً لنقل المنتجات عبر الحدود—ومعلومات واضحة لاتخاذ قرارات تجارية بثقة.",
      "about.p2":
        "يغطي عملنا التجاري تنسيق الاستيراد والتصدير وتشغيل التجزئة الإلكترونية وترتيبات اللوجستيات مع شركاء التوصيل. ويعزّز عملنا الاستشاري رؤية سلسلة الإمداد واتجاه التسويق الإلكتروني وإدارة القنوات للعلامات والموزعين.",
      "about.p3":
        "نحافظ على نطاق واضح ومتناسب: نحدد الهدف التجاري، نتفق على النطاق، ننفّذ بتحديثات شفافة، ونسلّم صورة تشغيلية نظيفة.",
      "about.profile": "ملف الشركة",
      "about.legalName": "الاسم القانوني",
      "about.location": "الموقع",
      "about.focus": "التركيز",
      "about.contact": "التواصل",
      "about.focusValue": "التجارة عبر الحدود والاستشارات",
      "about.quote":
        "«التجارة عبر الحدود تعمل بأفضل شكل عندما تتحرك العمليات والمعلومات معاً.»",
      "about.quoteAttr": "مبدأ تشغيل UNIT23",
      "services.kicker": "الخدمات",
      "services.title": "ركيزتان. ست خطوط خدمة.",
      "services.lede":
        "تعامل معنا على خط خدمة واحد أو حزمة منسّقة تشمل التنفيذ التجاري والاستشارات.",
      "trade.index": "الركيزة 01",
      "trade.title": "التجارة عبر الحدود",
      "trade.intro":
        "دعم تجاري لنقل المنتجات عبر الأسواق—الشراء والبيع وتنسيق التنفيذ من هونغ كونغ.",
      "trade.s1.title": "الاستيراد والتصدير",
      "trade.s1.body":
        "دعم المشتريات والمبيعات عبر الحدود، والتنسيق التجاري مع المورّدين والمشترين، والمساعدة في وثائق الشحن الدولي.",
      "trade.s2.title": "التجزئة الإلكترونية",
      "trade.s2.body":
        "تشغيل المتاجر والمنصات الإلكترونية للعملاء الإقليميين والدوليين، بما في ذلك إيقاع الإدراج وسير معالجة الطلبات.",
      "trade.s3.title": "الخدمات اللوجستية",
      "trade.s3.body":
        "الشحن وتنسيق التخزين وترتيبات الميل الأخير مع شركاء اللوجستيات—بما يتوافق مع نوع المنتج وسوق الوجهة.",
      "consulting.index": "الركيزة 02",
      "consulting.title": "استشارات المعلومات",
      "consulting.intro":
        "عمل استشاري عملي لتحسين أداء السلع والعلامات والقنوات عبر الحدود.",
      "consulting.s1.title": "إدارة سلسلة الإمداد",
      "consulting.s1.body":
        "الرؤية والتخطيط وتحسين العمليات عبر المورّدين والمخزون ومواعيد التسليم لزيادة قابلية التنبؤ.",
      "consulting.s2.title": "التسويق الإلكتروني",
      "consulting.s2.body":
        "تخطيط الحملات الرقمية واختيار المنصات وتوجيه المحتوى الموجّه للأداء لإطلاق المنتجات والعلامات.",
      "consulting.s3.title": "إدارة القنوات",
      "consulting.s3.body":
        "إعداد قنوات الموزعين والمنصات والشركاء، ومواءمة الشروط التجارية، والتنسيق المستمر لحماية جودة البيع.",
      "why.kicker": "لماذا UNIT23",
      "why.title": "أساسيات مؤسسية، دون تعقيد غير لازم.",
      "why.lede":
        "نصمّم التعاون ليكون مفهوماً لأصحاب المصلحة في التجارة والعمليات والقيادة على حد سواء.",
      "why.c1.title": "ميزة موقع هونغ كونغ",
      "why.c1.body":
        "موقع في مركز تجاري رئيسي للربط الإقليمي والوصول المصرفي والأطراف الدولية.",
      "why.c2.title": "التجارة والرؤية معاً",
      "why.c2.body":
        "التنفيذ والمعلومات تحت سقف واحد—لتبقى خطط اللوجستيات وخيارات دخول السوق متوافقة.",
      "why.c3.title": "نطاق تجاري واضح",
      "why.c3.body":
        "مخرجات محددة ومسؤولون عن القرار وإيقاع تحديث—حتى لا تنجرف المشاريع إلى عمل مفتوح النهاية.",
      "why.c4.title": "جاهزية للشراكة",
      "why.c4.body":
        "مبنية للتعاون بين الشركات مع المورّدين والعلامات والمنصات ومزوّدي اللوجستيات.",
      "process.kicker": "كيف نعمل",
      "process.title": "مسار تعاون مباشر.",
      "process.lede":
        "من أول محادثة إلى التشغيل المستمر، يبقى التسلسل واضحاً وسهل المتابعة.",
      "process.s1.title": "اكتشاف",
      "process.s1.body":
        "توضيح الأسواق والمنتجات والقيود والنتيجة التجارية المطلوبة.",
      "process.s2.title": "تحديد النطاق",
      "process.s2.body":
        "الاتفاق على خطوط الخدمة والمسؤوليات والجداول وكيفية قياس النجاح.",
      "process.s3.title": "تنفيذ",
      "process.s3.body":
        "تشغيل عمليات التجارة و/أو مسارات الاستشارات مع نقاط تحقق منتظمة.",
      "process.s4.title": "تحسين",
      "process.s4.body":
        "مراجعة النتائج وتحسين إعدادات القنوات أو سلسلة الإمداد والتخطيط للدورة التالية.",
      "cap.kicker": "القدرات",
      "cap.title": "أين نخلق قيمة عادةً.",
      "cap.intro":
        "سواء احتجت برنامجاً واحداً للشحن عبر الحدود أو حزمة أشمل لدخول السوق، ننظم العمل حول قدرات تشغيلية مستدامة—لا تكتيكات لمرة واحدة.",
      "cap.c1.title": "دعم دخول السوق",
      "cap.c1.body":
        "هيكلة أولى المبيعات والشركاء ومسارات التنفيذ في منطقة جديدة.",
      "cap.c2.title": "تنسيق المورّدين",
      "cap.c2.body":
        "مواءمة أوقات التوريد وتوقعات الجودة والشروط التجارية مع المورّدين.",
      "cap.c3.title": "تشغيل المنصات",
      "cap.c3.body":
        "إطلاق والحفاظ على حضور تجزئة إلكتروني مع معالجة طلبات منظمة.",
      "cap.c4.title": "تنسيق التنفيذ",
      "cap.c4.body":
        "ربط خيارات التخزين والشحن بأهداف مستوى الخدمة.",
      "cap.c5.title": "توجيه التسويق الأدائي",
      "cap.c5.body":
        "أولوية القنوات والرسائل لتوليد طلب قابل للقياس.",
      "cap.c6.title": "حوكمة قنوات الشركاء",
      "cap.c6.body":
        "إبقاء الموزعين والمنصات متوافقين حول التسعير والمخزون وقواعد العلامة.",
      "cta.title": "تخطط لمبادرة عبر الحدود؟",
      "cta.body":
        "شارك فئة المنتج والأسواق المستهدفة والجدول الزمني. سنرد برؤية واضحة حول الملاءمة والخطوات التالية.",
      "cta.email": "راسل UNIT23",
      "cta.services": "راجع الخدمات",
      "contact.kicker": "تواصل",
      "contact.title": "ابدأ محادثة.",
      "contact.lede":
        "للاستفسارات التجارية والمناقشات الاستشارية أو تعارف الشراكات.",
      "contact.direct": "تواصل مباشر",
      "contact.directBody":
        "راسلنا بملخص موجز. نرد عادة خلال يوم عمل واحد.",
      "contact.emailLabel": "البريد",
      "contact.companyLabel": "الشركة",
      "contact.locationLabel": "الموقع",
      "contact.websiteLabel": "الموقع الإلكتروني",
      "contact.tipsTitle": "تفاصيل مفيدة لتضمينها",
      "contact.tipsBody":
        "ملاحظة موجزة تساعدنا على الرد بخطوة تالية ملائمة بدل رد عام.",
      "contact.tip1": "المنتج أو الفئة والحجم التقديري",
      "contact.tip2": "أسواق المنشأ والوجهة",
      "contact.tip3": "هل تحتاج تنفيذاً تجارياً أو استشارات أو كليهما",
      "contact.tip4": "الجدول المستهدف وأي قيود صارمة",
      "footer.blurb":
        "شركة تجارية في هونغ كونغ تركز على التجارة عبر الحدود واستشارات المعلومات.",
      "footer.company": "الشركة",
      "footer.trade": "التجارة عبر الحدود",
      "footer.consulting": "الاستشارات",
      "footer.copy": "© 2026 UNIT23 LIMITED · هونغ كونغ",
    },

    fr: {
      "meta.title":
        "UNIT23 LIMITED — Commerce transfrontalier & conseil | Hong Kong",
      "meta.description":
        "UNIT23 LIMITED est une société de Hong Kong spécialisée dans le commerce transfrontalier—import/export, retail en ligne, logistique—et le conseil en information : supply chain, marketing digital et gestion de canaux.",
      "meta.ogTitle": "UNIT23 LIMITED — Commerce & conseil transfrontaliers",
      "meta.ogDescription":
        "Société commerciale à Hong Kong : commerce transfrontalier et conseil en information.",
      "a11y.skip": "Aller au contenu",
      "a11y.home": "Accueil UNIT23",
      "a11y.primaryNav": "Navigation principale",
      "a11y.mobileNav": "Menu mobile",
      "a11y.openMenu": "Ouvrir le menu",
      "a11y.closeMenu": "Fermer le menu",
      "a11y.lang": "Langue",
      "a11y.businessFocus": "Axes d’activité",
      "top.location": "R.A.S. de Hong Kong",
      "nav.about": "À propos",
      "nav.services": "Services",
      "nav.why": "Pourquoi UNIT23",
      "nav.process": "Notre méthode",
      "nav.capabilities": "Capacités",
      "nav.contact": "Contact",
      "nav.enquire": "Nous contacter",
      "nav.emailUs": "Écrire à hello@unit23.xyz",
      "hero.eyebrow": "Hong Kong · Commerce & conseil",
      "hero.title": "Commerce transfrontalier, structuré avec clarté.",
      "hero.lede":
        "UNIT23 LIMITED aide ses partenaires à déplacer des marchandises, vendre en ligne et coordonner la logistique—tout en conseillant sur la supply chain, le marketing digital et la croissance multi-canaux depuis Hong Kong.",
      "hero.ctaServices": "Découvrir les services",
      "hero.ctaContact": "Parler à l’équipe",
      "hero.focusTitle": "Nos priorités",
      "hero.focus1.title": "Commerce transfrontalier",
      "hero.focus1.body":
        "Import & export, retail en ligne et coordination logistique.",
      "hero.focus2.title": "Conseil en information",
      "hero.focus2.body":
        "Supply chain, marketing en ligne et gestion de canaux.",
      "hero.focus3.title": "Base à Hong Kong",
      "hero.focus3.body":
        "Un hub pratique pour le commerce régional et international.",
      "about.kicker": "À propos de l’entreprise",
      "about.title":
        "Une société de Hong Kong centrée sur l’exécution commerciale et le conseil pratique.",
      "about.p1":
        "UNIT23 LIMITED est une société commerciale et de conseil à Hong Kong. Nous accompagnons des contreparties qui ont besoin d’un soutien fiable pour faire circuler des produits au-delà des frontières—et d’informations claires pour décider en confiance.",
      "about.p2":
        "Notre activité commerciale couvre la coordination import/export, le retail en ligne et les arrangements logistiques avec des partenaires de livraison. Notre conseil renforce la visibilité supply chain, l’orientation marketing digital et la gestion de canaux pour marques et distributeurs.",
      "about.p3":
        "Nous gardons des engagements structurés et proportionnés : définir l’objectif commercial, s’accorder sur le périmètre, exécuter avec des mises à jour transparentes, et transmettre une vision opérationnelle claire.",
      "about.profile": "Profil de l’entreprise",
      "about.legalName": "Raison sociale",
      "about.location": "Localisation",
      "about.focus": "Focus",
      "about.contact": "Contact",
      "about.focusValue": "Commerce transfrontalier & conseil",
      "about.quote":
        "« Le commerce transfrontalier fonctionne mieux lorsque les opérations et l’information avancent ensemble. »",
      "about.quoteAttr": "Principe d’exploitation UNIT23",
      "services.kicker": "Services",
      "services.title": "Deux piliers. Six lignes de service.",
      "services.lede":
        "Engagez-nous pour une seule ligne de service ou un package coordonné d’exécution commerciale et de conseil.",
      "trade.index": "Pilier 01",
      "trade.title": "Commerce transfrontalier",
      "trade.intro":
        "Soutien commercial pour déplacer des produits entre marchés—achat, vente et coordination de l’exécution depuis Hong Kong.",
      "trade.s1.title": "Import & export",
      "trade.s1.body":
        "Soutien aux achats et ventes transfrontaliers, coordination commerciale avec fournisseurs et acheteurs, et aide documentaire pour les expéditions internationales.",
      "trade.s2.title": "Retail en ligne",
      "trade.s2.body":
        "Exploitation de boutiques et marketplaces pour clients régionaux et internationaux, y compris le rythme de listing et les flux de commandes.",
      "trade.s3.title": "Services logistiques",
      "trade.s3.body":
        "Expédition, coordination d’entreposage et last mile avec des partenaires logistiques—adaptés au type de produit et au marché de destination.",
      "consulting.index": "Pilier 02",
      "consulting.title": "Conseil en information",
      "consulting.intro":
        "Conseil pratique pour améliorer la performance des biens, des marques et des canaux au-delà des frontières.",
      "consulting.s1.title": "Gestion de la supply chain",
      "consulting.s1.body":
        "Visibilité, planification et amélioration des processus entre fournisseurs, stocks et délais de livraison pour une exécution plus prévisible.",
      "consulting.s2.title": "Marketing en ligne",
      "consulting.s2.body":
        "Planification de campagnes digitales, choix de plateformes et direction de contenu orientée performance pour les lancements de produits et de marques.",
      "consulting.s3.title": "Gestion de canaux",
      "consulting.s3.body":
        "Mise en place de canaux distributeurs, marketplaces et partenaires, alignement des conditions commerciales et coordination continue pour protéger la qualité des ventes.",
      "why.kicker": "Pourquoi UNIT23",
      "why.title": "Les bases d’une entreprise, sans complexité inutile.",
      "why.lede":
        "Nous concevons des collaborations compréhensibles pour les parties prenantes commerciales, opérationnelles et de direction.",
      "why.c1.title": "Point de vue Hong Kong",
      "why.c1.body":
        "Positionnés dans un hub commercial majeur pour la connectivité régionale, l’accès bancaire et les contreparties internationales.",
      "why.c2.title": "Commerce + insight ensemble",
      "why.c2.body":
        "Exécution et information sous le même toit—pour aligner plans logistiques et choix go-to-market.",
      "why.c3.title": "Périmètre commercial clair",
      "why.c3.body":
        "Livrables définis, décideurs identifiés et rythme de suivi—pour éviter la dérive en activité sans fin.",
      "why.c4.title": "Posture prête au partenariat",
      "why.c4.body":
        "Conçue pour la collaboration B2B avec fournisseurs, marques, plateformes et prestataires logistiques.",
      "process.kicker": "Notre méthode",
      "process.title": "Un parcours d’engagement simple.",
      "process.lede":
        "De la première conversation aux opérations continues, la séquence reste visible et facile à suivre.",
      "process.s1.title": "Découvrir",
      "process.s1.body":
        "Clarifier marchés, produits, contraintes et résultat commercial recherché.",
      "process.s2.title": "Cadrer",
      "process.s2.body":
        "Accorder lignes de service, responsabilités, délais et critères de succès.",
      "process.s3.title": "Exécuter",
      "process.s3.body":
        "Conduire les opérations commerciales et/ou les chantiers de conseil avec des points de contrôle réguliers.",
      "process.s4.title": "Optimiser",
      "process.s4.body":
        "Revoir les résultats, affiner canaux ou supply chain, et planifier le cycle suivant.",
      "cap.kicker": "Capacités",
      "cap.title": "Où nous créons le plus souvent de la valeur.",
      "cap.intro":
        "Qu’il s’agisse d’un programme d’expédition transfrontalière ou d’un package d’entrée sur marché, nous organisons le travail autour de capacités durables—pas de tactiques ponctuelles.",
      "cap.c1.title": "Soutien à l’entrée marché",
      "cap.c1.body":
        "Structurer premières ventes, partenaires et chemins d’exécution vers une nouvelle région.",
      "cap.c2.title": "Coordination fournisseurs",
      "cap.c2.body":
        "Aligner délais, attentes qualité et conditions commerciales avec les vendeurs.",
      "cap.c3.title": "Opérations marketplace",
      "cap.c3.body":
        "Mettre en place et maintenir une présence retail en ligne avec un traitement de commandes propre.",
      "cap.c4.title": "Orchestration de l’exécution",
      "cap.c4.body":
        "Relier entreposage et options d’expédition aux objectifs de niveau de service.",
      "cap.c5.title": "Direction marketing performance",
      "cap.c5.body":
        "Prioriser canaux et messages pour une génération de demande mesurable.",
      "cap.c6.title": "Gouvernance des canaux partenaires",
      "cap.c6.body":
        "Garder distributeurs et plateformes alignés sur prix, stock et règles de marque.",
      "cta.title": "Vous planifiez une initiative transfrontalière ?",
      "cta.body":
        "Partagez catégorie produit, marchés cibles et calendrier. Nous répondrons avec une vision claire de l’adéquation et des prochaines étapes.",
      "cta.email": "Écrire à UNIT23",
      "cta.services": "Voir les services",
      "contact.kicker": "Contact",
      "contact.title": "Engager la conversation.",
      "contact.lede":
        "Pour demandes commerciales, discussions de conseil ou présentations de partenaires.",
      "contact.direct": "Contact direct",
      "contact.directBody":
        "Écrivez-nous un bref résumé. Nous répondons en général sous un jour ouvré.",
      "contact.emailLabel": "E-mail",
      "contact.companyLabel": "Société",
      "contact.locationLabel": "Localisation",
      "contact.websiteLabel": "Site web",
      "contact.tipsTitle": "Détails utiles à inclure",
      "contact.tipsBody":
        "Une note concise nous aide à répondre par une prochaine étape pertinente plutôt qu’une réponse générique.",
      "contact.tip1": "Produit ou catégorie et volume estimé",
      "contact.tip2": "Marchés d’origine et de destination",
      "contact.tip3": "Exécution commerciale, conseil, ou les deux",
      "contact.tip4": "Calendrier cible et contraintes dures",
      "footer.blurb":
        "Société commerciale de Hong Kong axée sur le commerce transfrontalier et le conseil en information.",
      "footer.company": "Entreprise",
      "footer.trade": "Commerce transfrontalier",
      "footer.consulting": "Conseil",
      "footer.copy": "© 2026 UNIT23 LIMITED · Hong Kong",
    },

    es: {
      "meta.title":
        "UNIT23 LIMITED — Comercio transfronterizo y consultoría | Hong Kong",
      "meta.description":
        "UNIT23 LIMITED es una empresa de Hong Kong especializada en comercio transfronterizo—importación y exportación, retail online, logística—y consultoría de información en cadena de suministro, marketing digital y gestión de canales.",
      "meta.ogTitle": "UNIT23 LIMITED — Comercio y consultoría transfronterizos",
      "meta.ogDescription":
        "Empresa comercial en Hong Kong: comercio transfronterizo y servicios de consultoría de información.",
      "a11y.skip": "Saltar al contenido",
      "a11y.home": "Inicio UNIT23",
      "a11y.primaryNav": "Navegación principal",
      "a11y.mobileNav": "Menú móvil",
      "a11y.openMenu": "Abrir menú",
      "a11y.closeMenu": "Cerrar menú",
      "a11y.lang": "Idioma",
      "a11y.businessFocus": "Enfoque de negocio",
      "top.location": "RAE de Hong Kong",
      "nav.about": "Nosotros",
      "nav.services": "Servicios",
      "nav.why": "Por qué UNIT23",
      "nav.process": "Cómo trabajamos",
      "nav.capabilities": "Capacidades",
      "nav.contact": "Contacto",
      "nav.enquire": "Consultar",
      "nav.emailUs": "Escribir a hello@unit23.xyz",
      "hero.eyebrow": "Hong Kong · Comercio y consultoría",
      "hero.title": "Comercio transfronterizo, estructurado con claridad.",
      "hero.lede":
        "UNIT23 LIMITED ayuda a sus socios a mover mercancías, vender en línea y coordinar logística—asesorando en cadena de suministro, marketing digital y crecimiento multicanal desde Hong Kong.",
      "hero.ctaServices": "Explorar servicios",
      "hero.ctaContact": "Hablar con el equipo",
      "hero.focusTitle": "En qué nos centramos",
      "hero.focus1.title": "Comercio transfronterizo",
      "hero.focus1.body":
        "Importación y exportación, retail online y coordinación logística.",
      "hero.focus2.title": "Consultoría de información",
      "hero.focus2.body":
        "Cadena de suministro, marketing online y gestión de canales.",
      "hero.focus3.title": "Base en Hong Kong",
      "hero.focus3.body":
        "Un hub práctico para el comercio regional e internacional.",
      "about.kicker": "Sobre la empresa",
      "about.title":
        "Una firma de Hong Kong centrada en la ejecución comercial y el asesoramiento práctico.",
      "about.p1":
        "UNIT23 LIMITED es una empresa comercial y de asesoría en Hong Kong. Trabajamos con contrapartes que necesitan apoyo fiable para mover productos a través de fronteras—e información clara para decidir con confianza.",
      "about.p2":
        "Nuestro trabajo comercial cubre la coordinación de importación y exportación, operaciones de retail online y arreglos logísticos con socios de entrega. Nuestra consultoría refuerza la visibilidad de la cadena de suministro, la dirección de marketing digital y la gestión de canales para marcas y distribuidores.",
      "about.p3":
        "Mantenemos encargos estructurados y proporcionales: definir el objetivo comercial, acordar el alcance, ejecutar con actualizaciones transparentes y entregar una imagen operativa limpia.",
      "about.profile": "Perfil de la empresa",
      "about.legalName": "Razón social",
      "about.location": "Ubicación",
      "about.focus": "Enfoque",
      "about.contact": "Contacto",
      "about.focusValue": "Comercio transfronterizo y consultoría",
      "about.quote":
        "«El comercio a través de fronteras funciona mejor cuando las operaciones y la información avanzan juntas.»",
      "about.quoteAttr": "Principio operativo de UNIT23",
      "services.kicker": "Servicios",
      "services.title": "Dos pilares. Seis líneas de servicio.",
      "services.lede":
        "Contrátenos para una sola línea de servicio o un paquete coordinado de ejecución comercial y consultoría.",
      "trade.index": "Pilar 01",
      "trade.title": "Comercio transfronterizo",
      "trade.intro":
        "Apoyo comercial para mover productos entre mercados—compra, venta y coordinación de fulfillment desde Hong Kong.",
      "trade.s1.title": "Importación y exportación",
      "trade.s1.body":
        "Apoyo a compras y ventas transfronterizas, coordinación comercial con proveedores y compradores, y asistencia documental para envíos internacionales.",
      "trade.s2.title": "Retail online",
      "trade.s2.body":
        "Operación de tiendas y marketplaces para clientes regionales e internacionales, incluido el ritmo de listados y los flujos de pedidos.",
      "trade.s3.title": "Servicios logísticos",
      "trade.s3.body":
        "Envío, coordinación de almacenes y last mile con socios logísticos—alineados al tipo de producto y al mercado de destino.",
      "consulting.index": "Pilar 02",
      "consulting.title": "Consultoría de información",
      "consulting.intro":
        "Asesoría práctica para mejorar el rendimiento de bienes, marcas y canales a través de fronteras.",
      "consulting.s1.title": "Gestión de la cadena de suministro",
      "consulting.s1.body":
        "Visibilidad, planificación y mejora de procesos entre proveedores, inventarios y plazos de entrega para un fulfillment más predecible.",
      "consulting.s2.title": "Marketing online",
      "consulting.s2.body":
        "Planificación de campañas digitales, selección de plataformas y dirección de contenido orientada al rendimiento para lanzamientos de producto y marca.",
      "consulting.s3.title": "Gestión de canales",
      "consulting.s3.body":
        "Configuración de canales de distribuidores, marketplaces y socios, alineación de términos comerciales y coordinación continua para proteger la calidad de venta.",
      "why.kicker": "Por qué UNIT23",
      "why.title": "Fundamentos empresariales, sin complejidad innecesaria.",
      "why.lede":
        "Diseñamos colaboraciones comprensibles para stakeholders comerciales, de operaciones y de dirección.",
      "why.c1.title": "Perspectiva desde Hong Kong",
      "why.c1.body":
        "Ubicados en un gran hub comercial para conectividad regional, acceso bancario y contrapartes internacionales.",
      "why.c2.title": "Comercio + insight juntos",
      "why.c2.body":
        "Ejecución e información bajo un mismo techo—para alinear planes logísticos y decisiones go-to-market.",
      "why.c3.title": "Alcance comercial claro",
      "why.c3.body":
        "Entregables definidos, responsables de decisión y ritmo de seguimiento—para que los proyectos no deriven en actividad sin fin.",
      "why.c4.title": "Postura lista para partners",
      "why.c4.body":
        "Pensada para colaboración B2B con proveedores, marcas, plataformas y operadores logísticos.",
      "process.kicker": "Cómo trabajamos",
      "process.title": "Un camino de engagement sencillo.",
      "process.lede":
        "Desde la primera conversación hasta la operación continua, la secuencia permanece visible y fácil de seguir.",
      "process.s1.title": "Descubrir",
      "process.s1.body":
        "Aclarar mercados, productos, restricciones y el resultado comercial que necesita.",
      "process.s2.title": "Definir alcance",
      "process.s2.body":
        "Acordar líneas de servicio, responsabilidades, plazos y cómo se medirá el éxito.",
      "process.s3.title": "Ejecutar",
      "process.s3.body":
        "Operar el comercio y/o los workstreams de consultoría con puntos de control regulares.",
      "process.s4.title": "Optimizar",
      "process.s4.body":
        "Revisar resultados, refinar canales o cadena de suministro y planificar el siguiente ciclo.",
      "cap.kicker": "Capacidades",
      "cap.title": "Dónde solemos generar apalancamiento.",
      "cap.intro":
        "Tanto si necesita un programa de envíos transfronterizos como un paquete más amplio de entrada a mercado, organizamos el trabajo en capacidades operativas duraderas—no tácticas puntuales.",
      "cap.c1.title": "Apoyo a la entrada de mercado",
      "cap.c1.body":
        "Estructurar primeras ventas, partners y rutas de fulfillment hacia una nueva región.",
      "cap.c2.title": "Coordinación de proveedores",
      "cap.c2.body":
        "Alinear plazos, expectativas de calidad y términos comerciales con vendors.",
      "cap.c3.title": "Operaciones de marketplace",
      "cap.c3.body":
        "Levantar y mantener presencia de retail online con un manejo limpio de pedidos.",
      "cap.c4.title": "Orquestación de fulfillment",
      "cap.c4.body":
        "Conectar almacenes y opciones de envío con objetivos de nivel de servicio.",
      "cap.c5.title": "Dirección de marketing de performance",
      "cap.c5.body":
        "Priorizar canales y mensajes para generación de demanda medible.",
      "cap.c6.title": "Gobernanza de canales partners",
      "cap.c6.body":
        "Mantener distribuidores y plataformas alineados en precio, stock y reglas de marca.",
      "cta.title": "¿Planifica una iniciativa transfronteriza?",
      "cta.body":
        "Comparta categoría de producto, mercados objetivo y calendario. Responderemos con una visión clara de encaje y siguientes pasos.",
      "cta.email": "Escribir a UNIT23",
      "cta.services": "Ver servicios",
      "contact.kicker": "Contacto",
      "contact.title": "Inicie una conversación.",
      "contact.lede":
        "Para consultas comerciales, conversaciones de consultoría o presentaciones de partners.",
      "contact.direct": "Contacto directo",
      "contact.directBody":
        "Escríbanos un breve resumen. Normalmente respondemos en un día hábil.",
      "contact.emailLabel": "Correo",
      "contact.companyLabel": "Empresa",
      "contact.locationLabel": "Ubicación",
      "contact.websiteLabel": "Sitio web",
      "contact.tipsTitle": "Detalles útiles a incluir",
      "contact.tipsBody":
        "Una nota concisa nos ayuda a responder con un siguiente paso relevante en lugar de una respuesta genérica.",
      "contact.tip1": "Producto o categoría y volumen estimado",
      "contact.tip2": "Mercados de origen y destino",
      "contact.tip3": "Si necesita ejecución comercial, consultoría o ambas",
      "contact.tip4": "Calendario objetivo y cualquier restricción dura",
      "footer.blurb":
        "Empresa comercial de Hong Kong centrada en comercio transfronterizo y consultoría de información.",
      "footer.company": "Empresa",
      "footer.trade": "Comercio transfronterizo",
      "footer.consulting": "Consultoría",
      "footer.copy": "© 2026 UNIT23 LIMITED · Hong Kong",
    },
  };

  function normalize(lang) {
    if (!lang) return "en";
    lang = String(lang).toLowerCase().replace("_", "-");
    if (lang === "en-us" || lang.indexOf("en") === 0) return "en";
    if (lang === "ar-sa" || lang.indexOf("ar") === 0) return "ar";
    if (lang.indexOf("fr") === 0) return "fr";
    if (lang.indexOf("es") === 0) return "es";
    return SUPPORTED.indexOf(lang) >= 0 ? lang : "en";
  }

  function detect() {
    try {
      var params = new URLSearchParams(global.location.search);
      var fromQuery = params.get("lang");
      if (fromQuery) return normalize(fromQuery);
    } catch (e) {}
    try {
      var stored = global.localStorage.getItem(STORAGE_KEY);
      if (stored) return normalize(stored);
    } catch (e2) {}
    try {
      var nav = (global.navigator && (global.navigator.language || global.navigator.userLanguage)) || "en";
      return normalize(nav);
    } catch (e3) {}
    return "en";
  }

  function t(lang, key) {
    var pack = T[lang] || T.en;
    if (pack[key] != null) return pack[key];
    if (T.en[key] != null) return T.en[key];
    return key;
  }

  function setMeta(name, content, attr) {
    attr = attr || "name";
    var el = document.querySelector('meta[' + attr + '="' + name + '"]');
    if (el) el.setAttribute("content", content);
  }

  function apply(lang) {
    lang = normalize(lang);
    var meta = META[lang] || META.en;
    var root = document.documentElement;
    root.lang = meta.htmlLang;
    root.dir = meta.dir;
    root.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      var value = t(lang, key);
      if (el.tagName === "TITLE") {
        el.textContent = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(lang, key));
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(lang, key));
    });

    // Document title + meta
    document.title = t(lang, "meta.title");
    setMeta("description", t(lang, "meta.description"));
    setMeta("og:title", t(lang, "meta.ogTitle"), "property");
    setMeta("og:description", t(lang, "meta.ogDescription"), "property");
    setMeta("twitter:title", t(lang, "meta.ogTitle"));
    setMeta("twitter:description", t(lang, "meta.ogDescription"));

    // Language switcher active state
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var code = btn.getAttribute("data-set-lang");
      var active = code === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // Nav toggle labels depend on open state
    var toggle = document.getElementById("nav-toggle");
    if (toggle) {
      var open = document.body.classList.contains("nav-open");
      toggle.setAttribute(
        "aria-label",
        t(lang, open ? "a11y.closeMenu" : "a11y.openMenu")
      );
    }

    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    try {
      var url = new URL(global.location.href);
      if (url.searchParams.get("lang") !== lang) {
        url.searchParams.set("lang", lang);
        global.history.replaceState({}, "", url.pathname + url.search + url.hash);
      }
    } catch (e2) {}

    global.dispatchEvent(
      new CustomEvent("unit23:langchange", { detail: { lang: lang } })
    );
    return lang;
  }

  function init() {
    var lang = detect();
    apply(lang);

    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        apply(btn.getAttribute("data-set-lang"));
      });
    });
  }

  global.Unit23I18n = {
    META: META,
    SUPPORTED: SUPPORTED,
    t: t,
    detect: detect,
    apply: apply,
    normalize: normalize,
    init: init,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})(typeof window !== "undefined" ? window : globalThis);
