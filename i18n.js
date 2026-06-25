/* =========================================================
   Antonio Laisé · i18n.js
   Système de traduction FR / EN / DE.
   - Clés définies en data-i18n / data-i18n-html / data-i18n-placeholder / data-i18n-aria-label
   - Langue persistée dans localStorage, lit ?lang=fr|en|de dans l'URL
   ========================================================= */

(function () {
  'use strict';

  const T = {
    fr: {
      meta_title: "Antonio Laisé · Tableaux de bord et pilotage pour PME industrielles",
      meta_description: "Conseil en données pour l'industrie. Je trouve, structure et transforme vos données (production, maintenance, qualité, projets) en tableaux de bord sur mesure connectés à vos fichiers. Antonio Laisé, ingénieur data & fiabilité, Hanovre.",

      nav_probleme: "Le problème",
      nav_solution: "Ce que je fais",
      nav_exemples: "Exemples",
      nav_tarifs: "Tarifs",
      nav_apropos: "À propos",
      header_cta: "Échangeons 30 min",
      header_cta_mini: "Contact",

      hero_eyebrow: "Conseil en données pour l'industrie",
      hero_title: "Le pilotage industriel sur mesure, connecté à vos fichiers.",
      hero_lead: "J'aide les PME industrielles à piloter leur production, leur maintenance et leurs projets avec leurs propres chiffres. Travaillons ensemble !",
      hero_cta: "Échangeons 30 minutes",

      prob_eyebrow: "Le problème",
      prob_title: "Beaucoup de données, peu de visibilité.",
      prob_p1: "Dans beaucoup d'entreprises, les employés perdent du temps car les données sont éparpillées, les formats ne sont pas standardisés, les responsabilités mal définies. La situation d'ensemble est souvent devinée mais rarement visualisée et chiffrée.",
      

      sol_eyebrow: "Ce que je fais, la solution !",
      step1_title: "Trouver la donnée",
      step1_aria: "Trouver la donnée",
      step1_detail: "Cartographions ce qui existe et choisissons ensemble les indicateurs nécessaires au pilotage de vos opérations.",
      step2_title: "La formaliser",
      step2_aria: "La formaliser",
      step2_detail: "Structurons ces données en un format propre et fiable, et fixons les responsabilités et les process de mise à jour.",
      step3_title: "La piloter",
      step3_aria: "La piloter",
      step3_detail: "Créons un tableau de bord sur mesure, mis à jour automatiquement, qui signale les écarts dès qu'ils apparaissent.",

      compare_arrow: "Calculé automatiquement",
      kpi_progress_title: "AVANCEMENT",
      period_projet: "PROJET",
      kpi_progress_label: "72 % réalisé, 80,6 % du planning écoulé",
      kpi_late: "15 j. de retard",
      kpi_late_label: "ÉCART PRÉVU À LA FIN",
      solution_legend: "Vos équipes saisissent la donnée brute dans un outil qu'elles connaissent déjà.<br />Le tableau de bord fait tout le reste, automatiquement.",

      why1_q: "Pourquoi structurer vos données ?",
      why1_a: "Des sources, des formats et des versions multiples vous font perdre en efficacité et en fiabilité tous les jours.",
      why2_q: "Pourquoi un tableau de bord pour exploiter ces données au mieux ?",
      why2_a: "Piloter avec les chiffres importants, mis en avant et à jour en continu, permet de décider instantanément.",
      why_chute: "Des décisions plus rapides et des problèmes pris à temps : <strong>du temps et de l'argent économisés.</strong>",

      rm_intro: "Concrètement, le chemin de vos fichiers à votre pilotage :",
      rm1_t: "Aujourd'hui",
      rm1_p: "Sources éparpillées, une version par collègue, chacun sa méthode. Vous pilotez à l'aveugle.",
      rm2_t: "Le diagnostic",
      rm2_p: "On cartographie vos données et on choisit ensemble les indicateurs qui comptent vraiment pour votre activité.",
      rm3_t: "L'organisation clarifiée",
      rm3_p: "Process standardisés, fini les versions multiples. La communication et les responsabilités sont fixées dans les équipes.",
      rm4_t: "Le pilotage en main",
      rm4_p: "Un outil de pilotage taillé à vos besoins, alimenté par des données fiables et mises à jour en continu.",

      pull_quote_1: "Un tableau de bord n'est pas un rapport à produire en fin de mois. C'est un instrument de pilotage qui lit vos fichiers en continu et signale les écarts dès qu'ils apparaissent.",

      feat1: "Conçu sur mesure pour votre métier",
      feat2: "Connecté à vos sources existantes",
      feat3: "Indicateurs calculés automatiquement",
      feat4: "Seuils visuels configurables",
      feat5: "Alertes et rapports par email",
      feat6: "Historique et tendances",
      feat7: "Multi-langue natif",
      feat8: "Accessible sur tout écran",
      feat9: "Mode TV plein écran",
      feat_ai: "Assistant IA intégré (option) : <span class=\"feature-ai-note\">posez une question en langage naturel, obtenez une réponse tirée de vos seules données.</span>",

      ex_eyebrow: "Exemples concrets",
      ex_title: "Trois tableaux de bord de démonstration.",
      ex_banner: "Trois exemples de ce que je sais produire pour l'industrie. Chacun est entièrement adaptable. <strong>Le vôtre sera différent, taillé à votre métier.</strong><br />Ces dashboards embarquent toutes les fonctionnalités et la connexion en temps réel à un tableur. N'hésitez pas à me demander un essai ! <br /><em>Captures en mode TV plein écran. Les autres onglets sont disponibles sur demande.</em>",
      ex1_title: "Production",
      ex1_desc: "Suivi qualité, réclamations clients et fournisseurs, sécurité, conformité, expéditions.",
      ex2_title: "Maintenance & Fiabilité",
      ex2_desc: "MTBF, MTTR, disponibilité, alertes par règles, recommandations de priorisation.",
      ex3_title: "Suivi de projet",
      ex3_desc: "Avancement, valeur acquise (CPI, SPI, EAC), burndown, budget, jalons, équipe, risques.",
      ex_note: "Exemple. Adaptable à vos indicateurs métier.",
      demo_title: "Voir un tableau de bord en condition réelle",
      demo_desc: "Sur demande, je vous donne un accès interactif à l'un de ces tableaux de bord démo et à la source de données (Google Sheets) qui l'alimente. Vous modifiez une cellule, le tableau de bord se met à jour. Vous voyez à quel point c'est simple.",
      demo_btn: "Demander une démo interactive",

      why_eyebrow: "Pourquoi sur-mesure",
      why_title: "Pourquoi pas un outil standard ?",
      arg1_title: "Personnalisation totale",
      arg1_detail: "Feux conditionnels, layout d'atelier, mode TV plein écran : tout demande de bidouiller. Sur-mesure, c'est du code : tout est possible.",
      arg2_title: "Vos indicateurs métier",
      arg2_detail: "MTBF, OEE, alertes selon vos règles : ces calculs métier n'existent pas dans les vues natives. Sur-mesure, chaque indicateur suit votre logique exacte.",
      arg3_title: "Vos données, vos fichiers",
      arg3_detail: "Pas de nouvelle plateforme à adopter. Vos équipes gardent leurs outils de saisie, vos données ne partent pas chez un éditeur tiers.",
      pull_quote_2: "Ces outils sont conçus pour des millions d'usages. Un tableau de bord sur mesure est conçu pour un seul : le vôtre.",

      tarifs_eyebrow: "Tarifs",
      tarifs_title: "Un tarif simple et transparent.",
      tarifs_p1: "Mon taux journalier est de 300 €. Un projet de pilotage type représente environ entre 5 et 10 jours de travail : vous avez alors votre projet de pilotage complet <strong>entre 1 500 € et 3 000 €</strong>. Tout se fait sur devis, en fonction de vos besoins.",
      tarifs_p2: "Ensuite, l'hébergement, la maintenance et les évolutions sont assurés par abonnement, <strong>à partir de 100 € par mois et par tableau de bord</strong>. Le détail des formules (cloud ou sur vos serveurs, avec ou sans assistant IA) est présenté dans la brochure, sur simple demande.",
      tarifs_tax: "Tarifs en euros, hors périmètre spécifique (sources multiples, connecteur métier sur devis). TVA non applicable (régime de la franchise en base).",

      about_eyebrow: "Qui suis-je",
      about_title: "Antonio Laisé, ingénieur data & fiabilité.",
      about_p1: "Ingénieur mécanique de l'UTC Compiègne, spécialité Data & Fiabilité pour l'industrie. Basé à Hanovre, j'interviens en France et en Allemagne.",
      about_p2: "Chez Nexans Hanovre, j'ai optimisé des procédés et construit les tableaux de bord qui servaient au pilotage quotidien de l'atelier. Avant, chez EDF en génie civil nucléaire, des études de fiabilité sur les structures béton. Ce que je propose, je l'ai d'abord fait en usine.",
      about_pitch: "Organiser des données, simplifier ce qui s'enlise, automatiser le répétitif, faire gagner du temps. C'est ce que je viens chercher dans chaque mission.",
      about_cv: "Voir mon CV en ligne →",

      contact_eyebrow: "Contact",
      contact_title: "Échangeons 30 minutes.",
      contact_p1: "Décrivez votre besoin en quelques mots. Je reviens vers vous sous 24 heures ouvrées pour caler un échange.",
      contact_brochure: "Vous voulez le détail de mon offre ? Une brochure complète est disponible sur simple demande.",
      label_firstname: "Prénom *",
      label_lastname: "Nom *",
      label_company: "Entreprise *",
      label_need: "Votre besoin principal *",
      need_structurer: "Structurer mes données",
      need_dashboard: "Créer un tableau de bord",
      need_indecis: "Je ne sais pas encore",
      label_contact: "Email ou téléphone *",
      label_message: "Message <span class=\"field-optional\">(optionnel)</span>",
      placeholder_message: "Décrivez brièvement votre contexte ou votre besoin.",
      submit_btn: "Envoyer ma demande",
      form_success: "Merci, votre demande a bien été envoyée. Je reviens vers vous sous 24 heures ouvrées.",
      form_error: "Une erreur est survenue lors de l'envoi. Réessayez, ou écrivez-moi directement par email.",
      alt_cta: "Ou <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">prenez directement RDV →</a>",

      footer_location: "Hanovre · France & Allemagne",
      footer_mentions: "Mentions légales",
      footer_privacy: "Politique de confidentialité",
      footer_copyright: "© 2026 Antonio Laisé. Tous droits réservés.",

      mentions_title: "Mentions légales",
      mentions_h1: "Éditeur du site",
      mentions_editor: "Antonio Laisé<br />Conseil indépendant en structuration de données et tableaux de bord sur mesure<br />Hanovre, Allemagne<br />Contact : <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      mentions_status: "Statut juridique en cours de constitution. La forme juridique, le numéro d'immatriculation (SIRET ou Steuernummer) et l'adresse professionnelle seront ajoutés dès la finalisation de la structure.",
      mentions_h2: "Directeur de publication",
      mentions_director: "Antonio Laisé",
      mentions_h3: "Hébergeur",
      mentions_host: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      mentions_h4: "Propriété intellectuelle",
      mentions_ip: "L'ensemble du contenu de ce site (textes, images, captures d'écran, code) est la propriété d'Antonio Laisé, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.",
      mentions_h5: "Crédits",
      mentions_credits: "Site développé par Antonio Laisé en HTML, CSS et JavaScript.<br />Polices : Inter et JetBrains Mono (Google Fonts).",

      privacy_title: "Politique de confidentialité",
      privacy_intro: "Cette politique décrit les données personnelles collectées sur ce site, leur finalité, leur durée de conservation et vos droits, conformément au Règlement Général sur la Protection des Données (RGPD).",
      privacy_h1: "Données collectées via le formulaire de contact",
      privacy_form_intro: "Lorsque vous remplissez le formulaire de contact, les informations suivantes sont collectées :",
      privacy_li1: "Prénom et nom",
      privacy_li2: "Nom de votre entreprise",
      privacy_li3: "Email ou numéro de téléphone",
      privacy_li4: "Nature de votre besoin (structurer mes données, créer un tableau de bord, indécis)",
      privacy_li5: "Message libre (optionnel)",
      privacy_purpose: "<strong>Finalité</strong> : traiter votre demande de contact et vous recontacter sous 24 heures ouvrées.<br /><strong>Base légale</strong> : votre consentement explicite (envoi volontaire du formulaire).<br /><strong>Durée de conservation</strong> : 12 mois à compter de votre dernier contact, sauf relation commerciale active.",
      privacy_h2: "Sous-traitant : Netlify Forms",
      privacy_netlify: "Les soumissions du formulaire sont traitées et stockées par Netlify, Inc. (États-Unis) via leur service Netlify Forms. Netlify est certifié conforme au cadre Data Privacy Framework UE-États-Unis.",
      privacy_h3: "Mesure d'audience",
      privacy_analytics: "Aucun outil de mesure d'audience n'est actuellement actif sur ce site. Si un outil respectueux de la vie privée (sans cookie ni donnée personnelle identifiable) est ajouté à l'avenir, cette politique sera mise à jour.",
      privacy_h4: "Cookies",
      privacy_cookies: "Ce site n'utilise aucun cookie de suivi ou publicitaire. Aucun consentement préalable n'est donc requis.",
      privacy_h5: "Vos droits",
      privacy_rights: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, contactez-moi par email à <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      privacy_cnil: "Vous pouvez également introduire une réclamation auprès de la CNIL (France) ou du BfDI (Allemagne) si vous estimez que vos droits ne sont pas respectés.",
      privacy_h6: "Mise à jour",
      privacy_update: "Cette politique peut être mise à jour. La date de dernière mise à jour : juin 2026."
    },

    en: {
      meta_title: "Antonio Laisé · Dashboards and operational steering for industrial SMEs",
      meta_description: "Data consulting for industry. I find, structure and turn your data (production, maintenance, quality, projects) into custom dashboards connected to your files. Antonio Laisé, data & reliability engineer, Hanover.",

      nav_probleme: "The problem",
      nav_solution: "What I do",
      nav_exemples: "Examples",
      nav_tarifs: "Pricing",
      nav_apropos: "About",
      header_cta: "Let's talk 30 min",
      header_cta_mini: "Contact",

      hero_eyebrow: "Data consulting for industry",
      hero_title: "Custom industrial steering, connected to your files.",
      hero_lead: "I help industrial SMEs steer their production, maintenance and projects with their own figures. Let's work together!",
      hero_cta: "Let's talk for 30 minutes",

      prob_eyebrow: "The problem",
      prob_title: "Plenty of data, little visibility.",
      prob_p1: "In many companies, staff lose time because data is scattered, formats aren't standardised and responsibilities are unclear. The overall picture is often guessed, rarely visualised and quantified.",

      sol_eyebrow: "What I do, the solution!",
      step1_title: "Find the data",
      step1_aria: "Find the data",
      step1_detail: "Let's map what exists and choose together the indicators needed to steer your operations.",
      step2_title: "Formalise it",
      step2_aria: "Formalise it",
      step2_detail: "Let's structure this data into a clean, reliable format and set the responsibilities and update processes.",
      step3_title: "Steer with it",
      step3_aria: "Steer with it",
      step3_detail: "Let's build a custom dashboard, updated automatically, that flags deviations as soon as they appear.",

      compare_arrow: "Calculated automatically",
      kpi_progress_title: "PROGRESS",
      period_projet: "PROJECT",
      kpi_progress_label: "72% done, 80.6% of schedule elapsed",
      kpi_late: "15 days late",
      kpi_late_label: "FORECAST VARIANCE",
      solution_legend: "Your teams enter raw data in a tool they already know.<br />The dashboard does all the rest, automatically.",

      why1_q: "Why structure your data?",
      why1_a: "Multiple sources, formats and versions cost you efficiency and reliability every day.",
      why2_q: "Why a dashboard to make the most of this data?",
      why2_a: "Steering with the key figures, highlighted and continuously up to date, lets you decide instantly.",
      why_chute: "Faster decisions and problems caught in time: <strong>time and money saved.</strong>",

      rm_intro: "Concretely, the path from your files to your steering:",
      rm1_t: "Today",
      rm1_p: "Scattered sources, one version per colleague, everyone their own way. You steer blind.",
      rm2_t: "The diagnosis",
      rm2_p: "We map your data and choose together the indicators that truly matter for your business.",
      rm3_t: "Clarified organisation",
      rm3_p: "Standardised processes, no more multiple versions. Communication and responsibilities are set within the teams.",
      rm4_t: "Steering in hand",
      rm4_p: "A steering tool tailored to your needs, fed by reliable, continuously updated data.",

      pull_quote_1: "A dashboard is not a report to produce at month-end. It's a steering instrument that reads your files continuously and flags deviations as soon as they appear.",

      feat1: "Tailored to your business",
      feat2: "Connected to your existing sources",
      feat3: "Indicators calculated automatically",
      feat4: "Configurable visual thresholds",
      feat5: "Email alerts and reports",
      feat6: "History and trends",
      feat7: "Native multilingual",
      feat8: "Accessible on any screen",
      feat9: "Full-screen TV mode",
      feat_ai: "Built-in AI assistant (option): <span class=\"feature-ai-note\">ask a question in plain language, get an answer drawn from your data alone.</span>",

      ex_eyebrow: "Concrete examples",
      ex_title: "Three demonstration dashboards.",
      ex_banner: "Three examples of what I can build for industry. Each is fully adaptable. <strong>Yours will be different, tailored to your business.</strong><br />These dashboards include every feature and a real-time connection to a spreadsheet. Feel free to ask me for a trial! <br /><em>Screenshots in full-screen TV mode. Other tabs are available on request.</em>",
      ex1_title: "Production",
      ex1_desc: "Quality tracking, customer and supplier complaints, safety, compliance, shipments.",
      ex2_title: "Maintenance & Reliability",
      ex2_desc: "MTBF, MTTR, availability, rule-based alerts, prioritisation recommendations.",
      ex3_title: "Project tracking",
      ex3_desc: "Progress, earned value (CPI, SPI, EAC), burndown, budget, milestones, team, risks.",
      ex_note: "Example. Adaptable to your business indicators.",
      demo_title: "See a dashboard in real conditions",
      demo_desc: "On request, I give you interactive access to one of these demo dashboards and to the data source (Google Sheets) that feeds it. Change a cell, the dashboard updates. You'll see how simple it is.",
      demo_btn: "Request an interactive demo",

      why_eyebrow: "Why custom",
      why_title: "Why not a standard tool?",
      arg1_title: "Total customisation",
      arg1_detail: "Conditional traffic lights, workshop layout, full-screen TV mode: everything needs tinkering. Custom is code: everything is possible.",
      arg2_title: "Your business indicators",
      arg2_detail: "MTBF, OEE, alerts based on your rules: these business calculations don't exist in native views. Custom, each indicator follows your exact logic.",
      arg3_title: "Your data, your files",
      arg3_detail: "No new platform to adopt. Your teams keep their input tools, your data doesn't go to a third-party vendor.",
      pull_quote_2: "These tools are built for millions of use cases. A custom dashboard is built for just one: yours.",

      tarifs_eyebrow: "Pricing",
      tarifs_title: "Simple, transparent pricing.",
      tarifs_p1: "My day rate is €300. A typical steering project represents roughly 5 to 10 days of work: your complete steering project then costs <strong>between €1,500 and €3,000</strong>. Everything is quoted according to your needs.",
      tarifs_p2: "Then hosting, maintenance and improvements are covered by subscription, <strong>from €100 per month and per dashboard</strong>. The detail of the plans (cloud or on your servers, with or without AI assistant) is in the brochure, on request.",
      tarifs_tax: "Prices in euros, excluding specific scope (multiple sources, business connector on quote). VAT not applicable (small-business scheme).",

      about_eyebrow: "About me",
      about_title: "Antonio Laisé, data & reliability engineer.",
      about_p1: "Mechanical engineer from UTC Compiègne, specialised in Data & Reliability for industry. Based in Hanover, I work in France and Germany.",
      about_p2: "At Nexans Hanover, I optimised processes and built the dashboards used for the daily steering of the workshop. Before that, at EDF in nuclear civil engineering, reliability studies on concrete structures. What I offer, I first did on the factory floor.",
      about_pitch: "Organising data, simplifying what gets stuck, automating the repetitive, saving time. That's what I look for in every project.",
      about_cv: "See my online CV →",

      contact_eyebrow: "Contact",
      contact_title: "Let's talk for 30 minutes.",
      contact_p1: "Describe your need in a few words. I'll get back to you within 24 business hours to set up a call.",
      contact_brochure: "Want the details of my offer? A full brochure is available on request.",
      label_firstname: "First name *",
      label_lastname: "Last name *",
      label_company: "Company *",
      label_need: "Your main need *",
      need_structurer: "Structure my data",
      need_dashboard: "Build a dashboard",
      need_indecis: "I'm not sure yet",
      label_contact: "Email or phone *",
      label_message: "Message <span class=\"field-optional\">(optional)</span>",
      placeholder_message: "Briefly describe your context or need.",
      submit_btn: "Send my request",
      form_success: "Thank you, your request has been sent. I'll get back to you within 24 business hours.",
      form_error: "An error occurred while sending. Please retry, or email me directly.",
      alt_cta: "Or <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">book a slot directly →</a>",

      footer_location: "Hanover · France & Germany",
      footer_mentions: "Legal notice",
      footer_privacy: "Privacy policy",
      footer_copyright: "© 2026 Antonio Laisé. All rights reserved.",

      mentions_title: "Legal notice",
      mentions_h1: "Site publisher",
      mentions_editor: "Antonio Laisé<br />Independent consultant in data structuring and custom dashboards<br />Hanover, Germany<br />Contact: <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      mentions_status: "Legal status being set up. The legal form, registration number (SIRET or Steuernummer) and business address will be added once the structure is finalised.",
      mentions_h2: "Publication director",
      mentions_director: "Antonio Laisé",
      mentions_h3: "Host",
      mentions_host: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, United States<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      mentions_h4: "Intellectual property",
      mentions_ip: "All content on this site (text, images, screenshots, code) is the property of Antonio Laisé, unless otherwise stated. Any reproduction without prior authorisation is prohibited.",
      mentions_h5: "Credits",
      mentions_credits: "Site developed by Antonio Laisé in HTML, CSS and JavaScript.<br />Fonts: Inter and JetBrains Mono (Google Fonts).",

      privacy_title: "Privacy policy",
      privacy_intro: "This policy describes the personal data collected on this site, its purpose, retention period and your rights, in accordance with the General Data Protection Regulation (GDPR).",
      privacy_h1: "Data collected via the contact form",
      privacy_form_intro: "When you fill in the contact form, the following information is collected:",
      privacy_li1: "First and last name",
      privacy_li2: "Your company name",
      privacy_li3: "Email or phone number",
      privacy_li4: "Nature of your need (structure my data, build a dashboard, undecided)",
      privacy_li5: "Free message (optional)",
      privacy_purpose: "<strong>Purpose</strong>: handle your contact request and reply within 24 business hours.<br /><strong>Legal basis</strong>: your explicit consent (voluntary form submission).<br /><strong>Retention</strong>: 12 months from your last contact, unless an active business relationship.",
      privacy_h2: "Processor: Netlify Forms",
      privacy_netlify: "Form submissions are processed and stored by Netlify, Inc. (United States) via their Netlify Forms service. Netlify is certified under the EU-US Data Privacy Framework.",
      privacy_h3: "Analytics",
      privacy_analytics: "No analytics tool is currently active on this site. If a privacy-friendly tool (no cookies or personally identifiable data) is added in future, this policy will be updated.",
      privacy_h4: "Cookies",
      privacy_cookies: "This site uses no tracking or advertising cookies. No prior consent is therefore required.",
      privacy_h5: "Your rights",
      privacy_rights: "Under the GDPR, you have the right to access, rectify, erase, port and object to your data. To exercise these rights, email me at <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      privacy_cnil: "You may also lodge a complaint with the CNIL (France) or the BfDI (Germany) if you believe your rights are not respected.",
      privacy_h6: "Updates",
      privacy_update: "This policy may be updated. Last updated: June 2026."
    },

    de: {
      meta_title: "Antonio Laisé · Dashboards und Steuerung für Industrie-KMU",
      meta_description: "Datenberatung für die Industrie. Ich finde, strukturiere und verwandle Ihre Daten (Produktion, Instandhaltung, Qualität, Projekte) in maßgeschneiderte Dashboards, die mit Ihren Dateien verbunden sind. Antonio Laisé, Ingenieur für Daten & Zuverlässigkeit, Hannover.",

      nav_probleme: "Das Problem",
      nav_solution: "Was ich mache",
      nav_exemples: "Beispiele",
      nav_tarifs: "Preise",
      nav_apropos: "Über mich",
      header_cta: "30 Min sprechen",
      header_cta_mini: "Kontakt",

      hero_eyebrow: "Datenberatung für die Industrie",
      hero_title: "Maßgeschneiderte Industriesteuerung, verbunden mit Ihren Dateien.",
      hero_lead: "Ich helfe Industrie-KMU, ihre Produktion, Instandhaltung und Projekte mit ihren eigenen Zahlen zu steuern. Arbeiten wir zusammen!",
      hero_cta: "Sprechen wir 30 Minuten",

      prob_eyebrow: "Das Problem",
      prob_title: "Viele Daten, wenig Überblick.",
      prob_p1: "In vielen Unternehmen verlieren Mitarbeiter Zeit, weil Daten verstreut sind, Formate nicht standardisiert und Zuständigkeiten unklar sind. Das Gesamtbild wird oft nur erahnt, selten visualisiert und in Zahlen gefasst.",

      sol_eyebrow: "Was ich mache, die Lösung!",
      step1_title: "Die Daten finden",
      step1_aria: "Die Daten finden",
      step1_detail: "Lassen Sie uns erfassen, was vorhanden ist, und gemeinsam die Kennzahlen wählen, die zur Steuerung Ihres Betriebs nötig sind.",
      step2_title: "Sie strukturieren",
      step2_aria: "Sie strukturieren",
      step2_detail: "Bringen wir diese Daten in ein sauberes, verlässliches Format und legen Zuständigkeiten und Aktualisierungsprozesse fest.",
      step3_title: "Damit steuern",
      step3_aria: "Damit steuern",
      step3_detail: "Erstellen wir ein maßgeschneidertes Dashboard, das sich automatisch aktualisiert und Abweichungen meldet, sobald sie auftreten.",

      compare_arrow: "Automatisch berechnet",
      kpi_progress_title: "FORTSCHRITT",
      period_projet: "PROJEKT",
      kpi_progress_label: "72 % erledigt, 80,6 % der Zeit verstrichen",
      kpi_late: "15 Tage Verzug",
      kpi_late_label: "PROGNOSTIZIERTE ABWEICHUNG",
      solution_legend: "Ihre Teams geben Rohdaten in einem Werkzeug ein, das sie bereits kennen.<br />Das Dashboard erledigt den Rest, automatisch.",

      why1_q: "Warum Ihre Daten strukturieren?",
      why1_a: "Mehrere Quellen, Formate und Versionen kosten Sie täglich Effizienz und Verlässlichkeit.",
      why2_q: "Warum ein Dashboard, um diese Daten optimal zu nutzen?",
      why2_a: "Mit den wichtigen, hervorgehobenen und stets aktuellen Zahlen zu steuern, lässt Sie sofort entscheiden.",
      why_chute: "Schnellere Entscheidungen und rechtzeitig erkannte Probleme: <strong>gesparte Zeit und gespartes Geld.</strong>",

      rm_intro: "Konkret: der Weg von Ihren Dateien zu Ihrer Steuerung:",
      rm1_t: "Heute",
      rm1_p: "Verstreute Quellen, eine Version pro Kollege, jeder anders. Sie steuern im Blindflug.",
      rm2_t: "Die Analyse",
      rm2_p: "Wir erfassen Ihre Daten und wählen gemeinsam die Kennzahlen, die für Ihr Geschäft wirklich zählen.",
      rm3_t: "Klare Organisation",
      rm3_p: "Standardisierte Prozesse, keine Mehrfachversionen mehr. Kommunikation und Zuständigkeiten sind in den Teams festgelegt.",
      rm4_t: "Die Steuerung in der Hand",
      rm4_p: "Ein auf Ihre Bedürfnisse zugeschnittenes Steuerungswerkzeug, gespeist mit verlässlichen, laufend aktualisierten Daten.",

      pull_quote_1: "Ein Dashboard ist kein Bericht, den man am Monatsende erstellt. Es ist ein Steuerungsinstrument, das Ihre Dateien laufend liest und Abweichungen meldet, sobald sie auftreten.",

      feat1: "Maßgeschneidert für Ihr Geschäft",
      feat2: "Mit Ihren bestehenden Quellen verbunden",
      feat3: "Kennzahlen automatisch berechnet",
      feat4: "Konfigurierbare visuelle Schwellenwerte",
      feat5: "E-Mail-Alarme und -Berichte",
      feat6: "Verlauf und Trends",
      feat7: "Nativ mehrsprachig",
      feat8: "Auf jedem Bildschirm zugänglich",
      feat9: "TV-Vollbildmodus",
      feat_ai: "Integrierter KI-Assistent (Option): <span class=\"feature-ai-note\">stellen Sie eine Frage in natürlicher Sprache und erhalten Sie eine Antwort allein aus Ihren Daten.</span>",

      ex_eyebrow: "Konkrete Beispiele",
      ex_title: "Drei Demo-Dashboards.",
      ex_banner: "Drei Beispiele dafür, was ich für die Industrie bauen kann. Jedes ist voll anpassbar. <strong>Ihres wird anders sein, auf Ihr Geschäft zugeschnitten.</strong><br />Diese Dashboards enthalten alle Funktionen und eine Echtzeit-Verbindung zu einer Tabelle. Fragen Sie mich gerne nach einem Test! <br /><em>Aufnahmen im TV-Vollbildmodus. Weitere Tabs auf Anfrage verfügbar.</em>",
      ex1_title: "Produktion",
      ex1_desc: "Qualitätsüberwachung, Kunden- und Lieferantenreklamationen, Sicherheit, Compliance, Versand.",
      ex2_title: "Instandhaltung & Zuverlässigkeit",
      ex2_desc: "MTBF, MTTR, Verfügbarkeit, regelbasierte Alarme, Priorisierungsempfehlungen.",
      ex3_title: "Projektverfolgung",
      ex3_desc: "Fortschritt, Earned Value (CPI, SPI, EAC), Burndown, Budget, Meilensteine, Team, Risiken.",
      ex_note: "Beispiel. Anpassbar an Ihre Geschäftskennzahlen.",
      demo_title: "Ein Dashboard unter realen Bedingungen sehen",
      demo_desc: "Auf Anfrage gebe ich Ihnen interaktiven Zugriff auf eines dieser Demo-Dashboards und auf die Datenquelle (Google Sheets), die es speist. Ändern Sie eine Zelle, das Dashboard aktualisiert sich. Sie sehen, wie einfach es ist.",
      demo_btn: "Interaktive Demo anfragen",

      why_eyebrow: "Warum maßgeschneidert",
      why_title: "Warum kein Standardwerkzeug?",
      arg1_title: "Vollständige Anpassung",
      arg1_detail: "Bedingte Ampeln, Werkstatt-Layout, TV-Vollbildmodus: alles erfordert Gebastel. Maßgeschneidert heißt Code: alles ist möglich.",
      arg2_title: "Ihre Geschäftskennzahlen",
      arg2_detail: "MTBF, OEE, Alarme nach Ihren Regeln: diese Berechnungen gibt es in Standardansichten nicht. Maßgeschneidert folgt jede Kennzahl genau Ihrer Logik.",
      arg3_title: "Ihre Daten, Ihre Dateien",
      arg3_detail: "Keine neue Plattform nötig. Ihre Teams behalten ihre Eingabewerkzeuge, Ihre Daten landen nicht bei einem Drittanbieter.",
      pull_quote_2: "Diese Werkzeuge sind für Millionen Anwendungsfälle gemacht. Ein maßgeschneidertes Dashboard ist für genau einen gemacht: Ihren.",

      tarifs_eyebrow: "Preise",
      tarifs_title: "Einfache, transparente Preise.",
      tarifs_p1: "Mein Tagessatz beträgt 300 €. Ein typisches Steuerungsprojekt umfasst etwa 5 bis 10 Arbeitstage: Ihr vollständiges Steuerungsprojekt kostet dann <strong>zwischen 1.500 € und 3.000 €</strong>. Alles wird nach Ihrem Bedarf angeboten.",
      tarifs_p2: "Hosting, Wartung und Weiterentwicklungen erfolgen anschließend per Abonnement, <strong>ab 100 € pro Monat und pro Dashboard</strong>. Die Details der Pakete (Cloud oder auf Ihren Servern, mit oder ohne KI-Assistent) finden Sie in der Broschüre, auf Anfrage.",
      tarifs_tax: "Preise in Euro, ohne speziellen Umfang (mehrere Quellen, Fachkonnektor auf Anfrage). Umsatzsteuer nicht ausgewiesen (Kleinunternehmerregelung).",

      about_eyebrow: "Über mich",
      about_title: "Antonio Laisé, Ingenieur für Daten & Zuverlässigkeit.",
      about_p1: "Maschinenbauingenieur der UTC Compiègne, spezialisiert auf Daten & Zuverlässigkeit für die Industrie. Ansässig in Hannover, tätig in Frankreich und Deutschland.",
      about_p2: "Bei Nexans Hannover habe ich Prozesse optimiert und die Dashboards gebaut, die zur täglichen Steuerung des Betriebs dienten. Zuvor bei EDF im kerntechnischen Bauwesen: Zuverlässigkeitsstudien an Betonstrukturen. Was ich anbiete, habe ich zuerst in der Fabrik gemacht.",
      about_pitch: "Daten organisieren, Festgefahrenes vereinfachen, Wiederkehrendes automatisieren, Zeit sparen. Das suche ich in jedem Projekt.",
      about_cv: "Meinen Online-Lebenslauf ansehen →",

      contact_eyebrow: "Kontakt",
      contact_title: "Sprechen wir 30 Minuten.",
      contact_p1: "Beschreiben Sie Ihr Anliegen in wenigen Worten. Ich melde mich innerhalb von 24 Geschäftsstunden, um ein Gespräch zu vereinbaren.",
      contact_brochure: "Möchten Sie die Details meines Angebots? Eine vollständige Broschüre ist auf Anfrage erhältlich.",
      label_firstname: "Vorname *",
      label_lastname: "Nachname *",
      label_company: "Unternehmen *",
      label_need: "Ihr Hauptanliegen *",
      need_structurer: "Meine Daten strukturieren",
      need_dashboard: "Ein Dashboard erstellen",
      need_indecis: "Ich weiß es noch nicht",
      label_contact: "E-Mail oder Telefon *",
      label_message: "Nachricht <span class=\"field-optional\">(optional)</span>",
      placeholder_message: "Beschreiben Sie kurz Ihren Kontext oder Bedarf.",
      submit_btn: "Anfrage senden",
      form_success: "Danke, Ihre Anfrage wurde gesendet. Ich melde mich innerhalb von 24 Geschäftsstunden.",
      form_error: "Beim Senden ist ein Fehler aufgetreten. Bitte erneut versuchen oder schreiben Sie mir direkt per E-Mail.",
      alt_cta: "Oder <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">direkt einen Termin buchen →</a>",

      footer_location: "Hannover · Frankreich & Deutschland",
      footer_mentions: "Impressum",
      footer_privacy: "Datenschutzerklärung",
      footer_copyright: "© 2026 Antonio Laisé. Alle Rechte vorbehalten.",

      mentions_title: "Impressum",
      mentions_h1: "Anbieter",
      mentions_editor: "Antonio Laisé<br />Unabhängige Beratung für Datenstrukturierung und maßgeschneiderte Dashboards<br />Hannover, Deutschland<br />Kontakt: <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      mentions_status: "Rechtsform in Gründung. Rechtsform, Registernummer (SIRET oder Steuernummer) und Geschäftsadresse werden nach Abschluss der Gründung ergänzt.",
      mentions_h2: "Verantwortlich für den Inhalt",
      mentions_director: "Antonio Laisé",
      mentions_h3: "Hosting",
      mentions_host: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, USA<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      mentions_h4: "Urheberrecht",
      mentions_ip: "Sämtliche Inhalte dieser Website (Texte, Bilder, Screenshots, Code) sind, sofern nicht anders angegeben, Eigentum von Antonio Laisé. Jede Vervielfältigung ohne vorherige Genehmigung ist untersagt.",
      mentions_h5: "Credits",
      mentions_credits: "Website entwickelt von Antonio Laisé in HTML, CSS und JavaScript.<br />Schriften: Inter und JetBrains Mono (Google Fonts).",

      privacy_title: "Datenschutzerklärung",
      privacy_intro: "Diese Richtlinie beschreibt die auf dieser Website erhobenen personenbezogenen Daten, ihren Zweck, ihre Speicherdauer und Ihre Rechte gemäß der Datenschutz-Grundverordnung (DSGVO).",
      privacy_h1: "Über das Kontaktformular erhobene Daten",
      privacy_form_intro: "Wenn Sie das Kontaktformular ausfüllen, werden folgende Informationen erhoben:",
      privacy_li1: "Vor- und Nachname",
      privacy_li2: "Name Ihres Unternehmens",
      privacy_li3: "E-Mail oder Telefonnummer",
      privacy_li4: "Art Ihres Anliegens (Daten strukturieren, Dashboard erstellen, unentschlossen)",
      privacy_li5: "Freitext (optional)",
      privacy_purpose: "<strong>Zweck</strong>: Ihre Kontaktanfrage bearbeiten und innerhalb von 24 Geschäftsstunden antworten.<br /><strong>Rechtsgrundlage</strong>: Ihre ausdrückliche Einwilligung (freiwilliges Absenden des Formulars).<br /><strong>Speicherdauer</strong>: 12 Monate ab Ihrem letzten Kontakt, sofern keine aktive Geschäftsbeziehung besteht.",
      privacy_h2: "Auftragsverarbeiter: Netlify Forms",
      privacy_netlify: "Formularübermittlungen werden von Netlify, Inc. (USA) über deren Dienst Netlify Forms verarbeitet und gespeichert. Netlify ist nach dem EU-US Data Privacy Framework zertifiziert.",
      privacy_h3: "Reichweitenmessung",
      privacy_analytics: "Derzeit ist kein Analysewerkzeug auf dieser Website aktiv. Sollte künftig ein datenschutzfreundliches Werkzeug (ohne Cookies oder personenbezogene Daten) hinzukommen, wird diese Richtlinie aktualisiert.",
      privacy_h4: "Cookies",
      privacy_cookies: "Diese Website verwendet keine Tracking- oder Werbe-Cookies. Eine vorherige Einwilligung ist daher nicht erforderlich.",
      privacy_h5: "Ihre Rechte",
      privacy_rights: "Gemäß DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerspruch. Um diese Rechte auszuüben, schreiben Sie mir an <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      privacy_cnil: "Sie können sich auch bei der CNIL (Frankreich) oder dem BfDI (Deutschland) beschweren, wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt werden.",
      privacy_h6: "Aktualisierung",
      privacy_update: "Diese Richtlinie kann aktualisiert werden. Letzte Aktualisierung: Juni 2026."
    }
  };

  const STORAGE_KEY = 'al-lang';
  const DEFAULT_LANG = 'fr';
  const LANG_ORDER = ['fr', 'en', 'de'];

  function getLang() {
    // Langue passee dans l'URL (?lang=fr|en|de), ex. depuis la demo dashboards : prioritaire.
    try {
      const u = new URLSearchParams(location.search).get('lang');
      if (u && LANG_ORDER.indexOf(u) !== -1) {
        localStorage.setItem(STORAGE_KEY, u);
        return u;
      }
    } catch (e) {}
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!T[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const dict = T[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);
    if (dict.meta_title) document.title = dict.meta_title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_description) metaDesc.setAttribute('content', dict.meta_description);
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : lang === 'de' ? 'de_DE' : 'en_US');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });

    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang.toUpperCase() + '<span class="lang-caret" aria-hidden="true">▾</span>';
    document.querySelectorAll('#langMenu [data-lang]').forEach(item => {
      item.classList.toggle('is-active', item.getAttribute('data-lang') === lang);
    });
  }

  function initI18n() {
    const lang = getLang();
    applyLang(lang);

    const btn = document.getElementById('langToggle');
    const menu = document.getElementById('langMenu');
    const wrap = document.getElementById('langSwitch');
    if (btn && menu) {
      const closeMenu = () => { menu.setAttribute('hidden', ''); btn.setAttribute('aria-expanded', 'false'); };
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (menu.hasAttribute('hidden')) { menu.removeAttribute('hidden'); btn.setAttribute('aria-expanded', 'true'); }
        else { closeMenu(); }
      });
      menu.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', () => { setLang(item.getAttribute('data-lang')); closeMenu(); });
      });
      document.addEventListener('click', (e) => { if (wrap && !wrap.contains(e.target)) closeMenu(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
