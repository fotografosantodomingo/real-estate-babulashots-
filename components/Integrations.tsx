export function Integrations({ locale = "es" }: { locale?: "es" | "en" }) {
  return (
    <section className="section compact-section">
      <div className="wrap split">
        <p className="section-tag">{locale === "en" ? "Formats" : "Formatos"}</p>
        <div>
          <h2>{locale === "en" ? "Ready for listing platforms and sales campaigns" : "Listo para portales y campanas de venta"}</h2>
          <p>
            {locale === "en"
              ? "Photos and video can be delivered in formats ready for MLS-style listings, Point2Homes, Airbnb, social media, websites and developer sales campaigns."
              : "Fotos y video pueden entregarse en formatos listos para MLS-style listings, Point2Homes, Airbnb, redes sociales, websites y campanas de venta para proyectos."}
          </p>
        </div>
      </div>
    </section>
  );
}
