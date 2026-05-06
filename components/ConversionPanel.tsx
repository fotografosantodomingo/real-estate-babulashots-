import { phoneDisplay, phoneE164, whatsappUrl } from "@/lib/seo";

export function ConversionPanel({ title, text, message, locale = "es" }: { title: string; text: string; message: string; locale?: "es" | "en" }) {
  return (
    <section className="conversion-panel" id="contacto">
      <div>
        <p className="section-tag">{locale === "en" ? "Quote" : "Cotizacion"}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <a className="button button-dark" href={whatsappUrl(message)}>{locale === "en" ? "WhatsApp quote" : "Cotizar por WhatsApp"}</a>
        <a className="button button-outline" href={`tel:${phoneE164}`}>{phoneDisplay}</a>
      </div>
    </section>
  );
}
