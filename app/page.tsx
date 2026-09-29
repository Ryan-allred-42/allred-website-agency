"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PACKAGES, SITE, STEPS } from "../lib/site";

const mailto = (subject: string) =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}`;

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">
      <span className="h-px w-8 bg-lime" />
      {children}
    </p>
  );
}

/* ------------------------------ nav ------------------------------ */
function Nav() {
  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold tracking-tight">
          Allred<span className="text-lime">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          {[
            ["Work", "#work"],
            ["Pricing", "#pricing"],
            ["Process", "#process"],
            ["FAQ", "#faq"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href={mailto("Free quote request")}
          className="rounded-full bg-lime px-5 py-2.5 text-sm font-bold text-ink"
        >
          Get a quote
        </motion.a>
      </div>
    </motion.header>
  );
}

/* ------------------------------ hero ------------------------------ */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 left-1/4 h-[480px] w-[480px] rounded-full bg-lime/15 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-0 h-[420px] w-[420px] rounded-full bg-vio/20 blur-[140px]"
        />
        <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
          </span>
          Booking new projects — 2 spots left this month
        </motion.div>

        <h1 className="font-display max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight md:text-8xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            We design websites
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          >
            that make the{" "}
            <span className="font-accent font-normal italic text-lime">
              phone ring.
            </span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.36, ease: EASE }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
        >
          Allred Website Agency builds fast, search-optimized websites for
          small businesses. Fixed pricing, two-week delivery, zero tech
          headaches.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.48, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href={mailto("Free quote request")}
            className="group rounded-full bg-lime px-8 py-4 font-display text-base font-bold text-ink shadow-[0_0_50px_-10px] shadow-lime/50"
          >
            Get a free quote
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#pricing"
            className="rounded-full border border-white/20 px-8 py-4 font-display text-base font-bold text-white transition hover:border-white/50"
          >
            See pricing
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8"
        >
          {[
            ["$375", "starting price"],
            ["2 wks", "typical delivery"],
            ["100%", "custom design, SEO baked in"],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="font-display text-3xl font-bold text-lime">{big}</p>
              <p className="mt-1 text-sm text-white/50">{small}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------- marquee ---------------------------- */
function Marquee() {
  const items = [
    "Landing Pages",
    "Web Design",
    "SEO",
    "Branding",
    "Copywriting",
    "Hosting",
  ];
  const row = [...items, ...items];
  return (
    <section className="relative -rotate-1 border-y-4 border-ink bg-lime py-4">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-xl font-bold uppercase tracking-wide text-ink"
            >
              {item}
              <span className="text-ink/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- included --------------------------- */
function Included() {
  const items: [string, string][] = [
    [
      "Mobile-first design",
      "Most of your customers are on phones. Every site is designed phone-first and looks sharp on any screen.",
    ],
    [
      "SEO foundations",
      "Page titles, meta descriptions, sitemaps, and local keywords — so Google can actually find you.",
    ],
    [
      "Fast, secure hosting",
      "SSL, backups, and hosting that loads in under two seconds. No tech headaches, ever.",
    ],
    [
      "Quote & contact forms",
      "Forms that email you the instant a customer reaches out. Tap-to-call buttons on mobile.",
    ],
    [
      "Google Business Profile",
      "Setup and optimization help so you show up in Maps and local search results.",
    ],
    [
      "Analytics included",
      "See how many people visit and where they come from — plain-English reports, no jargon.",
    ],
  ];
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Every site ships with{" "}
            <span className="font-accent font-normal italic text-lime">
              the works.
            </span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-panel p-7 transition-colors hover:border-lime/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime/15 font-bold text-lime">
                  ✓
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- who it's for ---------------------------- */
function WhoItsFor() {
  const items: [string, string][] = [
    ["Home services", "Plumbers, electricians, HVAC — customers search, call, book."],
    ["Restaurants & cafés", "Menus, hours, directions, reservations — all thumb-friendly."],
    ["Clinics & dental", "Services, bios, and booking that build trust before the visit."],
    ["Law & professional", "Credibility-first design that turns searches into consults."],
    ["Fitness & studios", "Schedules, pricing, and sign-ups that fill your classes."],
    ["Local retail", "Products, reviews, and directions that drive foot traffic."],
  ];
  return (
    <section className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Who it&apos;s for</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Built for businesses like{" "}
            <span className="font-accent font-normal italic text-lime">
              yours.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            If your customers find you on Google and call you on their phone,
            you&apos;re exactly who this is for.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 3) * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-lime/40">
                <h3 className="font-display text-lg font-bold text-lime">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- pricing ---------------------------- */
function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Simple pricing,{" "}
            <span className="font-accent font-normal italic text-lime">
              no surprises.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            Every project includes up to 2 rounds of revisions and a simple
            one-page agreement. 50% deposit to start.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  p.featured
                    ? "bg-lime text-ink shadow-[0_0_70px_-15px] shadow-lime/40"
                    : "border border-white/10 bg-panel"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-ink px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p
                  className={`mt-1 text-sm ${
                    p.featured ? "text-ink/70" : "text-white/50"
                  }`}
                >
                  {p.blurb}
                </p>
                <p className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">
                    {p.price}
                  </span>
                  <span
                    className={`text-sm ${
                      p.featured ? "text-ink/60" : "text-white/40"
                    }`}
                  >
                    {p.cadence}
                  </span>
                </p>
                <ul
                  className={`mt-6 flex-1 space-y-3 text-sm ${
                    p.featured ? "text-ink/80" : "text-white/70"
                  }`}
                >
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className={p.featured ? "" : "text-lime"}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={mailto(
                    `Interested in: ${p.name} (${p.price}${
                      p.cadence === "/month" ? "/mo" : ""
                    })`
                  )}
                  className={`mt-8 rounded-full px-5 py-3 text-center font-display text-sm font-bold ${
                    p.featured
                      ? "bg-ink text-lime"
                      : "border border-white/20 text-white transition hover:border-lime hover:text-lime"
                  }`}
                >
                  {p.cta}
                </motion.a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="mt-8 rounded-3xl border border-lime/30 bg-lime/[0.06] p-6 text-center md:p-8">
            <p className="font-display text-lg font-bold text-lime">
              The no-risk deal
            </p>
            <p className="mx-auto mt-2 max-w-2xl leading-relaxed text-white/65">
              You approve the design before anything gets built — and if you
              don&apos;t love it after two revision rounds, you don&apos;t pay
              the second half.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-white/40">
            Intro offer: the first 2 landing-page clients get{" "}
            <span className="font-bold text-lime">$250 pricing</span> in
            exchange for a testimonial.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------- process ---------------------------- */
function Process() {
  return (
    <section id="process" className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Process</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            First call to launch in{" "}
            <span className="font-accent font-normal italic text-lime">
              two weeks.
            </span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-panel p-8 transition-colors hover:border-lime/40">
                <span className="font-display text-stroke text-7xl font-bold transition group-hover:text-lime group-hover:[-webkit-text-stroke:0px]">
                  {s.n}
                </span>
                <h3 className="font-display mt-6 text-xl font-bold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ work ------------------------------ */
function Work() {
  return (
    <section id="work" className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>Work</Eyebrow>
          <h2 className="font-display max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Proof,{" "}
            <span className="font-accent font-normal italic text-lime">
              not promises.
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal className="h-full">
            <motion.a
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              href={SITE.movewellUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-3xl border border-lime/30 bg-gradient-to-br from-lime/10 to-transparent p-8"
            >
              <span className="w-fit rounded-full bg-lime px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                Live project
              </span>
              <h3 className="font-display mt-5 text-2xl font-bold">
                Movewell
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                Lead-generation platform for real estate agents. 10 city
                pages, live lead capture, full SEO foundations.
              </p>
              <p className="mt-6 font-display text-sm font-bold text-lime">
                Visit site{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1.5">
                  →
                </span>
              </p>
            </motion.a>
          </Reveal>

          {[
            {
              name: "Harbor Plumbing Co.",
              body: "Landing page concept for a local plumbing company — services, reviews, and a tap-to-call quote form.",
            },
            {
              name: "Cedar Dental Studio",
              body: "Website concept for a dental practice — booking flow, services, and local SEO structure.",
            },
          ].map((c, i) => (
            <Reveal key={c.name} delay={0.08 * (i + 1)} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-8">
                <span className="w-fit rounded-full border border-white/15 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-white/40">
                  Concept
                </span>
                <h3 className="font-display mt-5 text-2xl font-bold">
                  {c.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- faq ------------------------------- */
const FAQS: [string, string][] = [
  [
    "How long does it take?",
    "Most sites launch within two weeks of our kickoff call. Landing pages can be even faster.",
  ],
  [
    "What do you need from me?",
    "Your logo (if you have one), a few photos, and a 30-minute call about your business. I handle everything else — writing, design, and all the tech.",
  ],
  [
    "Do I own my website?",
    "Yes — 100%. The domain, the site, and all the content are yours, no strings attached.",
  ],
  [
    "What about hosting?",
    "Hosting, SSL, and backups are covered under the $49/mo Care Plan. Prefer your own account? I'll set it up there instead — your call.",
  ],
  [
    "Can you redesign my existing site?",
    "Absolutely. If the bones are good, an SEO tune-up may be enough. If not, we'll talk about a full rebuild — I'll tell you honestly which one you need.",
  ],
  [
    "What if I don't like the design?",
    "You approve the design before anything gets built, and two revision rounds are included. If you're still not happy, you don't pay the second half.",
  ],
  [
    "How do payments work?",
    "50% deposit to start, 50% when the site launches. Card, bank transfer, Venmo, or Zelle — whatever's easiest for you.",
  ],
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg font-bold">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 font-display text-2xl font-bold text-lime"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 leading-relaxed text-white/60">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className="relative border-t border-white/10 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            Questions?{" "}
            <span className="font-accent font-normal italic text-lime">
              Answered.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="border-t border-white/10">
            {FAQS.map(([q, a]) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ about ----------------------------- */
function About() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-24 md:py-32">
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-10 left-1/3 h-[380px] w-[380px] rounded-full bg-vio/15 blur-[130px]"
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="font-display text-3xl font-bold leading-snug tracking-tight md:text-5xl md:leading-tight">
            One person. No account managers, no bloated timelines — just a
            website that{" "}
            <span className="font-accent font-normal italic text-lime">
              works as hard as you do.
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-white/55">
            Allred Website Agency is a web studio based in {SITE.location},
            run by Ryan Allred. You work directly with Ryan from first call
            to launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- contact ---------------------------- */
function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-lime/12 blur-[140px]"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex items-center gap-3">
              <span className="h-px w-8 bg-lime" />
              Contact
              <span className="h-px w-8 bg-lime" />
            </span>
          </Eyebrow>
          <h2 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
            Let&apos;s build{" "}
            <span className="font-accent font-normal italic text-lime">
              yours.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
            Tell me about your business and I&apos;ll reply within 24 hours
            with a recommendation and a fixed quote. No pressure, no jargon.
          </p>
          <motion.a
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={mailto("Free quote request — my business website")}
            className="mt-10 inline-block rounded-full bg-lime px-12 py-5 font-display text-lg font-bold text-ink shadow-[0_0_80px_-15px] shadow-lime/60"
          >
            Get a free quote →
          </motion.a>
          <p className="mt-6 text-sm text-white/40">
            Prefer email?{" "}
            <a
              href={mailto("Free quote request")}
              className="font-semibold text-lime hover:underline"
            >
              {SITE.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ footer ---------------------------- */
function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-white/40 md:flex-row">
        <p className="font-display font-bold text-white">
          Allred<span className="text-lime">.</span>
        </p>
        <p>© 2026 {SITE.name}. All rights reserved.</p>
        <p>{SITE.location}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Included />
        <Pricing />
        <WhoItsFor />
        <Process />
        <Work />
        <Faq />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
