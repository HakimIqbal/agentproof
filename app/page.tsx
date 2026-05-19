import Link from "next/link";

const features = [
  ["Project profile", "Capture repo, demo, problem, users, and impact in a format reviewers can scan quickly."],
  ["Agent workflow", "Describe Hermes, Codex, Claude Code, MiMo, or routed model workflows as a clear build timeline."],
  ["Evidence inbox", "Paste terminal logs, session summaries, screenshots references, commit links, and generated artifacts."],
  ["Proof pack", "Generate a Markdown dossier with claims, evidence, impact metrics, and reviewer notes."],
  ["Grant answer", "Compose a 100-1200 word application answer that maps real evidence to project value."],
  ["Public demo", "Runs without login, ships with sample data, and can be deployed to Vercel as a proof artifact itself."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <div className="container nav-inner">
          <Link className="logo" href="/">AgentProof</Link>
          <div className="nav-links">
            <a href="#features">Features</a>
            <Link href="/examples">Examples</Link>
            <a href="/PRD.md">PRD</a>
            <Link className="pill cta" href="/builder">Open Builder</Link>
          </div>
        </div>
      </nav>

      <section className="container hero">
        <div>
          <div className="kicker">Reviewer-ready evidence for AI builders</div>
          <h1>Turn agent work into proof packs.</h1>
          <p className="lede">
            AgentProof converts raw AI agent activity -- logs, repository links, screenshots,
            deployment notes, and workflow summaries -- into structured grant and hackathon evidence.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/builder">Generate a proof pack</Link>
            <Link className="btn" href="/examples">View examples</Link>
          </div>
          <div className="badge-row">
            <span className="badge">No login MVP</span>
            <span className="badge">Markdown export</span>
            <span className="badge">Built for MiMo 100T style reviews</span>
          </div>
        </div>
        <div className="terminal-card">
          <div className="term-head"><span>agentproof://run</span><span>verify {"->"} compose {"->"} export</span></div>
          <div className="term-body">
            <div><span className="green">$</span> load evidence ./agent-session.log</div>
            <div><span className="green">$</span> link repo https://github.com/HakimIqbal/agentproof</div>
            <div><span className="orange">claim</span> Built with Hermes Agent + Codex workflow</div>
            <div><span className="blue">evidence</span> terminal logs, README, Vercel demo, generated pack</div>
            <br />
            <div><span className="green">✓</span> Proof pack generated</div>
            <div><span className="green">✓</span> Grant answer within 100-1200 words</div>
          </div>
        </div>
      </section>

      <section id="features" className="container section">
        <div className="section-title">
          <h2>Small scope. Strong signal.</h2>
          <p className="kicker">MVP features</p>
        </div>
        <div className="grid">
          {features.map(([title, body]) => <div className="card" key={title}><strong>{title}</strong><p>{body}</p></div>)}
        </div>
      </section>

      <footer className="footer"><div className="container">AgentProof - built to make AI agent usage auditable.</div></footer>
    </main>
  );
}
