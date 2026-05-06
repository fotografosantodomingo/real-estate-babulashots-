import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ConversionPanel } from "@/components/ConversionPanel";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { FaqBlock } from "@/components/FaqBlock";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { realEstatePackages } from "@/lib/realEstatePackages";
import { servicePath, type RealEstateService } from "@/lib/realEstateServices";
import { assetPath, breadcrumbSchema, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";

export function RealEstateServicePage({ service, locale = "es" }: { service: RealEstateService; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = servicePath(service, locale);
  const faq = [
    {
      question: isEnglish ? "How fast can the files be delivered?" : "Que tan rapido se entregan los archivos?",
      answer: isEnglish ? "Delivery depends on property size and package, but real estate listings are prioritized for fast publication." : "La entrega depende del tamano de la propiedad y del paquete, pero los listados inmobiliarios se priorizan para publicacion rapida."
    },
    {
      question: isEnglish ? "Can files be prepared for Airbnb, Point2Homes or listing portals?" : "Pueden preparar formatos para Airbnb, Point2Homes o portales?",
      answer: isEnglish ? "Yes. Files can be exported for listing portals, Airbnb, websites, WhatsApp and social media." : "Si. Los archivos pueden exportarse para portales, Airbnb, websites, WhatsApp y redes sociales."
    },
    {
      question: isEnglish ? "Can photo, video and drone be combined?" : "Se puede combinar foto, video y drone?",
      answer: isEnglish ? "Yes. Photo, video, drone and reels can be combined into one property media package." : "Si. Foto, video, drone y reels pueden combinarse en un solo paquete de contenido inmobiliario."
    }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: isEnglish ? service.enH1 : service.h1,
      url: canonicalUrl(path),
      inLanguage: isEnglish ? "en" : "es-DO",
      about: { "@type": "Service", name: isEnglish ? service.enH1 : service.h1 }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: isEnglish ? service.enH1 : service.h1,
      serviceType: "Real estate media",
      url: canonicalUrl(path),
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164, url: siteUrl },
      areaServed: { "@type": "Country", name: "Dominican Republic" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? "Real estate media starting prices" : "Precios base de contenido inmobiliario",
        itemListElement: realEstatePackages.filter((item) => item.priceValueDop).map((item) => ({
          "@type": "Offer",
          name: isEnglish ? item.enName : item.name,
          priceCurrency: "DOP",
          price: item.priceValueDop,
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: isEnglish ? item.enName : item.name }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    },
    breadcrumbSchema([
      { name: "Babula Shots Inmobiliaria", path: isEnglish ? "/en/" : "/" },
      { name: isEnglish ? service.enH1 : service.h1, path }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero service-hero">
        <Image src={assetPath("/images/real-estate-media-dominican-republic.webp")} alt={isEnglish ? service.enH1 : service.h1} width={1672} height={941} priority fetchPriority="high" className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots · Service</p>
          <h1>{isEnglish ? service.enH1 : service.h1}</h1>
          <p>{isEnglish ? service.enIntro : service.intro}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contacto">{isEnglish ? "Request quote" : "Cotizar"}</a>
            <a className="button button-ghost" href={withBasePath(isEnglish ? "/en/real-estate-photography-prices-dominican-republic" : "/precios-fotografia-inmobiliaria-republica-dominicana")}>{isEnglish ? "See pricing" : "Ver precios"}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Deliverables" : "Entregables"}</p>
          <div>
            <h2>{isEnglish ? "What is included" : "Que incluye"}</h2>
            <p>{isEnglish ? service.enProof : service.proof}</p>
            <ul className="service-list">
              {(isEnglish ? service.enDeliverables : service.deliverables).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      <ServicePackages locale={locale} />
      <BeforeAfterSlider locale={locale} />
      <Integrations locale={locale} />
      <FaqBlock items={faq} />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Cities" : "Ciudades"}</p>
            <h2>{isEnglish ? "Available across the Dominican Republic" : "Disponible en Republica Dominicana"}</h2>
          </div>
          <div className="related-links">
            {realEstateCities.map((city) => <Link href={cityPath(city, locale)} key={city.slug}>{isEnglish ? city.enH1 : city.h1}</Link>)}
          </div>
        </div>
      </section>

      <ConversionPanel
        locale={locale}
        title={isEnglish ? "Request a custom quote" : "Solicita una cotizacion"}
        text={isEnglish ? "Send city, property type, rooms and whether you need photo, video, drone or reels." : "Envia ciudad, tipo de propiedad, habitaciones y si necesitas foto, video, drone o reels."}
        message={service.whatsappMessage}
      />
    </main>
  );
}
