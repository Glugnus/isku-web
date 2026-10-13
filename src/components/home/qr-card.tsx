import React from "react";

export interface QrCardProps {
  platform: "android" | "ios";
  platformBadge: string;
  storeName: string;
  scanLabel: string;
  compatibility: string;
  storeUrl?: string;
}

export default function QrCard({
  platform,
  platformBadge,
  storeName,
  scanLabel,
  compatibility,
  storeUrl,
}: QrCardProps) {
  const isAndroid = platform === "android";
  const accentHex = isAndroid ? "#FFD600" : "#1769FF";

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
          className={`flex h-10 w-10 items-center justify-center rounded-xl font-oswald font-bold text-lg ${
            isAndroid
              ? "bg-primary text-black"
              : "bg-secondary text-white"
          }`}
          aria-hidden="true"
        >
          {isAndroid ? "GP" : "iOS"}
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
        <svg
          className="w-40 h-40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`QR Code de téléchargement pour ${storeName}`}
        >
          {/* Coin supérieur gauche */}
          <rect x="10" y="10" width="24" height="24" fill="#0A0B14" rx="4" />
          <rect x="14" y="14" width="16" height="16" fill="white" rx="2" />
          <rect x="18" y="18" width="8" height="8" fill={accentHex} rx="1" />

          {/* Coin supérieur droit */}
          <rect x="66" y="10" width="24" height="24" fill="#0A0B14" rx="4" />
          <rect x="70" y="14" width="16" height="16" fill="white" rx="2" />
          <rect x="74" y="18" width="8" height="8" fill={accentHex} rx="1" />

          {/* Coin inférieur gauche */}
          <rect x="10" y="66" width="24" height="24" fill="#0A0B14" rx="4" />
          <rect x="14" y="70" width="16" height="16" fill="white" rx="2" />
          <rect x="18" y="74" width="8" height="8" fill={accentHex} rx="1" />

          {/* Matrice de points représentative avec couleur d'accent */}
          <rect x="42" y="12" width="6" height="6" fill="#0A0B14" />
          <rect x="52" y="12" width="6" height="6" fill={accentHex} />
          <rect x="42" y="24" width="6" height="6" fill="#0A0B14" />
          <rect x="52" y="24" width="6" height="6" fill={accentHex} />
          <rect x="12" y="42" width="6" height="6" fill={accentHex} />
          <rect x="24" y="42" width="6" height="6" fill="#0A0B14" />
          <rect x="36" y="42" width="8" height="8" fill="#0A0B14" />
          <rect x="50" y="42" width="8" height="8" fill={accentHex} />
          <rect x="64" y="42" width="6" height="6" fill={accentHex} />
          <rect x="76" y="42" width="6" height="6" fill="#0A0B14" />
          <rect x="12" y="54" width="6" height="6" fill="#0A0B14" />
          <rect x="26" y="54" width="6" height="6" fill={accentHex} />
          <rect x="42" y="54" width="6" height="6" fill="#0A0B14" />
          <rect x="54" y="54" width="6" height="6" fill="#0A0B14" />
          <rect x="68" y="54" width="8" height="8" fill="#0A0B14" />
          <rect x="42" y="68" width="6" height="6" fill="#0A0B14" />
          <rect x="54" y="68" width="6" height="6" fill={accentHex} />
          <rect x="70" y="68" width="6" height="6" fill="#0A0B14" />
          <rect x="80" y="68" width="6" height="6" fill="#0A0B14" />
          <rect x="42" y="80" width="8" height="8" fill={accentHex} />
          <rect x="56" y="80" width="6" height="6" fill="#0A0B14" />
          <rect x="72" y="80" width="6" height="6" fill="#0A0B14" />
        </svg>
      </div>

      {/* Label de scan */}
      <p
        className={`font-oswald text-xs uppercase tracking-wider mt-3 font-bold ${
          isAndroid ? "text-primary" : "text-secondary"
        }`}
      >
        {scanLabel}
      </p>

      {/* Informations de compatibilité */}
      <p className="text-[11px] text-muted mt-1">{compatibility}</p>

      {/* Lien direct optionnel pour les utilisateurs mobiles */}
      {storeUrl && (
        <a
          href={storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-neutral underline hover:text-white transition-colors"
        >
          Lien direct store →
        </a>
      )}
    </div>
  );
}
