import QrCard from "@/components/home/qr-card";
import { siteConfig } from "@/config/site";
import { QrCode } from "lucide-react";
import Link from "next/link";

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Halo d'ambiance central */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-87.5 w-150 rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center space-y-8">
        {/* En-tête de section */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-primary">
          <QrCode className="size-4" />
          <span className="font-oswald uppercase tracking-wider">
            Scannez &amp; Installez
          </span>
        </div>

        <h2 className="font-oswald text-4xl font-bold uppercase tracking-wider sm:text-5xl text-white">
          Téléchargez Isku sur votre smartphone
        </h2>

        <p className="text-base text-neutral max-w-xl mx-auto leading-relaxed">
          Disponible gratuitement sur iOS et Android. Flashez le code depuis
          votre écran ou accédez directement au store de votre appareil.
        </p>

        {/* Grille des QR Codes Android & iOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto pt-4">
          <QrCard platform="android" />
          <QrCard platform="ios" />
        </div>

        {/* Contact direct & support */}
        <p className="text-xs text-muted pt-4">
          Besoin d&apos;assistance ou une question ? Écrivez-nous directement à{" "}
          <Link
            href={siteConfig.links.contact}
            className="text-primary underline hover:brightness-110 transition-colors"
          >
            {siteConfig.author.email}
          </Link>
        </p>
      </div>
    </section>
  );
}
