import type { Metadata } from "next";
import { RealEstateHome } from "@/components/RealEstateHome";
import { canonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Real estate photography in Dominican Republic | Babula Shots",
  description: "Photo, video, drone and listing content for real estate agents, developers, Airbnb hosts, villas and properties in Dominican Republic.",
  alternates: {
    canonical: canonicalUrl("/en/"),
    languages: {
      "es-DO": canonicalUrl("/"),
      en: canonicalUrl("/en/"),
      "x-default": canonicalUrl("/")
    }
  }
};

export default function EnglishHomePage() {
  return <RealEstateHome locale="en" />;
}
