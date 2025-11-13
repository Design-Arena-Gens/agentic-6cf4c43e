"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe,
  Headphones,
  Layers,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Stars,
} from "lucide-react";

const services = [
  {
    title: "WordPress Engineering",
    description:
      "Future-proof WordPress platforms tailored to your brand with blazing-fast performance, modular blocks, and seamless integrations.",
    icon: Code2,
    highlights: ["Custom theme systems", "Enterprise-grade security", "Headless & API-ready"],
  },
  {
    title: "WooCommerce Growth",
    description:
      "Data-driven WooCommerce storefronts optimized to convert visitors into repeat customers across every device and market.",
    icon: ShoppingCart,
    highlights: ["Conversion-first UX", "Global payments & shipping", "Automation & CRM flows"],
  },
  {
    title: "Domain & Managed Hosting",
    description:
      "Hands-free hosting designed for uptime, speed, and resilience—complete with proactive monitoring and disaster recovery.",
    icon: Globe,
    highlights: ["99.99% uptime SLA", "Edge caching & CDN", "Continuous performance audits"],
  },
  {
    title: "Lifecycle Maintenance",
    description:
      "Dedicated care plans with updates, enhancements, and on-demand support that keeps your digital presence ahead of the curve.",
    icon: LifeBuoy,
    highlights: ["Unlimited content edits", "Real-time threat response", "Quarterly innovation sprints"],
  },
];

const stats = [
  { value: "12+", label: "Years of WordPress leadership" },
  { value: "340+", label: "Successful launches delivered" },
  { value: "97%", label: "Client retention over 3 years" },
  { value: "4.9★", label: "Partner satisfaction rating" },
];

const differentiators = [
  {
    title: "Strategy-First Delivery",
    description:
      "Every build begins with deep discovery, brand alignment, and measurable KPIs so you launch with clarity and momentum.",
  },
  {
    title: "Automation & Integrations",
    description:
      "Connect ecommerce, CRM, marketing, and analytics tools into a single flow—crafted by engineers fluent in business operations.",
  },
  {
    title: "Obsessed with Performance",
    description:
      "Experience sub-second loading, Lighthouse 95+, and Core Web Vitals excellence baked into every deliverable.",
  },
];

const process = [
  {
    title: "Discover & Blueprint",
    description:
      "Collaborative workshops map business goals, audience journeys, and technical requirements to finalize the roadmap.",
    result: "You receive a crystal-clear launch blueprint with timelines, dependencies, and growth metrics.",
  },
  {
    title: "Design & Prototype",
    description:
      "We translate strategy into immersive UI, micro-interactions, and content architecture that builds trust and drives action.",
    result: "Preview high-fidelity prototypes to iterate fast before development begins.",
  },
  {
    title: "Engineering & QA",
    description:
      "Modular development combines WordPress best practices with modern tooling, automated testing, and rigorous QA.",
    result: "Your platform ships with bulletproof reliability, performance, and accessibility compliance.",
  },
  {
    title: "Launch & Elevate",
    description:
      "After go-live, we accelerate adoption with analytics-driven enhancements, marketing automation, and ongoing innovation.",
    result: "Scale confidently with a proactive partner invested in your long-term growth.",
  },
];

const testimonials = [
  {
    quote:
      "CGS rebuilt our WooCommerce experience end-to-end. Conversions jumped 38% in the first six weeks, and the maintenance team is lightning fast.",
    name: "Sara Mitchell",
    role: "Head of Digital, Northshore Labs",
  },
  {
    quote:
      "They move like an in-house product squad. From strategy to launch, every sprint was transparent, predictable, and delivered beyond scope.",
    name: "Anthony Chowdhury",
    role: "Founder, Deltabyte Ventures",
  },
  {
    quote:
      "Our membership platform now handles 10x the traffic with zero downtime. CGS handles optimizations before we even think to ask.",
    name: "Monica Patel",
    role: "COO, Global Education Network",
  },
];

const techStack = [
  "WordPress VIP",
  "WooCommerce",
  "Next.js",
  "Headless Commerce",
  "Cloudflare",
  "Stripe",
  "HubSpot",
  "Jetpack",
];

const easeOut = [0.16, 1, 0.3, 1] as const;
const easeInOut = [0.42, 0, 0.58, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: easeOut },
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DecorativeBackground />
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-8 md:px-12 lg:px-16">
        <Navbar />
        <Hero />
        <Services />
        <Differentiators />
        <Process />
        <Testimonials />
        <TechStack />
        <FinalCta />
        <Footer />
      </div>
    </div>
  );
}

function DecorativeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines [background-size:140px_140px] opacity-35" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-tech-blue/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-mint-green/20 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.65, 0.9, 0.65] }}
        transition={{ duration: 14, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-tech-blue/10 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 16, repeat: Infinity, ease: easeInOut }}
      />
    </div>
  );
}

function Navbar() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Insights", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="sticky top-6 z-20 mb-14 flex items-center justify-between rounded-full border border-white/10 bg-midnight-light/75 px-6 py-3 backdrop-blur-xl"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
          <Sparkles className="h-5 w-5 text-mint-green" />
        </div>
        <div>
          <p className="font-heading text-lg font-semibold uppercase tracking-[0.2em]">
            CGS
          </p>
          <p className="text-xs text-white/60">Chowdhury Global Solutions</p>
        </div>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-full border border-mint-green/60 bg-white/5 px-4 py-2 text-sm font-medium text-mint-green transition-all duration-300 hover:bg-mint-green hover:text-midnight"
      >
        Start a Project
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="relative mb-24 flex flex-col gap-12 lg:flex-row">
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.1 }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
          <Stars className="h-3.5 w-3.5 text-mint-green" />
          Digital acceleration for modern brands
        </span>
        <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
          Future-ready WordPress &amp; WooCommerce experiences engineered for
          growth.
        </h1>
        <p className="max-w-xl text-lg text-white/70">
          CGS is the strategic technology partner for businesses that demand
          excellence. From premium WordPress builds to high-converting
          WooCommerce storefronts, we architect systems that are fast, secure,
          and built to scale.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-mint-green px-6 py-3 text-sm font-semibold text-midnight transition-transform duration-300 hover:-translate-y-0.5"
          >
            Schedule a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80 transition-colors hover:border-mint-green/70 hover:text-white"
          >
            Explore capabilities
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex flex-1 flex-col justify-end gap-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
      >
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-lg">
          <p className="text-xs uppercase tracking-[0.3em] text-mint-green">
            Proven outcomes
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 text-white">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4"
              >
                <p className="font-heading text-3xl font-semibold text-mint-green">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 backdrop-blur-lg"
          {...fadeUp}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint-green/10 text-mint-green">
              <Rocket className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                Launch spotlight
              </p>
              <p className="font-heading text-lg font-medium">
                Global Retail Collective
              </p>
            </div>
          </div>
          <p className="text-sm text-white/70">
            Replatformed to a modular WordPress + WooCommerce stack with
            multilingual commerce, unified inventory, and automated fulfillment
            across 7 regions.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/10 px-3 py-1">
              +122% revenue YoY
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              1.2s load globally
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Unified marketing stack
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="mb-24 scroll-mt-28">
      <motion.div
        className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        {...fadeUp}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mint-green/80">
            Core Services
          </p>
          <h2 className="mt-2 font-heading text-3xl text-white md:text-4xl">
            Intelligent digital ecosystems for businesses ready to scale.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/60">
          Every engagement blends strategy, product thinking, and technical
          excellence. We move fast without compromising on code quality,
          performance, or brand cohesion.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: easeOut, delay: index * 0.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="rounded-2xl border border-mint-green/30 bg-mint-green/10 p-3 text-mint-green">
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-6 font-heading text-2xl text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{service.description}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-white/60">
                {service.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition-colors duration-300 group-hover:border-mint-green/60 group-hover:bg-mint-green/10 group-hover:text-mint-green"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Differentiators() {
  return (
    <section className="mb-24">
      <motion.div className="mb-10" {...fadeUp}>
        <p className="text-xs uppercase tracking-[0.3em] text-mint-green/80">
          Why CGS
        </p>
        <h2 className="mt-2 max-w-3xl font-heading text-3xl text-white md:text-4xl">
          Your competitive edge starts with a partner that codes, strategizes,
          and accelerates like a product team.
        </h2>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-3">
        {differentiators.map((item, index) => (
          <motion.div
            key={item.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(51,163,255,0.35)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: index * 0.08 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-mint-green/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />
            <h3 className="relative font-heading text-xl text-white">
              {item.title}
            </h3>
            <p className="relative mt-4 text-sm text-white/70">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="mb-24 scroll-mt-28">
      <motion.div className="mb-12 flex flex-col gap-6 md:flex-row md:justify-between" {...fadeUp}>
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-mint-green/80">
            Signature methodology
          </p>
          <h2 className="mt-2 font-heading text-3xl text-white md:text-4xl">
            A transparent, sprint-based partnership from kickoff to scale.
          </h2>
        </div>
        <p className="max-w-md text-sm text-white/60">
          Cross-functional specialists handle strategy, design, engineering, QA,
          and optimization. Weekly showcases, daily async updates, and shared
          dashboards keep your stakeholders aligned.
        </p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-2">
        {process.map((stage, index) => (
          <motion.div
            key={stage.title}
            className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOut, delay: index * 0.06 }}
          >
            <div className="absolute -left-4 top-6 rounded-full border border-mint-green/40 bg-mint-green/10 px-3 py-1 text-xs text-mint-green">
              Step {index + 1}
            </div>
            <h3 className="mt-10 font-heading text-2xl text-white">
              {stage.title}
            </h3>
            <p className="mt-3 text-sm text-white/70">{stage.description}</p>
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60 transition-colors duration-300 group-hover:border-mint-green/40 group-hover:text-mint-green">
              {stage.result}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="mb-24 scroll-mt-28">
      <motion.div className="mb-12 flex flex-col gap-5 md:flex-row md:items-center md:justify-between" {...fadeUp}>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-mint-green/80">
            Client feedback
          </p>
          <h2 className="mt-2 max-w-2xl font-heading text-3xl text-white md:text-4xl">
            Trusted globally by founders, CMOs, and enterprise teams.
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-xs text-white/70">
          <ShieldCheck className="h-4 w-4 text-mint-green" />
          ISO-aligned security &amp; compliance
        </div>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-lg"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easeOut, delay: index * 0.05 }}
          >
            <div className="absolute right-4 top-4 text-4xl text-white/5">“</div>
            <blockquote className="text-sm text-white/70">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-sm font-semibold text-white">
                {testimonial.name}
              </p>
              <p className="text-xs text-white/50">{testimonial.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="tech" className="mb-24 scroll-mt-28">
      <motion.div className="mb-8" {...fadeUp}>
        <p className="text-xs uppercase tracking-[0.3em] text-mint-green/80">
          Platform ecosystem
        </p>
        <h2 className="mt-2 font-heading text-3xl text-white md:text-4xl">
          Integrations and tooling that power resilient digital operations.
        </h2>
      </motion.div>
      <motion.div
        className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        {techStack.map((tool) => (
          <div
            key={tool}
            className="flex items-center justify-center rounded-2xl border border-white/5 bg-white/5 px-4 py-6 text-sm text-white/70 transition duration-300 hover:border-mint-green/40 hover:bg-mint-green/10 hover:text-mint-green"
          >
            {tool}
          </div>
        ))}
      </motion.div>
      <motion.div
        className="mt-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center md:justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 text-sm text-white/60">
          <Layers className="h-5 w-5 text-mint-green" />
          Custom automation across marketing, support, analytics, and finance.
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <Headphones className="h-4 w-4 text-mint-green" />
            24/7 incident response
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <ShieldCheck className="h-4 w-4 text-mint-green" />
            Advanced threat mitigation
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contact" className="relative mb-24 scroll-mt-28">
      <motion.div
        className="overflow-hidden rounded-3xl border border-mint-green/50 bg-gradient-to-br from-mint-green/15 via-transparent to-tech-blue/20 p-8 text-white shadow-[0_0_40px_rgba(51,163,255,0.35)] backdrop-blur-xl md:p-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-mint-green/90">
              Let&apos;s build the future
            </p>
            <h2 className="font-heading text-3xl md:text-4xl">
              Ready to launch a WordPress or WooCommerce project that outpaces
              the competition?
            </h2>
            <p className="text-sm text-white/70">
              Share your goals and we&apos;ll craft a rapid, actionable plan
              within 48 hours. Expect a clarity call, strategic roadmap, and
              transparent investment options.
            </p>
          </div>
          <motion.form
            className="w-full max-w-md space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 text-sm backdrop-blur-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          >
            <div>
              <label htmlFor="name" className="text-xs uppercase tracking-wide text-white/60">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-mint-green/60 focus:outline-none focus:ring-2 focus:ring-mint-green/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs uppercase tracking-wide text-white/60">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="hello@company.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-mint-green/60 focus:outline-none focus:ring-2 focus:ring-mint-green/50"
              />
            </div>
            <div>
              <label htmlFor="project" className="text-xs uppercase tracking-wide text-white/60">
                Project vision
              </label>
              <textarea
                id="project"
                rows={4}
                placeholder="Tell us about your goals and timeline..."
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-mint-green/60 focus:outline-none focus:ring-2 focus:ring-mint-green/50"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint-green px-6 py-3 font-medium text-midnight transition-transform duration-300 hover:-translate-y-0.5"
            >
              Request project plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-white/60">
              By submitting, you agree to our privacy policy. We respond to all
              inquiries within one business day.
            </p>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 pt-8 text-sm text-white/60">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-lg text-white">
            Chowdhury Global Solutions
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            WordPress &amp; WooCommerce Specialists
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:hello@chowdhuryglobal.com" className="transition hover:text-mint-green">
            hello@chowdhuryglobal.com
          </a>
          <span className="hidden text-white/30 md:inline">|</span>
          <a href="tel:+18004561234" className="transition hover:text-mint-green">
            +1 (800) 456-1234
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-2 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Chowdhury Global Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#services" className="hover:text-mint-green">
            Services
          </a>
          <a href="#process" className="hover:text-mint-green">
            Process
          </a>
          <a href="#contact" className="hover:text-mint-green">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
