export function BeforeAfterSlider({ locale = "es" }: { locale?: "es" | "en" }) {
  return (
    <section className="section alt-section">
      <div className="wrap split">
        <p className="section-tag">{locale === "en" ? "Before / after" : "Antes / despues"}</p>
        <div>
          <h2>{locale === "en" ? "Clean editing without fake-looking interiors" : "Edicion limpia sin interiores falsos"}</h2>
          <div className="before-after" aria-label={locale === "en" ? "Before and after visual comparison" : "Comparacion visual antes y despues"}>
            <div className="before-side">Before</div>
            <div className="after-side">After</div>
            <span className="slider-line" />
          </div>
          <p>{locale === "en" ? "Interior photos are corrected for light, verticals and color while keeping the property truthful." : "Corregimos luz, verticales y color manteniendo una presentacion fiel de la propiedad."}</p>
        </div>
      </div>
    </section>
  );
}
