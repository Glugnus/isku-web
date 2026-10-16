import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

const QRCARD_DATA = {
  android: {
    platformBadge: "Google Play",
    storeName: "Google Play",
    scanLabel: "Scanner pour Android",
    storeUrl: siteConfig.links.playStore,
    qrCodeSrc: "",
    icon: "GP",
  },
  ios: {
    platformBadge: "App Store",
    storeName: "App Store",
    scanLabel: "Scanner pour iOS",
    storeUrl: siteConfig.links.appStore,
    qrCodeSrc: "",
    icon: "AP",
  },
};

export default function QrCard({ platform }: { platform: "android" | "ios" }) {
  const isAndroid = platform === "android";
  const { platformBadge, storeName, scanLabel, storeUrl, qrCodeSrc, icon } =
    QRCARD_DATA[platform];
  return (
    <div
      className={`rounded-3xl border bg-surface p-8 flex flex-col items-center text-center shadow-xl transition-all hover:-translate-y-1 ${
        isAndroid
          ? "border-primary/30 hover:border-primary"
          : "border-secondary/30 hover:border-secondary"
      }`}
    >
      {/* En-tête du Store */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`flex size-10 items-center justify-center rounded-xl font-oswald font-bold text-lg ${
            isAndroid ? "bg-primary text-black" : "bg-secondary text-white"
          }`}
        >
          {icon}
        </div>
        <div className="text-left">
          <span className="font-oswald text-[10px] uppercase font-bold text-muted block">
            {platformBadge}
          </span>
          <span className="font-oswald text-base font-bold uppercase text-white">
            {storeName}
          </span>
        </div>
      </div>

      {/* Visuel stylisé du QR Code */}
      <div className="bg-white p-3 rounded-2xl shadow-inner my-2">
        <Image
          src={qrCodeSrc}
          alt={scanLabel}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>

      {/* Label de scan */}
      <p
        className={`font-oswald text-xs uppercase tracking-wider mt-3 font-bold ${
          isAndroid ? "text-primary" : "text-secondary"
        }`}
      >
        {scanLabel}
      </p>

      {/* Lien direct optionnel pour les utilisateurs mobiles */}
      <Link
        href={storeUrl}
        target="_blank"
        className="mt-3 text-xs text-neutral underline hover:text-white transition-colors"
        rel="noopener noreferrer"
      >
        Lien direct store →
      </Link>
    </div>
  );
}
