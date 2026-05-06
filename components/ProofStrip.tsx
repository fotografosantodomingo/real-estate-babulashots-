export function ProofStrip({ locale = "es" }: { locale?: "es" | "en" }) {
  const items = locale === "en"
    ? ["Listing-ready files", "Photo + video + drone", "Airbnb and Point2Homes formats", "Fast delivery"]
    : ["Archivos listos para publicar", "Foto + video + drone", "Formatos Airbnb y Point2Homes", "Entrega rapida"];

  return (
    <div className="proof-strip" aria-label={locale === "en" ? "Proof points" : "Puntos de confianza"}>
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}
