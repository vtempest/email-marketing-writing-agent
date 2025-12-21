# Marketing Email Writing Agent

AI-powered B2B email marketing platform built with Next.js for Vercel deployment.

## Features

- **Campaign Management** - Visual builder for creating personalized email campaigns
- **AI Email Generation** - Dynamic, contextual emails using OpenAI
- **Company Research** - Automated intelligence gathering with Tavily API
- **Template Variables** - Use `{{firstName}}`, `{{companyName}}`, `{{recentNews}}`, etc.
- **Authentication** - Email/password + GitHub/Google OAuth via Better Auth
- **Database** - PostgreSQL with Drizzle ORM

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Auth**: Better Auth
- **Database**: Drizzle ORM + PostgreSQL
- **AI**: OpenAI, Tavily

## Quick Start

```bash
cd web
npm install
cp .env.example .env.local
# Edit .env.local with your credentials
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/db_name"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Auth
BETTER_AUTH_SECRET="your_random_secret"

# OAuth (optional)
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# AI Services
OPENAI_API_KEY=""
TAVILY_API_KEY=""
```

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate migrations
npm run db:migrate   # Apply migrations
npm run db:push      # Push schema to database
npm run db:studio    # Open Drizzle Studio
```

## Deploy to Vercel

1. Push to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Set root directory to `web`
4. Add environment variables
5. Deploy

### Recommended Database Providers

- [Vercel Postgres](https://vercel.com/storage/postgres)
- [Neon](https://neon.tech)
- [Supabase](https://supabase.com)

## Project Structure

```
web/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── (auth)/       # Sign in/up pages
│   │   ├── api/          # API routes
│   │   └── dashboard/    # Dashboard pages
│   ├── components/       # UI components
│   ├── db/               # Database schema
│   └── lib/              # Utilities
├── drizzle.config.ts
├── package.json
└── tsconfig.json
```

## License

MIT
