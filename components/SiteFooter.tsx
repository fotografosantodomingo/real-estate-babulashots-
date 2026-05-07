import Link from "next/link";
import { email, phoneDisplay } from "@/lib/seo";
import { cityPath, realEstateCities } from "@/lib/realEstateCities";

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
      <div className="footer-areas" aria-label="Areas que servimos">
        <p>Areas que servimos</p>
        <div>
          {realEstateCities.map((city) => (
            <Link href={cityPath(city)} key={city.slug}>{city.city}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
