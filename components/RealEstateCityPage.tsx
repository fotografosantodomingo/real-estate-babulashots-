import Image from "next/image";
import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { assetPath, breadcrumbSchema, cityAreaServed, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";
import { cityPath, realEstateCities, type RealEstateCity } from "@/lib/realEstateCities";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { realEstatePackages } from "@/lib/realEstatePackages";

export function RealEstateCityPage({ city, locale = "es" }: { city: RealEstateCity; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = cityPath(city, locale);
  const title = isEnglish ? city.enH1 : city.h1;
  const faq = (isEnglish ? city.enFaq : city.faq) ?? [];
  const marketNotes = (isEnglish ? city.enMarketNotes : city.marketNotes) ?? [];
  const localSeoSections = (isEnglish ? city.enLocalSeoSections : city.localSeoSections) ?? [];
  const targetAudience = isEnglish ? city.enTargetAudience : city.targetAudience;
  const packageRows = realEstatePackages.filter((item) => item.priceValueDop);
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
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? `Real estate media prices in ${city.city}` : `Precios de contenido inmobiliario en ${city.city}`,
        itemListElement: packageRows.map((item) => ({
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
      "@type": "Service",
      name: title,
      serviceType: "Real estate photography",
      provider: { "@type": "ProfessionalService", name: "Babula Shots Inmobiliaria", telephone: phoneE164 },
      areaServed: cityAreaServed(city.city, city.province),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: isEnglish ? "Service package guidance" : "Guia de paquetes",
        itemListElement: packageRows.map((item) => ({
          "@type": "Offer",
          name: isEnglish ? item.enName : item.name,
          priceCurrency: "DOP",
          price: item.priceValueDop,
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
            {targetAudience ? <p>{targetAudience}</p> : null}
            <ul className="chip-list">
              {city.propertyTypes.map((type) => <li key={type}>{type}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      {marketNotes.length ? (
        <section className="section alt-section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Market notes" : "Lectura del mercado"}</p>
            <div>
              <h2>{isEnglish ? `What matters in ${city.city}` : `Que importa en ${city.city}`}</h2>
              <ul className="service-list">
                {marketNotes.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {localSeoSections.length ? (
        <section className="section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Local SEO" : "SEO local"}</p>
            <div>
              <h2>{isEnglish ? `Real estate media strategy for ${city.city}` : `Estrategia visual inmobiliaria para ${city.city}`}</h2>
              <div className="authority-grid">
                {localSeoSections.map((section) => (
                  <article className="card authority-card" key={section.heading}>
                    <span>{section.heading}</span>
                    <p>{section.body}</p>
                    <ul className="service-list">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Prices" : "Precios"}</p>
          <div>
            <h2>{isEnglish ? `Real estate photography prices in ${city.city}` : `Precios de fotografia inmobiliaria en ${city.city}`}</h2>
            <p>
              {isEnglish
                ? `These are starting references for planning a property media budget in ${city.city}. Final pricing depends on area, property size, rooms, travel, urgency and whether the job includes photo, video, drone or reels.`
                : `Estos son precios base de referencia para planificar contenido inmobiliario en ${city.city}. La cotizacion final depende de zona, tamano de la propiedad, cantidad de espacios, traslado, urgencia y si incluye foto, video, drone o reels.`}
            </p>
            <div className="pricing-table" role="table" aria-label={isEnglish ? `Real estate media prices in ${city.city}` : `Precios de contenido inmobiliario en ${city.city}`}>
              <div className="pricing-row pricing-head" role="row">
                <span role="columnheader">{isEnglish ? "Package" : "Paquete"}</span>
                <span role="columnheader">{isEnglish ? "Best for" : "Mejor para"}</span>
                <span role="columnheader">{isEnglish ? "From" : "Desde"}</span>
              </div>
              {packageRows.map((item) => (
                <div className="pricing-row" role="row" key={item.name}>
                  <span role="cell">{isEnglish ? item.enName : item.name}</span>
                  <span role="cell">{isEnglish ? item.enBestFor : item.bestFor}</span>
                  <span role="cell">{`RD$${item.priceValueDop?.toLocaleString("en-US")}`}</span>
                </div>
              ))}
            </div>
            <p className="source-note">
              {isEnglish ? "Pricing reference:" : "Referencia de precios:"}{" "}
              <a href="https://www.fotografosantodomingo.com/es/prices">{isEnglish ? "published Babula Shots prices" : "precios publicados de Babula Shots"}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Preparation" : "Preparacion"}</p>
          <div>
            <h2>{isEnglish ? `How to prepare a property in ${city.city}` : `Como preparar una propiedad en ${city.city}`}</h2>
            <p>
              {isEnglish
                ? `Before the shoot, the property should be prepared according to its real selling point in ${city.city}. For ${city.propertyTypes.join(", ").toLowerCase()}, that usually means clean surfaces, open curtains, working lights, organized bedrooms, clear balconies, ready pool or common areas, and access to the spaces that affect price. In areas like ${city.areas.join(", ")}, the first image often needs to explain lifestyle or location quickly, so preparation matters as much as the camera.`
                : `Antes de la sesion, la propiedad debe prepararse segun su verdadero punto de venta en ${city.city}. Para ${city.propertyTypes.join(", ").toLowerCase()}, normalmente eso significa superficies limpias, cortinas abiertas, luces funcionando, habitaciones ordenadas, balcon despejado, piscina o areas comunes listas y acceso a los espacios que afectan el precio. En zonas como ${city.areas.join(", ")}, la primera imagen muchas veces debe explicar lifestyle o ubicacion en segundos, por eso la preparacion importa tanto como la camara.`}
            </p>
            <p>
              {isEnglish
                ? `After the session, we organize delivery so the media can be used immediately: full gallery for portals, lighter files for WhatsApp, vertical crops for stories, website hero images and optional video or drone clips. This keeps the ${city.city} listing consistent across Point2Homes, TerrenosRD, Airbnb, social media and direct messages to buyers or guests. It also gives agents and owners enough material to keep promoting the same property for several days without repeating the exact same image.`
                : `Despues de la sesion, organizamos la entrega para que el contenido se pueda usar de inmediato: galeria completa para portales, archivos ligeros para WhatsApp, recortes verticales para historias, imagenes hero para websites y clips opcionales de video o drone. Asi el anuncio de ${city.city} mantiene consistencia en Point2Homes, TerrenosRD, Airbnb, redes sociales y mensajes directos a compradores o huespedes.`}
            </p>
            <ul className="service-list">
              {(isEnglish
                ? ["Clean and stage the most valuable rooms first", "Prepare pool, balcony, view, lobby or amenities before arrival", "Confirm access, parking and security with the building or community", "Use final files across portals, WhatsApp, website and social without resizing confusion"]
                : ["Limpiar y ordenar primero los espacios de mayor valor", "Preparar piscina, balcon, vista, lobby o amenidades antes de llegar", "Confirmar acceso, parqueo y seguridad con el edificio o comunidad", "Usar la entrega final en portales, WhatsApp, website y redes sin confusion de tamanos"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <Integrations locale={locale} />
      {faq.length ? <FaqBlock items={faq} /> : null}

      {city.areas.length ? (
        <section className="section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Areas" : "Zonas"}</p>
            <div>
              <h2>{isEnglish ? `Areas served in ${city.city}` : `Zonas cubiertas en ${city.city}`}</h2>
              <ul className="chip-list">{city.areas.map((area) => <li key={area}>{area}</li>)}</ul>
              <div className="related-links">
                {realEstateCities.filter((item) => city.nearby.includes(item.city)).map((item) => (
                  <Link key={item.slug} href={cityPath(item, locale)}>{isEnglish ? item.enH1 : item.h1}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <ConversionPanel
        locale={locale}
        title={isEnglish ? `Quote real estate media in ${city.city}` : `Cotiza contenido inmobiliario en ${city.city}`}
        text={isEnglish ? "Send property type, area and what you need: photos, video, drone, reels or a full package." : "Envia tipo de propiedad, zona y servicio deseado: fotos, video, drone, reels o paquete completo."}
        message={city.whatsappMessage}
      />
    </main>
  );
}
