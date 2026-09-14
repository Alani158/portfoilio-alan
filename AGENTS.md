# AGENTS.md

## Project purpose

This repository is a personal portfolio website for Alani Mujeeb Babatunde. It showcases work, experience, and contact details in a minimal monochrome style.

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## Important directories

- `app/` — route files and page layouts
- `components/` — reusable UI sections and cards
- `lib/` — portfolio data and typed content definitions
- `public/` — static assets

## Source of truth for content

Do not duplicate portfolio copy inside components when it already exists in the data layer:

- `lib/data.ts` for profile metadata
- `lib/projects.ts` for projects and case studies
- `lib/experience.ts` for job history

## Editing rules

- Keep the minimal portfolio aesthetic consistent.
- Prefer Tailwind utility classes over custom inline CSS unless necessary.
- Maintain file-based routing conventions in `app/`.
- Use the existing component structure instead of creating unrelated patterns.
- Update navigation or page sections when adding new routes.
- Keep placeholder values out of production content.

## Validation

- Run `npm run build` after meaningful code changes.
- This project is static content-first and does not have a complex backend.

## Notes for AI agents

- Treat `lib/*.ts` as canonical data definitions.
- Keep URLs, tags, descriptions, and availability values centralized.
- Avoid hardcoded personal details scattered across the UI.
- Preserve responsive behavior and the overall editorial design language.
