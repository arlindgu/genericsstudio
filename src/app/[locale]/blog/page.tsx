import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import PageHeader from "@/components/sections/pageheader";
import { getAllPosts, formatDate } from "@/lib/blog";
import CTA from "@/components/sections/cta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog.meta" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} – Generics Studio`,
      description: t("description"),
      url: "https://generics.studio/blog",
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const header = t.raw("header") as { title: string; description: string };
  const posts = getAllPosts(locale);

  return (
    <main className="relative">
      <PageHeader title={header.title}>
        {header.description}
      </PageHeader>

      <section className="py-24">
        <div className="container px-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-border p-8 flex flex-col gap-6 hover:border-foreground transition-colors duration-300"
              >
                <div className="flex items-center justify-between text-sm text-muted-foreground font-mono">
                  <span>{post.category}</span>
                  <span>{post.readingTime} {t("readingTime")}</span>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h2 className="text-2xl font-mono font-bold tracking-tight leading-tight transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    {formatDate(post.date, locale)}
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
