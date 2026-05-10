import { NetworkPage, getNetworkPageMetadata } from "@/components/NetworkPage";

export const metadata = getNetworkPageMetadata("inmobiliaria", "faq", "en");

export default function Page() {
  return <NetworkPage niche="inmobiliaria" type="faq" locale="en" />;
}
