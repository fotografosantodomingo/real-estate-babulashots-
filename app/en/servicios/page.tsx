import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "servicios", "en");

export default function Page() {
  return <NetworkPage niche="inmobiliaria" type="servicios" locale="en" />;
}
