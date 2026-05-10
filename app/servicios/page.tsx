import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "servicios", "es");

export default function ServiciosPage() {
  return <NetworkPage niche="inmobiliaria" type="servicios" locale="es" />;
}
