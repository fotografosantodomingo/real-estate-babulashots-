import type { Metadata } from "next";
import { NetworkPage } from "@/components/NetworkPage";
import { canonicalUrl } from "@/lib/seo";

const enPath = "/en/locations/";
const esPath = "/ubicaciones/";
const title = "Real Estate Locations | Babula Shots";
const description = "Cities and zones we cover for real estate photography in the Dominican Republic: Santo Domingo, Punta Cana, Santiago, Casa de Campo and 18+ more.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: canonicalUrl(enPath),
    languages: {
      "es-DO": canonicalUrl(esPath),
      en: canonicalUrl(enPath),
      "x-default": canonicalUrl(esPath)
    }
  },
  openGraph: {
    title,
    description,
    url: canonicalUrl(enPath),
    type: "website",
    locale: "en_US",
    siteName: "Babula Shots"
  },
  twitter: { card: "summary_large_image", title, description }
};

export default function Page() {
  return <NetworkPage niche="inmobiliaria" type="ubicaciones" locale="en" />;
}
