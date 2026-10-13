import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const isExternal = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://");

  return (
    <footer className="w-full border-t border-white/10 bg-background py-12 text-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Marque & Positionnement */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              aria-label={`Accueil ${siteConfig.name}`}
              className="group inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src="/images/Logo-Isku-Texte.svg"
                alt={`Logo ${siteConfig.name}`}
                width={110}
                height={36}
                className="h-7 w-auto transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="max-w-sm text-sm text-neutral/80 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Tennis de table & Sports de raquette • 100% Gratuit</span>
            </div>
          </div>

          {/* Navigation principale */}
          <nav aria-label="Navigation secondaire" className="space-y-3">
            <h3 className="font-oswald text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerNav.navigation.map((item) => {
                const external = isExternal(item.href);

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    >
                      <span>{item.title}</span>
                      {external && (
                        <span className="text-[10px] text-muted opacity-70">↗</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Légal & Support */}
          <nav aria-label="Informations légales et contact" className="space-y-3">
            <h3 className="font-oswald text-xs font-bold uppercase tracking-wider text-white">
              Légal & Contact
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerNav.legal.map((item) => {
                const external = isExternal(item.href);
                const isMailto = item.href.startsWith("mailto:");

                return (
                  <li key={item.title}>
                    {isMailto ? (
                      <a
                        href={item.href}
                        className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                      >
                        <span>{item.title}</span>
                        {external && (
                          <span className="text-[10px] text-muted opacity-70">↗</span>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Ligne inférieure : Copyright & Signature */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>© {currentYear} {siteConfig.name}. Tous droits réservés.</p>
          <p className="font-oswald uppercase tracking-wider text-[11px] text-muted">
            Designed for Champions
          </p>
        </div>
      </div>
    </footer>
  );
}
