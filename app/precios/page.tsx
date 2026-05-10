import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "precios", "es");

export default function PreciosPage() {
  return <NetworkPage niche="inmobiliaria" type="precios" locale="es" />;
}
