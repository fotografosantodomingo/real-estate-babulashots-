import { droneUrl } from "@/lib/seo";

export function CrossSiteCta({ locale = "es" }: { locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  return (
    <section className="cross-site-cta" aria-labelledby="cross-site-drone">
      <div className="wrap">
        <div className="cross-site-grid">
          <div>
            <p className="section-tag">{isEnglish ? "Aerial add-on" : "Servicio aliado"}</p>
            <h2 id="cross-site-drone">
              {isEnglish
                ? "Add aerial drone footage to any listing"
                : "Suma vista aerea de drone a cualquier listing"}
            </h2>
            <p>
              {isEnglish
                ? "Drone shots help villas, resorts and developers explain location, amenities and surrounding lifestyle in seconds. Babula Shots Drone is the same team, with the same delivery standards."
                : "Las tomas con drone ayudan a villas, resorts y desarrolladores a explicar ubicacion, amenidades y entorno en segundos. Babula Shots Drone es el mismo equipo, con el mismo estandar de entrega."}
            </p>
          </div>
          <div className="cross-site-actions">
            <a className="button button-dark" href={droneUrl} rel="noopener">
              {isEnglish ? "See drone services" : "Ver servicios de drone"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
