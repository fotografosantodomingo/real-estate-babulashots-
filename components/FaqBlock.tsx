export function FaqBlock({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <section className="section">
      <div className="wrap faq-wrap">
        <p className="section-tag">FAQ</p>
        <h2>Preguntas frecuentes</h2>
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
