import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import MobileNav, { NavItem } from "@/components/mobile-nav";

const navLinks: NavItem[] = [
  { title: "L'Application", href: "/#preview", external: false },
  { title: "Fonctionnalités", href: "/#features", external: false },
  { title: "Me soutenir", href: siteConfig.links.support, external: true },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Logo Officiel Isku */}
        <Link
          href="/"
          aria-label="Accueil Isku"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <Image
            src="/images/Logo-Isku-Texte.svg"
            alt="Logo Isku"
            width={120}
            height={40}
            className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Navigation Desktop (centrée et équilibrée) */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-neutral"
        >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/#download"
            className="rounded-full bg-primary px-4 py-2 sm:px-5 sm:py-2.5 font-oswald text-xs sm:text-sm font-bold uppercase tracking-wider text-black shadow-md shadow-primary/20 transition-all hover:bg-[#ffe142] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Obtenir l&apos;App
          </Link>
          <MobileNav items={navLinks} />
        </div>
      </div>
    </header>
  );
}
