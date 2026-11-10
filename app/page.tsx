import type { Metadata } from "next";
import { home } from "@/content/home";
import { mock } from "@/content/mock";
import ScrollMotion from "@/components/ScrollMotion";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: home.meta.title,
    description: home.meta.description,
    openGraph: { title: home.meta.title, description: home.meta.description, type: "website" },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Crewline (demo)",
  applicationCategory: "BusinessApplication",
  description: home.meta.description,
};

export default function Home() {
  const { hero, scene, trades, cta } = home;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav">
        <span className="logo" aria-label="Crewline">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18M5 18V9l7-5 7 5v9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="M10 18v-5h4v5" fill="none" stroke="currentColor" strokeWidth="2.2"/></svg>
          Crewline
        </span>
        <a className="btn btn-sm" href="#flow">{hero.cta}</a>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-shapes" aria-hidden="true">
            <span className="shape s1" /><span className="shape s2" /><span className="shape s3" />
          </div>
          <p className="eyebrow hero-in">{hero.eyebrow}</p>
          <h1 id="hero-title" className="hero-in">{hero.title}</h1>
          <p className="lead hero-in">{hero.lead}</p>
          <a className="btn hero-in" href="#flow">{hero.cta}</a>
        </section>

        <section id="flow" className="scene" aria-labelledby="scene-title">
          <h2 id="scene-title" className="scene-title">{scene.heading}</h2>
          <div className="scene-grid">
            <div className="device-wrap">
              <div className="device" role="img" aria-label="Product screens: purchase order, job cost, crew schedule and a quiet evening">
                <div className="progress" aria-hidden="true"><span className="progress-bar" /></div>

                <div className="panel" data-panel="order">
                  <p className="panel-title">{mock.order.title}</p>
                  {mock.order.lines.map((l) => (
                    <div className="row build" key={l.item}>
                      <span>{l.item}</span><span className="muted">{l.qty}</span><span className="pill">{l.status}</span>
                    </div>
                  ))}
                </div>

                <div className="panel" data-panel="costing">
                  <p className="panel-title">{mock.costing.title}</p>
                  {mock.costing.bars.map((b) => (
                    <div className="bar-row build" key={b.label}>
                      <span className="bar-label">{b.label}</span>
                      <span className="bar"><span className="bar-fill" style={{ width: `${b.value}%` }} /></span>
                    </div>
                  ))}
                  <p className="pill pill-ok build">{mock.costing.margin}</p>
                </div>

                <div className="panel" data-panel="crew">
                  <p className="panel-title">{mock.crew.title}</p>
                  {mock.crew.rows.map((r) => (
                    <div className="row build" key={r.crew}>
                      <span className="avatar" aria-hidden="true">{r.initial}</span>
                      <span>{r.crew}<br /><span className="muted">{r.job}</span></span>
                      <span className="pill">{r.time}</span>
                    </div>
                  ))}
                </div>

                <div className="panel panel-free" data-panel="free">
                  <svg className="moon build" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true"><path d="M44 8a26 26 0 1 0 12 36A22 22 0 0 1 44 8z" fill="currentColor"/></svg>
                  <p className="clock build">{mock.free.title}</p>
                  <p className="muted build">{mock.free.subtitle}</p>
                </div>
              </div>
            </div>

            <ol className="steps">
              {scene.steps.map((s) => (
                <li className="step" key={s.id} data-step={s.id}>
                  <p className="eyebrow">{s.eyebrow}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="trades" aria-labelledby="trades-title">
          <h2 id="trades-title">{trades.heading}</h2>
          <ul className="trade-track">
            {trades.items.map((t) => (
              <li className="trade" key={t.name}><strong>{t.name}</strong><span>{t.stat}</span></li>
            ))}
          </ul>
        </section>

        <section className="cta" aria-labelledby="cta-title">
          <h2 id="cta-title">{cta.title}</h2>
          <p>{cta.body}</p>
          <a className="btn" href="https://github.com/IrynaKurnishova/crewline-scroll-demo">{cta.button}</a>
        </section>
      </main>
      <footer className="foot">Concept demo by Iryna Kurnishova · Next.js App Router + GSAP ScrollTrigger</footer>
      <ScrollMotion />
    </>
  );
}
