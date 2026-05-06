import { realEstatePackages } from "@/lib/realEstatePackages";

export function ServicePackages({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEnglish = locale === "en";

  return (
    <section className="section alt-section">
      <div className="wrap">
        <div className="section-heading">
          <p className="section-tag">{isEnglish ? "Packages" : "Paquetes"}</p>
          <h2>{isEnglish ? "Quote paths for every property workflow" : "Rutas de cotizacion para cada propiedad"}</h2>
        </div>
        <div className="card-grid">
          {realEstatePackages.map((item) => (
            <article className="card package-card" key={item.name}>
              <span>{isEnglish ? item.enBestFor : item.bestFor}</span>
              <h3>{isEnglish ? item.enName : item.name}</h3>
              <ul className="package-list">
                {(isEnglish ? item.enIncludes : item.includes).map((include) => (
                  <li key={include}>{include}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
