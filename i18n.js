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
      meta_title: "Antonio Laisé · Dashboards sur-mesure pour TPE et PME",
      meta_description: "Conseil indépendant : structuration de données et dashboards sur-mesure pour TPE et PME. Par Antonio Laisé, ingénieur mécanique data & fiabilité, Hanovre.",

      // Header
      nav_solution: "Solution",
      nav_approche: "Approche",
      nav_exemples: "Exemples",
      nav_pourquoi: "Comparaison",
      nav_tarifs: "Tarifs",
      nav_apropos: "À propos",
      header_cta: "Échangeons 30 min",
      header_cta_mini: "Contact",
      lang_alt: "EN",

      // Hero
      hero_eyebrow: "Conseil data indépendant",
      hero_title: "Vos données structurées. Votre pilotage clarifié.",
      hero_lead: "J'aide les TPE et PME à organiser leurs données et à construire des tableaux de bord sur-mesure pour piloter leur activité avec une vue claire, adaptée à leur métier.",
      hero_cta_primary: "Échangeons 30 minutes",
      hero_cta_secondary: "Voir des exemples",

      // Constat
      constat_eyebrow: "Le constat",
      constat_title: "Beaucoup de données. Peu de visibilité.",
      constat_body: "Beaucoup de TPE et PME pilotent à l'instinct, ou avec des outils mal adaptés. Les données existent. Elles sont souvent éparpillées entre tableurs, ERP, logiciels divers et exports persos. Power BI et Tableau sont pensés pour des grandes entreprises, avec leurs équipes data dédiées. Résultat : pas de vraie visibilité sur l'activité dans sa globalité, et des décisions prises sans appui chiffré.",

      // Solution
      solution_eyebrow: "Ma solution",
      solution_title: "Des tableaux de bord web personnalisables connectés à vos données réelles.",
      solution_sub: "Pas d'installation. Pas de logiciel à apprendre. Vos données restent où elles sont.",
      kpi_label_progress: "72% réalisé, 80,6% du planning écoulé",
      kpi_value_days_late: "15 j. de retard",
      kpi_label_days: "ÉCART PRÉVU À LA FIN",
      sheet_file: "Suivi_Projet.xlsx",
      sheet_r1: "Date_Début",
      sheet_r2: "Fin_Prévue",
      sheet_r3: "Fin_Estimée",
      sheet_r4: "Tâches_Total",
      sheet_r5: "Tâches_Faites",
      compare_arrow_label: "Calculé automatiquement",
      solution_legend_html: "Vos équipes saisissent les données brutes dans un outil qu'elles connaissent déjà.<br />Le tableau de bord fait tout le reste, automatiquement.",
      instruments_callout: "Ces dashboards ne sont pas des rapports à produire en fin de mois. Ce sont des instruments de pilotage qui lisent vos fichiers en continu et signalent les écarts dès qu'ils apparaissent. Et cela, avec vos indicateurs et vos couleurs.",
      solution_drilldown: "<strong>Besoin d'aller plus loin ?</strong> Depuis la vue d'ensemble, on peut descendre dans le détail d'un indicateur (graphique, historique, comparaison), aussi loin que vous le souhaitez.",

      feature1_title: "Connecté en temps réel à vos sources existantes",
      feature1_desc: "Google Sheets, Excel local ou OneDrive/SharePoint, ERP, autre logiciel. Peu importe la source, vous saisissez, le dashboard se met à jour. Vos données restent dans vos fichiers, rien n'est copié ailleurs.",
      feature2_title: "Indicateurs calculés automatiquement",
      feature2_desc: "Vous ne remplissez que les données brutes. Tous les calculs (moyennes, ratios, agrégations, alertes) sont faits automatiquement.",
      feature3_title: "Accessible n'importe où, sur n'importe quel écran",
      feature3_desc: "Simple lien web protégé, pas d'installation. Fonctionne sur ordinateur, tablette, smartphone, écran TV d'atelier.",
      feature4_title: "Multi-langue natif",
      feature4_desc: "Bascule FR / EN / DE (ou autre langue sur demande) en 1 clic. Idéal pour les TPE et PME internationales ou avec des équipes multi-pays.",
      feature5_title: "Mode TV plein écran",
      feature5_desc: "Pensé pour l'affichage permanent en open space, atelier ou salle de réunion. Mode sombre disponible pour réduire la fatigue visuelle.",
      feature6_title: "Conçu sur-mesure pour votre métier",
      feature6_desc: "Indicateurs, visualisations, alertes, couleurs définis avec vous lors de l'audit. Pas de visuels génériques qui ne vous parlent pas. Entièrement adaptable à votre charte graphique. Un outil justement dimensionné : ni trop, ni trop peu, exactement ce qu'il vous faut.",
      feature7_title: "Seuils visuels configurables en autonomie",
      feature7_desc: "Vert, orange, rouge (ou autres !) selon vos règles métier. Les seuils et les cibles sont définis dans votre fichier, modifiables à tout moment sans intervention technique. La personnalisation n'a pas de limites.",
      feature8_title: "Alertes et rapports automatiques par email",
      feature8_desc: "Dès qu'un indicateur franchit un seuil critique, vous recevez un email. Et chaque semaine, une synthèse arrive automatiquement dans votre boîte mail. Le dashboard vous prévient, même quand personne ne le regarde.",
      feature9_title: "Historique et tendances",
      feature9_desc: "Le dashboard enregistre vos indicateurs chaque jour et affiche leur évolution sur 30, 60 ou 90 jours. Vos données passées peuvent aussi être reprises : pas besoin de repartir de zéro, on visualise les vraies tendances et l'effet des actions déjà menées.",

      // Approche
      approche_eyebrow: "Mon approche",
      approche_title: "Une démarche en quatre étapes.",
      step1_title: "Cadrage de l'intervention et diagnostic des données existantes",
      step1_meta: "3 jours",
      step1_desc: "Cartographie de ce qui existe : sources, formats, qualité de la donnée. Identification de vos besoins, des enjeux et objectifs afin de déterminer les indicateurs critiques pour votre activité.",
      step2_title: "Structuration",
      step2_meta: "Inclus dans l'audit",
      step2_desc: "Définition d'un schéma de données propre. Organisation des sources et des responsabilités.",
      step3_title: "Construction du tableau de bord",
      step3_meta: "2 à 3 jours par unité",
      step3_desc: "Développement sur-mesure : indicateurs métier, visualisations adaptées, multi-langue natif (FR/EN/DE) si besoin.",
      step4_title: "Déploiement et formation",
      step4_meta: "1 à 2 jours",
      step4_desc: "Mise en ligne sécurisée. Formation à l'utilisation et à la mise à jour des données.",

      // Exemples
      exemples_eyebrow: "Exemples concrets",
      exemples_title: "Trois versions de démonstration.",
      exemples_banner_html: "Ces 3 dashboards sont des exemples concrets de ce que je peux produire. Chacun est entièrement adaptable : indicateurs, visualisations, onglets, sources de données, langues, charte graphique. <strong>Votre dashboard final sera différent, taillé à vos besoins métier et à vos envies esthétiques.</strong><br /><br /><em>Captures ci-dessous : vues en mode TV plein écran. Les autres onglets de chaque dashboard sont disponibles sur demande.</em>",
      example1_title: "Dashboard Project Tracking",
      example1_desc: "Suivi de projet : avancement, écarts de budget et de planning, jalons, charge de l'équipe, risques.",
      example2_title: "Dashboard Maintenance & Fiabilité",
      example2_desc: "MTBF, MTTR, disponibilité, alertes par règles, recommandations.",
      example3_title: "Dashboard Production",
      example3_desc: "Suivi qualité, réclamations clients et fournisseurs, sécurité, conformité, expéditions.",
      example_note: "Exemple. Adaptable à vos indicateurs métier.",
      demo_title: "Voir un tableau de bord en condition réelle",
      demo_desc: "Sur demande, je peux vous donner un accès interactif à l'un de ces dashboards démo, ainsi qu'à la source de données (Google Sheets) qui l'alimente. Vous voyez le fonctionnement global : vous modifiez une cellule, le dashboard se met à jour. Vous comprenez la simplicité de la mise à jour côté utilisateur.",
      demo_cta: "Demander une démo interactive",

      // Comparaison
      pourquoi_eyebrow: "Comparaison",
      pourquoi_title: "Pourquoi pas un outil standard ?",
      pourquoi_intro: "Power BI, Monday, Jira - ces outils couvrent les cas généraux. Dès qu'on veut un vrai outil de pilotage métier, taillé à vos indicateurs, ils montrent leurs limites.",
      pbi_section: "Power BI / Tableau",
      card1_title: "Customisation visuelle bridée",
      card1_desc: "Feux signaux conditionnels impossibles nativement, layout rigide, TV mode non pensé pour l'atelier. Pour chacun de ces cas, il faut bidouiller avec des visuels externes ou du DAX (le langage de formules de Power BI).",
      card1_tag: "En custom : c'est du code, donc tout est possible dès la première itération.",
      card2_title: "Multi-langue natif difficile",
      card2_desc: "Power BI gère le multi-langue via des configurations complexes : rôles, traductions de modèles, jeux de données séparés. Vite un cauchemar à maintenir pour une équipe internationale.",
      card2_tag: "En custom : bascule FR / EN / DE en 1 clic, traductions centralisées dans un fichier simple.",
      card3_title: "Simplicité trompeuse dès les besoins réels",
      card3_desc: "Indicateurs métier spécifiques, vues détaillées sur mesure, connexion à vos autres logiciels : dès qu'on dépasse le graphique de base, ces outils demandent des compétences techniques pointues. Faciles pour l'essentiel, pas pour un vrai outil de pilotage.",
      card3_tag: "En custom : les besoins métier sont codés une fois pour toutes, sans bricolage.",
      monday_section: "Monday / Jira",
      monday1_title: "KPIs métier vrais",
      monday1_intro: "Les outils de gestion de projet comme Monday ou Jira sont excellents pour gérer les tâches. Leurs vues de reporting, en revanche, ne gèrent pas les formules complexes.",
      monday1_item1_html: "<strong>Indicateurs standard manquants :</strong> MTBF, OEE, SPI, EAC n'existent pas dans leurs vues natives.",
      monday1_item2_html: "<strong>Calculs métier impossibles :</strong> les widgets ne savent pas appliquer vos règles spécifiques.",
      monday1_item3_html: "<strong>En custom :</strong> chaque indicateur est construit sur votre logique exacte, pas sur ce que l'outil permet.",
      monday1_tag: "Vos indicateurs, pas ceux que l'outil vous impose.",
      monday2_title: "Vos données, vos fichiers",
      monday2_desc: "Ces outils supposent que tout soit saisi chez eux : migration des données, reconfiguration, nouvelles habitudes pour toute l'équipe.",
      monday2_item1_html: "<strong>Pas de migration :</strong> on lit vos Excel et Google Sheets existants directement.",
      monday2_item2_html: "<strong>Pas de reconfiguration :</strong> vos équipes gardent leurs outils de saisie habituels.",
      monday2_item3_html: "<strong>Pas de dépendance :</strong> vos données restent dans vos fichiers, pas dans une plateforme tierce.",
      monday2_tag: "Vos données restent dans vos fichiers, pas chez un éditeur tiers.",
      monday3_title: "Complémentaire si vous l'utilisez déjà",
      monday3_item1: "Monday gère vos tâches, le dashboard pilote votre performance globale.",
      monday3_item2: "On peut se connecter directement à vos données Monday ou Jira via leur API.",
      monday3_item3: "Les deux coexistent sans friction, chacun dans son rôle.",
      pull_quote: "Ces outils sont conçus pour des millions d'usages différents. Un tableau de bord sur-mesure est conçu pour un seul : le vôtre.",

      // Tarifs
      tarifs_eyebrow: "Tarifs",
      tarifs_title: "Forfaits fixes, périmètre défini avant le démarrage.",
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
      tarifs_notice_html: "Périmètre spécifique (hébergement sur site, sources multiples, connecteur métier) ? Devis établi sur mesure, à partir de 300 €/j.",

      // À propos
      apropos_eyebrow: "Qui suis-je",
      apropos_title: "Antonio Laisé, ingénieur data & fiabilité.",
      apropos_p1: "Ingénieur mécanique de l'UTC, spécialité Data & Fiabilité pour l'Industrie. Basé à Hanovre, j'interviens en France et en Allemagne.",
      apropos_p2: "Mes expériences industrielles : Nexans Hanovre (optimisation de process industriel, tableaux de bord opérationnels) et EDF génie civil nucléaire (étude de prédictabilité des fuites dans les structures en béton, analyse d'un nouveau code de construction).",
      apropos_pitch: "Ce qui m'anime dans le travail : organiser des données, simplifier des processus, automatiser ce qui peut l'être, réduire le temps passé sur les tâches répétitives. C'est ce que je viens chercher dans chaque mission. J'aime aussi échanger avec les équipes et comprendre comment elles travaillent au quotidien : c'est souvent là que naissent les meilleures idées d'amélioration.",
      apropos_cv: "Voir mon CV en ligne →",

      // Contact
      contact_eyebrow: "Contact",
      contact_title: "Échangeons 30 minutes.",
      contact_body: "Décrivez votre besoin en quelques mots. Je reviens vers vous sous 24 heures ouvrées pour caler un échange.",
      contact_brochure: "Vous voulez plus de détails sur mon offre ? Une brochure complète est disponible sur simple demande.",
      label_firstname: "Prénom *",
      label_lastname: "Nom *",
      label_company: "Entreprise *",
      label_need: "Votre besoin principal *",
      need_structurer: "Structurer mes données",
      need_dashboard: "Créer un tableau de bord",
      need_indecis: "Je ne sais pas encore",
      label_contact: "Email ou téléphone *",
      label_message_html: "Message <span class=\"field-optional\">(optionnel)</span>",
      placeholder_message: "Décrivez brièvement votre contexte ou votre besoin.",
      submit_button: "Envoyer ma demande",
      contact_success: "Merci, votre demande a bien été envoyée. Je reviens vers vous sous 24 heures ouvrées.",
      contact_error: "Une erreur est survenue lors de l'envoi. Réessayez, ou écrivez-moi directement à antonio.laise.pro@gmail.com.",
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
      modal_mentions_placeholder: "Statut juridique en cours de constitution. La forme juridique, le numéro d'immatriculation (SIRET ou Steuernummer) et l'adresse professionnelle seront ajoutés dès la finalisation de la structure.",
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
      modal_privacy_h3: "Mesure d'audience",
      modal_privacy_umami: "Aucun outil de mesure d'audience n'est actuellement actif sur ce site. Si un outil respectueux de la vie privée (sans cookie ni donnée personnelle identifiable) est ajouté à l'avenir, cette politique sera mise à jour.",
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
      meta_title: "Antonio Laisé · Custom dashboards for SMBs",
      meta_description: "Independent consulting: data structuring and custom dashboards for small and medium businesses. By Antonio Laisé, mechanical engineer data & reliability, Hanover.",

      // Header
      nav_solution: "Solution",
      nav_approche: "Approach",
      nav_exemples: "Examples",
      nav_pourquoi: "Comparison",
      nav_tarifs: "Pricing",
      nav_apropos: "About",
      header_cta: "Let's talk 30 min",
      header_cta_mini: "Contact",
      lang_alt: "FR",

      // Hero
      hero_eyebrow: "Independent data consulting",
      hero_title: "Your data structured. Your business clarified.",
      hero_lead: "I help small and medium businesses organize their data and build custom dashboards to steer their activity with a clear view, tailored to their business.",
      hero_cta_primary: "Let's talk 30 minutes",
      hero_cta_secondary: "See examples",

      // Constat
      constat_eyebrow: "The reality",
      constat_title: "Lots of data. Little visibility.",
      constat_body: "Many small and medium businesses run on instinct, or with poorly fitted tools. Data exists. It's often scattered across spreadsheets, ERP systems, various software and personal exports. Power BI and Tableau are designed for large enterprises with their dedicated data teams. The result: no real visibility on the business as a whole, and decisions made without numbers to back them up.",

      // Solution
      solution_eyebrow: "My solution",
      solution_title: "Customizable web dashboards connected to your real data.",
      solution_sub: "No installation. No software to learn. Your data stays where it is.",
      kpi_label_progress: "72% done, 80.6% of schedule elapsed",
      kpi_value_days_late: "15 days late",
      kpi_label_days: "PROJECTED END VARIANCE",
      sheet_file: "Project_Tracking.xlsx",
      sheet_r1: "Date_Start",
      sheet_r2: "Date_End_Plan",
      sheet_r3: "Date_End_Est",
      sheet_r4: "Tasks_Total",
      sheet_r5: "Tasks_Done",
      compare_arrow_label: "Calculated automatically",
      solution_legend_html: "Your teams enter raw data in a tool they already know.<br />The dashboard takes care of everything else, automatically.",
      instruments_callout: "These dashboards are not reports to produce at month-end. They are monitoring instruments that read your files continuously and signal deviations as soon as they appear. And all that, with your own indicators and colors.",
      solution_drilldown: "<strong>Need to go deeper?</strong> From the overview, you can drill into the detail of an indicator (chart, history, comparison), as far as you want.",

      feature1_title: "Connected in real time to your existing sources",
      feature1_desc: "Google Sheets, local Excel or OneDrive/SharePoint, ERP, other software. Whatever the source, you enter the data, the dashboard updates. Your data stays in your files, nothing is copied elsewhere.",
      feature2_title: "Indicators calculated automatically",
      feature2_desc: "You only fill in the raw data. All calculations (averages, ratios, aggregations, alerts) are done automatically.",
      feature3_title: "Accessible anywhere, on any screen",
      feature3_desc: "Simple protected web link, no installation. Works on desktop, tablet, smartphone, workshop TV screen.",
      feature4_title: "Native multi-language",
      feature4_desc: "Switch FR / EN / DE (or any other language on request) in one click. Ideal for international small and medium businesses or multi-country teams.",
      feature5_title: "Full-screen TV mode",
      feature5_desc: "Designed for permanent display in open spaces, workshops or meeting rooms. Dark mode available to reduce eye strain.",
      feature6_title: "Custom-built for your business",
      feature6_desc: "Indicators, visualizations, alerts, colors defined with you during the audit. No generic visuals that mean nothing to you. Fully adaptable to your visual identity. A tool that's just the right size: neither too much nor too little, exactly what you need.",
      feature7_title: "Visual thresholds configurable independently",
      feature7_desc: "Green, orange, red (or others!) based on your business rules. Thresholds and targets are defined in your file, adjustable at any time without technical intervention. Customization has no limits.",
      feature8_title: "Automatic email alerts and reports",
      feature8_desc: "As soon as an indicator crosses a critical threshold, you get an email. And every week, a summary arrives in your inbox automatically. The dashboard alerts you, even when no one is watching it.",
      feature9_title: "History and trends",
      feature9_desc: "The dashboard records your indicators every day and shows their evolution over 30, 60 or 90 days. Your past data can also be imported: no need to start from scratch, you see real trends and the impact of actions already taken.",

      // Approche
      approche_eyebrow: "My approach",
      approche_title: "A four-step process.",
      step1_title: "Engagement scoping and audit of existing data",
      step1_meta: "3 days",
      step1_desc: "Mapping of what already exists: sources, formats, data quality. Identification of your needs, challenges and objectives to determine the indicators critical to your activity.",
      step2_title: "Structuring",
      step2_meta: "Included in the audit",
      step2_desc: "Definition of a clean data schema. Organization of sources and responsibilities.",
      step3_title: "Dashboard build",
      step3_meta: "2 to 3 days per dashboard",
      step3_desc: "Custom development: business KPIs, tailored visualizations, native multi-language (FR/EN/DE) if needed.",
      step4_title: "Deployment and training",
      step4_meta: "1 to 2 days",
      step4_desc: "Secure online deployment. Training on usage and data updates.",

      // Exemples
      exemples_eyebrow: "Concrete examples",
      exemples_title: "Three demo dashboards.",
      exemples_banner_html: "These 3 dashboards are concrete examples of what I can build. Each one is fully adaptable: KPIs, visualizations, tabs, data sources, languages, visual identity. <strong>Your final dashboard will be different, tailored to your business needs and aesthetic preferences.</strong><br /><br /><em>Screenshots below: full-screen TV views. The other tabs of each dashboard are available on request.</em>",
      example1_title: "Project Tracking Dashboard",
      example1_desc: "Project monitoring: progress, budget and schedule variances, milestones, team workload, risks.",
      example2_title: "Maintenance & Reliability Dashboard",
      example2_desc: "MTBF, MTTR, availability, rule-based alerts, recommendations.",
      example3_title: "Production Dashboard",
      example3_desc: "Quality tracking, customer and supplier claims, safety, compliance, shipments.",
      example_note: "Example. Adaptable to your business KPIs.",
      demo_title: "See a dashboard in real conditions",
      demo_desc: "On request, I can give you interactive access to one of these demo dashboards, as well as to the data source (Google Sheets) that feeds it. You see the full workflow: you edit a cell, the dashboard updates. You see for yourself how simple the user-side update process is.",
      demo_cta: "Request an interactive demo",

      // Comparison
      pourquoi_eyebrow: "Comparison",
      pourquoi_title: "Why not a standard tool?",
      pourquoi_intro: "Power BI, Monday, Jira - these tools cover general cases well. As soon as you need a real business monitoring tool, tailored to your KPIs, they show their limits.",
      pbi_section: "Power BI / Tableau",
      card1_title: "Limited visual customization",
      card1_desc: "Conditional traffic-light indicators impossible natively, rigid layout, TV mode not designed for workshop screens. For each of these cases, you have to work around the limits using external visuals or DAX (Power BI's formula language).",
      card1_tag: "In custom: it's code, so anything is possible from the first iteration.",
      card2_title: "Native multi-language is hard",
      card2_desc: "Power BI handles multi-language through complex setups: roles, model translations, separate datasets. Quickly a maintenance nightmare for an international team.",
      card2_tag: "In custom: FR / EN / DE switch in one click, translations centralized in a simple file.",
      card3_title: "Misleading simplicity for real needs",
      card3_desc: "Specific business indicators, custom detailed views, connection to your other software: as soon as you go beyond the basic chart, these tools require advanced technical skills. Easy for the basics, not for a real monitoring tool.",
      card3_tag: "In custom: business needs are coded once for all, no hacking.",
      monday_section: "Monday / Jira",
      monday1_title: "Real business KPIs",
      monday1_intro: "Project management tools like Monday or Jira are great at managing tasks. Their reporting views, however, can't handle complex formulas.",
      monday1_item1_html: "<strong>Missing standard indicators:</strong> MTBF, OEE, SPI, EAC don't exist in their native views.",
      monday1_item2_html: "<strong>Business calculations impossible:</strong> widgets cannot apply your specific rules.",
      monday1_item3_html: "<strong>In custom:</strong> every indicator is built on your exact logic, not what the tool allows.",
      monday1_tag: "Your indicators, not the ones the tool forces on you.",
      monday2_title: "Your data, your files",
      monday2_desc: "These tools assume everything is entered in them: data migration, reconfiguration, new habits for the whole team.",
      monday2_item1_html: "<strong>No migration:</strong> we read your existing Excel and Google Sheets directly.",
      monday2_item2_html: "<strong>No reconfiguration:</strong> your teams keep their usual data entry tools.",
      monday2_item3_html: "<strong>No dependency:</strong> your data stays in your files, not on a third-party platform.",
      monday2_tag: "Your data stays in your files, not with a third-party vendor.",
      monday3_title: "Complementary if you already use it",
      monday3_item1: "Monday manages your tasks, the dashboard monitors your overall performance.",
      monday3_item2: "We can connect directly to your Monday or Jira data via their API.",
      monday3_item3: "Both coexist without friction, each in its own role.",
      pull_quote: "These tools are built for millions of different use cases. A custom dashboard is built for one: yours.",

      // Tarifs
      tarifs_eyebrow: "Pricing",
      tarifs_title: "Fixed-price packages, scope defined before kickoff.",
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
      tarifs_notice_html: "Specific scope (on-site hosting, multiple sources, custom connector)? Quoted on a case-by-case basis, from €300/day.",

      // À propos
      apropos_eyebrow: "About",
      apropos_title: "Antonio Laisé, data & reliability engineer.",
      apropos_p1: "Mechanical engineer from UTC, specialty Data & Reliability for Industry. Based in Hanover, I work in France and Germany.",
      apropos_p2: "My industrial experiences: Nexans Hanover (industrial process optimization, operational dashboards) and EDF nuclear civil engineering (predictability study of leaks in concrete structures, analysis of a new construction code).",
      apropos_pitch: "What drives me at work: organizing data, simplifying processes, automating what can be, reducing time spent on repetitive tasks. That's what I look for in every mission. I also enjoy talking with teams and understanding how they work day to day: that's often where the best improvement ideas come from.",
      apropos_cv: "See my CV online →",

      // Contact
      contact_eyebrow: "Contact",
      contact_title: "Let's talk 30 minutes.",
      contact_body: "Describe your need in a few words. I'll get back to you within 24 business hours to schedule a call.",
      contact_brochure: "Want more details about my offer? A full brochure is available on request.",
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
      contact_success: "Thank you, your request has been sent. I'll get back to you within 24 business hours.",
      contact_error: "Something went wrong while sending. Please try again, or email me directly at antonio.laise.pro@gmail.com.",
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
      modal_mentions_placeholder: "Legal structure currently being set up. The legal form, registration number (SIRET or Steuernummer) and business address will be added once the structure is finalised.",
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
      modal_privacy_h3: "Audience measurement",
      modal_privacy_umami: "No audience measurement tool is currently active on this site. If a privacy-respectful tool (no cookies, no personally identifiable data) is added later, this policy will be updated.",
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
