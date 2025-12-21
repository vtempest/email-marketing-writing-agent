# Email Marketing Writing Agent

<p align="center">
  <img src="https://i.imgur.com/W3SYDh1.png" alt="Email Marketing Writing Agent" width="600">
</p>

> AI-powered email marketing platform that creates personalized B2B outreach campaigns

A full-stack Next.js application that leverages AI to generate highly personalized email marketing campaigns. Built with modern technologies and designed for businesses looking to enhance their B2B outreach with intelligent automation.

![Status](https://img.shields.io/badge/Status-Production_Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### Campaign Management
- **Visual Campaign Builder** - Intuitive interface with tabs for setup, targeting, templates, and preview
- **Bulk Import** - Upload CSV/Excel files with target companies
- **Real-time Tracking** - Monitor email status, open rates, and click rates
- **Campaign Analytics** - Detailed performance insights

### AI-Powered Personalization
- **Smart Research Agent** - Automatically gathers company intelligence
- **Dynamic Email Generation** - Creates unique, contextual emails per recipient
- **Template Variables** - Use `{{firstName}}`, `{{companyName}}`, `{{recentNews}}`, and more
- **One-Click AI Templates** - Generate templates based on your product info
- **Tone Customization** - Professional, casual, formal, or enthusiastic

### Email Customization
- **Live Preview** - See exactly how emails will appear
- **Template Editor** - Full-featured editor with syntax highlighting
- **Subject Line Optimizer** - Best practices and character count guidance
- **Test Emails** - Send tests before launching campaigns

### Dashboard & Analytics
- **Overview Dashboard** - Metrics, recent activity, and quick actions
- **Performance Tracking** - Open rates, click rates, and engagement
- **Campaign History** - View all past and active campaigns

### Authentication & Security
- **Multiple Auth Methods** - Email/password, GitHub, or Google OAuth
- **Secure Sessions** - Token-based session management with Better Auth
- **Protected Routes** - Dashboard accessible only to authenticated users

## Quick Start

### Prerequisites

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PostgreSQL** database ([Get started](https://www.postgresql.org/download/))
- **API Keys** (optional):
  - GitHub OAuth credentials
  - Google OAuth credentials
  - OpenAI API key (for AI features)
  - Tavily API key (for research)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/email-marketing-writing-agent.git
cd email-marketing-writing-agent
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
DATABASE_URL="postgresql://user:password@localhost:5432/email_marketing"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Better Auth - Generate with: openssl rand -base64 32
BETTER_AUTH_SECRET="your_random_secret"

# OAuth (optional)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# AI Services (optional)
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

## Usage

### Creating a Campaign

1. **Sign up** at `/signup` or sign in at `/signin`
2. **Navigate to Dashboard** - View your campaign overview
3. **Click "Create New Campaign"**
4. **Fill in Campaign Details**:
   - Campaign name
   - Product/service information
   - Email tone preference
5. **Add Target Companies**:
   - Enter company URLs manually
   - Or upload a CSV/Excel file
6. **Design Email Template**:
   - Write a custom template
   - Or click "Generate AI Template"
   - Use variables for personalization
7. **Preview and Test**:
   - Review personalized preview
   - Send test emails
8. **Launch Campaign**

### Template Variables

Use these variables in your email templates:

- `{{firstName}}` - Recipient's first name
- `{{lastName}}` - Recipient's last name
- `{{companyName}}` - Target company name
- `{{title}}` - Recipient's job title
- `{{recentNews}}` - Recent company news/events
- `{{industry}}` - Company industry
- `{{senderName}}` - Your name

**Example template:**
```
Hi {{firstName}},

I noticed {{companyName}} recently {{recentNews}}. Congratulations!

I wanted to reach out because...

Best regards,
{{senderName}}
```

## Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
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

## Project Structure

```
email-marketing-writing-agent/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Authentication pages
│   │   ├── api/               # API routes
│   │   ├── dashboard/         # Dashboard pages
│   │   └── page.tsx           # Landing page
│   ├── components/
│   │   ├── dashboard/         # Dashboard components
│   │   └── ui/                # shadcn/ui components
│   ├── db/                    # Database schema & client
│   └── lib/                   # Auth config & utilities
├── public/                    # Static assets
├── drizzle.config.ts          # Drizzle configuration
├── next.config.ts             # Next.js config
└── package.json               # Dependencies
```

## Development

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

1. **Generate migration:**
```bash
npm run db:generate
```

2. **Review migration** in `drizzle/` directory

3. **Apply to database:**
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

## API Documentation

Interactive API documentation is available at `/api-docs` when running the application.

### Key Endpoints

- `GET /api/campaigns` - List all campaigns
- `POST /api/campaigns` - Create new campaign
- `GET /api/campaigns/{id}` - Get campaign details
- `GET /api/campaigns/{id}/emails` - Get campaign emails
- `POST /api/research` - Research target company
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signup` - Sign up
- `POST /api/auth/signout` - Sign out

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Configure environment variables (see `.env.local` above)
4. Deploy

### Database Options

Use a managed PostgreSQL service:
- [Vercel Postgres](https://vercel.com/storage/postgres)
- [Neon](https://neon.tech/)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)

Run migrations after database setup:
```bash
npm run db:migrate
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Roadmap

- [ ] Email template library
- [ ] A/B testing capabilities
- [ ] Advanced analytics dashboard
- [ ] Email scheduling
- [ ] Webhook integrations
- [ ] Team collaboration features
- [ ] Email deliverability monitoring
- [ ] CRM integrations

---

Made with ❤️ for better email marketing
