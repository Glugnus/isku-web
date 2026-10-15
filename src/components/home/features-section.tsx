import FeatureCard from "@/components/home/feature-card";
import {FEATURES} from "@/constants/features";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto mb-16 gap-y-3 flex flex-col">
          <h2 className="font-oswald text-xs font-bold uppercase tracking-widest text-primary">
            Fonctionnalités
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
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
