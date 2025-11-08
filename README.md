# DPO Agent

Runtime API & LLM Engine for GDPR Compliance - The computational and data core of the DPOstudio.ai platform.

## Overview

DPO Agent provides the runtime engine and API layer for GDPR compliance automation:

- **LLM Pipeline**: Risk scoring and control recommendations
- **Report Generation**: Automated DPIA, ROPA, and AI Impact reports
- **Multi-tenant API**: Isolated processing for different organizations
- **Agent Shell**: UI for monitoring and operator access

## Quick Start

### Prerequisites

- Node.js 20+
- pnpm 9+
- Environment variables configured
- LLM API access configured

### Installation

```bash
# Clone repository
git clone https://github.com/avantlehq/dpo-avantle-ai.git
cd dpo-avantle-ai

# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your configuration

# Start development server
pnpm dev
```

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## API Endpoints

### Engine API

- `POST /api/v1/engine/score` - Risk scoring analysis
- `POST /api/v1/engine/suggest-controls` - Control recommendations

### Report API

- `POST /api/v1/report/render` - Generate compliance reports

### Provisioning API

- `POST /api/provision` - Create new tenant

## Environment Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_ENV` | Environment type | `local` |
| `DATABASE_URL` | Database connection string | - |
| `JWT_SECRET` | JWT signing secret | - |
| `LLM_API_KEY` | LLM service API key | - |
| `LLM_MODEL` | LLM model identifier | `gpt-4` |
| `ENCRYPTION_KEY` | Data encryption key | - |

## Deployment

### Vercel Deployment

1. Connect repository to Vercel
2. Configure domain: `dpo.avantle.ai`
3. Set environment variables in Vercel dashboard
4. Deploy

### Custom Deployment

1. Build the application: `pnpm build`
2. Configure reverse proxy (nginx/Apache)
3. Set environment variables
4. Start with `pnpm start`

## Authentication & Security

- JWT-based authentication with tenant isolation
- Rate limiting per tenant
- Request/response encryption
- No PII stored in logs
- Strict security headers

## Architecture

```
src/
├── app/
│   ├── agent/           # Agent monitoring shell
│   ├── api/
│   │   ├── v1/
│   │   │   ├── engine/  # Risk scoring & control suggestions
│   │   │   └── report/  # Report generation
│   │   └── provision/   # Tenant provisioning
│   └── page.tsx         # Agent landing page
├── components/          # UI components
└── lib/                 # Core logic and utilities
```

## Integration

This service is consumed by DPO Studio (`dpostudio.ai`) for:

- Tenant provisioning
- Risk analysis processing
- Report generation
- Control recommendations

## Development

- Framework: Next.js 15 with App Router
- Styling: Tailwind CSS
- TypeScript: Full type safety
- CI/CD: GitHub Actions
- API: REST with JWT auth

## Security Features

- Multi-tenant data isolation
- End-to-end encryption capabilities
- Rate limiting and DOS protection
- Audit logging (no PII)
- Security headers configured

## License

Private repository - All rights reserved by Avantle.ai
# Test auto-deployment backend
