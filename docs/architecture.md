# Architecture

AgentProof MVP is a client-side Next.js application.

## Layers

- UI routes: landing, builder, examples
- Builder state: React local state
- Generation engine: deterministic TypeScript functions in `lib/generate-proof.ts`
- Export: browser Blob download and clipboard copy
- Deployment: Vercel static/server-rendered Next.js app

## Future Extensions

- Optional AI API route for rewriting proof packs
- GitHub repository analyzer
- PDF export
- File storage for evidence attachments
- User accounts and saved workspaces
