# Inmobiliaria Babula Shots Production Plan

Domain: https://inmobiliaria.babulashotsrd.com
Repository: git@github.com:fotografosantodomingo/real-estate-babulashots-.git
Local path: /Users/subdomainsbabulashots/Documents/inmobiliaria

## Goal

Create a production-ready SEO website for Babula Shots real estate media services in the Dominican Republic. The site should match the technical quality of boda.babulashotsrd.com while focusing entirely on real estate photography, real estate video, drone content, listing media, Airbnb/villa content, developers, brokers, agencies, and property marketing.

Primary target:
- Real estate photography Dominican Republic
- Fotografia inmobiliaria Republica Dominicana
- Foto y video inmobiliario RD
- Real estate video Dominican Republic
- Drone real estate photography Dominican Republic
- Fotografo inmobiliario Punta Cana
- Fotografo inmobiliario Santo Domingo

Performance target:
- Lighthouse SEO: 100/100
- Lighthouse Performance: 100/100 target
- Lighthouse Accessibility: 100/100 target
- Lighthouse Best Practices: 100/100 target

## Technical Approach

Use the same static SEO architecture as the boda site:

- Next.js static export
- TypeScript
- App Router
- Static sitemap generation
- Static robots configuration
- Cloudflare-compatible _headers and _redirects
- Optimized WebP images
- Minimal JavaScript
- No runtime image optimization dependency
- Strong internal linking
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
  SiteHeader.tsx
  SiteFooter.tsx
  ThemeLanguageControls.tsx
  SeoJsonLd.tsx
lib/
  realEstateCities.ts
  realEstateServices.ts
  blogPosts.ts
public/
  _headers
  _redirects
  images/
```

## Core Pages

Homepage:
- /
- /en/

Primary Spanish pages:
- /fotografia-inmobiliaria-republica-dominicana/
- /fotografia-inmobiliaria-santo-domingo/
- /fotografia-inmobiliaria-punta-cana/
- /fotografia-inmobiliaria-la-romana/
- /fotografia-inmobiliaria-santiago/
- /fotografia-inmobiliaria-las-terrenas/
- /fotografia-inmobiliaria-samana/
- /fotografia-inmobiliaria-puerto-plata/
- /fotografia-inmobiliaria-casa-de-campo/
- /fotografia-inmobiliaria-cap-cana/

Primary English pages:
- /en/real-estate-photography-dominican-republic/
- /en/real-estate-photography-santo-domingo/
- /en/real-estate-photography-punta-cana/
- /en/real-estate-photography-la-romana/
- /en/real-estate-photography-santiago/
- /en/real-estate-photography-las-terrenas/
- /en/real-estate-photography-samana/
- /en/real-estate-photography-puerto-plata/
- /en/real-estate-photography-casa-de-campo/
- /en/real-estate-photography-cap-cana/

## Service Pages

Spanish:
- /foto-video-inmobiliario/
- /video-inmobiliario-republica-dominicana/
- /fotografia-drone-inmobiliaria/
- /fotografia-para-airbnb-villas/
- /fotografia-para-apartamentos-en-venta/
- /fotografia-para-proyectos-inmobiliarios/
- /contenido-para-agentes-inmobiliarios/
- /contenido-para-inmobiliarias-constructoras/
- /tour-virtual-inmobiliario/
- /precios-fotografia-inmobiliaria-republica-dominicana/

English:
- /en/real-estate-photo-video/
- /en/real-estate-video-dominican-republic/
- /en/drone-real-estate-photography/
- /en/airbnb-villa-photography/
- /en/apartment-listing-photography/
- /en/real-estate-development-photography/
- /en/content-for-real-estate-agents/
- /en/content-for-real-estate-companies-developers/
- /en/real-estate-virtual-tour/
- /en/real-estate-photography-prices-dominican-republic/

## Blog / SEO Content

Create articles with strong internal links to service and city pages:

- Mejores fotos para vender una propiedad en Republica Dominicana
- Cuanto cuesta fotografia inmobiliaria en Republica Dominicana
- Fotografia inmobiliaria para Airbnb y villas turisticas
- Como preparar una propiedad antes de una sesion de fotos
- Video inmobiliario: que debe incluir para vender mas rapido
- Fotografia con drone para propiedades en Punta Cana
- Contenido para proyectos inmobiliarios en Santo Domingo
- Guia de marketing visual para agentes inmobiliarios
- Fotos profesionales vs fotos de celular para vender propiedades
- Como mejorar anuncios inmobiliarios con foto, video y reels

## Schema Strategy

Use JSON-LD by page type:

- LocalBusiness
- ProfessionalService
- Service
- WebSite
- WebPage
- BreadcrumbList
- FAQPage where relevant
- ImageObject for strong visual pages
- VideoObject for video service pages
- Article for blog pages

Homepage should describe Babula Shots as a real estate media service provider serving Dominican Republic.

City pages should use ProfessionalService plus areaServed.

Service pages should use Service schema with provider, offers, serviceType, areaServed, and hasOfferCatalog where useful.

Blog pages should use Article plus FAQPage if FAQs exist.

## Content Requirements

Each SEO landing page should include:

- Unique title and meta description
- One clear H1
- Localized intro
- Service explanation
- Who the service is for
- Areas served
- Deliverables
- Process section
- Internal links to related pages
- FAQ section
- CTA to WhatsApp/contact
- Relevant images with descriptive alt text

Avoid duplicate city content. Each city must mention real local context:

- Punta Cana: resorts, villas, Cap Cana, Bavaro, Airbnb, tourism listings
- Santo Domingo: apartments, towers, commercial spaces, developers, brokers
- La Romana: Casa de Campo, villas, luxury listings
- Santiago: residential towers, commercial properties, urban listings
- Las Terrenas/Samana: villas, vacation rentals, beach properties
- Puerto Plata: villas, tourism rentals, beachfront and mountain-view properties

## Lighthouse / Performance Checklist

- Use static export
- Use optimized WebP images under 200 KB when possible
- Use explicit image width and height
- Preload only the most important hero image
- Avoid third-party scripts unless essential
- Inline critical visual structure through CSS
- Keep JavaScript small
- Use semantic HTML landmarks
- Ensure color contrast passes WCAG
- Add accessible labels for icon controls
- Use descriptive alt text
- Use cache headers for images, CSS, JS
- Validate sitemap and robots
- Avoid layout shift with fixed media aspect ratios

## Redirects

Prepare redirects for future legacy or alternate URLs:

```text
/real-estate-photography-dominican-republic/ /en/real-estate-photography-dominican-republic/ 301
/fotografo-inmobiliario-rd/ /fotografia-inmobiliaria-republica-dominicana/ 301
/fotografia-inmobiliaria-rd/ /fotografia-inmobiliaria-republica-dominicana/ 301
/video-inmobiliario-rd/ /video-inmobiliario-republica-dominicana/ 301
/drone-inmobiliario-rd/ /fotografia-drone-inmobiliaria/ 301
```

## Production Checklist

1. Scaffold Next.js static export project.
2. Reuse proven patterns from boda.babulashotsrd.com.
3. Create shared data files for cities, services, and blog posts.
4. Build Spanish and English routes.
5. Add schema per page type.
6. Add sitemap and robots.
7. Add Cloudflare Pages headers and redirects.
8. Add optimized real estate images.
9. Run build.
10. Run Lighthouse desktop and mobile.
11. Fix accessibility, performance, SEO, and best-practice issues.
12. Commit initial production site.
13. Push to GitHub remote.
14. Connect domain/subdomain in Cloudflare Pages.

## Git

Local repo initialized at:

```text
/Users/subdomainsbabulashots/Documents/inmobiliaria
```

Remote:

```text
git@github.com:fotografosantodomingo/real-estate-babulashots-.git
```

Recommended first commit message:

```text
Initial Babula real estate SEO site
```
