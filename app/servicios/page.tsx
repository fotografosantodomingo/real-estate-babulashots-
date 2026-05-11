import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";
import { canonicalUrl } from "@/lib/seo";

const baseMetadata = getNetworkPageMetadata("inmobiliaria", "servicios", "es");

export const metadata = {
  ...baseMetadata,
  alternates: {
    canonical: canonicalUrl("/servicios/"),
    languages: {
      "es-DO": canonicalUrl("/servicios/"),
      es: canonicalUrl("/servicios/"),
      en: canonicalUrl("/en/services/"),
      "x-default": canonicalUrl("/servicios/")
    }
  }
};

export default function ServiciosPage() {
  return <NetworkPage niche="inmobiliaria" type="servicios" locale="es" />;
}
