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
      meta_title: "Antonio Laisé · Conseil en données et pilotage pour TPE et PME",
      meta_description: "Conseil indépendant pour transformer des données éparpillées en un pilotage clair de l'activité. Diagnostic, structuration et dashboards sur mesure connectés à vos fichiers. Par Antonio Laisé, ingénieur data & fiabilité, Hanovre.",

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
      hero_eyebrow: "Conseil indépendant · données & pilotage",
      hero_title: "Vos données structurées. Votre pilotage clarifié.",
      hero_lead: "J'accompagne les TPE et PME pour transformer des données éparpillées en un pilotage clair de leur activité. Tout part de votre métier et de vos enjeux ; le tableau de bord sur mesure est l'aboutissement.",
      hero_cta_primary: "Échangeons 30 minutes",
      hero_cta_secondary: "Voir des exemples",

      // Constat
      constat_eyebrow: "Le constat",
      constat_title: "Beaucoup de données. Peu de visibilité.",
      constat_body: "Beaucoup de TPE et PME pilotent à l'instinct, ou avec des outils mal adaptés. Les données existent. Elles sont souvent éparpillées entre tableurs, ERP, logiciels divers et exports manuels. Power BI et Tableau sont pensés pour des grandes entreprises, avec leurs équipes data dédiées. Résultat : pas de vraie visibilité sur l'ensemble de l'activité, et des décisions prises sans appui chiffré.",

      // Solution
      solution_eyebrow: "Ce que vous obtenez",
      solution_title: "Un instrument de pilotage taillé pour votre métier.",
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
      instruments_callout: "Ces dashboards ne sont pas des rapports à produire en fin de mois. Ce sont des instruments de pilotage qui lisent vos fichiers en continu et signalent les écarts dès qu'ils apparaissent, avec vos propres indicateurs et vos couleurs.",
      solution_drilldown: "<strong>Besoin d'aller plus loin ?</strong> Depuis la vue d'ensemble, vous pouvez descendre dans le détail d'un indicateur (graphique, historique, comparaison), aussi loin que vous le souhaitez.",

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
      feature6_title: "Conçu sur mesure pour votre métier",
      feature6_desc: "Indicateurs, visualisations, alertes, couleurs définis avec vous lors de l'audit. Pas de visuels génériques qui ne vous parlent pas. Entièrement adaptable à votre charte graphique. Un outil à votre taille : exactement ce qu'il vous faut, rien de superflu.",
      feature7_title: "Seuils visuels configurables en autonomie",
      feature7_desc: "Vert, orange, rouge (ou autres !) selon vos règles métier. Les seuils et les cibles sont définis dans votre fichier, modifiables à tout moment sans intervention technique. La personnalisation n'a pas de limites.",
      feature8_title: "Alertes et rapports automatiques par email",
      feature8_desc: "Dès qu'un indicateur franchit un seuil critique, vous recevez un email. Et chaque semaine, une synthèse arrive automatiquement dans votre boîte mail. Le dashboard vous prévient, même quand personne ne le regarde.",
      feature9_title: "Historique et tendances",
      feature9_desc: "Le dashboard enregistre vos indicateurs chaque jour et affiche leur évolution sur 30, 60 ou 90 jours. Vos données passées peuvent aussi être reprises : pas besoin de repartir de zéro, on visualise les vraies tendances et l'effet des actions déjà menées.",
      feature_ai_badge: "Nouveau",
      feature_ai_title: "Assistant IA intégré",
      feature_ai_desc: "Posez une question en langage naturel à votre dashboard (« quel équipement traiter en priorité ? ») et obtenez une réponse claire, tirée de vos seules données. L'assistant explique aussi les écarts détectés. Vos données restent chez vous : seuls les indicateurs agrégés sont analysés, jamais vos lignes brutes.",

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
      step3_desc: "Développement sur mesure : indicateurs métier, visualisations adaptées, multi-langue natif (FR/EN/DE) si besoin.",
      step4_title: "Déploiement et formation",
      step4_meta: "1 à 2 jours",
      step4_desc: "Mise en ligne sécurisée. Formation à l'utilisation et à la mise à jour des données.",

      // Exemples
      exemples_eyebrow: "Exemples concrets",
      exemples_title: "Trois versions de démonstration.",
      exemples_banner_html: "Ces 3 dashboards sont des exemples concrets de ce que je peux produire. Chacun est entièrement adaptable : indicateurs, visualisations, onglets, sources de données, langues, charte graphique. <strong>Votre dashboard final sera différent, taillé à vos besoins métier et à votre identité visuelle.</strong><br /><br /><em>Captures ci-dessous : vues en mode TV plein écran. Les autres onglets de chaque dashboard sont disponibles sur demande.</em>",
      example1_title: "Dashboard Project Tracking",
      example1_desc: "Suivi de projet : avancement, écarts de budget et de planning, jalons, charge de l'équipe, risques.",
      example2_title: "Dashboard Maintenance & Fiabilité",
      example2_desc: "MTBF, MTTR, disponibilité, alertes par règles, recommandations.",
      example3_title: "Dashboard Production",
      example3_desc: "Suivi qualité, réclamations clients et fournisseurs, sécurité, conformité, expéditions.",
      example_note: "Exemple. Adaptable à vos indicateurs métier.",
      demo_title: "Voir un tableau de bord en condition réelle",
      demo_desc: "Sur demande, je peux vous donner un accès interactif à l'un de ces dashboards démo, ainsi qu'à la source de données (Google Sheets) qui l'alimente. Vous voyez le fonctionnement global : vous modifiez une cellule, le dashboard se met à jour. Vous voyez à quel point la mise à jour est simple.",
      demo_cta: "Demander une démo interactive",

      // Comparaison
      pourquoi_eyebrow: "Comparaison",
      pourquoi_title: "Pourquoi pas un outil standard ?",
      pourquoi_intro: "Power BI, Monday, Jira - ces outils couvrent les cas généraux. Dès que vous voulez un vrai outil de pilotage adapté à votre métier, ils montrent leurs limites.",
      pbi_section: "Power BI / Tableau",
      card1_title: "Customisation visuelle bridée",
      card1_desc: "Feux signaux conditionnels impossibles nativement, layout rigide, TV mode non pensé pour l'atelier. Pour chacun de ces cas, il faut bidouiller avec des visuels externes ou du DAX (le langage de formules de Power BI).",
      card1_tag: "Sur-mesure : c'est du code, donc tout est possible dès la première version.",
      card2_title: "Multi-langue natif difficile",
      card2_desc: "Power BI gère le multi-langue via des configurations complexes : rôles, traductions de modèles, jeux de données séparés. Vite un cauchemar à maintenir pour une équipe internationale.",
      card2_tag: "Sur-mesure : bascule FR / EN / DE en 1 clic, traductions centralisées dans un fichier simple.",
      card3_title: "Simplicité trompeuse dès les besoins réels",
      card3_desc: "Indicateurs métier spécifiques, vues détaillées sur mesure, connexion à vos autres logiciels : dès qu'on dépasse le graphique de base, ces outils demandent des compétences techniques pointues. Faciles pour l'essentiel, pas pour un vrai outil de pilotage.",
      card3_tag: "Sur-mesure : les besoins métier sont codés une fois pour toutes, sans bricolage.",
      monday_section: "Monday / Jira",
      monday1_title: "KPIs métier vrais",
      monday1_intro: "Les outils de gestion de projet comme Monday ou Jira sont excellents pour gérer les tâches. Leurs vues de reporting, en revanche, ne gèrent pas les formules complexes.",
      monday1_item1_html: "<strong>Indicateurs standard manquants :</strong> MTBF, OEE, SPI, EAC n'existent pas dans leurs vues natives.",
      monday1_item2_html: "<strong>Calculs métier impossibles :</strong> les widgets ne savent pas appliquer vos règles spécifiques.",
      monday1_item3_html: "<strong>Sur-mesure :</strong> chaque indicateur est construit sur votre logique exacte, pas sur ce que l'outil permet.",
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
      pull_quote: "Ces outils sont conçus pour des millions d'usages différents. Un tableau de bord sur mesure est conçu pour un seul : le vôtre.",

      // Tarifs
      tarifs_eyebrow: "Tarifs",
      tarifs_title: "Tarifs clairs, forfaitaires, sans surprise.",
      pricing_setup_label: "Mise en place",
      featured_badge: "Recommandé",
      price_diag_title: "Diagnostic Data",
      price_diag_desc: "Cartographie de vos données, identification des KPIs critiques, recommandations. Déduit du projet si vous lancez le build.",
      price_build_title: "Build « Pilotage »",
      price_build_desc: "Audit + 1 dashboard sur mesure + déploiement + formation.",
      price_build_opts_html: "Avec Assistant IA : <strong>2&nbsp;400&nbsp;€</strong> · Option on-premise : <strong>+350&nbsp;€</strong> · Dashboard supplémentaire : <strong>+1&nbsp;100&nbsp;€</strong>",
      abo_title: "Abonnement mensuel (par dashboard)",
      abo_cloud_html: "<strong>Cloud · Pilotage : 120&nbsp;€/mois</strong><span>Hébergement géré, maintenance, évolutions.</span>",
      abo_cloud_ia_html: "<strong>Cloud · Pilotage + IA : 180&nbsp;€/mois</strong><span>+ assistant IA et alertes intelligentes. Recommandé.</span>",
      abo_onprem_html: "<strong>On-premise · Pilotage : 100&nbsp;€/mois</strong><span>Sur votre serveur, maintenance et évolutions.</span>",
      abo_onprem_ia_html: "<strong>On-premise · Pilotage + IA : 160&nbsp;€/mois</strong><span>+ assistant IA (LLM cloud, agrégats seulement).</span>",
      tarifs_notice_html: "Assistant IA 100&nbsp;% local (LLM hébergé chez vous) : sur demande, sur devis. · Intervention hors forfait : 80&nbsp;€/h. · Périmètre spécifique (sources multiples, connecteur métier) : sur devis, 400&nbsp;€/j.",
      tarifs_tax: "Tarifs en euros. TVA non applicable (régime de la franchise en base).",
      onprem_note: "« Cloud » : hébergé et géré par mes soins, rien à installer chez vous. « On-premise » : installé sur vos propres serveurs, vos données ne quittent jamais votre entreprise.",

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

      // Modales légales :Mentions
      modal_mentions_title: "Mentions légales",
      modal_mentions_h1: "Éditeur du site",
      modal_mentions_editor_html: "Antonio Laisé<br />Conseil indépendant en structuration de données et dashboards sur mesure<br />Hanovre, Allemagne<br />Contact : <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      modal_mentions_placeholder: "Statut juridique en cours de constitution. La forme juridique, le numéro d'immatriculation (SIRET ou Steuernummer) et l'adresse professionnelle seront ajoutés dès la finalisation de la structure.",
      modal_mentions_h2: "Directeur de publication",
      modal_mentions_director: "Antonio Laisé",
      modal_mentions_h3: "Hébergeur",
      modal_mentions_host_html: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      modal_mentions_h4: "Propriété intellectuelle",
      modal_mentions_ip: "L'ensemble du contenu de ce site (textes, images, captures d'écran, code) est la propriété d'Antonio Laisé, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.",
      modal_mentions_h5: "Crédits",
      modal_mentions_credits_html: "Site développé par Antonio Laisé en HTML, CSS et JavaScript.<br />Polices : Inter et JetBrains Mono (Google Fonts).",

      // Modales légales :Privacy
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
      meta_title: "Antonio Laisé · Data & performance consulting for SMBs",
      meta_description: "Independent consulting to turn scattered data into a clear view of your business. Diagnosis, structuring and custom dashboards connected to your files. By Antonio Laisé, data & reliability engineer, Hanover.",

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
      hero_eyebrow: "Independent consulting · data & performance",
      hero_title: "Your data structured. Your business clarified.",
      hero_lead: "I help small and medium businesses turn scattered data into a clear view of their activity. It all starts from your business and your challenges; the custom dashboard is the outcome.",
      hero_cta_primary: "Let's talk 30 minutes",
      hero_cta_secondary: "See examples",

      // Constat
      constat_eyebrow: "The reality",
      constat_title: "Lots of data. Little visibility.",
      constat_body: "Many small and medium businesses run on instinct, or with poorly fitted tools. Data exists. It's often scattered across spreadsheets, ERP systems, various software and manual exports. Power BI and Tableau are designed for large enterprises with their dedicated data teams. The result: no real visibility on the business as a whole, and decisions made without numbers to back them up.",

      // Solution
      solution_eyebrow: "What you get",
      solution_title: "A monitoring instrument tailored to your business.",
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
      instruments_callout: "These dashboards are not reports to produce at month-end. They are monitoring instruments that read your files continuously and signal deviations as soon as they appear, with your own indicators and colors.",
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
      feature6_desc: "Indicators, visualizations, alerts, colors defined with you during the audit. No generic visuals that mean nothing to you. Fully adaptable to your visual identity. A tool that fits you: exactly what you need, nothing superfluous.",
      feature7_title: "Visual thresholds configurable independently",
      feature7_desc: "Green, orange, red (or others!) based on your business rules. Thresholds and targets are defined in your file, adjustable at any time without technical intervention. Customization has no limits.",
      feature8_title: "Automatic email alerts and reports",
      feature8_desc: "As soon as an indicator crosses a critical threshold, you get an email. And every week, a summary arrives in your inbox automatically. The dashboard alerts you, even when no one is watching it.",
      feature9_title: "History and trends",
      feature9_desc: "The dashboard records your indicators every day and shows their evolution over 30, 60 or 90 days. Your past data can also be imported: no need to start from scratch, you see real trends and the impact of actions already taken.",
      feature_ai_badge: "New",
      feature_ai_title: "Built-in AI assistant",
      feature_ai_desc: "Ask your dashboard a question in plain language ('which equipment needs attention first?') and get a clear answer drawn only from your own data. The assistant also explains the deviations it detects. Your data stays with you: only aggregated indicators are analyzed, never your raw rows.",

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
      exemples_banner_html: "These 3 dashboards are concrete examples of what I can build. Each one is fully adaptable: KPIs, visualizations, tabs, data sources, languages, visual identity. <strong>Your final dashboard will be different, tailored to your business needs and your visual identity.</strong><br /><br /><em>Screenshots below: full-screen TV views. The other tabs of each dashboard are available on request.</em>",
      example1_title: "Project Tracking Dashboard",
      example1_desc: "Project monitoring: progress, budget and schedule variances, milestones, team workload, risks.",
      example2_title: "Maintenance & Reliability Dashboard",
      example2_desc: "MTBF, MTTR, availability, rule-based alerts, recommendations.",
      example3_title: "Production Dashboard",
      example3_desc: "Quality tracking, customer and supplier claims, safety, compliance, shipments.",
      example_note: "Example. Adaptable to your business KPIs.",
      demo_title: "See a dashboard in real conditions",
      demo_desc: "On request, I can give you interactive access to one of these demo dashboards, as well as to the data source (Google Sheets) that feeds it. You see the full workflow: you edit a cell, the dashboard updates. You see for yourself how simple the update is.",
      demo_cta: "Request an interactive demo",

      // Comparison
      pourquoi_eyebrow: "Comparison",
      pourquoi_title: "Why not a standard tool?",
      pourquoi_intro: "Power BI, Monday, Jira - these tools cover general cases well. As soon as you need a real business monitoring tool, tailored to your KPIs, they show their limits.",
      pbi_section: "Power BI / Tableau",
      card1_title: "Limited visual customization",
      card1_desc: "Conditional traffic-light indicators impossible natively, rigid layout, TV mode not designed for workshop screens. For each of these cases, you have to work around the limits using external visuals or DAX (Power BI's formula language).",
      card1_tag: "Custom-built: it's code, so anything is possible from the first version.",
      card2_title: "Native multi-language is hard",
      card2_desc: "Power BI handles multi-language through complex setups: roles, model translations, separate datasets. Quickly a maintenance nightmare for an international team.",
      card2_tag: "Custom-built: FR / EN / DE switch in one click, translations centralized in a simple file.",
      card3_title: "Misleading simplicity for real needs",
      card3_desc: "Specific business indicators, custom detailed views, connection to your other software: as soon as you go beyond the basic chart, these tools require advanced technical skills. Easy for the basics, not for a real monitoring tool.",
      card3_tag: "Custom-built: business needs are coded once for all, no hacking.",
      monday_section: "Monday / Jira",
      monday1_title: "Real business KPIs",
      monday1_intro: "Project management tools like Monday or Jira are great at managing tasks. Their reporting views, however, can't handle complex formulas.",
      monday1_item1_html: "<strong>Missing standard indicators:</strong> MTBF, OEE, SPI, EAC don't exist in their native views.",
      monday1_item2_html: "<strong>Business calculations impossible:</strong> widgets cannot apply your specific rules.",
      monday1_item3_html: "<strong>Custom-built:</strong> every indicator is built on your exact logic, not what the tool allows.",
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
      tarifs_title: "Clear, fixed pricing, no surprises.",
      pricing_setup_label: "Setup",
      featured_badge: "Recommended",
      price_diag_title: "Data Diagnosis",
      price_diag_desc: "Mapping of your data, identification of critical KPIs, recommendations. Deducted from the project if you proceed with the build.",
      price_build_title: "Build « Pilotage »",
      price_build_desc: "Audit + 1 custom dashboard + deployment + training.",
      price_build_opts_html: "With AI assistant: <strong>€2,400</strong> · On-premise option: <strong>+€350</strong> · Additional dashboard: <strong>+€1,100</strong>",
      abo_title: "Monthly subscription (per dashboard)",
      abo_cloud_html: "<strong>Cloud · Pilotage : €120/month</strong><span>Managed hosting, maintenance, evolutions.</span>",
      abo_cloud_ia_html: "<strong>Cloud · Pilotage + AI : €180/month</strong><span>+ AI assistant and smart alerts. Recommended.</span>",
      abo_onprem_html: "<strong>On-premise · Pilotage : €100/month</strong><span>On your server, maintenance and evolutions.</span>",
      abo_onprem_ia_html: "<strong>On-premise · Pilotage + AI : €160/month</strong><span>+ AI assistant (cloud LLM, aggregates only).</span>",
      tarifs_notice_html: "Fully local AI assistant (LLM hosted on your premises): on request, by quote. · Off-package intervention: €80/hr. · Specific scope (multiple sources, custom connector): by quote, €400/day.",
      tarifs_tax: "Prices in euros. VAT not applicable (small-business scheme).",
      onprem_note: "« Cloud »: hosted and managed by me, nothing to install on your side. « On-premise »: installed on your own servers, your data never leaves your company.",

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

      // Modales légales :Mentions
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

      // Modales légales :Privacy
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
    },

    de: {
      // Meta
      meta_title: "Antonio Laisé · Datenberatung und Steuerung für KMU",
      meta_description: "Unabhängige Beratung, um verstreute Daten in eine klare Steuerung Ihrer Aktivität zu verwandeln. Diagnose, Strukturierung und maßgeschneiderte Dashboards, verbunden mit Ihren Dateien. Von Antonio Laisé, Ingenieur für Daten und Zuverlässigkeit, Hannover.",

      // Header
      nav_solution: "Lösung",
      nav_approche: "Vorgehen",
      nav_exemples: "Beispiele",
      nav_pourquoi: "Vergleich",
      nav_tarifs: "Preise",
      nav_apropos: "Über mich",
      header_cta: "30 Min. sprechen",
      header_cta_mini: "Kontakt",
      lang_alt: "FR",

      // Hero
      hero_eyebrow: "Unabhängige Beratung · Daten & Steuerung",
      hero_title: "Ihre Daten strukturiert. Ihre Steuerung klar.",
      hero_lead: "Ich begleite KMU dabei, verstreute Daten in eine klare Steuerung ihrer Aktivität zu verwandeln. Alles beginnt bei Ihrem Geschäft und Ihren Zielen; das maßgeschneiderte Dashboard ist das Ergebnis.",
      hero_cta_primary: "30 Minuten sprechen",
      hero_cta_secondary: "Beispiele ansehen",

      // Constat
      constat_eyebrow: "Die Ausgangslage",
      constat_title: "Viele Daten. Wenig Überblick.",
      constat_body: "Viele KMU steuern aus dem Bauch heraus oder mit schlecht passenden Werkzeugen. Die Daten sind vorhanden. Sie liegen nur verstreut in Tabellen, ERP-Systemen, diversen Programmen und manuellen Exporten. Power BI und Tableau sind für Großunternehmen mit eigenen Datenteams gedacht. Das Ergebnis: kein echter Überblick über die gesamte Aktivität und Entscheidungen ohne belastbare Zahlen.",

      // Solution
      solution_eyebrow: "Was Sie erhalten",
      solution_title: "Ein Steuerungsinstrument, zugeschnitten auf Ihr Geschäft.",
      solution_sub: "Keine Installation. Keine Software zum Erlernen. Ihre Daten bleiben, wo sie sind.",
      kpi_label_progress: "72 % erledigt, 80,6 % der Zeit verstrichen",
      kpi_value_days_late: "15 Tage Verzug",
      kpi_label_days: "ABWEICHUNG ZUM ENDE",
      sheet_file: "Projekt_Tracking.xlsx",
      sheet_r1: "Startdatum",
      sheet_r2: "Geplantes Ende",
      sheet_r3: "Geschätztes Ende",
      sheet_r4: "Aufgaben_Gesamt",
      sheet_r5: "Aufgaben_Erledigt",
      compare_arrow_label: "Automatisch berechnet",
      solution_legend_html: "Ihre Teams erfassen die Rohdaten in einem Werkzeug, das sie bereits kennen.<br />Das Dashboard erledigt den ganzen Rest, automatisch.",
      instruments_callout: "Diese Dashboards sind keine Berichte, die am Monatsende erstellt werden. Es sind Steuerungsinstrumente, die Ihre Dateien laufend lesen und Abweichungen melden, sobald sie auftreten, mit Ihren eigenen Kennzahlen und Ihren Farben.",
      solution_drilldown: "<strong>Mehr Tiefe nötig?</strong> Von der Übersicht aus können Sie in das Detail einer Kennzahl eintauchen (Diagramm, Verlauf, Vergleich), so weit Sie möchten.",

      feature1_title: "In Echtzeit mit Ihren bestehenden Quellen verbunden",
      feature1_desc: "Google Sheets, lokales Excel oder OneDrive/SharePoint, ERP, andere Software. Egal welche Quelle, Sie erfassen, das Dashboard aktualisiert sich. Ihre Daten bleiben in Ihren Dateien, nichts wird woanders kopiert.",
      feature2_title: "Automatisch berechnete Kennzahlen",
      feature2_desc: "Sie tragen nur die Rohdaten ein. Alle Berechnungen (Mittelwerte, Quoten, Aggregationen, Warnungen) erfolgen automatisch.",
      feature3_title: "Überall erreichbar, auf jedem Bildschirm",
      feature3_desc: "Einfacher geschützter Web-Link, keine Installation. Funktioniert auf Computer, Tablet, Smartphone, TV-Bildschirm in der Werkstatt.",
      feature4_title: "Mehrsprachig von Haus aus",
      feature4_desc: "Umschalten FR / EN / DE (oder eine andere Sprache auf Anfrage) per Klick. Ideal für international tätige KMU oder Teams in mehreren Ländern.",
      feature5_title: "TV-Vollbildmodus",
      feature5_desc: "Gedacht für die dauerhafte Anzeige im Großraumbüro, in der Werkstatt oder im Besprechungsraum. Dunkelmodus verfügbar, um die Augen zu schonen.",
      feature6_title: "Maßgeschneidert für Ihr Geschäft",
      feature6_desc: "Kennzahlen, Visualisierungen, Warnungen, Farben gemeinsam mit Ihnen im Audit definiert. Keine generischen Visualisierungen, die Ihnen nichts sagen. Vollständig an Ihr Corporate Design anpassbar. Ein Werkzeug in Ihrer Größe: genau das, was Sie brauchen, nichts Überflüssiges.",
      feature7_title: "Visuelle Schwellenwerte, selbst konfigurierbar",
      feature7_desc: "Grün, Orange, Rot (oder andere!) nach Ihren Geschäftsregeln. Schwellen und Ziele werden in Ihrer Datei festgelegt, jederzeit ohne technischen Eingriff änderbar. Die Personalisierung kennt keine Grenzen.",
      feature8_title: "Automatische E-Mail-Warnungen und -Berichte",
      feature8_desc: "Sobald eine Kennzahl einen kritischen Schwellenwert überschreitet, erhalten Sie eine E-Mail. Und jede Woche landet automatisch eine Zusammenfassung in Ihrem Postfach. Das Dashboard warnt Sie, auch wenn niemand hinschaut.",
      feature9_title: "Verlauf und Trends",
      feature9_desc: "Das Dashboard speichert Ihre Kennzahlen täglich und zeigt ihre Entwicklung über 30, 60 oder 90 Tage. Auch Ihre Vergangenheitsdaten können übernommen werden: kein Neuanfang nötig, Sie sehen die echten Trends und die Wirkung bereits umgesetzter Maßnahmen.",
      feature_ai_badge: "Neu",
      feature_ai_title: "Integrierter KI-Assistent",
      feature_ai_desc: "Stellen Sie Ihrem Dashboard eine Frage in natürlicher Sprache („welche Anlage zuerst behandeln?“) und erhalten Sie eine klare Antwort, ausschließlich aus Ihren Daten. Der Assistent erklärt auch die erkannten Abweichungen. Ihre Daten bleiben bei Ihnen: nur aggregierte Kennzahlen werden analysiert, niemals Ihre Rohdaten.",

      // Approche
      approche_eyebrow: "Mein Vorgehen",
      approche_title: "Ein Ablauf in vier Schritten.",
      step1_title: "Rahmen der Zusammenarbeit und Bestandsaufnahme der Daten",
      step1_desc: "Kartierung des Vorhandenen: Quellen, Formate, Datenqualität. Ermittlung Ihrer Bedürfnisse, Herausforderungen und Ziele, um die für Ihre Aktivität entscheidenden Kennzahlen festzulegen.",
      step2_title: "Strukturierung",
      step2_desc: "Definition eines sauberen Datenschemas. Organisation der Quellen und Zuständigkeiten.",
      step3_title: "Aufbau des Dashboards",
      step3_desc: "Maßgeschneiderte Entwicklung: Geschäftskennzahlen, passende Visualisierungen, Mehrsprachigkeit von Haus aus (FR/EN/DE) bei Bedarf.",
      step4_title: "Bereitstellung und Schulung",
      step4_desc: "Sichere Veröffentlichung. Schulung zur Nutzung und zur Aktualisierung der Daten.",

      // Exemples
      exemples_eyebrow: "Konkrete Beispiele",
      exemples_title: "Drei Demonstrations-Dashboards.",
      exemples_banner_html: "Diese 3 Dashboards sind konkrete Beispiele dessen, was ich erstellen kann. Jedes ist vollständig anpassbar: Kennzahlen, Visualisierungen, Reiter, Datenquellen, Sprachen, Corporate Design. <strong>Ihr finales Dashboard wird anders sein, zugeschnitten auf Ihre Geschäftsbedürfnisse und Ihre visuelle Identität.</strong><br /><br /><em>Screenshots unten: Ansichten im TV-Vollbildmodus. Die weiteren Reiter jedes Dashboards sind auf Anfrage verfügbar.</em>",
      example1_title: "Dashboard Projekt-Tracking",
      example1_desc: "Projektverfolgung: Fortschritt, Budget- und Terminabweichungen, Meilensteine, Teamauslastung, Risiken.",
      example2_title: "Dashboard Wartung & Zuverlässigkeit",
      example2_desc: "MTBF, MTTR, Verfügbarkeit, regelbasierte Warnungen, Empfehlungen.",
      example3_title: "Dashboard Produktion",
      example3_desc: "Qualitätsverfolgung, Kunden- und Lieferantenreklamationen, Sicherheit, Konformität, Versand.",
      example_note: "Beispiel. Anpassbar an Ihre Geschäftskennzahlen.",
      demo_title: "Ein Dashboard unter realen Bedingungen sehen",
      demo_desc: "Auf Anfrage gebe ich Ihnen interaktiven Zugang zu einem dieser Demo-Dashboards sowie zur Datenquelle (Google Sheets), die es speist. Sie sehen die gesamte Funktionsweise: Sie ändern eine Zelle, das Dashboard aktualisiert sich. Sie sehen, wie einfach die Aktualisierung ist.",
      demo_cta: "Interaktive Demo anfragen",

      // Comparaison
      pourquoi_eyebrow: "Vergleich",
      pourquoi_title: "Warum kein Standardwerkzeug?",
      pourquoi_intro: "Power BI, Monday, Jira - diese Werkzeuge decken die allgemeinen Fälle ab. Sobald Sie ein echtes, auf Ihr Geschäft zugeschnittenes Steuerungswerkzeug wollen, zeigen sie ihre Grenzen.",
      pbi_section: "Power BI / Tableau",
      card1_title: "Eingeschränkte visuelle Anpassung",
      card1_desc: "Bedingte Ampelanzeigen nativ unmöglich, starres Layout, TV-Modus nicht für die Werkstatt gedacht. Für jeden dieser Fälle muss man mit externen Visuals oder DAX (der Formelsprache von Power BI) basteln.",
      card1_tag: "Maßgeschneidert: es ist Code, also ist ab der ersten Version alles möglich.",
      card2_title: "Mehrsprachigkeit nativ schwierig",
      card2_desc: "Power BI handhabt Mehrsprachigkeit über komplexe Setups: Rollen, Modellübersetzungen, getrennte Datensätze. Für ein internationales Team schnell ein Wartungsalbtraum.",
      card2_tag: "Maßgeschneidert: Umschalten FR / EN / DE per Klick, Übersetzungen zentral in einer einfachen Datei.",
      card3_title: "Trügerische Einfachheit bei echten Anforderungen",
      card3_desc: "Spezifische Geschäftskennzahlen, individuelle Detailansichten, Anbindung an Ihre andere Software: sobald man über das Basisdiagramm hinausgeht, verlangen diese Werkzeuge fundierte technische Kenntnisse. Einfach für das Wesentliche, nicht für ein echtes Steuerungswerkzeug.",
      card3_tag: "Maßgeschneidert: die Geschäftsanforderungen werden ein für alle Mal programmiert, ohne Gebastel.",
      monday_section: "Monday / Jira",
      monday1_title: "Echte Geschäftskennzahlen",
      monday1_intro: "Projektmanagement-Tools wie Monday oder Jira sind hervorragend für die Aufgabenverwaltung. Ihre Reporting-Ansichten kommen jedoch mit komplexen Formeln nicht zurecht.",
      monday1_item1_html: "<strong>Fehlende Standardkennzahlen:</strong> MTBF, OEE, SPI, EAC gibt es in ihren nativen Ansichten nicht.",
      monday1_item2_html: "<strong>Geschäftsberechnungen unmöglich:</strong> die Widgets können Ihre spezifischen Regeln nicht anwenden.",
      monday1_item3_html: "<strong>Maßgeschneidert:</strong> jede Kennzahl wird auf Ihrer exakten Logik aufgebaut, nicht auf dem, was das Werkzeug erlaubt.",
      monday1_tag: "Ihre Kennzahlen, nicht die, die das Werkzeug Ihnen aufzwingt.",
      monday2_title: "Ihre Daten, Ihre Dateien",
      monday2_desc: "Diese Werkzeuge setzen voraus, dass alles bei ihnen erfasst wird: Datenmigration, Neukonfiguration, neue Gewohnheiten für das ganze Team.",
      monday2_item1_html: "<strong>Keine Migration:</strong> wir lesen Ihre vorhandenen Excel- und Google-Sheets-Dateien direkt.",
      monday2_item2_html: "<strong>Keine Neukonfiguration:</strong> Ihre Teams behalten ihre gewohnten Erfassungswerkzeuge.",
      monday2_item3_html: "<strong>Keine Abhängigkeit:</strong> Ihre Daten bleiben in Ihren Dateien, nicht auf einer Drittplattform.",
      monday2_tag: "Ihre Daten bleiben in Ihren Dateien, nicht bei einem Drittanbieter.",
      monday3_title: "Ergänzend, wenn Sie es bereits nutzen",
      monday3_item1: "Monday verwaltet Ihre Aufgaben, das Dashboard steuert Ihre Gesamtleistung.",
      monday3_item2: "Wir können uns über deren API direkt mit Ihren Monday- oder Jira-Daten verbinden.",
      monday3_item3: "Beide existieren reibungslos nebeneinander, jedes in seiner Rolle.",
      pull_quote: "Diese Werkzeuge sind für Millionen verschiedener Anwendungsfälle gebaut. Ein maßgeschneidertes Dashboard ist für einen einzigen gebaut: für Ihren.",

      // Tarifs
      tarifs_eyebrow: "Preise",
      tarifs_title: "Klare Preise, pauschal, ohne Überraschungen.",
      pricing_setup_label: "Einrichtung",
      featured_badge: "Empfohlen",
      price_diag_title: "Daten-Diagnose",
      price_diag_desc: "Kartierung Ihrer Daten, Ermittlung der kritischen Kennzahlen, Empfehlungen. Wird vom Projekt abgezogen, wenn Sie den Build beauftragen.",
      price_build_title: "Build « Pilotage »",
      price_build_desc: "Audit + 1 maßgeschneidertes Dashboard + Bereitstellung + Schulung.",
      price_build_opts_html: "Mit KI-Assistent: <strong>2.400&nbsp;€</strong> · Option On-Premise: <strong>+350&nbsp;€</strong> · Zusätzliches Dashboard: <strong>+1.100&nbsp;€</strong>",
      abo_title: "Monatliches Abonnement (pro Dashboard)",
      abo_cloud_html: "<strong>Cloud · Pilotage : 120&nbsp;€/Monat</strong><span>Verwaltetes Hosting, Wartung, Weiterentwicklungen.</span>",
      abo_cloud_ia_html: "<strong>Cloud · Pilotage + KI : 180&nbsp;€/Monat</strong><span>+ KI-Assistent und intelligente Warnungen. Empfohlen.</span>",
      abo_onprem_html: "<strong>On-Premise · Pilotage : 100&nbsp;€/Monat</strong><span>Auf Ihrem Server, Wartung und Weiterentwicklungen.</span>",
      abo_onprem_ia_html: "<strong>On-Premise · Pilotage + KI : 160&nbsp;€/Monat</strong><span>+ KI-Assistent (Cloud-LLM, nur Aggregate).</span>",
      tarifs_notice_html: "Vollständig lokaler KI-Assistent (LLM bei Ihnen gehostet): auf Anfrage, nach Angebot. · Einsatz außerhalb der Pauschale: 80&nbsp;€/Std. · Spezifischer Umfang (mehrere Quellen, individueller Konnektor): nach Angebot, 400&nbsp;€/Tag.",
      tarifs_tax: "Preise in Euro. Keine Umsatzsteuer (Kleinunternehmerregelung, §19 UStG).",
      onprem_note: "« Cloud »: von mir gehostet und verwaltet, nichts bei Ihnen zu installieren. « On-Premise »: auf Ihren eigenen Servern installiert, Ihre Daten verlassen niemals Ihr Unternehmen.",

      // À propos
      apropos_eyebrow: "Über mich",
      apropos_title: "Antonio Laisé, Ingenieur für Daten und Zuverlässigkeit.",
      apropos_p1: "Maschinenbauingenieur der UTC, Spezialisierung Daten und Zuverlässigkeit für die Industrie. Mit Sitz in Hannover, tätig in Frankreich und Deutschland.",
      apropos_p2: "Meine industriellen Erfahrungen: Nexans Hannover (Optimierung industrieller Prozesse, operative Dashboards) und EDF im kerntechnischen Bauwesen (Studie zur Vorhersagbarkeit von Leckagen in Betonstrukturen, Analyse eines neuen Baunormwerks).",
      apropos_pitch: "Was mich an der Arbeit antreibt: Daten ordnen, Prozesse vereinfachen, automatisieren, was sich automatisieren lässt, die Zeit für wiederkehrende Aufgaben reduzieren. Genau das suche ich in jedem Auftrag. Ich tausche mich auch gern mit den Teams aus und verstehe, wie sie täglich arbeiten: oft entstehen dort die besten Verbesserungsideen.",
      apropos_cv: "Meinen Lebenslauf online ansehen →",

      // Contact
      contact_eyebrow: "Kontakt",
      contact_title: "Lassen Sie uns 30 Minuten sprechen.",
      contact_body: "Beschreiben Sie Ihr Anliegen in wenigen Worten. Ich melde mich innerhalb von 24 Werkstunden, um einen Austausch zu vereinbaren.",
      contact_brochure: "Möchten Sie mehr Details zu meinem Angebot? Eine ausführliche Broschüre ist auf einfache Anfrage erhältlich.",
      label_firstname: "Vorname *",
      label_lastname: "Nachname *",
      label_company: "Unternehmen *",
      label_need: "Ihr Hauptanliegen *",
      need_structurer: "Meine Daten strukturieren",
      need_dashboard: "Ein Dashboard erstellen",
      need_indecis: "Ich weiß es noch nicht",
      label_contact: "E-Mail oder Telefon *",
      label_message_html: "Nachricht <span class=\"field-optional\">(optional)</span>",
      placeholder_message: "Beschreiben Sie kurz Ihren Kontext oder Ihr Anliegen.",
      submit_button: "Anfrage senden",
      contact_success: "Danke, Ihre Anfrage wurde gesendet. Ich melde mich innerhalb von 24 Werkstunden.",
      contact_error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt an antonio.laise.pro@gmail.com.",
      alt_cta_html: "Oder <a href=\"https://cal.eu/antoniolaise\" target=\"_blank\" rel=\"noopener\" class=\"link\">vereinbaren Sie direkt einen Termin →</a>",

      // Footer
      footer_location: "Hannover · Frankreich & Deutschland",
      footer_mentions: "Impressum",
      footer_privacy: "Datenschutz",
      footer_copyright: "© 2026 Antonio Laisé. Alle Rechte vorbehalten.",

      // Modales légales :Mentions
      modal_mentions_title: "Impressum",
      modal_mentions_h1: "Anbieter der Website",
      modal_mentions_editor_html: "Antonio Laisé<br />Unabhängige Beratung für Datenstrukturierung und maßgeschneiderte Dashboards<br />Hannover, Deutschland<br />Kontakt: <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>",
      modal_mentions_placeholder: "Rechtsform in Gründung. Rechtsform, Steuernummer (bzw. USt-IdNr.) und Geschäftsadresse werden nach Abschluss der Gründung ergänzt.",
      modal_mentions_h2: "Verantwortlich für den Inhalt",
      modal_mentions_director: "Antonio Laisé",
      modal_mentions_h3: "Hosting-Anbieter",
      modal_mentions_host_html: "Netlify, Inc.<br />512 2nd Street, Suite 200, San Francisco, CA 94107, USA<br /><a href=\"https://www.netlify.com\" target=\"_blank\" rel=\"noopener\" class=\"link\">www.netlify.com</a>",
      modal_mentions_h4: "Urheberrecht",
      modal_mentions_ip: "Alle Inhalte dieser Website (Texte, Bilder, Screenshots, Code) sind Eigentum von Antonio Laisé, sofern nicht anders angegeben. Jede Vervielfältigung ohne vorherige Genehmigung ist untersagt.",
      modal_mentions_h5: "Credits",
      modal_mentions_credits_html: "Website entwickelt von Antonio Laisé in HTML, CSS und JavaScript.<br />Schriften: Inter und JetBrains Mono (Google Fonts).",

      // Modales légales :Privacy
      modal_privacy_title: "Datenschutzerklärung",
      modal_privacy_intro: "Diese Erklärung beschreibt die auf dieser Website erhobenen personenbezogenen Daten, ihren Zweck, die Speicherdauer und Ihre Rechte gemäß der Datenschutz-Grundverordnung (DSGVO).",
      modal_privacy_h1: "Über das Kontaktformular erhobene Daten",
      modal_privacy_form_intro: "Wenn Sie das Kontaktformular ausfüllen, werden folgende Informationen erhoben:",
      modal_privacy_form_li1: "Vor- und Nachname",
      modal_privacy_form_li2: "Name Ihres Unternehmens",
      modal_privacy_form_li3: "E-Mail oder Telefonnummer",
      modal_privacy_form_li4: "Art Ihres Anliegens (Daten strukturieren, Dashboard erstellen, unentschlossen)",
      modal_privacy_form_li5: "Freie Nachricht (optional)",
      modal_privacy_purpose_html: "<strong>Zweck</strong>: Bearbeitung Ihrer Kontaktanfrage und Rückmeldung innerhalb von 24 Werkstunden.<br /><strong>Rechtsgrundlage</strong>: Ihre ausdrückliche Einwilligung (freiwilliges Absenden des Formulars).<br /><strong>Speicherdauer</strong>: 12 Monate ab Ihrem letzten Kontakt, außer bei einer aktiven Geschäftsbeziehung.",
      modal_privacy_h2: "Auftragsverarbeiter: Netlify Forms",
      modal_privacy_netlify: "Die Formularübermittlungen werden von Netlify, Inc. (USA) über deren Dienst Netlify Forms verarbeitet und gespeichert. Netlify ist nach dem EU-US Data Privacy Framework zertifiziert.",
      modal_privacy_h3: "Reichweitenmessung",
      modal_privacy_umami: "Derzeit ist kein Werkzeug zur Reichweitenmessung auf dieser Website aktiv. Sollte künftig ein datenschutzfreundliches Werkzeug (ohne Cookies und ohne personenbezogene Daten) hinzugefügt werden, wird diese Erklärung aktualisiert.",
      modal_privacy_h4: "Cookies",
      modal_privacy_cookies: "Diese Website verwendet keine Tracking- oder Werbe-Cookies. Eine vorherige Einwilligung ist daher nicht erforderlich.",
      modal_privacy_h5: "Ihre Rechte",
      modal_privacy_rights_html: "Gemäß der DSGVO haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Datenübertragbarkeit und Widerspruch bezüglich Ihrer Daten. Um diese Rechte auszuüben, kontaktieren Sie mich per E-Mail unter <a href=\"mailto:antonio.laise.pro@gmail.com\" class=\"link\">antonio.laise.pro@gmail.com</a>.",
      modal_privacy_cnil: "Sie können sich außerdem bei einer Aufsichtsbehörde beschweren (in Deutschland die zuständige Landesdatenschutzbehörde bzw. der BfDI, in Frankreich die CNIL), wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt werden.",
      modal_privacy_h6: "Aktualisierung",
      modal_privacy_update: "Diese Erklärung kann aktualisiert werden. Letzte Aktualisierung: Mai 2026.",
    }
  };

  const STORAGE_KEY = 'al-lang';
  const DEFAULT_LANG = 'fr';
  const LANG_ORDER = ['fr', 'en', 'de'];

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
