# GPT Marketer - AI-Powered B2B Email Marketing Platform

> Transform your B2B outreach with AI-driven personalization and intelligent campaign management

A modern, full-stack web application built with Next.js that leverages AI to create highly personalized email marketing campaigns. GPT Marketer combines cutting-edge technology with an intuitive interface to help businesses connect with their target audiences more effectively.

![GPT Marketer Dashboard](https://img.shields.io/badge/Status-Production_Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎯 Campaign Management
- **Visual Campaign Builder** - Intuitive interface for creating campaigns with tabs for setup, targeting, email templates, and preview
- **Bulk Target Import** - Upload CSV/Excel files with target companies
- **Real-time Campaign Tracking** - Monitor email status, open rates, and click rates
- **Campaign Analytics** - Detailed insights into campaign performance

### 🤖 AI-Powered Personalization
- **Smart Research Agent** - Automatically gathers intelligence about target companies
- **Dynamic Email Generation** - Creates unique, contextual emails for each recipient
- **Template Variables** - Use `{{firstName}}`, `{{companyName}}`, `{{recentNews}}` and more
- **AI Template Generator** - One-click template generation based on product info
- **Tone Customization** - Professional, casual, formal, or enthusiastic tones

### 📧 Email Customization
- **Live Email Preview** - See how emails will appear to recipients
- **Template Editor** - Full-featured editor with syntax highlighting
- **Variable System** - Dynamic personalization with company and contact data
- **Subject Line Optimizer** - Best practices and character count guidance
- **Send Test Emails** - Test before launching campaigns

### 📊 Dashboard & Analytics
- **Overview Dashboard** - Campaign metrics, recent activity, and quick actions
- **Performance Metrics** - Open rates, click rates, and engagement analytics
- **Campaign History** - View all past and active campaigns
- **Email Status Tracking** - Monitor sent, pending, and failed emails

### 🔐 Authentication & Security
- **Email/Password Auth** - Secure authentication with Better Auth
- **OAuth Integration** - Sign in with GitHub or Google
- **Session Management** - Secure, token-based sessions
- **Protected Routes** - Dashboard accessible only to authenticated users

### 🗄️ Database & API
- **Type-Safe Database** - Drizzle ORM with PostgreSQL
- **RESTful API** - Well-documented endpoints
- **OpenAPI Specification** - Interactive API documentation with Scalar
- **Database Migrations** - Version-controlled schema changes

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PostgreSQL** database ([Get started](https://www.postgresql.org/download/))
- **API Keys** (optional for OAuth):
  - GitHub OAuth credentials
  - Google OAuth credentials
  - OpenAI API key (for AI features)
  - Tavily API key (for research)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rotemweiss57/gpt-marketer.git
cd gpt-marketer/web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/gpt_marketer"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Better Auth
BETTER_AUTH_SECRET="your_random_secret"  # Generate: openssl rand -base64 32

# OAuth (optional)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# AI Services
OPENAI_API_KEY="your_openai_api_key"
TAVILY_API_KEY="your_tavily_api_key"
```

4. **Initialize the database**
```bash
npm run db:push
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### Creating Your First Campaign

1. **Sign up** at `/signup` or sign in at `/signin`
2. **Navigate to Dashboard** - You'll see the overview
3. **Click "Create New Campaign"** or go to `/dashboard/campaigns/new`
4. **Fill in Campaign Details**:
   - Campaign name
   - Product/service information
   - Email tone preference
5. **Add Target Companies**:
   - Manually enter company URLs
   - Or upload a CSV/Excel file
6. **Design Email Template**:
   - Write custom template
   - Or click "Generate AI Template"
   - Use variables for personalization
7. **Preview and Test**:
   - Review personalized preview
   - Send test emails
8. **Launch Campaign**

### Email Template Variables

Use these variables in your email templates for personalization:

- `{{firstName}}` - Recipient's first name
- `{{lastName}}` - Recipient's last name
- `{{companyName}}` - Target company name
- `{{title}}` - Recipient's job title
- `{{recentNews}}` - Recent company news/events
- `{{industry}}` - Company industry
- `{{senderName}}` - Your name

Example template:
```
Hi {{firstName}},

I noticed {{companyName}} recently {{recentNews}}. Congratulations!

I wanted to reach out because...

Best regards,
{{senderName}}
```

### Dashboard Navigation

- **Overview** - Campaign stats and quick actions
- **Campaigns** - Manage all campaigns
- **Analytics** - Performance insights (coming soon)
- **API Docs** - Interactive API documentation
- **Settings** - Account preferences (coming soon)

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components
- **[Lucide Icons](https://lucide.dev/)** - Icon library

### Backend
- **[Better Auth](https://better-auth.com/)** - Modern authentication
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[Scalar](https://scalar.com/)** - API documentation

### AI & Research
- **OpenAI GPT** - Email generation and personalization
- **Tavily API** - Company research and intelligence

## 📁 Project Structure

```
web/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── (auth)/                  # Authentication pages
│   │   │   ├── signin/             # Sign in page
│   │   │   └── signup/             # Sign up page
│   │   ├── api/                     # API routes
│   │   │   └── auth/[...all]/      # Better Auth endpoints
│   │   ├── api-docs/                # API documentation
│   │   ├── dashboard/               # Dashboard pages
│   │   │   ├── campaigns/          # Campaign management
│   │   │   │   ├── [id]/          # Individual campaign
│   │   │   │   ├── new/           # Create campaign
│   │   │   │   └── page.tsx       # Campaigns list
│   │   │   ├── layout.tsx          # Dashboard layout
│   │   │   └── page.tsx            # Dashboard home
│   │   ├── layout.tsx               # Root layout
│   │   └── page.tsx                 # Landing page
│   ├── components/
│   │   ├── dashboard/               # Dashboard components
│   │   │   └── DashboardLayout.tsx # Sidebar navigation
│   │   └── ui/                      # shadcn/ui components
│   ├── db/                          # Database
│   │   ├── schema.ts               # Database schema
│   │   └── index.ts                # Database client
│   └── lib/                         # Utilities
│       ├── auth.ts                 # Better Auth config
│       ├── auth-client.ts          # Auth client helpers
│       ├── openapi.json            # API specification
│       └── utils.ts                # Helper functions
├── public/                          # Static assets
├── drizzle.config.ts                # Drizzle configuration
├── next.config.ts                   # Next.js config
├── package.json                     # Dependencies
├── tailwind.config.ts               # Tailwind config
└── tsconfig.json                    # TypeScript config
```

## 🗄️ Database Schema

### Tables

#### `user`
- `id` - Primary key
- `name` - Full name
- `email` - Email address (unique)
- `emailVerified` - Verification status
- `image` - Profile picture URL
- `createdAt`, `updatedAt` - Timestamps

#### `session`
- `id` - Session ID
- `userId` - Foreign key to user
- `token` - Session token
- `expiresAt` - Expiration timestamp
- `ipAddress`, `userAgent` - Session metadata

#### `account`
- `id` - Account ID
- `userId` - Foreign key to user
- `providerId` - OAuth provider (github, google)
- `accessToken`, `refreshToken` - OAuth tokens
- `password` - Hashed password (for email auth)

#### `verification`
- `id` - Verification ID
- `identifier` - Email or phone
- `value` - Verification code
- `expiresAt` - Expiration timestamp

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:generate  # Generate migration files
npm run db:migrate   # Apply migrations
npm run db:push      # Push schema to database (dev)
npm run db:studio    # Open Drizzle Studio GUI
```

### Database Migrations

When you modify the schema in `src/db/schema.ts`:

1. Generate migration:
```bash
npm run db:generate
```

2. Review migration in `drizzle/` directory

3. Apply to database:
```bash
npm run db:migrate
```

Or for development, push directly:
```bash
npm run db:push
```

### OAuth Setup

#### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`
4. Add credentials to `.env.local`

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create OAuth 2.0 Client ID
3. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
4. Add credentials to `.env.local`

## 📚 API Documentation

Interactive API documentation is available at `/api-docs` when running the application.

### Key Endpoints

#### Campaigns
- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create new campaign
- `GET /api/campaigns/{id}` - Get campaign details
- `GET /api/campaigns/{id}/emails` - Get campaign emails

#### Research
- `POST /api/research` - Research target company

#### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signup` - Sign up
- `POST /api/auth/signout` - Sign out

See full documentation at `http://localhost:3000/api-docs`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub

2. Import project to [Vercel](https://vercel.com)

3. Configure environment variables:
   - `DATABASE_URL` - Production database
   - `NEXT_PUBLIC_APP_URL` - Production URL
   - `BETTER_AUTH_SECRET` - Random secret
   - OAuth credentials
   - API keys

4. Deploy!

### Environment Variables for Production

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Random 32-character string
- `NEXT_PUBLIC_APP_URL` - Your production URL

Optional:
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` - GitHub OAuth
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` - Google OAuth
- `OPENAI_API_KEY` - AI email generation
- `TAVILY_API_KEY` - Company research

### Database Setup for Production

Use a managed PostgreSQL service:
- [Vercel Postgres](https://vercel.com/storage/postgres)
- [Neon](https://neon.tech/)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)

Run migrations:
```bash
npm run db:migrate
```

## 🧪 Testing

(Testing setup coming soon)

```bash
npm run test         # Run tests
npm run test:watch   # Watch mode
npm run test:coverage # Coverage report
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful components
- [Better Auth](https://better-auth.com/) - Modern authentication
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe database
- [OpenAI](https://openai.com/) - AI capabilities
- [Tavily](https://tavily.com/) - Web research API

## 📞 Support

- **Email**: support@gpt-marketer.com
- **Issues**: [GitHub Issues](https://github.com/rotemweiss57/gpt-marketer/issues)
- **Discussions**: [GitHub Discussions](https://github.com/rotemweiss57/gpt-marketer/discussions)

## 🗺️ Roadmap

- [ ] Email template library
- [ ] A/B testing capabilities
- [ ] Advanced analytics dashboard
- [ ] Email scheduling
- [ ] Webhook integrations
- [ ] Team collaboration features
- [ ] Custom domain support
- [ ] Email deliverability monitoring
- [ ] CRM integrations

---

**Made with ❤️ by the GPT Marketer team**

[⬆ Back to top](#gpt-marketer---ai-powered-b2b-email-marketing-platform)
