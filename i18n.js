/* =========================================================
   Antonio Laisé · i18n.js
   Système de traduction FR / EN.
   - Clés définies en data-i18n / data-i18n-html / data-i18n-placeholder / data-i18n-attr-*
   - Langue persistée dans localStorage
   ========================================================= */

(function () {
  'use strict';

  const T = {
    fr: {
      // Meta
      meta_title: "Antonio Laisé · Dashboards sur-mesure pour PME",
      meta_description: "Conseil indépendant : structuration de données et dashboards sur-mesure pour PME. Par Antonio Laisé, ingénieur mécanique data & fiabilité, Hanovre.",

      // Header
      nav_solution: "Solution",
      nav_approche: "Approche",
      nav_exemples: "Exemples",
      nav_pourquoi: "Pourquoi custom",
      nav_tarifs: "Tarifs",
      nav_apropos: "À propos",
      header_cta: "Échangeons 30 min",
      lang_alt: "EN",

      // Hero
      hero_eyebrow: "Conseil data indépendant",
      hero_title: "Vos données structurées. Votre pilotage clarifié.",
      hero_lead: "J'aide les PME à organiser leurs données et à construire des dashboards sur-mesure pour piloter leur activité avec une vue claire, adaptée à leur métier.",
      hero_cta_primary: "Échangeons 30 minutes",
      hero_cta_secondary: "Voir des exemples",

      // Constat
      constat_eyebrow: "Le constat",
      constat_title: "Beaucoup de données. Peu de visibilité.",
      constat_body: "La plupart des PME pilotent à l'instinct, ou avec des outils mal adaptés. Les données existent. Elles sont juste éparpillées entre fichiers Excel, Google Sheets, ERP et exports persos. Power BI et Tableau sont pensés pour des grandes entreprises, avec leurs équipes data dédiées. Résultat : pas de vraie visibilité sur l'activité, et des décisions prises sans appui chiffré.",

      // Solution
      solution_eyebrow: "Ma solution",
      solution_title: "Des dashboards web connectés à vos données réelles.",
      solution_sub: "Pas d'installation. Pas de logiciel à apprendre. Vos données restent où elles sont.",
      kpi_label_progress: "72% done, 80.6% of schedule elapsed",
      kpi_value_days_late: "-15j days late",
      kpi_label_days: "DAYS VARIANCE",
      solution_legend_html: "Vos équipes saisissent les données brutes dans un outil qu'elles connaissent déjà.<br />Le dashboard fait tout le reste, automatiquement.",

      feature1_title: "Connecté en temps réel à vos sources existantes",
      feature1_desc: "Google Sheets, Excel local, Excel OneDrive / SharePoint, et autres sources sur demande (ERP, bases de données, API). Vous saisissez la donnée brute, le dashboard se met à jour automatiquement.",
      feature2_title: "Template intelligent",
      feature2_desc: "Vous ne remplissez que les informations manquantes. Tous les calculs (moyennes, ratios, agrégations, alertes) sont faits automatiquement côté serveur.",
      feature3_title: "Accessible n'importe où, sur n'importe quel écran",
      feature3_desc: "Simple lien web protégé, pas d'installation. Fonctionne sur ordinateur, tablette, smartphone, écran TV d'atelier.",
      feature4_title: "Multi-langue natif",
      feature4_desc: "Bascule FR / EN / DE (ou autre langue sur demande) en 1 clic. Idéal pour les PME internationales ou avec des équipes multi-pays.",
      feature5_title: "Mode TV plein écran",
      feature5_desc: "Pensé pour l'affichage permanent en open space, atelier ou salle de réunion. Mode sombre disponible pour réduire la fatigue visuelle.",
      feature6_title: "Conçu sur-mesure pour votre métier",
      feature6_desc: "KPIs, visualisations, alertes définis avec vous lors de l'audit. Pas de visuels génériques qui ne correspondent à rien.",
      feature7_title: "Organisé en plusieurs onglets thématiques",
      feature7_desc: "Chaque dashboard est structuré en onglets (par exemple : Overview, Détails, Alertes, Recommandations). Un dashboard peut comporter autant d'onglets que nécessaire selon les besoins.",

      // Approche
      approche_eyebrow: "Mon approche",
      approche_title: "Une démarche en quatre étapes.",
      step1_title: "Audit des données existantes",
      step1_meta: "3 jours",
      step1_desc: "Cartographie de ce qui existe : sources, formats, qualité. Identification des KPIs critiques pour votre activité.",
      step2_title: "Structuration",
      step2_meta: "Inclus dans l'audit",
      step2_desc: "Définition d'un schéma de données propre. Organisation des sources (Google Sheets, Excel local, OneDrive/SharePoint).",
      step3_title: "Construction du dashboard",
      step3_meta: "2 à 3 jours par dashboard",
      step3_desc: "Développement sur-mesure : KPIs métier, visualisations adaptées, multi-langue natif (FR/EN/DE) si besoin.",
      step4_title: "Déploiement et formation",
      step4_meta: "1 à 2 jours",
      step4_desc: "Mise en ligne sécurisée. Formation à l'utilisation et à la mise à jour des données.",

      // Exemples
      exemples_eyebrow: "Exemples concrets",
      exemples_title: "Trois dashboards de démonstration.",
      exemples_banner_html: "Ces 3 dashboards sont des exemples concrets de ce que je sais produire. Chacun est entièrement adaptable : KPIs, visualisations, onglets, sources de données, langues, charte graphique. <strong>Votre dashboard final sera différent, taillé à vos besoins métier.</strong><br /><br /><em>Captures ci-dessous : vues en mode TV plein écran. Les autres onglets de chaque dashboard sont disponibles sur demande.</em>",
      example1_title: "Dashboard Project Tracking",
      example1_desc: "Suivi de projet : EVM (CPI, SPI, EAC), burndown, S-curve budget, jalons, équipe, risques.",
      example2_title: "Dashboard Maintenance & Fiabilité",
      example2_desc: "MTBF, MTTR, disponibilité, alertes par règles, recommandations.",
      example3_title: "Dashboard Production",
      example3_desc: "Suivi qualité, réclamations clients et fournisseurs, sécurité, conformité, expéditions.",
      example_note: "Exemple. Adaptable à vos KPIs métier.",
      demo_title: "Voir un dashboard en condition réelle",
      demo_desc: "Sur demande, je peux vous donner un accès interactif à l'un de ces dashboards démo, ainsi qu'à la source de données (Google Sheets) qui l'alimente. Vous voyez le fonctionnement global : vous modifiez une cellule, le dashboard se met à jour. Vous comprenez la simplicité de la mise à jour côté utilisateur.",
      demo_cta: "Demander une démo interactive",

      // Pourquoi custom
      pourquoi_eyebrow: "Comparaison",
      pourquoi_title: "Pourquoi pas Power BI ou Tableau ?",
      pourquoi_intro: "La plupart des PME pensent que Power BI est « simple » parce qu'il est inclus dans leur abonnement Microsoft 365. C'est vrai pour des graphiques basiques. Mais dès qu'on veut un outil de pilotage vraiment utile et personnalisé, on se retrouve vite limité.",
      card1_title: "Customisation visuelle bridée",
      card1_intro: "Power BI impose ses visuels prédéfinis. Quelques exemples simples en custom, compliqués voire impossibles en Power BI :",
      card1_item1_html: "<strong>Mise en forme conditionnelle de forme :</strong> impossible nativement. Pour afficher des feux signaux (rouge / orange / vert), il faut bidouiller avec des visuels customs externes payants ou des SVG codés en DAX.",
      card1_item2_html: "<strong>Mode TV plein écran lisible :</strong> pas de gestion du rotating ni d'ajustement aux écrans larges d'atelier.",
      card1_item3_html: "<strong>Layout vraiment personnalisé :</strong> grille rigide. Difficile de faire un design unique aligné avec votre marque.",
      card1_tag: "En custom : c'est du code, donc tout est possible, dès la première itération.",
      card2_title: "Multi-langue natif difficile",
      card2_desc: "Power BI gère le multi-langue via des configurations complexes : rôles, traductions de modèles, jeux de données séparés. Pour une PME internationale, ça devient vite un cauchemar à maintenir.",
      card2_tag: "En custom : bascule FR / EN / DE en 1 clic dans le header, traductions centralisées dans un fichier simple à éditer.",
      card3_title: "La fausse simplicité",
      card3_intro: "Power BI est simple pour glisser un Excel et faire un bar chart. Dès que les besoins métier deviennent réels :",
      card3_item1_html: "<strong>Alerte conditionnelle métier :</strong> « M'envoyer un mail si la disponibilité passe sous 92% pendant 3 jours » → DAX complexe ou Power Automate à configurer.",
      card3_item2_html: "<strong>KPI métier calculé :</strong> OEE avec règles métier spécifiques → DAX avancé, formules longues à maintenir.",
      card3_item3_html: "<strong>Drilldown personnalisé :</strong> voir l'historique de pannes filtré, avec lien vers le bon de travail GMAO → intégration complexe.",
      card3_tag: "En custom : on définit vos vrais besoins métier, et c'est codé une fois pour toutes, sans bricolage DAX.",
      pull_quote: "Power BI est inclus dans Microsoft 365, c'est vrai. Mais \"inclus\" ne veut pas dire \"adapté à votre besoin\". Pour un outil de pilotage vraiment utile, taillé à vos KPIs métier, avec une mise en forme qui parle, un dashboard sur-mesure est souvent plus rapide à mettre en place et plus simple à faire évoluer.",

      // Tarifs
      tarifs_eyebrow: "Tarifs",
      tarifs_title: "Des formules claires, sans surprises.",
      price1_title: "Audit Data",
      price1_duration: "3 jours",
      price1_desc: "Cartographie de vos données, identification des KPIs critiques, recommandations.",
      price2_title: "Build Complet",
      price2_duration: "6 à 7 jours",
      price2_desc: "Audit + 1 dashboard sur-mesure + déploiement + formation.",
      price3_title: "Pack 2 dashboards",
      price3_duration: "9 à 10 jours",
      price3_desc: "Audit + 2 dashboards + déploiement + formation.",
      price4_title: "Pack 3 dashboards",
      price4_duration: "12 à 13 jours",
      price4_desc: "Audit + 3 dashboards + déploiement + formation.",
      maintenance_title: "Maintenance mensuelle (optionnelle)",
      maintenance1_html: "<strong>Basique · 50&nbsp;€/mois par dashboard</strong><span>Hébergement + corrections critiques.</span>",
      maintenance2_html: "<strong>Standard · 100&nbsp;€/mois par dashboard</strong><span>Basique + 1 h d'intervention incluse par mois.</span>",
      maintenance3_html: "<strong>Intervention hors forfait · 80&nbsp;€/h</strong><span>Facturée au temps passé.</span>",
      tarifs_notice_html: "<strong>Tarif premier client appliqué.</strong> Mes premières missions bénéficient d'un tarif réduit, le temps de constituer mes premières références.",

      // À propos
      apropos_eyebrow: "Qui suis-je",
      apropos_title: "Antonio Laisé, ingénieur data & fiabilité.",
      apropos_p1: "Ingénieur mécanique de l'UTC, spécialité Data & Fiabilité pour l'Industrie. Basé à Hanovre, j'interviens en France et en Allemagne.",
      apropos_p2: "Mes expériences industrielles : Nexans Hanovre (optimisation de process industriel, tableaux de bord opérationnels) et EDF (génie civil nucléaire).",
      apropos_pitch: "Ce qui m'anime dans le travail : organiser des données, simplifier des processus qui s'enlisent, automatiser ce qui peut l'être, réduire le temps passé sur les tâches répétitives. C'est ce que je viens chercher dans chaque mission.",
      apropos_cv: "Voir mon CV en ligne →",

      // Contact
      contact_eyebrow: "Contact",
      contact_title: "Échangeons 30 minutes.",
      contact_body: "Décrivez votre besoin en quelques mots. Je reviens vers vous sous 24 heures ouvrées pour caler un échange.",
      label_firstname: "Prénom *",
      label_lastname: "Nom *",
      label_company: "Entreprise *",
      label_need: "Votre besoin principal *",
      need_structurer: "Structurer mes données",
      need_dashboard: "Créer un dashboard",
      need_indecis: "Je ne sais pas encore",
      label_contact: "Email ou téléphone *",
      label_message_html: "Message <span class=\"field-optional\">(optionnel)</span>",
      placeholder_message: "Décrivez brièvement votre contexte ou votre besoin.",
      submit_button: "Envoyer ma demande",
      alt_cta_html: "Ou <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">prenez directement RDV →</a>",

      // Footer
      footer_location: "Hanovre · France & Allemagne",
      footer_mentions: "Mentions légales",
      footer_privacy: "Politique de confidentialité",
      footer_copyright: "© 2026 Antonio Laisé. Tous droits réservés.",

      // Modales légales — Mentions
      modal_mentions_title: "Mentions légales",
      modal_mentions_h1: "Éditeur du site",
      modal_mentions_editor_html: "Antonio Laisé<br />Conseil indépendant en structuration de données et dashboards sur-mesure<br />Hanovre, Allemagne<br />Contact : <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      modal_mentions_placeholder: "[À COMPLÉTER : statut juridique (micro-entrepreneur / Freiberufler / autre), numéro SIRET ou Steuernummer, adresse professionnelle si différente]",
      modal_mentions_h2: "Directeur de publication",
      modal_mentions_director: "Antonio Laisé",
      modal_mentions_h3: "Hébergeur",
      modal_mentions_host_html: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      modal_mentions_h4: "Propriété intellectuelle",
      modal_mentions_ip: "L'ensemble du contenu de ce site (textes, images, captures d'écran, code) est la propriété d'Antonio Laisé, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.",
      modal_mentions_h5: "Crédits",
      modal_mentions_credits_html: "Site développé par Antonio Laisé en HTML, CSS et JavaScript.<br />Polices : Inter et JetBrains Mono (Google Fonts).",

      // Modales légales — Privacy
      modal_privacy_title: "Politique de confidentialité",
      modal_privacy_intro: "Cette politique décrit les données personnelles collectées sur ce site, leur finalité, leur durée de conservation et vos droits, conformément au Règlement Général sur la Protection des Données (RGPD).",
      modal_privacy_h1: "Données collectées via le formulaire de contact",
      modal_privacy_form_intro: "Lorsque vous remplissez le formulaire de contact, les informations suivantes sont collectées :",
      modal_privacy_form_li1: "Prénom et nom",
      modal_privacy_form_li2: "Nom de votre entreprise",
      modal_privacy_form_li3: "Email ou numéro de téléphone",
      modal_privacy_form_li4: "Nature de votre besoin (structurer mes données, créer un dashboard, indécis)",
      modal_privacy_form_li5: "Message libre (optionnel)",
      modal_privacy_purpose_html: "<strong>Finalité</strong> : traiter votre demande de contact et vous recontacter sous 24 heures ouvrées.<br /><strong>Base légale</strong> : votre consentement explicite (envoi volontaire du formulaire).<br /><strong>Durée de conservation</strong> : 12 mois à compter de votre dernier contact, sauf relation commerciale active.",
      modal_privacy_h2: "Sous-traitant : Netlify Forms",
      modal_privacy_netlify: "Les soumissions du formulaire sont traitées et stockées par Netlify, Inc. (États-Unis) via leur service Netlify Forms. Netlify est certifié conforme au cadre Data Privacy Framework UE-États-Unis.",
      modal_privacy_h3: "Mesure d'audience (Umami)",
      modal_privacy_umami_placeholder: "[À ACTIVER quand Umami sera intégré]",
      modal_privacy_umami: "Ce site utilise Umami, un service de mesure d'audience respectueux de la vie privée. Umami ne dépose aucun cookie, ne suit pas les utilisateurs entre les sites et ne collecte aucune donnée personnelle identifiable (pas d'adresse IP stockée en clair, pas de profil de navigation).",
      modal_privacy_h4: "Cookies",
      modal_privacy_cookies: "Ce site n'utilise aucun cookie de suivi ou publicitaire. Aucun consentement préalable n'est donc requis.",
      modal_privacy_h5: "Vos droits",
      modal_privacy_rights_html: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de portabilité et d'opposition concernant vos données. Pour exercer ces droits, contactez-moi par email à <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      modal_privacy_cnil: "Vous pouvez également introduire une réclamation auprès de la CNIL (France) ou du BfDI (Allemagne) si vous estimez que vos droits ne sont pas respectés.",
      modal_privacy_h6: "Mise à jour",
      modal_privacy_update: "Cette politique peut être mise à jour. La date de dernière mise à jour : mai 2026.",
    },

    en: {
      // Meta
      meta_title: "Antonio Laisé · Custom dashboards for SMEs",
      meta_description: "Independent consulting: data structuring and custom dashboards for small and mid-sized businesses. By Antonio Laisé, mechanical engineer data & reliability, Hanover.",

      // Header
      nav_solution: "Solution",
      nav_approche: "Approach",
      nav_exemples: "Examples",
      nav_pourquoi: "Why custom",
      nav_tarifs: "Pricing",
      nav_apropos: "About",
      header_cta: "Let's talk 30 min",
      lang_alt: "FR",

      // Hero
      hero_eyebrow: "Independent data consulting",
      hero_title: "Your data structured. Your business clarified.",
      hero_lead: "I help SMEs organize their data and build custom dashboards to steer their activity with a clear view, tailored to their business.",
      hero_cta_primary: "Let's talk 30 minutes",
      hero_cta_secondary: "See examples",

      // Constat
      constat_eyebrow: "The reality",
      constat_title: "Lots of data. Little visibility.",
      constat_body: "Most SMEs run on instinct, or with poorly fitted tools. Data exists. It's just scattered across Excel files, Google Sheets, ERP systems and personal exports. Power BI and Tableau are designed for large enterprises with their dedicated data teams. The result: no real visibility on operations, and decisions made without numbers to back them up.",

      // Solution
      solution_eyebrow: "My solution",
      solution_title: "Web dashboards connected to your real data.",
      solution_sub: "No installation. No software to learn. Your data stays where it is.",
      kpi_label_progress: "72% done, 80.6% of schedule elapsed",
      kpi_value_days_late: "-15d days late",
      kpi_label_days: "DAYS VARIANCE",
      solution_legend_html: "Your teams enter raw data in a tool they already know.<br />The dashboard takes care of everything else, automatically.",

      feature1_title: "Connected in real time to your existing sources",
      feature1_desc: "Google Sheets, local Excel, Excel OneDrive / SharePoint, and other sources on request (ERP, databases, APIs). You enter raw data, the dashboard updates automatically.",
      feature2_title: "Smart template",
      feature2_desc: "You only fill in what's missing. All calculations (averages, ratios, aggregations, alerts) are done automatically server-side.",
      feature3_title: "Accessible anywhere, on any screen",
      feature3_desc: "Simple protected web link, no installation. Works on desktop, tablet, smartphone, workshop TV screen.",
      feature4_title: "Native multi-language",
      feature4_desc: "Switch FR / EN / DE (or any other language on request) in one click. Ideal for international SMEs or teams across multiple countries.",
      feature5_title: "Full-screen TV mode",
      feature5_desc: "Designed for permanent display in open spaces, workshops or meeting rooms. Dark mode available to reduce eye strain.",
      feature6_title: "Custom-built for your business",
      feature6_desc: "KPIs, visualizations, alerts defined with you during the audit. No generic visuals that don't match your reality.",
      feature7_title: "Organized in themed tabs",
      feature7_desc: "Each dashboard is structured into tabs (e.g. Overview, Details, Alerts, Recommendations). A dashboard can have as many tabs as needed based on the use case.",

      // Approche
      approche_eyebrow: "My approach",
      approche_title: "A four-step process.",
      step1_title: "Audit of existing data",
      step1_meta: "3 days",
      step1_desc: "Mapping of what already exists: sources, formats, quality. Identification of the KPIs critical to your activity.",
      step2_title: "Structuring",
      step2_meta: "Included in the audit",
      step2_desc: "Definition of a clean data schema. Organization of sources (Google Sheets, local Excel, OneDrive/SharePoint).",
      step3_title: "Dashboard build",
      step3_meta: "2 to 3 days per dashboard",
      step3_desc: "Custom development: business KPIs, tailored visualizations, native multi-language (FR/EN/DE) if needed.",
      step4_title: "Deployment and training",
      step4_meta: "1 to 2 days",
      step4_desc: "Secure online deployment. Training on usage and data updates.",

      // Exemples
      exemples_eyebrow: "Concrete examples",
      exemples_title: "Three demo dashboards.",
      exemples_banner_html: "These 3 dashboards are concrete examples of what I can build. Each one is fully adaptable: KPIs, visualizations, tabs, data sources, languages, visual identity. <strong>Your final dashboard will be different, tailored to your business needs.</strong><br /><br /><em>Screenshots below: full-screen TV views. The other tabs of each dashboard are available on request.</em>",
      example1_title: "Project Tracking Dashboard",
      example1_desc: "Project monitoring: EVM (CPI, SPI, EAC), burndown, S-curve budget, milestones, team, risks.",
      example2_title: "Maintenance & Reliability Dashboard",
      example2_desc: "MTBF, MTTR, availability, rule-based alerts, recommendations.",
      example3_title: "Production Dashboard",
      example3_desc: "Quality tracking, customer and supplier claims, safety, compliance, shipments.",
      example_note: "Example. Adaptable to your business KPIs.",
      demo_title: "See a dashboard in real conditions",
      demo_desc: "On request, I can give you interactive access to one of these demo dashboards, as well as to the data source (Google Sheets) that feeds it. You see the full workflow: you edit a cell, the dashboard updates. You experience first-hand how simple the user-side update process is.",
      demo_cta: "Request an interactive demo",

      // Pourquoi custom
      pourquoi_eyebrow: "Comparison",
      pourquoi_title: "Why not Power BI or Tableau?",
      pourquoi_intro: "Most SMEs think Power BI is \"simple\" because it's included in their Microsoft 365 subscription. That's true for basic charts. But as soon as you want a really useful and personalized steering tool, you quickly hit walls.",
      card1_title: "Limited visual customization",
      card1_intro: "Power BI forces its predefined visuals. A few examples that are simple in custom and complicated or impossible in Power BI:",
      card1_item1_html: "<strong>Conditional shape formatting:</strong> impossible natively. To display traffic-light indicators (red / orange / green), you have to hack around with paid external custom visuals or SVGs coded in DAX.",
      card1_item2_html: "<strong>Readable full-screen TV mode:</strong> no rotating support or adjustment for wide workshop screens.",
      card1_item3_html: "<strong>Truly personalized layout:</strong> rigid grid. Hard to build a unique design aligned with your brand.",
      card1_tag: "In custom: it's code, so anything is possible from the first iteration.",
      card2_title: "Native multi-language is hard",
      card2_desc: "Power BI handles multi-language through complex setups: roles, model translations, separate datasets. For an international SME, it quickly becomes a maintenance nightmare.",
      card2_tag: "In custom: FR / EN / DE switch in one click in the header, translations centralized in a simple file to edit.",
      card3_title: "The false simplicity",
      card3_intro: "Power BI is simple for dropping an Excel file and making a bar chart. As soon as real business needs arise:",
      card3_item1_html: "<strong>Conditional business alert:</strong> \"Email me if availability drops below 92% for 3 days\" → complex DAX or Power Automate to set up.",
      card3_item2_html: "<strong>Custom business KPI:</strong> OEE with specific business rules → advanced DAX, long formulas to maintain.",
      card3_item3_html: "<strong>Custom drilldown:</strong> see filtered failure history with a link to the CMMS work order → complex integration.",
      card3_tag: "In custom: we define your real business needs, and it's coded once for all, no DAX hacking.",
      pull_quote: "Power BI is included in Microsoft 365, true. But \"included\" doesn't mean \"fit for your need\". For a really useful steering tool, tailored to your business KPIs with formatting that speaks, a custom dashboard is often faster to set up and easier to evolve.",

      // Tarifs
      tarifs_eyebrow: "Pricing",
      tarifs_title: "Clear formulas, no surprises.",
      price1_title: "Data Audit",
      price1_duration: "3 days",
      price1_desc: "Mapping of your data, identification of critical KPIs, recommendations.",
      price2_title: "Full Build",
      price2_duration: "6 to 7 days",
      price2_desc: "Audit + 1 custom dashboard + deployment + training.",
      price3_title: "Pack 2 dashboards",
      price3_duration: "9 to 10 days",
      price3_desc: "Audit + 2 dashboards + deployment + training.",
      price4_title: "Pack 3 dashboards",
      price4_duration: "12 to 13 days",
      price4_desc: "Audit + 3 dashboards + deployment + training.",
      maintenance_title: "Monthly maintenance (optional)",
      maintenance1_html: "<strong>Basic · €50/month per dashboard</strong><span>Hosting + critical fixes.</span>",
      maintenance2_html: "<strong>Standard · €100/month per dashboard</strong><span>Basic + 1 hour of intervention included per month.</span>",
      maintenance3_html: "<strong>Off-package intervention · €80/hour</strong><span>Billed for the time spent.</span>",
      tarifs_notice_html: "<strong>First-client pricing applied.</strong> My early missions benefit from reduced rates while I build my first references.",

      // À propos
      apropos_eyebrow: "About",
      apropos_title: "Antonio Laisé, data & reliability engineer.",
      apropos_p1: "Mechanical engineer from UTC, specialty Data & Reliability for Industry. Based in Hanover, I work in France and Germany.",
      apropos_p2: "My industrial experiences: Nexans Hanover (industrial process optimization, operational dashboards) and EDF (nuclear civil engineering).",
      apropos_pitch: "What drives me at work: organizing data, simplifying processes that drag, automating what can be, reducing time spent on repetitive tasks. That's what I look for in every mission.",
      apropos_cv: "See my CV online →",

      // Contact
      contact_eyebrow: "Contact",
      contact_title: "Let's talk 30 minutes.",
      contact_body: "Describe your need in a few words. I'll get back to you within 24 business hours to schedule a call.",
      label_firstname: "First name *",
      label_lastname: "Last name *",
      label_company: "Company *",
      label_need: "Your main need *",
      need_structurer: "Structure my data",
      need_dashboard: "Build a dashboard",
      need_indecis: "I'm not sure yet",
      label_contact: "Email or phone *",
      label_message_html: "Message <span class=\"field-optional\">(optional)</span>",
      placeholder_message: "Briefly describe your context or your need.",
      submit_button: "Send my request",
      alt_cta_html: "Or <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">book a meeting directly →</a>",

      // Footer
      footer_location: "Hanover · France & Germany",
      footer_mentions: "Legal notice",
      footer_privacy: "Privacy policy",
      footer_copyright: "© 2026 Antonio Laisé. All rights reserved.",

      // Modales légales — Mentions
      modal_mentions_title: "Legal notice",
      modal_mentions_h1: "Site editor",
      modal_mentions_editor_html: "Antonio Laisé<br />Independent consulting in data structuring and custom dashboards<br />Hanover, Germany<br />Contact: <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      modal_mentions_placeholder: "[TO COMPLETE: legal status (micro-entrepreneur / Freiberufler / other), SIRET or Steuernummer, professional address if different]",
      modal_mentions_h2: "Publication director",
      modal_mentions_director: "Antonio Laisé",
      modal_mentions_h3: "Hosting provider",
      modal_mentions_host_html: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, USA<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      modal_mentions_h4: "Intellectual property",
      modal_mentions_ip: "All content on this site (texts, images, screenshots, code) is the property of Antonio Laisé, unless otherwise stated. Any reproduction without prior authorization is prohibited.",
      modal_mentions_h5: "Credits",
      modal_mentions_credits_html: "Site developed by Antonio Laisé in HTML, CSS and JavaScript.<br />Fonts: Inter and JetBrains Mono (Google Fonts).",

      // Modales légales — Privacy
      modal_privacy_title: "Privacy policy",
      modal_privacy_intro: "This policy describes the personal data collected on this site, its purpose, retention period and your rights, in compliance with the General Data Protection Regulation (GDPR).",
      modal_privacy_h1: "Data collected via the contact form",
      modal_privacy_form_intro: "When you fill in the contact form, the following information is collected:",
      modal_privacy_form_li1: "First and last name",
      modal_privacy_form_li2: "Your company name",
      modal_privacy_form_li3: "Email or phone number",
      modal_privacy_form_li4: "Nature of your need (structure my data, build a dashboard, undecided)",
      modal_privacy_form_li5: "Free message (optional)",
      modal_privacy_purpose_html: "<strong>Purpose</strong>: process your contact request and get back to you within 24 business hours.<br /><strong>Legal basis</strong>: your explicit consent (voluntary form submission).<br /><strong>Retention period</strong>: 12 months from your last contact, except for an active commercial relationship.",
      modal_privacy_h2: "Processor: Netlify Forms",
      modal_privacy_netlify: "Form submissions are processed and stored by Netlify, Inc. (USA) via their Netlify Forms service. Netlify is certified compliant with the EU-US Data Privacy Framework.",
      modal_privacy_h3: "Audience measurement (Umami)",
      modal_privacy_umami_placeholder: "[TO ENABLE when Umami is integrated]",
      modal_privacy_umami: "This site uses Umami, a privacy-respectful audience measurement service. Umami does not set any cookies, does not track users across sites, and does not collect any personally identifiable data (no plaintext IP address stored, no browsing profile).",
      modal_privacy_h4: "Cookies",
      modal_privacy_cookies: "This site does not use any tracking or advertising cookies. No prior consent is required.",
      modal_privacy_h5: "Your rights",
      modal_privacy_rights_html: "In accordance with the GDPR, you have the right to access, rectify, erase, port and object to your data. To exercise these rights, contact me by email at <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      modal_privacy_cnil: "You may also file a complaint with the CNIL (France) or BfDI (Germany) if you believe your rights are not being respected.",
      modal_privacy_h6: "Last update",
      modal_privacy_update: "This policy may be updated. Last update: May 2026.",
    }
  };

  const STORAGE_KEY = 'al-lang';
  const DEFAULT_LANG = 'fr';

  function getLang() {
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
    if (ogLocale) ogLocale.setAttribute('content', lang === 'fr' ? 'fr_FR' : 'en_US');

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
    if (btn) btn.textContent = dict.lang_alt;
  }

  function initI18n() {
    const lang = getLang();
    applyLang(lang);

    const btn = document.getElementById('langToggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = getLang();
        setLang(current === 'fr' ? 'en' : 'fr');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }
})();
