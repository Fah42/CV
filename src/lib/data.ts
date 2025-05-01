export const personalInfo = {
  name: "Farid Hadhri",
  location: "Pantin, France",
  email: "farid.hadhri@proton.me",
  github: "https://github.com/Fah42",
  linkedin: "https://www.linkedin.com/in/farid-hadhri/",
};

export const workExperience = [
  {
    company: "Accor Digital and Busniess Factory",
    location: "Paris 15",
    position: "Developpeur Salesforce",
    period: "Novembre 2023 - Avril 2025",
    achievements: [
      "• Développement et personnalisation du CRM Salesforce (ANAIS) pour centraliser les interactions clients.",
      "• Administration des rôles/profils, gestion des autorisations d’accès aux données sensibles.",
      "• Support technique et formation des utilisateurs sur les nouvelles fonctionnalités",
      "• Rédaction et exécution de tests unitaires pour garantir la qualité logicielle",
      "• Participation active aux rituels SCRUM (daily, sprint planning) avec les équipes produit.",
    ],
  },
  {
    company: "Ecole Normale Sociale",
    location: "Paris 18",
    position: "Technicien Informatique",
    period: "Mai 2022 - septembre 2023",
    achievements: [
      "• Gestion et maintenance d’un parc informatique (déploiement, support hardware/software, suivi des incidents).",
      "• Mise en place et administration d’un serveur Active Directory : création d’unités organisationnelles, gestion des comptes utilisateurs",
      "• Automatisation de tâches système sous Linux via cron (sauvegardes, nettoyages, automatiques).",
      "• Formateur / Initiation au développement JavaScript, Linux et C",
      "• Déploiement d’un firewall FortiGate / Pfsense multi-interface dans GNS3.",
      "• Création de segments réseau distincts (LAN / Admin ip statique) avec contrôle d’accès.",
    ],
  },
];

export const education = [
  {
    institution: "Ynov",
    location: "France (campus Paris ou Toulouse – à confirmer)",
    degree: "Mastère intégré – Expert en Cybersécurité",
    period: "Sep 2025 – Sep 2028 (pré-inscrit)",
    achievements: [
      "• Parcours labellisé **SecNumEdu** : conformité aux référentiels ANSSI.",
      "• Modules avancés Red / Blue Team : tests d’intrusion Active Directory, recherche de vulnérabilités web, reverse-engineering et réponse à incident.",
      "• CyberWarRoom Ynov : exercices grandeur nature de gestion de crise en partenariat avec Airbus & OPCO Atlas.",
      "• Gouvernance SSI : élaboration de PSSI, analyse de risque (EBIOS), conformité RGPD et ISO 27001.",
      "• Sécurité Cloud & DevSecOps : durcissement AWS/Azure, CI/CD sécurisée, IaC (Terraform) et pipeline SAST/DAST.",
      "• Préparation aux certifications professionnelles : CEH, OSCP, ou CBBH / CDSA selon spécialisation Pentest.",
      "• Travaux en équipe sur projets réels d’entreprise : audit, durcissement et plan de remédiation d’un SI complet.",
    ],
  },
  {
    institution: "École 42",
    location: "Paris 17ᵉ",
    degree: "Concepteur développeur de solutions informatiques (formation par projets, non diplômante)",
    period: "Nov 2023 – Aug 2025 (en cours)",
    achievements: [
      "• Conception d’un mini-shell POSIX et réimplémentation de fonctions système (« printf », « get_next_line »).",
      "• Développement d’un jeu 2D en C avec MiniLibX : lecture de carte, rendu graphique, détection de collisions.",
      "• Travail 100 % par projet, pair programming, revue de code par les pairs et respect strict de la norme 42.",
    ],
  },
  {
    institution: "OpenClassrooms",
    location: "En ligne",
    degree: "Titre RNCP niveau 5 (Bac + 2) – Gestionnaire en maintenance informatique",
    period: "Feb 2021 – Feb 2022",
    achievements: [
      "• Missions bénévoles pour plusieurs associations : gestion et maintenance d’un parc d’environ 30 postes (Windows & Linux).",
      "• Mise en place d’images système, suivi des incidents via GLPI, déploiement d’un antivirus centralisé.",
      "• Configuration de routeurs / switchs TP-Link, VLAN basiques, sauvegardes NAS.",
    ],
  },
];

export const skills = {
  programmingLanguages: [
    "JavaScript",
    "Python",
    "C",
    "Java",
    "Apex",
    "Bash"
  ],
  frontendDevelopment: [
    "VueJS",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: [
    "Nodejs",
    "Expressjs"
  ],
  databaseAndStorage: [
    "MySQL / MariaDB",
    "SoSql"
  ],
  cloudAndDevOps: [    
    "Proxmox VE",
    "Docker",
    "Kubernetes (basics)",
    "AWS Fundamentals",
  ],
  toolsAndServices: [
    "Git",
    "Salesforce CLI",
    "Nvim",
    "Linux (Debian / Arch)",
    "Volatility"
  ],
  pentestBlueTeam: [
    "Responder",
    "John the Ripper",
    "Evil-WinRM",
    "Burp Suite",
    "Metasploit",
  ],
  networkSecurity: [
    "pfSense",
    "FortiGate (NSE 4/5 en cours)",
    "Wireshark",
    "Nmap",
    "GNS3",
    "DNS",
    "DHCP",
    "VPN",
  ],
};

export const projects = [
  {
    title: "Raiden",
    github: "https://github.com/Fah42/Raiden_Java",
    description: [
      "Shoot ’em up 2D inspiré de « Raiden », entièrement réécrit en Java : pilotage d’un chasseur spatial, vagues d’ennemis et boss de fin de niveau.",
      "Moteur graphique maison basé sur Java2D : double-buffering, spritesheets, parallaxes, gestion des résolutions jusqu’en 1080p.",
      "Conception orientée objet (MVC) : entités polymorphes (Player, Enemy, Bullet, PowerUp), système de composants pour les capacités (move, shoot, explode).",
      "Détections de collisions par rectangles et cercles, explosions animées, sons WAV déclenchés via `Clip` (API javax.sound).",
      "Gestion du score et des high-scores sérialisés en JSON ; écran titre, pause, game-over et restart immédiat.",
      "Packaging : build Gradle, export JAR exécutable multiplateforme (Windows / Linux / macOS)",
    ],
  },
  {
    title: "Ft_solong",
    github: "https://github.com/rishikesh2003/mental-aarog",
    description: [
      "Premier jeu 2D ‘so_long’ réalisé dans le cadre du cursus 42 : lecture d’une carte, collecte d’items et sortie du niveau en un minimum de coups.",
      "Analyse et validation de la map (format *.ber*) : vérification de la rectangularité, unicité des points de départ/sortie, accessibilité de tous les collectibles via un algorithme flood-fill.",
      "Rendu graphique temps-réel avec MiniLibX : chargement de sprites PNG, double-buffering pour éviter le tearing, gestion fine des événements clavier (X11).",
      "Boucle de jeu optimisée C : déplacements du joueur, comptage de mouvements, détection de collisions, animation simple des ennemis/chats.",
      "Gestion robuste des erreurs et nettoyage mémoire (GNL, ft_printf, free_safe) afin de respecter les contraintes obligatoires de 42 (pas de leaks, norme stricte).",
      "Projet 100 % C, makefile complet, compilation sous macOS & Linux ; démontre la maîtrise des bases graphiques bas niveau, de l’algorithmie et de la rigueur exigée à 42.",
    ],
  },
];

/* export const awards = [
  {
    name: "IEEE YESIST12 Hackathon",
    issuer: "IEEE",
    date: "Sep 2022",
    type: "International",
    position: "Second Place",
  },
  {
    name: "Prodigi Cognizant Hackathon",
    issuer: "Cognizant",
    date: "Feb 2023",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Cisco Thingqbator Hackathon",
    issuer: "Cisco",
    date: "Jan 2023",
    type: "National",
    position: "First Runner-up",
  }
  {
    name: "Innovators Day",
    issuer: "Sri Manakula Vinayagar Engineering College, Pondicherry",
    date: "Sep 2022",
    type: "National",
    position: "First Prize",
  },
  {
    name: "KG Hackfest'22",
    issuer: "KGiSL Institute of Technology, Coimbatore",
    date: "Sep 2022",
    type: "National",
    position: "Second Prize",
  },
  {
    name: "Innohacks'22",
    issuer: "Innogeeks, KIET Group of Institutions, New Delhi",
    date: "May 2022",
    type: "National",
    position: "Second Runner-up",
  },
  {
    name: "Hack @ SKCET",
    issuer: "Hackclub SKCET, SKCET, Coimbatore",
    date: "Feb 2022",
    type: "National",
    position: "Most Impactful Hack",
  },
];*/
