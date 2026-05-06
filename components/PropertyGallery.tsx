import Image from "next/image";
import { assetPath, portfolioUrl } from "@/lib/seo";

const galleryItems = [
  {
    label: "Interior",
    src: "/images/legacy-real-estate/santo-domingo-property-interior.webp",
    width: 1400,
    height: 826,
    alt: "Fotografia inmobiliaria de interior en Santo Domingo"
  },
  {
    label: "Villa",
    src: "/images/legacy-real-estate/real-estate-photography-rd.webp",
    width: 1000,
    height: 621,
    alt: "Fotografia profesional inmobiliaria en Republica Dominicana"
  },
  {
    label: "Drone",
    src: "/images/legacy-real-estate/drone-real-estate-rd.webp",
    width: 1400,
    height: 935,
    alt: "Foto drone inmobiliaria para propiedad en Republica Dominicana"
  },
  {
    label: "Airbnb",
    src: "/images/legacy-real-estate/pictime-property-gallery-cover.webp",
    width: 1000,
    height: 590,
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
