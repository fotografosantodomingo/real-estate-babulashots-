import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "ubicaciones", "es");

export default function UbicacionesPage() {
  return <NetworkPage niche="inmobiliaria" type="ubicaciones" locale="es" />;
}
