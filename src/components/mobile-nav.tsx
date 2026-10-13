"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export interface NavItem {
  title: string;
  href: string;
  external?: boolean;
}

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Fermer le menu avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Bouton Hamburger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isOpen}
        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral transition-colors hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {isOpen ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Menu déroulant Mobile & Backdrop */}
      {isOpen && (
        <>
          {/* Overlay d'arrière-plan pour fermer au clic extérieur */}
          <div
            className="fixed inset-0 top-16.25 z-40 bg-black/50 backdrop-blur-xs"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Panneau de liens déroulant */}
          <div className="absolute top-full left-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur-xl px-6 py-5 shadow-2xl">
            <nav aria-label="Navigation mobile" className="flex flex-col gap-4">
              {items.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-neutral transition-colors hover:text-primary py-1"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
