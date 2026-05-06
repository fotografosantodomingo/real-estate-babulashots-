# Inmobiliaria Babula Shots Production Plan

Domain: https://inmobiliaria.babulashotsrd.com
Repository: git@github.com:fotografosantodomingo/real-estate-babulashots-.git
Local path: /Users/subdomainsbabulashots/Documents/inmobiliaria

## Goal

Create a production-ready SEO and lead-generation website for Babula Shots real estate media services in the Dominican Republic. The site should be stronger than boda.babulashotsrd.com by combining static SEO speed, richer schema, deeper topical authority, clearer conversion paths, better service segmentation, and a content structure built for real estate agents, brokers, developers, Airbnb hosts, villa owners, hotels, and property investors.

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
- Local/service-specific intro
- Deliverables section
- Property types served
- Process section
- Package or quote guidance
- Related city/service links
- FAQ section
- Final CTA
- JSON-LD schema
- Optimized image with descriptive alt text

Homepage sections:
- Hero with exact service promise
- Service categories
- Cities served
- Client segments
- Process
- Packages or quote paths
- Featured property media examples
- FAQ
- Final CTA

Avoid visible educational text that explains how to use the site. The interface should be direct and professional.

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
- areaServed using city/region

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
- Hero images generally under 180 KB where possible
- Supporting images generally under 120 KB
- Thumbnails under 60 KB
- Explicit dimensions or aspect-ratio
- Descriptive filenames
- Descriptive alt text
- No dark, generic, or overly cropped images where the property should be inspected

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
22. Configure subdomain inmobiliaria.babulashotsrd.com.
23. Submit sitemap in Google Search Console.
24. Track indexed pages and improve content based on impressions.

## Initial Build Milestones

Milestone 1: Foundation
- Next.js setup
- Static export
- Header/footer
- Theme/language controls
- Core CSS
- Sitemap/robots
- Headers/redirects

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
