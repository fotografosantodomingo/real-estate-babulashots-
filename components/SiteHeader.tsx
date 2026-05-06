import Link from "next/link";
import { ThemeLanguageControls } from "@/components/ThemeLanguageControls";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Babula Shots Inmobiliaria">
        Babula Shots <span>Inmobiliaria</span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/fotografia-inmobiliaria-republica-dominicana">Servicios</Link>
        <Link href="/fotografia-inmobiliaria-punta-cana">Punta Cana</Link>
        <Link href="/fotografia-inmobiliaria-santo-domingo">Santo Domingo</Link>
        <Link href="/precios-fotografia-inmobiliaria-republica-dominicana">Precios</Link>
      </nav>
      <ThemeLanguageControls />
    </header>
  );
}
