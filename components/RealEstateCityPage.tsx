import Image from "next/image";
import Link from "next/link";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { assetPath, breadcrumbSchema, cityAreaServed, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";
import { cityPath, realEstateCities, type RealEstateCity } from "@/lib/realEstateCities";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";

export function RealEstateCityPage({ city, locale = "es" }: { city: RealEstateCity; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = cityPath(city, locale);
  const title = isEnglish ? city.enH1 : city.h1;
  const faq = [
    {
      question: isEnglish ? `Do you photograph properties in ${city.city}?` : `Trabajan propiedades en ${city.city}?`,
      answer: isEnglish ? `Yes. We create photo, video, drone and listing media for properties in ${city.city} and nearby areas.` : `Si. Creamos foto, video, drone y contenido para propiedades en ${city.city} y zonas cercanas.`
    },
    {
      question: isEnglish ? "Can files be prepared for listing platforms?" : "Pueden preparar archivos para portales inmobiliarios?",
      answer: isEnglish ? "Yes. Deliverables can be formatted for MLS-style listings, Point2Homes, Airbnb, social media and websites." : "Si. Entregamos formatos listos para MLS-style listings, Point2Homes, Airbnb, redes sociales y websites."
    }
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      url: canonicalUrl(path),
      inLanguage: isEnglish ? "en" : "es-DO",
      about: { "@type": "Service", name: title },
      primaryImageOfPage: `${siteUrl}${city.image}`
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Babula Shots Inmobiliaria",
      url: canonicalUrl(path),
      telephone: phoneE164,
      image: `${siteUrl}/images/real-estate-media-dominican-republic.webp`,
      areaServed: cityAreaServed(city.city, city.province),
      priceRange: "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      serviceType: "Real estate photography",
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164 },
      areaServed: cityAreaServed(city.city, city.province)
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
      { name: title, path }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero service-hero">
        <Image src={assetPath(city.image)} alt={title} width={1672} height={941} priority fetchPriority="high" className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow">Babula Shots · {city.province}</p>
          <h1>{title}</h1>
          <p>{isEnglish ? city.enIntro : city.intro}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contacto">{isEnglish ? "Request quote" : "Cotizar"}</a>
            <a className="button button-ghost" href={withBasePath(servicePath(realEstateServices[1], locale))}>{isEnglish ? "Photo + video" : "Foto + video"}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Local context" : "Contexto local"}</p>
          <div>
            <h2>{isEnglish ? `Property media for ${city.city}` : `Contenido inmobiliario para ${city.city}`}</h2>
            <p>{isEnglish ? city.enLocalAngle : city.localAngle}</p>
            <ul className="chip-list">
              {city.propertyTypes.map((type) => <li key={type}>{type}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      <BeforeAfterSlider locale={locale} />
      <Integrations locale={locale} />
      <FaqBlock items={faq} />

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Areas" : "Zonas"}</p>
          <div>
            <h2>{isEnglish ? `Areas served in ${city.city}` : `Zonas cubiertas en ${city.city}`}</h2>
            <ul className="chip-list">{city.areas.map((area) => <li key={area}>{area}</li>)}</ul>
            <div className="related-links">
              {realEstateCities.filter((item) => item.slug !== city.slug).slice(0, 3).map((item) => (
                <Link key={item.slug} href={cityPath(item, locale)}>{isEnglish ? item.enH1 : item.h1}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConversionPanel
        locale={locale}
        title={isEnglish ? `Quote real estate media in ${city.city}` : `Cotiza contenido inmobiliario en ${city.city}`}
        text={isEnglish ? "Send property type, area and what you need: photos, video, drone, reels or a full package." : "Envia tipo de propiedad, zona y servicio deseado: fotos, video, drone, reels o paquete completo."}
        message={city.whatsappMessage}
      />
    </main>
  );
}
