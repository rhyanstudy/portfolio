import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      technologies: z.array(z.string()),
      status: z.enum(['completed', 'in-progress', 'archived']),
      date: z.coerce.date(),
      role: z.string(),
      problem: z.string(),
      solution: z.string(),
      context: z.string().optional(),
      challenges: z.array(z.string()).optional(),
      learnings: z.array(z.string()).optional(),
      results: z.array(z.string()).optional(),
      technicalDecisions: z.array(z.string()).optional(),
      github: z.url().optional(),
      demo: z.url().optional(),
      featured: z.boolean().default(false),
      cover: image().optional(),
      draft: z.boolean().default(false),
    }),
});

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, articles };
