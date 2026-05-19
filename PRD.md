# PRD - AgentProof

## Overview
AgentProof is a web-based proof-pack generator for AI builders. It converts messy evidence such as agent logs, terminal output, repository links, screenshots, and deployment URLs into structured reviewer-ready proof packs for grants, hackathons, and model credit programs.

## Problem
AI builders often do real work with agents, but proof is fragmented across tools. Reviewers need to know what was built, which agent workflows were used, whether the project is real, and which evidence supports each claim.

## Goals
- Generate a proof pack in under three minutes.
- Produce copy-ready grant answers between 100 and 1200 words.
- Map project claims to evidence items.
- Run publicly without login for the MVP.
- Deploy easily to Vercel.

## Non-Goals
- No auth or database in MVP.
- No permanent file storage.
- No automatic external form submission.
- No wallet or payment flows.

## MVP Features
1. Project profile form.
2. Agent workflow capture.
3. Evidence inbox.
4. Markdown proof-pack generator.
5. Grant answer composer.
6. Example gallery.
7. Public Vercel-ready demo.

## Success Criteria
- The app builds locally with Next.js.
- The builder can generate and download Markdown.
- The repository includes README, PRD, docs, and examples.
- The live demo can be used as grant evidence.
