import type { Metadata } from "next";
import { RealEstateHome } from "@/components/RealEstateHome";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fotografia Inmobiliaria Profesional RD | Babula Shots",
  description: "Foto, video, drone y contenido inmobiliario para agentes, desarrolladores, Airbnb, villas y propiedades en Republica Dominicana. Cotiza por WhatsApp.",
  alternates: {
    canonical: canonicalUrl("/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      es: canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  },
  openGraph: {
    url: canonicalUrl("/"),
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

export default function HomePage() {
  return <RealEstateHome />;
}
