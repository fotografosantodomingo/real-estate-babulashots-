import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "faq", "es");

export default function FaqPage() {
  return <NetworkPage niche="inmobiliaria" type="faq" locale="es" />;
}
