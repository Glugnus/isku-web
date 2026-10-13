import FeatureCard, { FeatureCardProps } from "@/components/home/feature-card";

const features: FeatureCardProps[] = [
  {
    icon: "⚡",
    title: "Arbitrage direct au bord de table",
    description:
      "Comptez les points, coups gagnants et fautes directes en un tap. Suivez en direct le joueur au service, les balles restantes et les changements de côté.",
    variant: "primary",
    badge: "Temps réel",
  },
  {
    icon: "🏓",
    title: "Règles officielles FFTT",
    description:
      "Manches de 11 points, matchs en 1 à 4 manches gagnantes. Gestion automatique des 2 points d'écart et de l'alternance d'un service par joueur à 10-10.",
    variant: "secondary",
    badge: "Officiel",
  },
  {
    icon: "🪙",
    title: "Toss numérique intégré",
    description:
      "Fini la balle cachée sous la table ou la raquette tournée au sol : tirez au sort le premier service ou le côté directement depuis votre téléphone.",
    variant: "primary",
  },
  {
    icon: "⏱️",
    title: "Mode « Résultat Rapide »",
    description:
      "Vous n'avez pas arbitré pendant la partie ? Entrez les scores de vos manches en moins de 15 secondes après le match pour enregistrer vos statistiques.",
    variant: "secondary",
    badge: "15 secondes",
  },
  {
    icon: "📊",
    title: "Statistiques & Historique",
    description:
      "Consultez vos ratios victoires/défaites, vos plus longues séries de manches gagnées et l'historique complet de vos matchs contre chaque rival.",
    variant: "primary",
  },
  {
    icon: "📸",
    title: "Match-Day Stories",
    description:
      "Générez automatiquement des visuels de score stylisés et prêts pour Instagram Stories ou WhatsApp, en y associant la photo souvenir de votre rencontre.",
    variant: "secondary",
    badge: "Partage",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#07080E] border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-oswald text-xs font-bold uppercase tracking-widest text-primary">
            Fonctionnalités Exhaustives
          </h2>
          <p className="font-oswald text-3xl font-bold uppercase tracking-wider sm:text-4xl text-white">
            Chaque détail pensé pour les pongistes.
          </p>
          <p className="text-sm text-neutral/80 leading-relaxed">
            Du premier service au partage sur vos réseaux, Isku vous accompagne
            au bord de la table à chaque étape de votre progression.
          </p>
        </div>

        {/* Grille des 6 fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
