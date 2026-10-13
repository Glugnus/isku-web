import QrCard from "@/components/home/qr-card";
import { siteConfig } from "@/config/site";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Halo d'ambiance central */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-87.5 w-150 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center space-y-8">
        {/* En-tête de section */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-neutral">
          <span className="font-oswald uppercase tracking-wider">
            📲 Scannez &amp; Installez
          </span>
        </div>

        <h2 className="font-oswald text-4xl font-bold uppercase tracking-wider sm:text-5xl text-white">
          Téléchargez Isku sur votre smartphone
        </h2>

        <p className="text-base text-neutral max-w-xl mx-auto leading-relaxed">
          Vous êtes sur ordinateur ? Utilisez l&apos;appareil photo de votre
          téléphone pour scanner le QR Code correspondant et lancer
          l&apos;installation gratuitement.
        </p>

        {/* Grille des QR Codes Android & iOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-4">
          <QrCard
            platform="android"
            platformBadge="Version Android"
            storeName="Google Play Store"
            scanLabel="Scannez pour Android"
            compatibility="Compatible smartphones & tablettes Android"
            storeUrl={siteConfig.links.playStore}
          />
          <QrCard
            platform="ios"
            platformBadge="Version iPhone"
            storeName="Apple App Store"
            scanLabel="Scannez pour iPhone (iOS)"
            compatibility="Compatible iOS 16 et versions ultérieures"
            storeUrl={siteConfig.links.appStore}
          />
        </div>

        {/* Contact direct & support */}
        <p className="text-xs text-muted pt-4">
          Besoin d&apos;assistance ou une question ? Écrivez-nous directement à{" "}
          <a
            href={siteConfig.links.contact}
            className="text-primary underline hover:text-[#ffe142] transition-colors"
          >
            {siteConfig.author.email}
          </a>
        </p>
      </div>
    </section>
  );
}
