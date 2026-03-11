import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://generics.studio";
const locales = ["de", "en"];
const staticPages = [
  { path: "", priority: 1, changeFrequency: "monthly" as const },
  { path: "/webdesign", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/branding", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/graphicdesign", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/printdesign", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/imprint", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    }))
  );

  const blogEntries = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
