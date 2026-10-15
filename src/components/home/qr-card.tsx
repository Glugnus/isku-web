import Link from "next/link";

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
       {/* QR CODE à insérer */}
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
        <Link
          href={storeUrl}
          target="_blank"
          className="mt-3 text-xs text-neutral underline hover:text-white transition-colors"
        >
          Lien direct store →
        </Link>
      )}
    </div>
  );
}
