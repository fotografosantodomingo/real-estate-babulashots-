export function FaqBlock({
  items,
  locale = "es"
}: {
  items: Array<{ question: string; answer: string }>;
  locale?: "es" | "en";
}) {
  return (
    <section className="section">
      <div className="wrap faq-wrap">
        <p className="section-tag">FAQ</p>
        <h2>{locale === "en" ? "Frequently asked questions" : "Preguntas frecuentes"}</h2>
        {items.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
