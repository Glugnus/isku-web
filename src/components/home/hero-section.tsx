import MobileMockup from "@/components/home/mobile-mockup";
import { Check, Download, Swords } from "lucide-react";
import Link from "next/link";

const LIST_REASSURANCE = [
  "Gratuit",
  "Arbitrage direct au bord de table",
  "Génération de statistiques",
  "Export de stories",
] as const;

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28"
      id="preview"
    >
      {/* Halos d'ambiance en arrière-plan */}
      <div className="absolute -top-40 left-1/2 size-130 -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute top-60 -right-20 size-112.5 rounded-full bg-secondary/15 blur-[150px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col gap-y-6 items-center lg:items-start">
            <div className="flex gap-2.5 items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Swords className="size-3 c"/>
              <span className="font-oswald uppercase tracking-wider">
                100% Tennis de Table • Bientôt tous les sports de raquette
              </span>
            </div>

            {/* Titre H1 percutant */}
            <h1 className="font-oswald text-5xl font-bold uppercase tracking-wider sm:text-6xl md:text-7xl">
              Suivez vos scores.
              <span className="bg-linear-to-r from-primary via-neutral to-secondary bg-clip-text text-transparent inline-block">
                Révélez vos statistiques.
              </span>
            </h1>

            {/* Description contextualisée à Isku */}
            <p className="max-w-xl text-base text-neutral sm:text-lg leading-relaxed">
              Pensée par un joueur pour les passionnés de tennis de table,{" "}
              <strong>Isku</strong> est l&apos;application mobile gratuite qui
              simplifie le suivi de vos matchs en direct point par point,
              conserve votre historique, génère des statistiques pour partager
              vos résultats et vous aider à progresser.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-3.5 font-oswald text-sm font-bold uppercase tracking-wider text-black shadow-lg shadow-primary/25 transition-all hover:brightness-110 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="size-6" />
                Télécharger l&apos;application
              </Link>

              <Link
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-oswald text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white/10 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Explorer les fonctionnalités
              </Link>
            </div>

            {/* Points de réassurance */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-muted">
              {LIST_REASSURANCE.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 font-medium"
                >
                  <Check className="size-4 text-primary" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <MobileMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
