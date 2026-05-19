import Link from "next/link";

const examples = [
  { title: "AgentProof for Xiaomi MiMo", tag: "Grant application", body: "A complete proof pack showing project summary, Hermes/Codex workflow, GitHub/Vercel links, and evidence mapping for a model credit application." },
  { title: "Web3 Ops Agent", tag: "Builder grant", body: "A sample dossier for an AI-assisted dashboard that monitors wallets, summarizes risks, and records deployment evidence." },
  { title: "Open-source Automation", tag: "Hackathon", body: "A compact proof pack for a CLI automation project with terminal logs, generated artifacts, and impact metrics." },
];

export default function ExamplesPage() {
  return <main>
    <nav className="nav"><div className="container nav-inner"><Link className="logo" href="/">AgentProof</Link><div className="nav-links"><Link href="/builder">Builder</Link><Link className="pill" href="/">Home</Link></div></div></nav>
    <section className="container section">
      <div className="section-title"><h2>Example proof packs</h2><p className="kicker">reviewer-facing samples</p></div>
      <div className="grid">{examples.map((item) => <article className="card" key={item.title}><span className="badge">{item.tag}</span><strong>{item.title}</strong><p>{item.body}</p></article>)}</div>
      <div className="hero-actions"><Link className="btn primary" href="/builder">Load sample in builder</Link><a className="btn" href="/examples/xiaomi-mimo-proof-pack.md">Open Markdown sample</a></div>
    </section>
  </main>;
}
