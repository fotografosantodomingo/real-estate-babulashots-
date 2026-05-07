import Image from "next/image";
import { assetPath, portfolioUrl } from "@/lib/seo";

const galleryItems = [
  {
    label: "Interior",
    src: "/images/legacy-real-estate/thumbs/santo-domingo-property-interior-thumb.webp",
    width: 760,
    height: 448
  },
  {
    label: "Villa",
    src: "/images/legacy-real-estate/thumbs/real-estate-photography-rd-thumb.webp",
    width: 760,
    height: 472
  },
  {
    label: "Drone",
    src: "/images/legacy-real-estate/thumbs/drone-real-estate-rd-thumb.webp",
    width: 760,
    height: 507
  },
  {
    label: "Airbnb",
    src: "/images/legacy-real-estate/thumbs/pictime-property-gallery-cover-thumb.webp",
    width: 760,
    height: 448
  }
];

function localizedAlt(label: string, city?: string, areas: string[] = [], locale: "es" | "en" = "es") {
  const place = city ? `${city}${areas[0] ? `, ${areas[0]}` : ""}` : "Republica Dominicana";
  const altMap: Record<string, { es: string; en: string }> = {
    Interior: {
      es: `Fotografia inmobiliaria de interiores en ${place} - Babula Shots`,
      en: `Real estate interior photography in ${place} - Babula Shots`
    },
    Villa: {
      es: `Fotografia de villas de lujo en ${place} - Babula Shots`,
      en: `Luxury villa photography in ${place} - Babula Shots`
    },
    Drone: {
      es: `Foto drone inmobiliaria en ${place} - Babula Shots`,
      en: `Real estate drone photography in ${place} - Babula Shots`
    },
    Airbnb: {
      es: `Fotografia para Airbnb y propiedades turisticas en ${place} - Babula Shots`,
      en: `Airbnb and vacation rental photography in ${place} - Babula Shots`
    }
  };
  return altMap[label]?.[locale] ?? (locale === "en" ? `Real estate media in ${place} - Babula Shots` : `Contenido inmobiliario en ${place} - Babula Shots`);
}

export function PropertyGallery({ locale = "es", city, areas = [] }: { locale?: "es" | "en"; city?: string; areas?: string[] }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-heading">
          <p className="section-tag">Portfolio</p>
          <h2>{locale === "en" ? "Property media examples" : "Ejemplos visuales para propiedades"}</h2>
          <a className="inline-link" href={portfolioUrl}>{locale === "en" ? "View full Pic-Time gallery" : "Ver galeria completa en Pic-Time"}</a>
        </div>
        <div className="property-gallery">
          {galleryItems.map((item) => (
            <figure key={item.label}>
              <Image src={assetPath(item.src)} alt={localizedAlt(item.label, city, areas, locale)} width={item.width} height={item.height} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
