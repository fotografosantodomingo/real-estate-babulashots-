import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "precios", "en");

export default function Page() {
  return <NetworkPage niche="inmobiliaria" type="precios" locale="en" />;
}
