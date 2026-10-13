import type { Metadata } from "next";
import { siteConfig } from "./site";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author.name, url: siteConfig.url }],
  creator: siteConfig.author.name,
  keywords: [...siteConfig.keywords],
  icons: {
    icon: "/images/icon.svg",
    apple: "/images/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} — Suivi de match Tennis de Table`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const metadata = defaultMetadata;

export function constructMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const currentTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const currentDesc = description ?? siteConfig.description;
  const currentUrl = `${siteConfig.url}${path}`;
  const currentImage = image ?? siteConfig.ogImage;

  return {
    ...defaultMetadata,
    title: currentTitle,
    description: currentDesc,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: currentTitle,
      description: currentDesc,
      url: currentUrl,
      images: [
        {
          url: currentImage,
          width: 512,
          height: 512,
          alt: currentTitle,
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: currentTitle,
      description: currentDesc,
      images: [currentImage],
    },
  };
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "fr-FR",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteConfig.url}/#app`,
      name: siteConfig.name,
      applicationCategory: "SportsApplication",
      operatingSystem: "Android, iOS",
      url: siteConfig.url,
      image: siteConfig.ogImage,
      description: siteConfig.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      author: {
        "@type": "Person",
        name: siteConfig.author.name,
        url: siteConfig.url,
      },
      downloadUrl: siteConfig.links.playStore,
    },
  ],
} as const;
