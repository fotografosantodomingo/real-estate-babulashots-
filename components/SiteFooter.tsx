import Link from "next/link";
import { email, phoneDisplay } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">Babula Shots Inmobiliaria</p>
        <p>Fotografia, video, drone y contenido para propiedades en Republica Dominicana.</p>
      </div>
      <div className="footer-links">
        <Link href="/foto-video-inmobiliario">Foto y video</Link>
        <Link href="/fotografia-drone-inmobiliaria">Drone</Link>
        <Link href="/fotografia-para-airbnb-villas">Airbnb y villas</Link>
        <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`}>{phoneDisplay}</a>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </footer>
  );
}
