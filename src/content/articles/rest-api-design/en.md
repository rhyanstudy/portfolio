---
title: "Designing REST APIs That Age Well"
description: "Conventions and decisions that keep HTTP APIs readable and evolvable over years of use."
category: "Backend"
date: 2024-10-18
draft: false
---

APIs outlive their original authors. The endpoints you ship today will be consumed by people who never read your design documents. That makes **consistency and predictability** more valuable than cleverness.

## Name Resources, Not Actions

Use nouns for paths (`/users`, `/orders`) and let HTTP methods express actions. Avoid `/getUserById` in the URL. This aligns with how developers think and how caching layers work.

## Version Explicitly, But Sparingly

Include a version prefix (`/v1/`) when you expect breaking changes. Do not version every minor addition. Most evolution should happen through additive changes: new fields, new optional parameters, new endpoints.

## Errors Should Be Actionable

Return consistent error shapes with a machine-readable code, a human-readable message, and optionally a field reference. `"Invalid email format"` helps more than `"Validation failed"`.

## Pagination Is Not Optional

Any endpoint returning lists will eventually return too many items. Design cursor- or offset-based pagination from the start. Document default limits and maximum limits.

## Document the Unwritten Rules

Rate limits, authentication schemes, idempotency expectations—these belong in documentation, not tribal knowledge. Your API is a product. Treat its docs accordingly.
