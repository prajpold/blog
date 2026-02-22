import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      category: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
        license: z.string(),
      }),
    }),
});

export const collections = {
  posts: postsCollection,
};
