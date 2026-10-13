export const siteConfig = {
  name: "Isku",
  title:
    "Isku — L'application de suivi de match & stats pour le Tennis de Table",
  tagline:
    "Pensée par un joueur pour les joueurs de tennis de table. Et bientôt tous les sports de raquette.",
  description:
    "Isku est l'application mobile gratuite pour les passionnés de tennis de table : suivi de score en direct point par point, historique des matchs, analyse statistique et génération de Stories de vos résultats.",
  url: "https://isku-app.fr",
  ogImage: "https://isku-app.fr/images/icon.png",
  author: {
    name: "Isku (Solo Dev)",
    email: "contact@isku-app.fr",
  },
  links: {
    contact: "mailto:contact@isku-app.fr",
    support: "https://buymeacoffee.com/glugnus", // Lien de soutien / don pour le dev solo
    playStore: "https://play.google.com/store/apps/details?id=fr.isku.app",
    appStore: "https://apps.apple.com/app/isku/id000000000",
    privacy: "/privacy",
    terms: "/terms",
  },
  mainNav: [
    {
      title: "Fonctionnalités",
      href: "/#features",
    },
    {
      title: "L'Application",
      href: "/#preview",
    },
    {
      title: "Soutenir",
      href: "https://buymeacoffee.com/glugnus",
    },
  ],
  footerNav: {
    navigation: [
      { title: "Accueil", href: "/" },
      { title: "Fonctionnalités", href: "/#features" },
      { title: "Téléchargement", href: "/#download" },
      { title: "Soutenir le projet", href: "https://buymeacoffee.com/glugnus" },
    ],
    legal: [
      { title: "Règles de confidentialité", href: "/privacy" },
      { title: "Conditions d'utilisation", href: "/terms" },
      { title: "Contact", href: "mailto:contact@isku-app.fr" },
    ],
  },
  keywords: [
    "Isku",
    "tennis de table",
    "ping-pong",
    "pongiste",
    "arbitrage tennis de table",
    "tracker score",
    "feuille de match",
    "statistiques ping",
    "score en direct",
    "sports de raquette",
    "badminton",
    "padel",
    "tennis",
    "squash",
    "application sport",
    "Android",
    "iOS",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
