import { blogPosts } from "@/lib/blogPosts";
import { cityPath, realEstateCities } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";

type LanguagePaths = {
  es: string;
  en: string;
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === "/") return "/";
  const clean = pathname.split("?")[0].split("#")[0];
  return clean.endsWith("/") ? clean : `${clean}/`;
};

const routePairs: LanguagePaths[] = [
  { es: "/", en: "/en/" },
  { es: "/servicios/", en: "/en/servicios/" },
  { es: "/ubicaciones/", en: "/en/ubicaciones/" },
  { es: "/precios/", en: "/en/precios/" },
  { es: "/faq/", en: "/en/faq/" },
  ...realEstateCities.map((city) => ({ es: cityPath(city), en: cityPath(city, "en") })),
  ...realEstateServices.map((service) => ({ es: servicePath(service), en: servicePath(service, "en") })),
  ...realEstateIndustries.map((industry) => ({ es: industryPath(industry), en: industryPath(industry, "en") })),
  ...blogPosts.map((post) => ({ es: `/${post.slug}`, en: `/en/${post.enSlug}` }))
].map((pair) => ({ es: normalizePath(pair.es), en: normalizePath(pair.en) }));

export function languagePathsFor(pathname: string): LanguagePaths {
  const current = normalizePath(pathname);
  const match = routePairs.find((pair) => pair.es === current || pair.en === current);
  if (match) return match;
  return current.startsWith("/en/") ? { es: "/", en: current } : { es: current, en: "/en/" };
}

export function allLanguageRoutePairs() {
  return routePairs;
}
