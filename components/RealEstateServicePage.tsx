import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { HeroImage, mobileVariantOf } from "@/components/HeroImage";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { FaqBlock } from "@/components/FaqBlock";
import { ServicePackages } from "@/components/ServicePackages";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { realEstateCities, cityPath } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstatePackages } from "@/lib/realEstatePackages";
import { realEstateServices, servicePath, type RealEstateService } from "@/lib/realEstateServices";
import { breadcrumbSchema, canonicalUrl, phoneE164, siteUrl, withBasePath } from "@/lib/seo";

export function RealEstateServicePage({ service, locale = "es" }: { service: RealEstateService; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = servicePath(service, locale);
  const useCases = (isEnglish ? service.enUseCases : service.useCases) ?? [];
  const serviceLabel = isEnglish ? service.enH1 : service.h1;
  const buyerIntent = isEnglish ? service.enBuyerIntent : service.buyerIntent;
  const deliverables = isEnglish ? service.enDeliverables : service.deliverables;
  const proof = isEnglish ? service.enProof : service.proof;
  const authorityIntro = (isEnglish ? service.enAuthorityIntro : service.authorityIntro) ?? [
    isEnglish
      ? `${serviceLabel} should be planned around the buyer's decision, not around a generic shot list. The media has to explain what the property is, who it is for, why the location matters and how quickly the viewer can trust the listing.`
      : `${serviceLabel} debe planificarse alrededor de la decision del comprador, no alrededor de una lista generica de fotos. El contenido tiene que explicar que es la propiedad, para quien funciona, por que importa la ubicacion y que tan rapido el visitante puede confiar en el anuncio.`,
    isEnglish
      ? `For this service, the most important assets are ${deliverables.join(", ").toLowerCase()}. Those deliverables support portals, WhatsApp, social media, websites and sales conversations, so they need to be exported with a clear commercial use in mind.`
      : `Para este servicio, los activos mas importantes son ${deliverables.join(", ").toLowerCase()}. Esos entregables apoyan portales, WhatsApp, redes sociales, websites y conversaciones comerciales, por eso deben exportarse con un uso comercial claro.`,
    isEnglish
      ? `The strongest results come when the session is connected to the property type, target buyer and next action: quote request, showing, booking, presale call or investor follow-up.`
      : `Los mejores resultados salen cuando la sesion se conecta con el tipo de propiedad, el comprador objetivo y la proxima accion: cotizacion, visita, reserva, llamada de preventa o seguimiento a inversionistas.`
  ];
  const authoritySections = (isEnglish ? service.enAuthoritySections : service.authoritySections) ?? [
    {
      heading: isEnglish ? "Commercial goal" : "Objetivo comercial",
      body: isEnglish ? `The goal is to make the property easier to understand and easier to share. ${buyerIntent}` : `La meta es hacer la propiedad mas facil de entender y mas facil de compartir. ${buyerIntent}`,
      items: useCases.length ? useCases : deliverables
    },
    {
      heading: isEnglish ? "Delivery formats" : "Formatos de entrega",
      body: isEnglish ? "Files should work across the full sales path: portals, direct messages, websites, social media and client presentations." : "Los archivos deben funcionar en todo el recorrido comercial: portales, mensajes directos, websites, redes y presentaciones a clientes.",
      items: isEnglish ? ["Portal gallery", "WhatsApp set", "Vertical social crops", "Website hero images"] : ["Galeria para portales", "Set para WhatsApp", "Recortes verticales para redes", "Imagenes hero para website"]
    },
    {
      heading: isEnglish ? "Quality control" : "Control de calidad",
      body: isEnglish ? "Real estate media should look professional without making rooms, views or finishes feel fake. Clean editing protects trust." : "El contenido inmobiliario debe verse profesional sin hacer que espacios, vistas o terminaciones parezcan falsos. Una edicion limpia protege la confianza.",
      items: isEnglish ? ["Straight verticals", "Natural color", "Readable shadows", "Accurate room flow"] : ["Verticales rectas", "Color natural", "Sombras legibles", "Flujo real de espacios"]
    }
  ];
  const customFaq = (isEnglish ? service.enCustomFaq : service.customFaq) ?? [];
  const relatedItems = (service.recommendedLinks ?? [])
    .map((slug) => {
      const serviceMatch = realEstateServices.find((item) => item.slug === slug);
      if (serviceMatch) return { slug, href: servicePath(serviceMatch, locale), label: isEnglish ? serviceMatch.enH1 : serviceMatch.h1 };
      const cityMatch = realEstateCities.find((item) => `fotografia-inmobiliaria-${item.slug}` === slug);
      if (cityMatch) return { slug, href: cityPath(cityMatch, locale), label: isEnglish ? cityMatch.enH1 : cityMatch.h1 };
      const industryMatch = realEstateIndustries.find((item) => item.slug === slug);
      if (industryMatch) return { slug, href: industryPath(industryMatch, locale), label: isEnglish ? industryMatch.enH1 : industryMatch.h1 };
      return null;
    })
    .filter((item): item is { slug: string; href: string; label: string } => Boolean(item));
  const defaultFaq = [
    {
      question: isEnglish ? `When is ${serviceLabel} the right service?` : `Cuando conviene ${serviceLabel}?`,
      answer: buyerIntent ?? (isEnglish ? service.enIntro : service.intro)
    },
    {
      question: isEnglish ? `What does ${serviceLabel} include?` : `Que incluye ${serviceLabel}?`,
      answer: `${deliverables.join(", ")}. ${proof}`
    },
    {
      question: isEnglish ? "Can it be combined with other property media?" : "Se puede combinar con otros medios inmobiliarios?",
      answer: relatedItems.length
        ? `${isEnglish ? "Yes. Common add-ons include" : "Si. Los adicionales comunes son"} ${relatedItems.map((item) => item.label).join(", ")}.`
        : (isEnglish ? "Yes. The package can be adapted with photo, video, drone or reels depending on the property." : "Si. El paquete puede adaptarse con foto, video, drone o reels segun la propiedad.")
    }
  ];
  const faq = customFaq.length ? customFaq : defaultFaq;
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
        <HeroImage
          src="/images/real-estate-media-dominican-republic.webp"
          mobileSrc={mobileVariantOf("/images/real-estate-media-dominican-republic.webp")}
          alt={isEnglish ? service.enH1 : service.h1}
          width={1400}
          height={788}
          mobileWidth={640}
          mobileHeight={361}
        />
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
            <p>{proof}</p>
            <p>{buyerIntent}</p>
            <ul className="service-list">
              {deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <PropertyGallery locale={locale} />
      {useCases.length ? (
        <section className="section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Best fit" : "Mejor uso"}</p>
            <div>
              <h2>{isEnglish ? "Where this service works best" : "Donde este servicio funciona mejor"}</h2>
              <ul className="service-list">{useCases.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </section>
      ) : null}

      {authorityIntro.length || authoritySections.length ? (
        <section className="section alt-section">
          <div className="wrap split">
            <p className="section-tag">{isEnglish ? "Sales strategy" : "Estrategia comercial"}</p>
            <div>
              <h2>{isEnglish ? "Media planned for development sales" : "Contenido pensado para vender proyectos"}</h2>
              {authorityIntro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {authoritySections.length ? (
                <div className="authority-grid">
                  {authoritySections.map((section) => (
                    <article className="card authority-card" key={section.heading}>
                      <span>{section.heading}</span>
                      <p>{section.body}</p>
                      <ul className="service-list">
                        {section.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Planning" : "Planificacion"}</p>
          <div>
            <h2>{isEnglish ? `How we plan ${serviceLabel}` : `Como planificamos ${serviceLabel}`}</h2>
            <p>
              {isEnglish
                ? `Before quoting or shooting, we define the property type, city, target buyer, publication channels and urgency. A listing for Santo Domingo may need clean tower interiors and amenities, while Punta Cana, Bavaro, Cap Cana or Casa de Campo often need lifestyle, pool, location and rental potential. This planning keeps the media useful for the actual sale instead of creating generic files.`
                : `Antes de cotizar o fotografiar, definimos tipo de propiedad, ciudad, comprador objetivo, canales de publicacion y urgencia. Un listado en Santo Domingo puede necesitar interiores limpios de torre y amenidades, mientras Punta Cana, Bavaro, Cap Cana o Casa de Campo suelen necesitar lifestyle, piscina, ubicacion y potencial de renta. Esa planificacion mantiene el contenido util para la venta real, no como archivos genericos.`}
            </p>
            <p>
              {isEnglish
                ? `We also decide what should be photographed first, what deserves video, where drone adds real information and which files should be exported for portals, WhatsApp, website, brochure or social media. That makes ${serviceLabel.toLowerCase()} a commercial asset that can support agents, owners, developers and rental teams after the shoot is finished.`
                : `Tambien decidimos que debe fotografiarse primero, que merece video, donde el drone aporta informacion real y que archivos deben exportarse para portales, WhatsApp, website, brochure o redes. Asi ${serviceLabel.toLowerCase()} se convierte en un activo comercial que apoya a agentes, propietarios, desarrolladores y equipos de renta despues de terminar la sesion.`}
            </p>
            <ul className="service-list">
              {(isEnglish
                ? ["Confirm city, property type and buyer profile", "Plan hero image, walkthrough and proof shots", "Export files for portals, WhatsApp, web and social", "Keep editing clean, accurate and listing-ready"]
                : ["Confirmar ciudad, tipo de propiedad y perfil de comprador", "Planificar portada, recorrido y tomas de prueba", "Exportar archivos para portales, WhatsApp, web y redes", "Mantener edicion limpia, fiel y lista para publicar"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Mistakes" : "Errores"}</p>
          <div>
            <h2>{isEnglish ? "What to avoid before publishing" : "Que evitar antes de publicar"}</h2>
            <p>
              {isEnglish
                ? `The main mistake is treating ${serviceLabel.toLowerCase()} like decoration instead of sales proof. Dark photos, repeated angles, missing exteriors, no amenities, no view, no location context and files that are too heavy for portals can make a serious property feel weak.`
                : `El error principal es tratar ${serviceLabel.toLowerCase()} como decoracion y no como prueba comercial. Fotos oscuras, angulos repetidos, falta de exteriores, ausencia de amenidades, sin vista, sin contexto de ubicacion y archivos demasiado pesados para portales pueden hacer que una propiedad seria se sienta debil.`}
            </p>
            <p>
              {isEnglish
                ? `Another mistake is not matching the service to the market. A corporate apartment, a tourism villa, an Airbnb, a commercial space and a presale development need different evidence. The same file delivery should also support several uses: portal listing, WhatsApp follow-up, social post, website section and owner approval.`
                : `Otro error es no ajustar el servicio al mercado. Un apartamento corporativo, una villa turistica, un Airbnb, un local comercial y un proyecto en preventa necesitan pruebas distintas. La misma entrega tambien debe apoyar varios usos: portal inmobiliario, seguimiento por WhatsApp, publicacion en redes, seccion web y aprobacion del propietario.`}
            </p>
          </div>
        </div>
      </section>

      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Process" : "Proceso"}</p>
          <div>
            <h2>{isEnglish ? "Fast workflow for property listings" : "Flujo rapido para publicar propiedades"}</h2>
            <ul className="service-list">
              {(isEnglish
                ? ["Confirm city and property type", "Plan photos, video or drone", "Capture interiors, exteriors and amenities", "Edit for listing platforms", "Deliver files ready for portals and WhatsApp"]
                : ["Confirmar ciudad y tipo de propiedad", "Planificar fotos, video o drone", "Capturar interiores, exteriores y amenidades", "Editar para portales inmobiliarios", "Entregar archivos listos para portales y WhatsApp"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <ServicePackages locale={locale} />
      <Integrations locale={locale} />
      <FaqBlock items={faq} />

      <section className="section">
        <div className="wrap">
          <div className="section-heading">
            <p className="section-tag">{isEnglish ? "Related services" : "Servicios relacionados"}</p>
            <h2>{isEnglish ? "Useful add-ons for this listing" : "Adicionales utiles para este listado"}</h2>
          </div>
          <div className="related-links">
            {relatedItems.map((item) => <Link href={item.href} key={item.slug}>{item.label}</Link>)}
          </div>
        </div>
      </section>

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
