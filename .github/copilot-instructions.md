# Copilot instructions for this repository

## Repository overview

This is a personal portfolio for a full-stack developer. The design is intentionally minimal and monochrome, with a strong emphasis on readable typography and clean spacing.

## Tech stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion

## File map

- `app/` — page routes and root layout
- `components/` — reusable UI blocks
- `lib/` — content and typed data sources
- `public/` — static files

## Preferred editing patterns

- Keep content in `lib/data.ts`, `lib/projects.ts`, and `lib/experience.ts`.
- Use existing components rather than introducing new structures unless required.
- Preserve the current design language: black/white/neutral palette, clean spacing, strong headings.
- Maintain responsive layout behavior.

## Avoid

- scattering personal information across multiple component files
- hardcoding project metadata directly into UI components
- introducing unnecessary backend complexity
- changing route structure without updating navigation and related page logic

## Build and validation

Run `npm run build` after substantive changes to confirm the site still compiles correctly.

## Notable placeholders

- `lib/data.ts` contains a placeholder email.
- `lib/projects.ts` currently uses profile-based repository URLs and should be replaced with real project repos.
- Placeholder portrait and screenshot components exist and should be replaced before final deployment.
