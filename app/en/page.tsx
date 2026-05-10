import type { Metadata } from "next";
import { RealEstateHome } from "@/components/RealEstateHome";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Real Estate Photography Dominican Republic | Babula Shots",
  description: "Photo, video, drone and listing content for real estate agents, developers, Airbnb hosts, villas and properties in Dominican Republic. Quote on WhatsApp.",
  alternates: {
    canonical: canonicalUrl("/en/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      es: canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  },
  openGraph: {
    url: canonicalUrl("/en/"),
    images: [
      {
        url: "/images/social-card-1200x630.webp",
        width: 1200,
        height: 630,
        alt: "Babula Shots Inmobiliaria"
      }
    ]
  }
};

export default function EnglishHomePage() {
  return <RealEstateHome locale="en" />;
}
