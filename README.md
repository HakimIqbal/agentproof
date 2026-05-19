# AgentProof

**Reviewer-ready proof packs for AI builders.**

AgentProof is a local-first web app that helps grant applicants, hackathon builders, and model credit seekers turn messy AI workflow evidence into clear, reviewable proof. Instead of sending reviewers a pile of screenshots, chat logs, repo links, and deployment notes, AgentProof converts that material into a structured Markdown dossier and a copy-ready application answer.

## Why this matters

AI-assisted building is now common, but proof is still fragmented. Real work often lives across terminal logs, agent sessions, commits, screenshots, PRDs, and live demos. That makes strong projects look weaker than they are, because the reviewer has to reconstruct the story by hand.

AgentProof solves that review gap. It helps builders present what they made, how AI agents were used, what evidence supports each claim, and why the output is credible.

## Live project

- Live demo: https://agentproof-phi.vercel.app
- Builder: https://agentproof-phi.vercel.app/builder
- Examples: https://agentproof-phi.vercel.app/examples
- PRD: https://agentproof-phi.vercel.app/PRD.md
- GitHub repository: https://github.com/HakimIqbal/agentproof

## What AgentProof generates

AgentProof is designed to turn raw build evidence into reviewer-facing outputs.

**Input**
- Project name, problem, users, impact
- GitHub repository and live demo links
- Agent tool and model series used
- Workflow summary and verification notes
- Evidence items such as logs, screenshots, commits, demos, and generated artifacts

**Output**
- A structured Markdown proof pack for human reviewers
- A concise grant-answer draft within common application length constraints
- A cleaner claim-to-evidence map for audits, grants, and model-credit reviews

## MVP capabilities

- Capture a project profile with public proof links
- Record AI workflow details in a reviewer-friendly format
- Add evidence entries with source and claim mapping
- Generate two modes:
  - **Proof Pack** for reviewer dossiers
  - **Grant Answer** for direct application copy
- Copy generated text instantly or download it as Markdown
- Load a Xiaomi MiMo-flavored sample to demonstrate the intended workflow
- Run fully in the browser with no login, database, or API key required

## Product flow

1. Open `/builder`
2. Enter project details and public links
3. Describe the AI-assisted workflow and verification method
4. Add evidence items that support the main claims
5. Generate either a reviewer proof pack or a grant-answer draft
6. Copy or download the final Markdown output

## Pages

- `/` - landing page and product overview
- `/builder` - interactive builder for proof packs and grant answers
- `/examples` - reviewer-facing examples and sample proof-pack entry point
- `/PRD.md` - public product requirements document

## Who it is for

- Builders applying to AI grants
- Hackathon teams using AI agents in delivery workflows
- Open-source developers who need stronger proof-of-work artifacts
- Reviewers who want claims mapped to inspectable evidence
- Ecosystem programs evaluating real AI-assisted execution, not just ideas

## Why AgentProof is credible

This repository is not just a concept note. It includes:

- a public GitHub repository
- a live Vercel deployment
- a working builder flow
- public example pages
- a shipped PRD
- proof-oriented output generation logic

The project itself was built through an AI-assisted workflow and then packaged as a tool for documenting AI-assisted work.

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Client-side state
- Vercel deployment
- pnpm for dependency management

## Run locally

```bash
corepack enable
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
```

## Project structure

```text
app/                  Next.js routes
app/builder/          Interactive proof-pack builder
app/examples/         Example proof-pack gallery
lib/generate-proof.ts Proof-pack and grant-answer generators
public/examples/      Markdown samples
docs/                 Architecture and workflow notes
PRD.md                Product requirements
vercel.json           Deployment install/build commands
```

## Current scope

This is an MVP focused on fast proof creation.

Current limitations:
- no authentication or team workspaces
- no persistent database
- no direct GitHub, billing, or screenshot ingestion APIs yet
- Markdown output first, not PDF or hosted review dashboards

## Good evidence to use with AgentProof

- public GitHub repositories
- live demo URLs
- terminal logs
- agent session summaries
- screenshots of workflows or deployments
- generated artifacts and exported Markdown

## Status

AgentProof is live and publicly reviewable. The current production deployment is:

`https://agentproof-phi.vercel.app`
