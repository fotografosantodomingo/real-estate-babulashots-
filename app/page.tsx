import type { Metadata } from "next";
import { RealEstateHome } from "@/components/RealEstateHome";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Fotografia inmobiliaria en Republica Dominicana | Babula Shots",
  description: "Foto, video, drone y contenido inmobiliario para agentes, desarrolladores, Airbnb, villas y propiedades en Republica Dominicana.",
  alternates: {
    canonical: canonicalUrl("/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  }
};

export default function HomePage() {
  return <RealEstateHome />;
}
