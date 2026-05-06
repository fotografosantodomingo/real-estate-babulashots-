import { realEstatePackages } from "@/lib/realEstatePackages";
import { pricingSourceUrl } from "@/lib/seo";

export function ServicePackages({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEnglish = locale === "en";

  return (
    <section className="section alt-section">
      <div className="wrap">
        <div className="section-heading">
          <p className="section-tag">{isEnglish ? "Packages" : "Paquetes"}</p>
          <h2>{isEnglish ? "Published starting points for property media" : "Precios base para contenido inmobiliario"}</h2>
          <p>{isEnglish ? "Starting prices are based on Babula Shots' published photography service menu. Final quotes depend on city, property size, travel, video, drone, reels and delivery urgency." : "Los precios son puntos de partida publicados por Babula Shots. La cotizacion final depende de ciudad, tamano de propiedad, traslado, video, drone, reels y urgencia de entrega."}</p>
        </div>
        <div className="card-grid">
          {realEstatePackages.map((item) => (
            <article className="card package-card" key={item.name}>
              <span>{isEnglish ? item.enBestFor : item.bestFor}</span>
              <h3>{isEnglish ? item.enName : item.name}</h3>
              <p className="price-line">{isEnglish ? item.enPrice : item.price}</p>
              <ul className="package-list">
                {(isEnglish ? item.enIncludes : item.includes).map((include) => (
                  <li key={include}>{include}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="source-note">
          {isEnglish ? "Pricing reference:" : "Referencia de precios:"} <a href={pricingSourceUrl}>{isEnglish ? "Babula Shots published prices" : "precios publicados de Babula Shots"}</a>
        </p>
      </div>
    </section>
  );
}
