import type { MetadataRoute } from "next";
import { articles, articlesWithEn } from "@/lib/articles";
import { blogPosts } from "@/lib/blogPosts";
import { cityPath, realEstateCities } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-05-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/en/",
    "/servicios/", "/en/services/",
    "/ubicaciones/", "/en/locations/",
    "/precios/", "/en/prices/",
    "/faq/", "/en/faq/",
    "/blog/", "/en/blog/",
    ...realEstateCities.flatMap((city) => [cityPath(city), cityPath(city, "en")]),
    ...realEstateServices.flatMap((service) => [servicePath(service), servicePath(service, "en")]),
    ...realEstateIndustries.flatMap((industry) => [industryPath(industry), industryPath(industry, "en")]),
    ...blogPosts.flatMap((post) => [`/${post.slug}`, `/en/${post.enSlug}`]),
    ...articles.map((a) => `/blog/${a.slug}/`),
    ...articlesWithEn.map((a) => `/en/blog/${a.en!.enSlug}/`)
  ];

  return paths.map((path) => ({ url: canonicalUrl(path), lastModified }));
}
