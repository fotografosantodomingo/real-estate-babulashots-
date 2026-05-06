import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogPosts";
import { cityPath, realEstateCities } from "@/lib/realEstateCities";
import { industryPath, realEstateIndustries } from "@/lib/realEstateIndustries";
import { realEstateServices, servicePath } from "@/lib/realEstateServices";
import { canonicalUrl } from "@/lib/seo";

export const dynamic = "force-static";

const lastModified = new Date("2026-05-06");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/en/",
    ...realEstateCities.flatMap((city) => [cityPath(city), cityPath(city, "en")]),
    ...realEstateServices.flatMap((service) => [servicePath(service), servicePath(service, "en")]),
    ...realEstateIndustries.flatMap((industry) => [industryPath(industry), industryPath(industry, "en")]),
    ...blogPosts.flatMap((post) => [`/${post.slug}`, `/en/${post.enSlug}`])
  ];

  return paths.map((path) => ({ url: canonicalUrl(path), lastModified }));
}
