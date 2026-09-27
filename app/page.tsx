import { PACKAGES, SITE, STEPS } from "../lib/site";

const mailto = (subject: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight">
          {SITE.name}
          <span className="text-blue-600">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#packages" className="hover:text-slate-900">Packages</a>
          <a href="#process" className="hover:text-slate-900">Process</a>
          <a href="#work" className="hover:text-slate-900">Work</a>
          <a href="#about" className="hover:text-slate-900">About</a>
        </nav>
        <a
          href={mailto("Free quote request")}
          className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Get a free quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
          Web design &amp; development for small businesses
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          A website that actually brings you customers.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I design and build fast, modern websites for small businesses — from
          single landing pages to full sites with SEO baked in. Delivered in
          weeks, not months, with zero tech headaches for you.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={mailto("Free quote request")}
            className="rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white hover:bg-blue-500"
          >
            Get a free quote
          </a>
          <a
            href="#packages"
            className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white hover:border-slate-400"
          >
            See packages
          </a>
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400">
          <span>✓ 2-week delivery</span>
          <span>✓ SEO included</span>
          <span>✓ You own everything</span>
          <span>✓ Fixed pricing, no surprises</span>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section id="packages" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Simple packages, fixed prices
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Pick the package that fits. Every project includes up to 2 rounds of
          revisions and a simple one-page agreement.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                p.featured
                  ? "border-blue-600 shadow-lg shadow-blue-100 ring-1 ring-blue-600"
                  : "border-slate-200"
              }`}
            >
              {p.featured && (
                <span className="mb-3 w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.blurb}</p>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className="text-sm text-slate-500"> {p.cadence}</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-slate-700">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={mailto(`Interested in: ${p.name} (${p.price}${p.cadence === "/month" ? "/mo" : ""})`)}
                className={`mt-6 rounded-full px-5 py-2.5 text-center text-sm font-semibold ${
                  p.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-300 hover:border-slate-500"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Intro offer: first 2 landing-page clients get $500 pricing in exchange
          for a testimonial.
        </p>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          How it works
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-slate-600">
          Four steps. You approve things, I do everything else.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl bg-white p-7 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Recent work
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <a
            href={SITE.movewellUrl}
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 p-7 hover:border-blue-600"
          >
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              Live project
            </span>
            <h3 className="mt-4 text-xl font-bold group-hover:text-blue-600">
              Movewell
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Lead-generation platform for real estate agents. 10 city pages,
              live lead capture, full SEO foundations.
            </p>
            <p className="mt-4 text-sm font-semibold text-blue-600">
              Visit site →
            </p>
          </a>
          {[
            {
              name: "Harbor Plumbing Co.",
              body: "Landing page concept for a local plumbing company — services, reviews, and a tap-to-call quote form.",
            },
            {
              name: "Cedar Dental Studio",
              body: "Website concept for a dental practice — booking flow, services, and local SEO structure.",
            },
          ].map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-7"
            >
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                Concept
              </span>
              <h3 className="mt-4 text-xl font-bold">{c.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            A one-person studio, zero agency bloat.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Allred Website Agency is a web studio based in {SITE.location},
            run by Ryan Allred. You work directly with Ryan from first call
            to launch — no account managers, no six-month timelines.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-300">
            He designs and builds the site, handles the hosting and the
            technical details, and makes sure it shows up on Google. You just
            approve the design and watch the quote requests come in.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
          Let&apos;s talk about your project
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
          Tell me about your business and I&apos;ll reply within 24 hours with
          a recommendation and a fixed quote. No pressure, no jargon.
        </p>
        <a
          href={mailto("Free quote request — my business website")}
          className="mt-8 inline-block rounded-full bg-blue-600 px-9 py-4 text-lg font-semibold text-white hover:bg-blue-700"
        >
          Get a free quote
        </a>
        <p className="mt-4 text-sm text-slate-500">
          Prefer to browse first? <a href="#packages" className="font-semibold text-blue-600">See packages</a>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row">
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Packages />
        <Process />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
