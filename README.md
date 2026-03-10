# Company Profile - Next.js

A modern company profile website built with Next.js and Tailwind CSS.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
company/
├── app/                  # App Router
│   ├── globals.css       # Global styles (Tailwind CSS)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable React components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/               # Static assets (images, icons, etc.)
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
