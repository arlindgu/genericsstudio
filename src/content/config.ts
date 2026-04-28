import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  category: z.string(),
  readingTime: z.string(),
});

export const collections = {
  "blog-de": defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./content/blog/de" }),
    schema: blogSchema,
  }),
};
