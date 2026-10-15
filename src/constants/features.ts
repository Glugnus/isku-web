import { BarChart3, Coins, Share2, ShieldCheck, Timer, Zap } from "lucide-react";
import { FeatureCardProps } from "@/components/home/feature-card";

export const FEATURES : FeatureCardProps[] = [
    {
    Icon: Coins,
    title: "Toss numérique intégré",
    description:
      "Fini la balle cachée sous la table ou la raquette tournée au sol : tirez au sort le premier service directement depuis votre téléphone.",
    variant: "primary",
    badge: "Coup d'envoi"
  },
  {
    Icon: Zap,
    title: "Arbitrage direct au bord de table",
    description:
      "Comptez les points, coups gagnants et fautes directes en un tap. Suivez en direct le joueur au service, les balles restantes et les changements de côté.",
    variant: "secondary",
    badge: "Temps réel",
  },
  {
    Icon: ShieldCheck,
    title: "Règles officielles FFTT",
    description:
      "Sets de 11 points, matchs en 2 à 4 sets gagnants. Gestion automatique des 2 points d'écart et de l'alternance d'un service par joueur à 10-10.",
    variant: "primary",
    badge: "Officiel",
  },
    {
    Icon: Timer,
    title: "Mode « Résultat Rapide »",
    description:
      "Vous n'avez pas arbitré pendant la partie ? Entrez les scores de vos sets en moins de 15 secondes après le match pour enregistrer vos statistiques.",
    variant: "secondary",
    badge: "Express",
  },
  {
    Icon: BarChart3,
    title: "Statistiques & Historique",
    description:
      "Consultez vos ratios victoires/défaites, votre pourcentage de points gagnés sur service ou sur retour et l'historique complet de vos matchs enregistrés.",
    variant: "primary",
    badge: "Progression"
  },
  {
    Icon: Share2,
    title: "Match-Day Stories",
    description:
      "Générez automatiquement des visuels pour annoncer ou partager le score de vos matchs sur les réseaux sociaux avec des visuels prêts à publier.",
    variant: "secondary",
    badge: "Partage",
  },
];