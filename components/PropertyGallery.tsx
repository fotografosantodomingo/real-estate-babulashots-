import Image from "next/image";
import { assetPath } from "@/lib/seo";

const galleryItems = [
  { label: "Interior", alt: "Fotografia inmobiliaria de interior moderno" },
  { label: "Villa", alt: "Fotografia para villa de lujo en Republica Dominicana" },
  { label: "Drone", alt: "Foto drone inmobiliaria para propiedad turistica" },
  { label: "Lobby", alt: "Fotografia de lobby comercial para proyecto inmobiliario" }
];

export function PropertyGallery({ locale = "es" }: { locale?: "es" | "en" }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-heading">
          <p className="section-tag">Portfolio</p>
          <h2>{locale === "en" ? "Property media examples" : "Ejemplos visuales para propiedades"}</h2>
        </div>
        <div className="property-gallery">
          {galleryItems.map((item) => (
            <figure key={item.label}>
              <Image src={assetPath("/images/real-estate-media-dominican-republic.webp")} alt={item.alt} width={1672} height={941} />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
