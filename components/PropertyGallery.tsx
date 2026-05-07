import Image from "next/image";
import { assetPath, portfolioUrl } from "@/lib/seo";

const galleryItems = [
  {
    label: "Interior",
    src: "/images/legacy-real-estate/thumbs/santo-domingo-property-interior-thumb.webp",
    width: 760,
    height: 448,
    alt: "Fotografia inmobiliaria de interior en Santo Domingo"
  },
  {
    label: "Villa",
    src: "/images/legacy-real-estate/thumbs/real-estate-photography-rd-thumb.webp",
    width: 760,
    height: 472,
    alt: "Fotografia profesional inmobiliaria en Republica Dominicana"
  },
  {
    label: "Drone",
    src: "/images/legacy-real-estate/thumbs/drone-real-estate-rd-thumb.webp",
    width: 760,
    height: 507,
    alt: "Foto drone inmobiliaria para propiedad en Republica Dominicana"
  },
  {
    label: "Airbnb",
    src: "/images/legacy-real-estate/thumbs/pictime-property-gallery-cover-thumb.webp",
    width: 760,
    height: 448,
    alt: "Galeria Babula Shots con propiedades y contenido Airbnb"
  }
];

export function PropertyGallery({ locale = "es" }: { locale?: "es" | "en" }) {
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
              <Image src={assetPath(item.src)} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
