# CLAUDE.md

Tento súbor poskytuje kontext pre Claude Code pri práci s DPO Agent repozitárom.

## Kontext projektu DPOstudio.ai

**DPOstudio.ai** je jednotná európska platforma pre správu GDPR a súvisiacich compliance procesov. Integruje administratívnu, obchodnú a analytickú vrstvu do jedného systému s cieľom automatizovať činnosti zodpovedných osôb (DPO) a konzultačných tímov.

### Architektúra platformy

**Dvojkomponentová architektúra:**

1. **DPOstudio.ai** (admin vrstva)
   - Doména: `dpostudio.ai`
   - Repo: `avantlehq/dpo-studio-ai`
   - Funkcie: onboarding, správa tenantov, plány, billing, whitelabel konfigurácie, SSO

2. **DPO.avantle.ai** (agent/runtime engine) - **TENTO REPOZITÁR**
   - Doména: `dpo.avantle.ai`
   - Repo: `avantlehq/dpo-avantle-ai`
   - Funkcie: LLM pipeline, risk scoring, kontrolné odporúčania, reportovacie šablóny, API rozhranie
   - Multi-tenant architektúra, izolované úložiská brandu a plánov

### API rozhranie (poskytované týmto repozitárom)

```
POST /api/provision → vytvorenie tenanta
POST /api/v1/engine/score → risk scoring
POST /api/v1/engine/suggest-controls → mapping na kontroly  
POST /api/v1/report/render → reportovanie
```

**Guardrails:**
- Authorization: Bearer <JWT> s tenant_id, role, exp
- Rate limit per tenant
- SQLite (dev) / Postgres (prod)
- Žiadne PII v logoch

### Integrácia s platformou

Tento agent je konzumovaný DPO Studio (`dpostudio.ai`) pre:
- Tenant provisioning cez `/api/provision`
- Risk analysis processing cez `/api/v1/engine/score`
- Report generation cez `/api/v1/report/render`
- Control recommendations cez `/api/v1/engine/suggest-controls`

## Aktuálny stav repozitára (po Prompt 0A)

### ✅ Hotové komponenty

**Infraštruktúra:**
- Next.js 15 + TypeScript + Tailwind CSS setup
- GitHub Actions CI workflow (.github/workflows/ci.yml)
- Vercel deployment konfigurácia (vercel.json)
- Environment variables template (.env.example)

**API Endpoints (implementované ako mock):**
```
src/app/api/
├── provision/
│   └── route.ts              # POST /api/provision
└── v1/
    ├── engine/
    │   ├── score/
    │   │   └── route.ts      # POST /api/v1/engine/score
    │   └── suggest-controls/
    │       └── route.ts      # POST /api/v1/engine/suggest-controls
    └── report/
        └── render/
            └── route.ts      # POST /api/v1/report/render
```

**UI Components:**
- Landing page (src/app/page.tsx) - agent status a API overview
- Agent Shell (src/app/agent/page.tsx) - monitoring UI pre operátorov

### 🔧 Technické detaily

**Tech stack:**
- Framework: Next.js 15 s App Router
- Styling: Tailwind CSS
- TypeScript: Plná type safety
- Package manager: pnpm 9
- CI/CD: GitHub Actions
- Deployment: Vercel ready
- API: REST s JWT auth (pripravené)

**Security konfigurácia:**
- Multi-tenant data isolation (pripravené)
- Rate limiting per tenant (pripravené)
- JWT authentication guardrails
- Security headers v vercel.json
- Audit logging bez PII

**Environment variables:**
```bash
NEXT_PUBLIC_ENV=local|preview|prod
DATABASE_URL=
JWT_SECRET=
LLM_API_KEY=
LLM_MODEL=gpt-4
LLM_TEMPERATURE=0.7
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_WINDOW_MS=900000
LOG_LEVEL=info
ENCRYPTION_KEY=
```

### 🚀 Deployment status

**GitHub:**
- Repozitár: https://github.com/avantlehq/dpo-avantle-ai
- Initial commit pushnutý
- CI workflow aktívny a funkčný
- Build test: ✅ Úspešný (Static + Dynamic routes)

**Pripravené na Vercel:**
- vercel.json s API functions konfiguráciou
- maxDuration: 30s pre API endpoints
- Environment variables template
- Doména: dpo.avantle.ai (treba nastaviť DNS)

### 📊 API Implementation Status

**Mock endpoints fungujú:**

1. **Risk Scoring** (`POST /api/v1/engine/score`):
   - Input: risk assessment data
   - Output: riskLevel, score, factors, timestamp
   - TODO: Implementovať skutočný LLM pipeline

2. **Control Suggestions** (`POST /api/v1/engine/suggest-controls`):
   - Input: assessment context
   - Output: controls array s id, title, description, priority
   - TODO: Implementovať mapping na GDPR kontroly

3. **Report Generation** (`POST /api/v1/report/render`):
   - Input: report type, data
   - Output: reportId, content sections, metadata
   - TODO: Implementovať template engine

4. **Tenant Provisioning** (`POST /api/provision`):
   - Input: tenantId, organizationName, plan
   - Output: provision status, endpoints
   - TODO: Implementovať skutočné tenant izolované úložiská

### 📋 Ďalšie kroky (budúce prompty)

**Core engine implementation:**
1. LLM pipeline integrácia (OpenAI/Anthropic)
2. Risk scoring algoritmus založený na GDPR
3. Control mapping database (ISO 27001, NIST)
4. Report template engine (DPIA, ROPA, AI Impact)
5. Database schema pre multi-tenancy
6. JWT authentication middleware
7. Rate limiting implementation

**Advanced features:**
- AvantleCore SDK integrácia (E2EE, RDF, risk engine)
- SPARQL knowledge graph queries
- Encryption layer pre tenant data
- Audit logging systém
- Metrics a monitoring

**Integration points:**
- Webhook notifikácie pre DPO Studio
- Real-time status updates
- Error handling a retry logic
- API versioning strategy

### 🎯 Technologická vízia

Tento agent má byť výpočtové a dátové jadro platformy s možnosťou:
- **Local-first**: On-premise deployment pre enterprise klientov
- **E2EE**: End-to-end encryption všetkých tenant dát
- **Offline capable**: Funkčnosť bez internet konektivity
- **GDPR compliant**: Built-in privacy by design

Založené na AvantleCore SDK technológii pre data sovereignty a lokálne AI spracovanie.

## Lokálna cesta

**Projekt sa nachádza v:** `C:\Users\rasti\Projects\avantlehq\dpo-avantle-ai\`

## Development commands

```bash
# Development (z avantlehq/dpo-avantle-ai/)
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build           # Build for production
pnpm start           # Start production server  
pnpm lint            # Run ESLint

# API Testing
# POST http://localhost:3000/api/v1/engine/score
# POST http://localhost:3000/api/v1/engine/suggest-controls
# POST http://localhost:3000/api/v1/report/render
# POST http://localhost:3000/api/provision

# Deployment
git push origin main # Trigger CI build
```