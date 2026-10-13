import React from "react";

export interface FeatureCardProps {
  icon: string | React.ReactNode;
  title: string;
  description: string;
  variant?: "primary" | "secondary";
  badge?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = "primary",
  badge,
}: FeatureCardProps) {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`rounded-2xl border border-white/10 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 ${
        isPrimary ? "hover:border-primary/40" : "hover:border-secondary/40"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        {/* Conteneur d'icône stylisé */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl font-oswald font-bold ${
            isPrimary
              ? "bg-primary/10 text-primary"
              : "bg-secondary/15 text-secondary"
          }`}
          aria-hidden="true"
        >
          {icon}
        </div>

        {/* Badge optionnel */}
        {badge && (
          <span
            className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase font-oswald tracking-wider ${
              isPrimary
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary/15 text-secondary border border-secondary/30"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <h3 className="font-oswald text-xl font-bold uppercase tracking-wider text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-neutral/80 leading-relaxed">{description}</p>
    </div>
  );
}
