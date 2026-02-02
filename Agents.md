# Agents Instructions

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 landing page using the App Router with:
- **React 19** with Server Components by default
- **Tailwind CSS v4** via PostCSS (no tailwind.config.js - uses CSS-based configuration)
- **TypeScript** with strict mode enabled

### Path Aliases

`@/*` maps to the project root (configured in tsconfig.json).

### Fonts

Geist and Geist Mono are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-geist-sans` and `--font-geist-mono`.
