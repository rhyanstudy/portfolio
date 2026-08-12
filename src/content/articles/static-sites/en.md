---
title: "Why I Prefer Static Sites for Personal Projects"
description: "A practical argument for static-first architecture when building personal websites and small tools."
category: "Architecture"
date: 2025-01-05
draft: false
---

Personal projects rarely need the complexity of a full application stack. When I build a portfolio, a documentation site, or a small tool landing page, I start with a simple question: **what actually needs to run at request time?**

For most personal sites, the answer is nothing. The content is known at build time. The pages change when I deploy, not when a user visits. That makes static generation an honest fit—not a limitation to work around.

## Speed as a Feature

Static sites serve pre-built HTML. There is no database query, no server-side rendering delay, no cold start. On modest hosting, pages load in milliseconds. That speed is not a micro-optimization; it affects whether someone reads your work or leaves.

## Maintainability Over Time

Frameworks come and go. Dependencies accumulate. A static site with Markdown content and plain CSS has a small surface area. When I return to a project after six months, I can understand it quickly. That matters more than any feature I might add in a weekend.

## When Static Is Not Enough

Static is not universal. If you need user accounts, real-time data, or server-side logic on every request, you need a backend. But many projects labeled as "apps" are really documents with navigation. Treating them as documents first keeps the architecture honest.

## Conclusion

For personal work—portfolios, blogs, project documentation—I default to static generation. It respects the reader's time, respects my future self's sanity, and leaves room to add complexity only when the problem genuinely requires it.
