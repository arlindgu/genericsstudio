import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import CTA from "@/components/sections/cta";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return getAllPosts(params.locale).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} – Generics Studio`,
      description: post.description,
      url: `https://generics.studio/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, locale } = await params;
  const post = await getPostBySlug(slug, locale);
  const t = await getTranslations("blog");

  if (!post) notFound();

  return (
    <main className="relative">
      <section className="bg-foreground text-background py-24">
        <div className="container px-10 max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-background/60 hover:text-background transition-colors duration-300 mb-12"
          >
            <ArrowLeft size={14} />
            {t("back")}
          </Link>
          <div className="flex items-center gap-4 text-sm font-mono text-background/60 mb-6">
            <span>{post.category}</span>
            <span>·</span>
            <span>{post.readingTime} {t("readingTime")}</span>
            <span>·</span>
            <span>{formatDate(post.date, locale)}</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold font-mono leading-tight tracking-tighter">
            {post.title}
          </h1>
          <p className="mt-6 text-xl text-background/70 max-w-2xl">
            {post.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-10 max-w-4xl mx-auto">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </div>
      </section>

      <CTA />
    </main>
  );
}
