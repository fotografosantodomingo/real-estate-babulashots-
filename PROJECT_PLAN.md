# Inmobiliaria Babula Shots Production Plan

Production URL: https://inmobiliaria.babulashotsrd.com
Alternative URL only if the strategy changes later: https://babulashotsrd.com/inmobiliaria/
Repository: git@github.com:fotografosantodomingo/real-estate-babulashots-.git
Local path: /Users/subdomainsbabulashots/Documents/inmobiliaria
Cloudflare Pages project: inmobilliaria-babulashots
Current Pages preview: https://f4d2dd58.inmobilliaria-babulashots.pages.dev

## Goal

Create a production-ready SEO and lead-generation website for Babula Shots real estate media services in the Dominican Republic. The goal is to compete for #1 Google rankings in the most valuable real estate media searches by combining static SEO speed, consolidated domain authority, richer schema, deeper topical authority, clearer conversion paths, better service segmentation, stronger proof, and a content structure built for real estate agents, brokers, developers, Airbnb hosts, villa owners, hotels, and property investors.

No SEO plan can guarantee #1 rankings, but the architecture should remove avoidable disadvantages before the first line of production code is written.

The site must position Babula Shots as a professional real estate media partner, not only a photographer. The offer includes photography, video, drone, reels, walkthroughs, social media content, listing media, developer content, rental property content, and visual marketing for properties.

Primary business goals:
- Generate WhatsApp and form leads for real estate photo/video jobs.
- Rank for Spanish and English real estate media searches in Dominican Republic.
- Build topical authority around property marketing, real estate photography, drone video, Airbnb/villa content, and developer content.
- Support future CRM tracking without hurting Lighthouse scores.
- Make every page useful enough to convert, not only index.

Performance targets:
- Lighthouse SEO: 100/100
- Lighthouse Performance: 100/100 target
- Lighthouse Accessibility: 100/100 target
- Lighthouse Best Practices: 100/100 target
- Mobile Core Web Vitals ready: low CLS, low INP, fast LCP

## Positioning

Core Spanish positioning:

Babula Shots crea fotografia, video y contenido inmobiliario profesional para vender, alquilar y promocionar propiedades en Republica Dominicana.

Core English positioning:

Babula Shots creates professional real estate photography, video, drone, and listing content for properties across the Dominican Republic.

Audience segments:
- Real estate agents
- Inmobiliarias and brokerages
- Developers and construction companies
- Airbnb and short-term rental hosts
- Villa owners
- Hotel and resort property teams
- Interior designers and architects
- Commercial property owners
- Foreign investors selling or renting in Dominican Republic

Primary conversion actions:
- WhatsApp quote request
- Contact form request
- Call request
- Package/pricing inquiry
- Same-week booking inquiry
- Developer/project content consultation

## Technical Approach

Use the proven static architecture from the boda site, but improve the information model and page intent mapping.

Stack:
- Next.js static export
- TypeScript
- App Router
- root deployment on the subdomain with no Next.js basePath
- Static route generation
- Static sitemap generation
- Static robots configuration
- Cloudflare Pages-compatible _headers and _redirects
- Optimized WebP/AVIF-ready image workflow
- Minimal JavaScript
- No runtime image optimization dependency
- No third-party scripts in the initial build unless they are deferred and measured
- Strong internal linking from data files
- Bilingual Spanish and English routes

## SEO Architecture Decision

Final architecture:

```text
https://inmobiliaria.babulashotsrd.com/
```

Use the real estate site as a dedicated subdomain in front of the main Babula Shots domain. This keeps the brand connection clear while giving the real estate business its own clean URL, Cloudflare Pages project, sitemap, robots file, and Search Console property.

Do not use this as the production canonical unless the strategy changes later:

```text
https://babulashotsrd.com/inmobiliaria/
```

Google can crawl and rank both subdomains and subfolders. Because the production requirement is now the subdomain, the site must compensate for the separated property by using strong internal links from the main Babula Shots domain, backlinks to the subdomain, real portfolio proof, precise local schema, and consistent Search Console monitoring.

Dedicated-root-domain alternative:

```text
https://fotografoinmobiliariord.com/
```

Only consider a separate root domain if the long-term plan is to build and possibly sell a standalone real estate media brand. For the current Babula Shots strategy, keep the real estate service on inmobiliaria.babulashotsrd.com and strengthen it with links from the main domain.

Next.js deployment requirement:

```js
// next.config.mjs
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
```

Cloudflare Pages should serve this repo directly from the custom domain inmobiliaria.babulashotsrd.com. If old /inmobiliaria paths exist from testing, redirect them to the equivalent root path on the subdomain.

Recommended project structure:

```text
app/
  page.tsx
  layout.tsx
  globals.css
  sitemap.ts
  robots.ts
  [slug]/page.tsx
  en/
    page.tsx
    [slug]/page.tsx
components/
  RealEstateHome.tsx
  RealEstateCityPage.tsx
  RealEstateServicePage.tsx
  RealEstateIndustryPage.tsx
  RealEstateBlogPage.tsx
  BeforeAfterSlider.tsx
  PropertyGallery.tsx
  ClientLogos.tsx
  Integrations.tsx
  ConversionPanel.tsx
  ServicePackages.tsx
  ProofStrip.tsx
  FaqBlock.tsx
  SiteHeader.tsx
  SiteFooter.tsx
  ThemeLanguageControls.tsx
  SeoJsonLd.tsx
lib/
  realEstateCities.ts
  realEstateServices.ts
  realEstateIndustries.ts
  realEstatePackages.ts
  blogPosts.ts
  routeMap.ts
  seo.ts
public/
  _headers
  _redirects
  images/
```

## URL Strategy

Use clean Spanish routes for the main site and English routes under /en/. Keep slugs consistent, short, and search-focused. Each route must have one exact language pair in routeMap.ts so the language switcher never points to weak or unrelated pages.

When deployed on the subdomain, canonical routes are root-relative:

```text
/fotografia-inmobiliaria-punta-cana/
/en/real-estate-photography-punta-cana/
```

Inside data files, store slugs without a domain prefix and generate canonical URLs with a central helper so the site can be moved later without manually rewriting every route.

Homepage:
- /
- /en/

Spanish national pages:
- /fotografia-inmobiliaria-republica-dominicana/
- /foto-video-inmobiliario/
- /video-inmobiliario-republica-dominicana/
- /fotografia-drone-inmobiliaria/
- /precios-fotografia-inmobiliaria-republica-dominicana/

English national pages:
- /en/real-estate-photography-dominican-republic/
- /en/real-estate-photo-video/
- /en/real-estate-video-dominican-republic/
- /en/drone-real-estate-photography/
- /en/real-estate-photography-prices-dominican-republic/

## City SEO Pages

Each city page should be unique, conversion-oriented, and locally specific. Do not create thin pages. Every city page needs local property types, likely client segments, deliverables, nearby areas, FAQs, and internal links.

Priority 1 cities/areas:
- /fotografia-inmobiliaria-santo-domingo/
- /fotografia-inmobiliaria-punta-cana/
- /fotografia-inmobiliaria-la-romana/
- /fotografia-inmobiliaria-santiago/
- /fotografia-inmobiliaria-cap-cana/
- /fotografia-inmobiliaria-casa-de-campo/

Priority 2 cities/areas:
- /fotografia-inmobiliaria-las-terrenas/
- /fotografia-inmobiliaria-samana/
- /fotografia-inmobiliaria-puerto-plata/
- /fotografia-inmobiliaria-bayahibe/
- /fotografia-inmobiliaria-jarabacoa/
- /fotografia-inmobiliaria-juan-dolio/
- /fotografia-inmobiliaria-bavaro/
- /fotografia-inmobiliaria-miches/

English equivalents:
- /en/real-estate-photography-santo-domingo/
- /en/real-estate-photography-punta-cana/
- /en/real-estate-photography-la-romana/
- /en/real-estate-photography-santiago/
- /en/real-estate-photography-cap-cana/
- /en/real-estate-photography-casa-de-campo/
- /en/real-estate-photography-las-terrenas/
- /en/real-estate-photography-samana/
- /en/real-estate-photography-puerto-plata/
- /en/real-estate-photography-bayahibe/
- /en/real-estate-photography-jarabacoa/
- /en/real-estate-photography-juan-dolio/
- /en/real-estate-photography-bavaro/
- /en/real-estate-photography-miches/

Local angle requirements:
- Santo Domingo: towers, apartments, commercial spaces, Airbnb units, developers, brokers, Piantini, Naco, Bella Vista, Zona Colonial.
- Punta Cana: villas, condos, resorts, Airbnb, Bavaro, Cap Cana, Cocotal, beach listings, foreign buyers.
- La Romana: Casa de Campo, Altos de Chavon, villas, luxury listings, private communities.
- Santiago: residential towers, urban apartments, commercial listings, local brokers, developer launches.
- Cap Cana: luxury villas, marina properties, golf communities, investor listings.
- Casa de Campo: premium villas, architecture, vacation rental portfolios, luxury resale listings.
- Las Terrenas/Samana: villas, vacation rentals, beachfront properties, boutique hotels, expat/investor market.
- Puerto Plata: vacation rentals, beach properties, villas, mountain/ocean-view listings.
- Jarabacoa: mountain villas, cabins, land, eco-tourism rentals.
- Miches: emerging resort and investment area, beachfront projects, developer marketing.

## Service Pages

Service pages should rank and convert by matching the buyer's actual need.

Spanish:
- /fotografia-inmobiliaria-republica-dominicana/
- /foto-video-inmobiliario/
- /video-inmobiliario-republica-dominicana/
- /fotografia-drone-inmobiliaria/
- /reels-inmobiliarios/
- /contenido-para-agentes-inmobiliarios/
- /contenido-para-inmobiliarias-constructoras/
- /fotografia-para-airbnb-villas/
- /fotografia-para-apartamentos-en-venta/
- /fotografia-para-casas-en-venta/
- /fotografia-para-proyectos-inmobiliarios/
- /fotografia-arquitectura-interiores/
- /tour-virtual-inmobiliario/
- /edicion-fotos-inmobiliarias/
- /precios-fotografia-inmobiliaria-republica-dominicana/

English:
- /en/real-estate-photography-dominican-republic/
- /en/real-estate-photo-video/
- /en/real-estate-video-dominican-republic/
- /en/drone-real-estate-photography/
- /en/real-estate-reels/
- /en/content-for-real-estate-agents/
- /en/content-for-real-estate-companies-developers/
- /en/airbnb-villa-photography/
- /en/apartment-listing-photography/
- /en/home-listing-photography/
- /en/real-estate-development-photography/
- /en/architecture-interior-photography/
- /en/real-estate-virtual-tour/
- /en/real-estate-photo-editing/
- /en/real-estate-photography-prices-dominican-republic/

Each service page must include:
- Problem being solved
- Who it is for
- Deliverables
- Turnaround expectations
- Recommended add-ons
- MLS, Point2Homes, Airbnb, and listing-platform formatting note where relevant
- Before/after proof or visual examples
- Property gallery
- City/service internal links
- FAQ
- CTA
- Schema

## Industry / Client Segment Pages

These pages make the site stronger than the boda plan because they target commercial search intent and client-specific use cases.

Spanish:
- /fotografia-para-agentes-inmobiliarios/
- /fotografia-para-inmobiliarias/
- /contenido-para-desarrolladores-inmobiliarios/
- /fotografia-para-airbnb/
- /fotografia-para-villas-de-lujo/
- /contenido-para-proyectos-en-construccion/
- /fotografia-para-hoteles-apartahoteles/
- /fotografia-para-locales-comerciales/

English:
- /en/photography-for-real-estate-agents/
- /en/photography-for-real-estate-companies/
- /en/content-for-real-estate-developers/
- /en/airbnb-photography/
- /en/luxury-villa-photography/
- /en/content-for-construction-projects/
- /en/hotel-aparthotel-photography/
- /en/commercial-property-photography/

## Content Clusters

Build topical authority with clusters. Each cluster should link back to its parent service page and to at least two city pages.

Cluster: Sell/Rent Faster
- Mejores fotos para vender una propiedad en Republica Dominicana
- Como preparar una propiedad antes de una sesion de fotos
- Fotos profesionales vs fotos de celular para vender propiedades
- Como mejorar anuncios inmobiliarios con foto, video y reels
- Checklist visual para publicar una propiedad

Cluster: Pricing and Packages
- Cuanto cuesta fotografia inmobiliaria en Republica Dominicana
- Que incluye una sesion de fotografia inmobiliaria profesional
- Precios de video inmobiliario en Republica Dominicana
- Cuanto cuesta fotografia con drone para propiedades
- Paquetes de foto y video para agentes inmobiliarios

Cluster: Airbnb and Villas
- Fotografia inmobiliaria para Airbnb y villas turisticas
- Como mejorar fotos de Airbnb para conseguir mas reservas
- Fotos para villas de lujo en Punta Cana y Casa de Campo
- Contenido para alquileres vacacionales en Las Terrenas
- Video para villas turisticas en Republica Dominicana

Cluster: Developers and Projects
- Contenido para proyectos inmobiliarios en Santo Domingo
- Foto y video para preventa de apartamentos
- Marketing visual para proyectos inmobiliarios en construccion
- Como crear contenido para lanzamiento de torre residencial
- Fotografia de arquitectura para desarrolladores

Cluster: Drone and Video
- Video inmobiliario: que debe incluir para vender mas rapido
- Fotografia con drone para propiedades en Punta Cana
- Cuando usar drone para vender una propiedad
- Reels inmobiliarios para agentes y brokers
- Tour visual para propiedades premium

## Page Template Requirements

Every SEO landing page should include:
- Unique title and meta description
- One clear H1 matching search intent
- Above-the-fold CTA
- Short proof/credibility strip
- Client logo or platform trust strip where truthful
- Local/service-specific intro
- Deliverables section
- Property types served
- Visual proof section
- Process section
- Package or quote guidance
- Related city/service links
- FAQ section
- Final CTA
- JSON-LD schema
- Optimized image with descriptive alt text

Homepage sections:
- Hero with exact service promise
- Client logos or trust strip
- Service categories
- Cities served
- Client segments
- Process
- Packages or quote paths
- Featured property media examples
- FAQ
- Final CTA

Avoid visible educational text that explains how to use the site. The interface should be direct and professional.

## Visual-First B2B Content Rules

Real estate pages should sell through proof, clarity, and speed. Agents and developers need to see whether the media will help them list, rent, sell, or launch a property.

Content length targets:
- Service pages: 350-500 words, supported by galleries, before/after sliders, deliverables, turnaround, and CTA.
- City pages: 500-700 words, with at least 50% of the perceived page value coming from local property visuals, service cards, and conversion sections.
- Industry pages: 500-700 words, focused on the client segment's workflow and pain points.
- Blog guides: 1,000+ words when the topic is educational and search intent supports depth.

Service and city pages should prioritize:
- Portfolio examples
- Before/after edits
- Fast deliverables
- Platform-ready formats
- Prices or quote paths
- Exact property types
- Trust signals

Avoid long essay-style service pages. If extra explanation is useful, move it into blog guides and link to the guide from the service page.

## Trust and Proof Architecture

Real estate is a B2B trust market. The site needs proof components from the first build.

Required components:
- ClientLogos.tsx
- Integrations.tsx
- ProofStrip.tsx
- BeforeAfterSlider.tsx
- PropertyGallery.tsx

ClientLogos.tsx:
- Show real client, brokerage, developer, hotel, or platform relationships only when truthful and contractually allowed.
- If logo permission is uncertain, use neutral wording such as "Media prepared for agents, brokers, developers, Airbnb hosts, and villa owners across RD" instead of unauthorized logos.

Integrations.tsx:
- State that deliverables can be formatted for MLS-style listings, Point2Homes, Airbnb, social reels, website galleries, Google Business Profile, brochures, and developer launch campaigns.
- Do not claim official integration or partnership unless it exists.

Required conversion wording on relevant pages:

```text
Photos and video can be delivered in formats ready for MLS-style listings, Point2Homes, Airbnb, social media, websites, and developer sales campaigns.
```

## Conversion and CRM Plan

Initial build should be fast and static. CRM integrations should be designed but only added after measuring performance.

Lead fields:
- Name
- Phone/WhatsApp
- Email
- City
- Property type
- Service needed
- Property address or area
- Desired date
- Message

Lead categories:
- Agent listing
- Developer project
- Airbnb/villa
- Commercial property
- Hotel/aparthotel
- Drone/video only
- Monthly content plan

CTA destinations:
- WhatsApp with prefilled message by page type
- Lightweight contact form
- Email fallback
- Phone link

Tracking plan:
- Use UTM-ready CTA URLs
- Add event names in code for future analytics
- Defer analytics scripts
- Keep no-JS fallback links
- Use Cloudflare Web Analytics only if it does not affect Lighthouse meaningfully

CRM readiness:
- Form payload should be structured so it can later connect to HubSpot, Zoho, Notion, Airtable, Google Sheets, or a webhook.
- Do not hardcode a heavy CRM script in the first release.
- Prefer serverless/static-compatible form handling later if needed.

## Dynamic WhatsApp CTA Requirements

Every route object in routeMap.ts must include a whatsappMessage. ConversionPanel.tsx must use that exact page-specific message in the wa.me text parameter.

Example route object:

```ts
{
  slug: "fotografia-inmobiliaria-punta-cana",
  enSlug: "real-estate-photography-punta-cana",
  type: "city",
  whatsappMessage:
    "Hola, vengo de su web. Necesito cotizacion para fotografiar una villa, apartamento o resort en Punta Cana. Tienen disponibilidad esta semana?"
}
```

Required examples:

Punta Cana city page:

```text
Hola, vengo de su web. Necesito cotizacion para fotografiar una villa, apartamento o resort en Punta Cana. Tienen disponibilidad esta semana?
```

Developer content page:

```text
Hola, busco agencia de contenido para lanzamiento de proyecto inmobiliario en Santo Domingo. Podemos agendar una llamada?
```

Airbnb/villa page:

```text
Hola, necesito fotos profesionales para mi Airbnb o villa en Republica Dominicana. Cual es el precio por propiedad?
```

Drone page:

```text
Hola, necesito foto o video con drone para una propiedad en Republica Dominicana. Me pueden enviar opciones y disponibilidad?
```

Pricing page:

```text
Hola, vengo de la pagina de precios. Quiero cotizar foto, video o drone para una propiedad. Me pueden orientar?
```

## Schema Strategy

Use JSON-LD by page type. Every schema block should be valid, minimal, and specific.

Global:
- Organization
- LocalBusiness
- ProfessionalService
- WebSite
- SearchAction only if a real site search exists later

Homepage:
- ProfessionalService
- LocalBusiness
- WebSite
- WebPage
- BreadcrumbList
- OfferCatalog for main service categories

City pages:
- ProfessionalService
- Service
- WebPage
- BreadcrumbList
- FAQPage
- areaServed using city, province, and country nesting

Service pages:
- Service
- ProfessionalService provider
- OfferCatalog or Offer
- FAQPage
- BreadcrumbList

Industry pages:
- Service
- WebPage
- FAQPage
- BreadcrumbList

Blog pages:
- Article
- FAQPage when FAQs exist
- BreadcrumbList

Media-rich pages:
- ImageObject
- VideoObject only when an actual video asset, thumbnail, uploadDate, and description exist

Rules:
- Do not mark testimonials/reviews unless real reviews exist.
- Do not use Product schema for services unless there is a fixed purchasable package.
- Keep schema content aligned with visible page content.
- Validate with Google Rich Results Test and Schema.org validator.

City areaServed pattern:

```json
"areaServed": {
  "@type": "City",
  "name": "Punta Cana",
  "containedInPlace": {
    "@type": "State",
    "name": "La Altagracia",
    "containedInPlace": {
      "@type": "Country",
      "name": "Dominican Republic"
    }
  }
}
```

Homepage service catalog pattern:

```json
"hasOfferCatalog": {
  "@type": "OfferCatalog",
  "name": "Real Estate Media Services",
  "itemListElement": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Real Estate Photography"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Drone Real Estate Video"
      }
    }
  ]
}
```

## Internal Linking

Every page should have a deliberate link graph.

Homepage links to:
- Top services
- Priority cities
- Pricing page
- Agent/developer/Airbnb segment pages

City pages link to:
- National real estate photography page
- Photo/video page
- Drone page
- Airbnb/villa page if relevant
- Nearby cities
- Pricing page

Service pages link to:
- Related service add-ons
- Priority city pages
- Industry pages
- Pricing page
- Relevant blog guides

Blog pages link to:
- One parent service page
- Two related service pages
- Two relevant city pages
- Pricing page where natural

Use data-driven internal links so the sitemap, navigation, and page cards stay consistent.

## Image and Asset Plan

Real estate pages need real-looking property media. Avoid wedding images on this domain.

Asset categories:
- Apartment interiors
- Luxury villas
- Drone exterior/property views
- Real estate agent listing session
- Commercial spaces
- Airbnb/vacation rental interiors
- Construction/developer project images
- Detail shots: kitchen, balcony, pool, lobby, bedroom, facade

Image requirements:
- WebP, with AVIF optional later
- Interior WebP images up to 200 KB when needed for clean walls, accurate color, and reduced banding
- Exterior and drone WebP images generally under 150 KB where possible
- Hero images generally under 200 KB where possible
- Supporting images generally under 150 KB
- Thumbnails under 60 KB
- Explicit dimensions or aspect-ratio
- Descriptive filenames
- Descriptive alt text
- No dark, generic, or overly cropped images where the property should be inspected
- Do not compress interiors so aggressively that walls, windows, shadows, or room edges show visible artifacts

## Lighthouse / Quality Gates

Build must pass:
- npm run build
- TypeScript compile
- No broken internal links
- Sitemap includes every canonical route
- Robots points to https://inmobiliaria.babulashotsrd.com/sitemap.xml
- Lighthouse desktop target: 100/100/100/100
- Lighthouse mobile target: as close to 100 as practical, with no critical SEO/accessibility failures

Performance rules:
- Static export only
- Minimal client components
- No layout shift
- No blocking third-party scripts
- No oversized hero images
- No webfont dependency unless measured and justified
- CSS kept lean
- Cache headers for images, CSS, JS
- HTML revalidates

Accessibility rules:
- Semantic landmarks
- One H1 per page
- Logical heading order
- Keyboard-accessible nav
- Proper labels for controls
- Strong color contrast
- Meaningful alt text
- No text overlap at mobile widths

SEO rules:
- Unique title and description per route
- Canonical URL per page
- hreflang pair for Spanish/English pages
- Clean 301 redirects
- Valid sitemap
- Structured data per page type
- No duplicate thin city pages

Ranking-readiness rules:
- Do not launch city pages without relevant local visuals or at least a truthful placeholder strategy.
- Do not rely on word count to rank service pages.
- Do not ship generic WhatsApp messages.
- Do not claim brokerage/developer logos without permission.
- Do not mix subfolder and subdomain canonicals. The production canonical is the subdomain.

## Redirects

Prepare redirects for legacy, alternate, and typo-prone URLs:

```text
/real-estate-photography-dominican-republic/ /en/real-estate-photography-dominican-republic/ 301
/fotografo-inmobiliario-rd/ /fotografia-inmobiliaria-republica-dominicana/ 301
/fotografia-inmobiliaria-rd/ /fotografia-inmobiliaria-republica-dominicana/ 301
/fotografia-de-inmuebles-rd/ /fotografia-inmobiliaria-republica-dominicana/ 301
/video-inmobiliario-rd/ /video-inmobiliario-republica-dominicana/ 301
/drone-inmobiliario-rd/ /fotografia-drone-inmobiliaria/ 301
/fotografia-airbnb-rd/ /fotografia-para-airbnb-villas/ 301
/fotos-para-airbnb/ /fotografia-para-airbnb-villas/ 301
/foto-video-propiedades/ /foto-video-inmobiliario/ 301
/contenido-inmobiliario/ /contenido-para-agentes-inmobiliarios/ 301
```

If old subfolder URLs were used during testing, add canonical redirects:

```text
https://babulashotsrd.com/inmobiliaria/* https://inmobiliaria.babulashotsrd.com/:splat 301
```

Exact Cloudflare syntax must be confirmed during deployment.

## Content Standards

Spanish content should sound Dominican-market-aware, professional, and direct. English content should serve foreign owners, investors, agents, and developers working in Dominican Republic.

Each page should avoid generic filler. Strong pages should mention:
- Property type
- Buyer/renter goal
- Visual deliverables
- Location context
- Turnaround expectations
- Add-ons
- What the client should prepare

Tone:
- Confident
- Practical
- Premium but not flashy
- Sales-focused without being aggressive

Avoid:
- Keyword stuffing
- Duplicate intros across cities
- Promises of guaranteed sales
- Fake reviews
- Unsupported claims
- Heavy scripts or embeds

## Production Checklist

1. Scaffold Next.js static export project.
2. Reuse proven technical patterns from boda.babulashotsrd.com.
3. Improve route mapping with a central routeMap.ts from the start.
4. Create data files for cities, services, industries, packages, and blog posts.
5. Build Spanish and English homepages.
6. Build city pages.
7. Build service pages.
8. Build industry/client segment pages.
9. Build blog/article pages.
10. Add conversion panels and prefilled WhatsApp CTAs.
11. Add schema per page type.
12. Add sitemap, robots, canonical URLs, and hreflang.
13. Add Cloudflare Pages headers and redirects.
14. Add optimized real estate images.
15. Run build and static export.
16. Run link checks.
17. Run Lighthouse desktop and mobile.
18. Fix performance, accessibility, SEO, and best-practice issues.
19. Commit initial production site.
20. Push to GitHub remote.
21. Connect Cloudflare Pages.
22. Configure inmobiliaria.babulashotsrd.com as the production custom domain in Cloudflare Pages.
23. Submit sitemap in Google Search Console.
24. Track indexed pages and improve content based on impressions.

## Cloudflare Deployment Status

Current status:
- GitHub repository pushed successfully over HTTPS.
- Cloudflare Pages project exists: inmobilliaria-babulashots.
- Latest production deployment uploaded from the local static export.
- Deployment URL: https://f4d2dd58.inmobilliaria-babulashots.pages.dev
- Build output directory saved in wrangler.toml as out.
- Content audit passed for all 96 canonical pages: one H1, title, meta description, canonical, visible content, and JSON-LD.
- Schema audit passed for all 96 canonical pages: valid JSON-LD parsing, BreadcrumbList, and core page/service/article schema.
- Lighthouse desktop template checks passed at 100/100/100/100 after rerun on homepage, city, service, pricing, industry, blog, and English templates.
- A full sitemap Lighthouse sweep passed 95/96 routes on first run and the only 99-performance page passed 100/100/100/100 on rerun, indicating timing variance rather than a code issue.

Cloudflare Pages settings:
- Project name: inmobilliaria-babulashots
- Production branch: main
- Build command: npm run build
- Output directory: out
- Framework preset: Next.js static export or None/custom
- Node version: current Cloudflare default is acceptable if npm run build passes; set Node 20+ if Cloudflare asks.

Custom domain still required:
- Add custom domain in Cloudflare Pages: inmobiliaria.babulashotsrd.com
- The DNS for babulashotsrd.com is currently managed by Hostinger nameservers, not Cloudflare DNS.
- The current live subdomain is still served by Hostinger/WordPress, so DNS must be changed before the Cloudflare Pages build becomes live on the production URL.
- Hostinger DNS must add a CNAME record:

```text
Type: CNAME
Name: inmobiliaria
Target: inmobilliaria-babulashots.pages.dev
TTL: 300 or automatic
Proxy: DNS only if managed outside Cloudflare
```

After DNS is added:
- Wait for propagation.
- Verify https://inmobiliaria.babulashotsrd.com loads the site.
- Verify https://inmobiliaria.babulashotsrd.com/sitemap.xml.
- Submit https://inmobiliaria.babulashotsrd.com/sitemap.xml in Google Search Console.

## Initial Build Milestones

Milestone 1: Foundation
- Next.js setup
- Static export
- root subdomain deployment with no basePath
- Header/footer
- Theme/language controls
- Core CSS
- Sitemap/robots
- Headers/redirects
- routeMap.ts with whatsappMessage on every route
- ConversionPanel.tsx using dynamic WhatsApp messages
- PropertyGallery.tsx
- BeforeAfterSlider.tsx
- ClientLogos.tsx
- Integrations.tsx

Milestone 2: Money Pages
- Homepage
- National photography page
- Photo/video page
- Drone page
- Pricing page
- Santo Domingo, Punta Cana, La Romana, Santiago

Milestone 3: Authority Expansion
- Remaining city pages
- Industry pages
- First 10 blog articles
- Internal link graph
- Schema validation

Milestone 4: Production QA
- Image compression
- Build verification
- Lighthouse
- Mobile layout QA
- Redirect QA
- Search Console submission

## Google Domination Execution Plan

The goal is to build the strongest realistic chance of ranking #1 for the planned real estate media keywords. This requires more than technical SEO. The site must combine search intent, local proof, schema accuracy, conversion behavior, and off-page authority.

### Phase 1: Indexable Authority Foundation

Status target before launch:
- 100% static export.
- All canonical URLs under https://inmobiliaria.babulashotsrd.com/.
- Sitemap includes every Spanish and English page.
- Robots points to https://inmobiliaria.babulashotsrd.com/sitemap.xml.
- Every route has a title, meta description, canonical URL, hreflang pair, schema, FAQ where useful, and dynamic WhatsApp CTA.
- No generic city pages.
- No city page launches without relevant real estate visuals or a truthful gallery/portfolio fallback.

Critical checks:
- Confirm the Cloudflare Pages custom domain is attached to inmobiliaria.babulashotsrd.com.
- Add strong links from babulashotsrd.com to the subdomain because authority will not be consolidated through a subfolder.
- Submit only the final canonical sitemap to Google Search Console.

### Phase 2: Money Keyword Pages

Highest-priority ranking pages:
- /fotografia-inmobiliaria-republica-dominicana/
- /fotografia-inmobiliaria-santo-domingo/
- /fotografia-inmobiliaria-punta-cana/
- /foto-video-inmobiliario/
- /video-inmobiliario-republica-dominicana/
- /fotografia-drone-inmobiliaria/
- /fotografia-para-airbnb-villas/
- /precios-fotografia-inmobiliaria-republica-dominicana/

Each money page must have:
- One exact-intent H1.
- Fast above-the-fold WhatsApp CTA.
- Local/service proof within the first viewport.
- Platform-ready deliverables: MLS-style listings, Point2Homes, Airbnb, social reels, websites, brochures, developer campaigns.
- Portfolio gallery using real property work.
- FAQ schema matching visible FAQ.
- Internal links to related city, service, pricing, and guide pages.

### Phase 3: Local Market Capture

Priority local markets:
- Santo Domingo
- Punta Cana
- Cap Cana
- Casa de Campo
- La Romana
- Santiago
- Bavaro
- Las Terrenas
- Samana
- Puerto Plata
- Bayahibe
- Jarabacoa
- Juan Dolio
- Miches

Local ranking requirements:
- Mention province/city context accurately.
- Use nested areaServed schema with City, State, and Country.
- Include nearby areas and property types.
- Show local-relevant visuals where possible.
- Link each city to the national page, pricing page, and the most relevant service pages.
- Add city-specific WhatsApp messages, not generic inquiry text.

### Phase 4: Topical Authority Content

Publish and improve blog clusters around:
- Selling and renting faster.
- Real estate media pricing.
- Airbnb and villa photography.
- Developer/project launches.
- Drone, reels, and video.

Blog goals:
- Answer informational searches that agents and owners actually search before hiring.
- Link every article to one parent money page, two service pages, two city pages, and pricing where natural.
- Keep guides deep enough to be useful, usually 1,000+ words.
- Avoid turning money pages into essays. Service pages should stay visual-first.

### Phase 5: Proof and Conversion Signals

Required proof upgrades:
- Add more real property photos from approved Babula galleries.
- Add client/broker/developer logos only when permission is clear.
- Add neutral trust copy when logo permission is not clear.
- Add before/after examples for editing, interiors, twilight, drone, or listing cleanup.
- Add short case-study blocks when real results are available.

Conversion rules:
- Every important page must have a page-specific WhatsApp message.
- CTAs must ask for the exact next action: quote, availability, package, or call.
- Do not hide pricing guidance. If exact pricing cannot be published, show package direction and quote factors.

### Phase 6: Schema and Rich Results QA

Validate with:
- Google Rich Results Test.
- Schema.org validator.
- Search Console enhancement reports after indexing.

Schema rules:
- Use ProfessionalService and Service for commercial pages.
- Use Article for blog pages.
- Use FAQPage only when FAQ is visible.
- Use VideoObject only when a real video asset and thumbnail exist.
- Do not add fake reviews, fake ratings, or unsupported claims.
- Keep schema language aligned with visible page content.

### Phase 7: Off-Page Authority

Ranking #1 will likely require backlinks and citations, especially for Punta Cana, Santo Domingo, Airbnb, and developer keywords.

Backlink targets:
- Real estate agencies in Dominican Republic.
- Developer project websites.
- Airbnb/villa/property management partners.
- Architecture and interior design partners.
- Local business directories.
- Tourism/villa rental blogs.
- Spanish and English expat/investor resources.

Linkable assets:
- Real estate photography pricing guide.
- Airbnb photo checklist.
- Property preparation checklist.
- Drone/video guide for listings.
- Developer launch content guide.

### Phase 8: Search Console Iteration

After launch:
- Submit sitemap.
- Request indexing for the homepage and highest-priority money pages.
- Monitor queries, impressions, CTR, and average position weekly.
- Improve pages ranking positions 4-20 first because they are closest to page-one wins.
- Rewrite titles/meta descriptions when impressions are high but CTR is low.
- Add FAQs and stronger internal links where pages are indexed but not climbing.
- Add more local proof where city pages get impressions but weak engagement.

### Phase 9: Lighthouse and UX Guardrails

Do not sacrifice performance for visual proof.

Rules:
- Keep hero images under the real estate image caps.
- Lazy-load supporting gallery images.
- Avoid heavy sliders and video embeds.
- Use static thumbnails and link to video/portfolio pages when embeds hurt performance.
- Maintain 100/100 SEO and accessibility.
- Keep mobile layouts dense, professional, and readable.

### Phase 10: Ranking Reality

The site can be engineered to deserve top rankings, but Google position #1 also depends on:
- Domain authority.
- Backlinks.
- Competitor strength.
- Real user engagement.
- Content freshness.
- Search intent match.
- Google Business/Profile signals if local results appear.

The production standard is therefore:
- Build the strongest technical and content foundation.
- Launch with no avoidable SEO weakness.
- Add real proof and backlinks monthly.
- Use Search Console data to improve the pages that Google already tests.

## Git

Local repo initialized at:

```text
/Users/subdomainsbabulashots/Documents/inmobiliaria
```

Remote:

```text
git@github.com:fotografosantodomingo/real-estate-babulashots-.git
```

Current known blocker:

```text
git@github.com: Permission denied (publickey).
```

Push requires SSH access to the GitHub repository from this machine, or using another authenticated remote method.

Recommended implementation commit:

```text
Initial Babula real estate SEO site
```
