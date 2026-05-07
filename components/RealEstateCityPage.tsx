import Image from "next/image";
import Link from "next/link";
import { ConversionPanel } from "@/components/ConversionPanel";
import { FaqBlock } from "@/components/FaqBlock";
import { Integrations } from "@/components/Integrations";
import { PropertyGallery } from "@/components/PropertyGallery";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { assetPath, bookingUrl, breadcrumbSchema, cityAreaServed, canonicalUrl, mainBrandUrl, phoneE164, pricingSourceUrl, santoDomingoHubUrl, siteUrl, withBasePath } from "@/lib/seo";
import { cityPath, realEstateCities, type RealEstateCity } from "@/lib/realEstateCities";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { realEstatePackages } from "@/lib/realEstatePackages";

export function RealEstateCityPage({ city, locale = "es" }: { city: RealEstateCity; locale?: "es" | "en" }) {
  const isEnglish = locale === "en";
  const path = cityPath(city, locale);
  const title = isEnglish ? `Professional real estate photographer in ${city.city}` : `Fotografo inmobiliario profesional en ${city.city}`;
  const faq = (isEnglish ? city.enFaq : city.faq) ?? [];
  const marketNotes = (isEnglish ? city.enMarketNotes : city.marketNotes) ?? [];
  const localSeoSections = (isEnglish ? city.enLocalSeoSections : city.localSeoSections) ?? [];
  const targetAudience = isEnglish ? city.enTargetAudience : city.targetAudience;
  const packageRows = realEstatePackages.filter((item) => item.priceValueDop);
  const transactionalFaq = [
    {
      question: isEnglish ? `How much does a photographer cost in ${city.city}?` : `¿Cuánto cuesta un fotógrafo en ${city.city}?`,
      answer: isEnglish
        ? `Real estate media in ${city.city} starts from RD$8,920 for listing photos, RD$9,520 for drone and RD$47,600 for photo + video references. Final price depends on property size, access, travel, urgency and deliverables.`
        : `El contenido inmobiliario en ${city.city} inicia desde RD$8,920 para fotos de listing, RD$9,520 para drone y RD$47,600 como referencia de foto + video. El precio final depende de tamano, acceso, traslado, urgencia y entregables.`
    },
    {
      question: isEnglish ? `How do I book a session in ${city.city}?` : `Cómo reservar una sesión en ${city.city}?`,
      answer: isEnglish
        ? `Use the booking button or WhatsApp CTA and send city, area, property type, number of rooms and whether you need photo, video, drone or reels.`
        : `Usa el boton de reserva o el CTA de WhatsApp y envia ciudad, zona, tipo de propiedad, cantidad de habitaciones y si necesitas foto, video, drone o reels.`
    },
    {
      question: isEnglish ? `Is transportation included for ${city.city}?` : `¿Incluye transporte para ${city.city}?`,
      answer: isEnglish
        ? `Transportation depends on the exact area, schedule and production size. We confirm travel before booking so the quote is clear before the session.`
        : `El transporte depende de la zona exacta, horario y tamano de produccion. Confirmamos traslado antes de reservar para que la cotizacion quede clara antes de la sesion.`
    }
  ];
  const visibleFaq = [...faq, ...transactionalFaq];
  const localServiceLinks = [
    realEstateServices.find((service) => service.slug === "foto-video-inmobiliario"),
    realEstateServices.find((service) => service.slug === "fotografia-drone-inmobiliaria"),
    realEstateServices.find((service) => service.slug === "fotografia-para-airbnb-villas"),
    realEstateServices.find((service) => service.slug === "precios-fotografia-inmobiliaria-republica-dominicana")
  ].filter((service): service is (typeof realEstateServices)[number] => Boolean(service));
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
      parentOrganization: {
        "@type": "Organization",
        name: "Babula Shots RD",
        url: mainBrandUrl
      },
      knowsAbout: [
        "Fotografia inmobiliaria",
        "Video inmobiliario",
        "Drone inmobiliario",
        "Marketing visual para propiedades",
        "Fotografia de bodas",
        "Retratos",
        "Eventos"
      ],
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
      "@type": "LocalBusiness",
      name: `${title} - Babula Shots`,
      url: canonicalUrl(path),
      telephone: phoneE164,
      image: `${siteUrl}${city.image}`,
      parentOrganization: {
        "@type": "Organization",
        name: "Babula Shots RD",
        url: mainBrandUrl
      },
      knowsAbout: [
        "Fotografia inmobiliaria",
        "Video inmobiliario",
        "Drone inmobiliario",
        "Fotografia de bodas",
        "Retratos",
        "Eventos"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: city.city,
        addressRegion: city.province,
        addressCountry: "DO"
      },
      areaServed: [
        cityAreaServed(city.city, city.province),
        ...city.areas.map((area) => ({ "@type": "Place", name: area }))
      ],
      priceRange: "$$"
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
      mainEntity: visibleFaq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    },
    breadcrumbSchema([
      { name: "Home", path: isEnglish ? "/en/" : "/" },
      { name: isEnglish ? "Cities" : "Ciudades", path: isEnglish ? "/en/" : "/" },
      { name: title, path }
    ])
  ];

  return (
    <main>
      <SeoJsonLd data={schema} />
      <section className="hero service-hero">
        <Image src={assetPath(city.image)} alt={title} width={1672} height={941} priority fetchPriority="high" className="hero-image" />
        <div className="hero-content">
          <nav className="breadcrumbs" aria-label={isEnglish ? "Breadcrumbs" : "Migas de pan"}>
            <Link href={isEnglish ? "/en/" : "/"}>Home</Link>
            <span>{isEnglish ? "Cities" : "Ciudades"}</span>
            <span>{city.city}</span>
          </nav>
          <p className="eyebrow">Babula Shots · {city.province}</p>
          <h1>{title}</h1>
          <p>{isEnglish ? city.enIntro : city.intro}</p>
          <div className="hero-actions">
            <a className="button button-light" href="#contacto">{isEnglish ? "Book / request quote" : "Reservar / cotizar"}</a>
            <a className="button button-ghost" href={bookingUrl}>{isEnglish ? "Book session" : "Reservar sesión"}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Local context" : "Contexto local"}</p>
          <div>
            <h2>{isEnglish ? `Property media for ${city.city}` : `Contenido inmobiliario para ${city.city}`}</h2>
            <p>
              {isEnglish
                ? <>As part of the <a href={mainBrandUrl}>Babula Shots RD</a> network, our {city.city} team creates professional real estate media. {city.enLocalAngle}</>
                : <>Como parte de la red de <a href={mainBrandUrl}>Babula Shots RD</a>, nuestro equipo de {city.city} crea contenido inmobiliario profesional. {city.localAngle}</>}
            </p>
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

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Why us" : "Por que nosotros"}</p>
          <div>
            <h2>{isEnglish ? `Why Babula Shots in ${city.city}` : `Por que Babula Shots en ${city.city}`}</h2>
            <p>
              {isEnglish
                ? `We plan each session around local logistics: access, security, sunlight, parking, building rules, community permissions and whether drone is useful or permitted in the area. In ${city.city}, a strong gallery should explain the property and the surrounding value quickly, especially in zones such as ${city.areas.join(", ")}.`
                : `Planificamos cada sesion segun la logistica local: acceso, seguridad, luz solar, parqueo, reglas del edificio, permisos de comunidad y si el drone aporta o esta permitido en la zona. En ${city.city}, una galeria fuerte debe explicar la propiedad y el valor del entorno rapido, especialmente en zonas como ${city.areas.join(", ")}.`}
            </p>
            <p>
              {isEnglish
                ? `For gated communities, towers, resorts and private villas, we confirm what can be captured before arrival. Drone work is treated carefully: weather, wind, privacy, flight restrictions and community rules are reviewed so the content supports the sale without creating problems for the owner or agent.`
                : `Para comunidades cerradas, torres, resorts y villas privadas, confirmamos antes de llegar que se puede capturar. El trabajo con drone se maneja con cuidado: clima, viento, privacidad, restricciones de vuelo y reglas de comunidad se revisan para que el contenido apoye la venta sin crear problemas al propietario o agente.`}
            </p>
            <ul className="service-list">
              {(isEnglish
                ? ["Local shot plan", "Drone and access coordination", "Portal-ready exports", "WhatsApp booking support"]
                : ["Plan de tomas local", "Coordinacion de drone y acceso", "Exportacion lista para portales", "Soporte de reserva por WhatsApp"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

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
                : `Estos son precios base de referencia para planificar contenido inmobiliario en ${city.city}. Precios estandarizados para RD con garantia de Babula Shots. La cotizacion final depende de zona, tamano de la propiedad, cantidad de espacios, traslado, urgencia y si incluye foto, video, drone o reels.`}
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
              <a href={pricingSourceUrl}>{isEnglish ? "published Babula Shots prices" : "Precios de sesiones de fotos en RD"}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Local expert" : "Experto local"}</p>
          <div>
            <h2>{isEnglish ? `Local production guide for ${city.city}` : `Guia local de produccion en ${city.city}`}</h2>
            <div className="authority-grid">
              <article className="card authority-card">
                <span>{isEnglish ? "Best local areas" : "Mejores locaciones y zonas"}</span>
                <p>
                  {isEnglish
                    ? `In ${city.city}, the strongest visual story usually comes from areas such as ${city.areas.join(", ")}. These places help explain lifestyle, access, investment value and the type of buyer or guest the property attracts.`
                    : `En ${city.city}, la historia visual mas fuerte normalmente sale de zonas como ${city.areas.join(", ")}. Estas locaciones ayudan a explicar lifestyle, acceso, valor de inversion y el tipo de comprador o huesped que atrae la propiedad.`}
                </p>
                <ul className="service-list">{city.areas.map((area) => <li key={area}>{area}</li>)}</ul>
              </article>
              <article className="card authority-card">
                <span>{isEnglish ? "Logistics and permissions" : "Logistica y permisos"}</span>
                <p>
                  {isEnglish
                    ? `For resorts, gated communities, towers and private villas in ${city.city}, access should be confirmed before the session. Drone work may require owner, administration or community approval depending on the area, privacy rules and flight conditions.`
                    : `Para resorts, comunidades cerradas, torres y villas privadas en ${city.city}, el acceso debe confirmarse antes de la sesion. El trabajo con drone puede requerir aprobacion de propietario, administracion o comunidad segun la zona, reglas de privacidad y condiciones de vuelo.`}
                </p>
              </article>
              <article className="card authority-card">
                <span>{isEnglish ? "Climate and light" : "Clima y luz"}</span>
                <p>
                  {isEnglish
                    ? `The safest visual window in ${city.city} is usually early morning or late afternoon, when interiors are easier to balance and exterior light feels warmer. For pools, beach, balconies and views, golden hour can improve perceived value without making the property look fake.`
                    : `La ventana visual mas segura en ${city.city} suele ser temprano en la manana o al final de la tarde, cuando los interiores se equilibran mejor y la luz exterior se siente mas calida. Para piscinas, playa, balcones y vistas, la hora dorada puede mejorar la percepcion de valor sin hacer que la propiedad parezca falsa.`}
                </p>
              </article>
            </div>
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
      <FaqBlock items={visibleFaq} />

      <section className="section alt-section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Local services" : "Servicios locales"}</p>
          <div>
            <h2>{isEnglish ? `Services available in ${city.city}` : `Servicios disponibles en ${city.city}`}</h2>
            <p>
              {isEnglish
                ? `Choose the service path that matches the property. These links help users and search engines connect ${city.city} with the most relevant media services.`
                : `Elige el servicio que corresponde a la propiedad. Estos enlaces ayudan a usuarios y buscadores a conectar ${city.city} con los servicios de contenido mas relevantes.`}
            </p>
            <div className="related-links">
              {localServiceLinks.map((service) => (
                <Link href={servicePath(service, locale)} key={service.slug}>{isEnglish ? service.enH1 : service.h1}</Link>
              ))}
              <a href={mainBrandUrl}>{isEnglish ? `Babula Shots photographer in Dominican Republic` : `Fotografo en Republica Dominicana`}</a>
              <a href={santoDomingoHubUrl}>{isEnglish ? "Best photographer in Santo Domingo" : "Mejor fotógrafo en Santo Domingo"}</a>
              <a href={pricingSourceUrl}>{isEnglish ? "Photo session prices in DR" : "Precios de sesiones de fotos en RD"}</a>
              <a href={bookingUrl}>{isEnglish ? "Book session" : "Reservar sesión"}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "National coverage" : "Cobertura nacional"}</p>
          <div>
            <h2>{isEnglish ? "Connected to the Babula Shots ecosystem" : "Conectado al ecosistema Babula Shots"}</h2>
            <p>
              {isEnglish
                ? `This real estate page is supported by the wider Babula Shots brand ecosystem. The Santo Domingo photography hub helps reinforce the national brand entity while this subdomain focuses on property media and city-specific real estate searches.`
                : `Esta pagina inmobiliaria se apoya en el ecosistema de marca de Babula Shots. El hub fotografico de Santo Domingo refuerza la entidad nacional de la marca, mientras este subdominio se enfoca en contenido para propiedades y busquedas inmobiliarias por ciudad.`}
            </p>
            <div className="related-links">
              <a href={mainBrandUrl}>Babula Shots RD</a>
              <a href={santoDomingoHubUrl}>{isEnglish ? "Best photographer in Santo Domingo" : "Mejor fotógrafo en Santo Domingo"}</a>
              <a href={pricingSourceUrl}>{isEnglish ? "Photo session prices in DR" : "Precios de sesiones de fotos en RD"}</a>
              <a href={bookingUrl}>{isEnglish ? "Book session" : "Reservar sesión"}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <p className="section-tag">{isEnglish ? "Reviews" : "Resenas"}</p>
          <div>
            <h2>{isEnglish ? `Verified local proof for ${city.city}` : `Prueba local verificada para ${city.city}`}</h2>
            <p>
              {isEnglish
                ? `We do not publish fake reviews or unsupported star ratings. When verified testimonials from ${city.city} clients are approved for public use, this section can display them with the exact service, property type and permission status.`
                : `No publicamos resenas falsas ni ratings sin soporte. Cuando haya testimonios verificados de clientes en ${city.city} aprobados para uso publico, esta seccion puede mostrarlos con servicio exacto, tipo de propiedad y estado de permiso.`}
            </p>
            <ul className="service-list">
              {(isEnglish
                ? ["Verified client name or approved anonymous credit", "Property type and city", "Service delivered", "No fake star ratings"]
                : ["Nombre verificado o credito anonimo aprobado", "Tipo de propiedad y ciudad", "Servicio realizado", "Sin ratings falsos"]
              ).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

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
