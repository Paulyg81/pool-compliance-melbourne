import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const locations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/locations" }),
  schema: z.object({
    name: z.string(),
    region: z.string(),
    council: z.string(),
    councilRegisterName: z.string(),
    postcode: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    h1: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    relatedServices: z.array(z.string()).default([]),
  }),
});

export const collections = { locations, guides };
