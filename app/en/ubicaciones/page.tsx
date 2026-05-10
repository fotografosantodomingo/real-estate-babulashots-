import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "ubicaciones", "en");

export default function Page() {
  return <NetworkPage niche="inmobiliaria" type="ubicaciones" locale="en" />;
}
