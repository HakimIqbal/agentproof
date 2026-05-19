# AgentProof

**Turn AI agent work into reviewer-ready proof packs.**

AgentProof is a local-first web app for builders applying to grants, hackathons, and model credit programs. It converts raw evidence -- agent logs, GitHub links, screenshots, workflow notes, and deployment URLs -- into structured proof packs and copy-ready application answers.

## Live Demo

- Demo: https://agentproof-phi.vercel.app
- Builder: https://agentproof-phi.vercel.app/builder
- Examples: https://agentproof-phi.vercel.app/examples
- PRD: https://agentproof-phi.vercel.app/PRD.md

## Highlights

- Project profile and public link capture
- Agent workflow documentation
- Evidence inbox for logs, screenshots, commits, demos, and generated artifacts
- Markdown proof-pack generation
- 100-1200 word grant answer composer
- Example gallery for reviewer-facing submissions
- No login or database required for the MVP

## Tech Stack

- Next.js
- TypeScript
- CSS variables and responsive UI
- Local browser state
- Vercel-ready deployment

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Project Structure

```text
app/                 Next.js routes
app/builder/         Proof-pack builder
app/examples/        Example proof packs
lib/                 Proof generation logic
public/examples/     Markdown samples
docs/                Architecture and workflow docs
PRD.md               Product requirements
```

## Why It Exists

AI-assisted builders need a cleaner way to prove what they built and how agents contributed. AgentProof makes those workflows auditable by mapping claims to evidence.
