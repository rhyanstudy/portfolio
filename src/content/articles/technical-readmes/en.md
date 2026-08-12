---
title: "Notes on Writing Technical READMEs"
description: "What belongs in a README, what does not, and how to respect the reader's time."
category: "Practice"
date: 2024-07-02
draft: false
---

A README is often the first and only document someone reads about your project. Its job is not to impress. Its job is to **help someone decide and act**.

## Start with Purpose

The first paragraph should answer: What is this? Who is it for? What problem does it solve? Skip the origin story unless it clarifies scope.

## Installation Before Architecture

Put setup instructions early. If someone cannot run your project in five minutes, they will not read your architecture diagram. Include prerequisites, install commands, and a minimal working example.

## Keep Reference Material Scannable

Use headings, tables, and code blocks. Long prose belongs in separate docs. The README should link to deeper material, not contain all of it.

## Maintenance Is Part of the Feature

An outdated README is worse than no README. When you change setup steps or break compatibility, update the README in the same commit. Treat it as code.
