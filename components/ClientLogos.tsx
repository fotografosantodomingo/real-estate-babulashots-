export function ClientLogos({ locale = "es" }: { locale?: "es" | "en" }) {
  return (
    <section className="trust-strip" aria-label={locale === "en" ? "Client fit" : "Clientes ideales"}>
      <span>{locale === "en" ? "Built for" : "Creado para"}</span>
      <strong>Agentes</strong>
      <strong>Inmobiliarias</strong>
      <strong>Developers</strong>
      <strong>Airbnb</strong>
      <strong>Villas</strong>
    </section>
  );
}
