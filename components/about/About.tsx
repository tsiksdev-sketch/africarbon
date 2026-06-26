'use client'


import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
;
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Target,
  Users,
  BookOpen,
  Leaf,
  ArrowRight,
  MapPin,
  Award,
  TrendingUp,
  Building2,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We support credible, transparent and responsible climate-market participation.",
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description:
      "We apply practical expertise in carbon markets, ESG, MRV, policy, project development and sustainability.",
  },
  {
    icon: Globe,
    title: "African Relevance",
    description:
      "We design solutions that reflect African regulatory, institutional, community and development realities.",
  },
  {
    icon: Target,
    title: "Implementation Focus",
    description:
      "We help clients move from awareness and strategy to documentation, systems and action.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work across public, private, development and community ecosystems to build shared climate value.",
  },
  {
    icon: BookOpen,
    title: "Capacity Building",
    description:
      "We strengthen local knowledge and institutional readiness for long-term climate-market participation.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We promote solutions that reduce emissions, strengthen resilience and support lasting environmental stewardship.",
  },
];

const leaders = [
  {
    name: "Mr Kudakwashe Manyanga",
    role: "Executive Director",
    description:
      "Provides strategic leadership across carbon markets, policy, project development and sustainability advisory.",
    initials: "KM",
  },
  {
    name: "Mrs Shyline Manyanga",
    role: "Director for Capacity Building and Training",
    description:
      "Leads AICTS Academy, training programmes and capacity-building initiatives.",
    initials: "SM",
  },
  {
    name: "Dr Trevor Mvundura",
    role: "Director for Business Development and Partnerships",
    description:
      "Supports institutional growth, strategic partnerships, market positioning and stakeholder engagement.",
    initials: "TM",
  },
  {
    name: "Mr Clive Mvundura",
    role: "Director for Technology and Innovation",
    description:
      "Supports digital learning, platform-enabled climate solutions, carbon data systems and innovation.",
    initials: "CM",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AICTS",
  description:
    "Learn about AICTS, a Zimbabwe and Zambia-registered institution supporting carbon markets, RECs, ESG, MRV, policy and climate finance.",
  url: "https://carbon-scroll-story.lovable.app/about",
  mainEntity: {
    "@type": "Organization",
    name: "Africa Institute for Carbon Trading and Sustainability",
    alternateName: "AICTS",
    url: "https://carbon-scroll-story.lovable.app",
    description:
      "A specialist African institution working across carbon markets, Renewable Energy Certificates, ESG, GHG accounting, MRV, Article 6, climate finance, policy development and sustainability transformation.",
    address: [
      {
        "@type": "PostalAddress",
        addressCountry: "Zimbabwe",
      },
      {
        "@type": "PostalAddress",
        addressCountry: "Zambia",
      },
    ],
  },
};

const About = () => {
   const canonicalUrl = "https://carbon-scroll-story.lovable.app/about";
  

  const whoRef = useRef<HTMLDivElement>(null);
  const whoInView = useInView(whoRef, { once: true, margin: "-100px" });

  const roleRef = useRef<HTMLDivElement>(null);
  const roleInView = useInView(roleRef, { once: true, margin: "-100px" });

  const evolutionRef = useRef<HTMLDivElement>(null);
  const evolutionInView = useInView(evolutionRef, {
    once: true,
    margin: "-100px",
  });

  const missionRef = useRef<HTMLDivElement>(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });

  const valuesRef = useRef<HTMLDivElement>(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  const leadersRef = useRef<HTMLDivElement>(null);
  const leadersInView = useInView(leadersRef, { once: true, margin: "-100px" });

  const regionRef = useRef<HTMLDivElement>(null);
  const regionInView = useInView(regionRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
       <Head>
      <title>About AICTS | African Carbon Markets &amp; Sustainability Advisory Institution</title>

      <meta
        name="description"
        content="Learn about AICTS, a Zimbabwe and Zambia-registered institution supporting carbon markets, RECs, ESG, MRV, policy and climate finance."
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="About AICTS | African Carbon Markets & Sustainability Advisory Institution"
      />
      <meta
        property="og:description"
        content="Learn about AICTS, a Zimbabwe and Zambia-registered institution supporting carbon markets, RECs, ESG, MRV, policy and climate finance."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>

      

      {/* Who we are */}
      <section ref={whoRef} className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Who we are
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Registered in Zimbabwe and Zambia, with representative and satellite
              reach across the SADC region
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Registered in Zimbabwe and Zambia, with representative and satellite
              reach across the SADC region, AICTS supports governments, regulators,
              project owners, investors, financial institutions, corporates, NGOs and
              communities to prepare credible climate-market pathways.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our strength lies in combining capabilities that are often treated
              separately: carbon market knowledge, policy and regulatory
              understanding, project development, stakeholder engagement,
              safeguards, climate finance preparation and capacity building.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={whoInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl  bg-lime-500 shadow-2xl p-10">
              <div className="grid grid-cols-2 gap-8 ">
                {[
                  { value: "Zimbabwe", label: "Primary Registration" },
                  { value: "Zambia", label: "Secondary Registration" },
                  { value: "SADC", label: "Regional Reach" },
                  { value: "6+", label: "Service Areas" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-heading text-2xl font-bold text-yellow-400 md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our institutional role */}
      <section ref={roleRef} className="bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={roleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our institutional role
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Bridging climate ambition and market-ready implementation
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              AICTS operates as a bridge between climate ambition and market-ready
              implementation. We help clients understand what is possible, what is
              required, what risks must be managed and which pathway is most credible
              for their context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our evolution */}
      <section ref={evolutionRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={evolutionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our evolution
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              From education to end-to-end climate-market support
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={evolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-xl border border-lime-500 bg-card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500 text-primary">
                <BookOpen className="h-6 w-6 bg-lime-500 text-white" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                Foundation in Education
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                AICTS began with a strong education, training and capacity-building
                mandate in carbon trading, climate change and sustainability. That
                foundation remains important because Africa&apos;s climate transition
                must be supported by local knowledge and institutional readiness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={evolutionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-xl border border-lime-500 bg-card p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500 text-primary">
                <TrendingUp className="h-6 w-6  bg-lime-500 text-white" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                Expanded Advisory &amp; Implementation
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                As market needs evolved, AICTS expanded beyond training into advisory
                and implementation support. Today, the institution supports carbon
                project screening, feasibility, baselines, documentation, MRV
                readiness, Article 6 policy systems, REC market development, climate
                finance preparation, ESG reporting and community-based climate
                action.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="rounded-xl border border-lime-500 bg-card p-10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500 text-primary">
                <Target className="h-6 w-6 bg-lime-500 text-white" />
              </div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Mission
              </p>
              <h3 className="mb-4 font-heading text-2xl font-bold">
                Converting climate ambition into credible action
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                To help African governments, institutions, project owners, investors
                and communities convert climate ambition into credible, measurable
                and financeable action through carbon markets, RECs, ESG, MRV,
                policy advisory, climate finance and capacity building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-xl border border-lime-500 bg-card p-10"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-lime-500 text-primary">
                <Award className="h-6 w-6 text-white" />
              </div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Vision
              </p>
              <h3 className="mb-4 font-heading text-2xl font-bold">
                A trusted African institution for high-integrity markets
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                To be a trusted African institution for high-integrity carbon markets,
                renewable energy certificate systems, ESG practice, climate finance
                readiness and sustainability implementation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Values
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              What guides our work
            </h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-xl border shadow-2xl border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-(--shadow-glow)"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <v.icon className="h-6 w-6 text-lime-500" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadersRef} className="bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Leadership and technical expertise
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              Meet the team
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={leadersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-16 max-w-3xl text-center text-muted-foreground"
          >
            AICTS is led by a multidisciplinary team with experience across carbon
            markets, climate policy, Article 6, sustainability training, business
            development, technology, environmental restoration and community climate
            action.
          </motion.p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 40 }}
                animate={leadersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border shadow-2xl border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30"
              >
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <span className="font-heading text-2xl text-emerald-500 font-bold">
                    {leader.initials}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm text-primary">{leader.role}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional footprint */}
      <section ref={regionRef} className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={regionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-6 w-6 text-lime-500" />
            </div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Our regional footprint
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Rooted in Zimbabwe and Zambia, serving the SADC region
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              AICTS is registered in Zimbabwe and Zambia and maintains
              representative or satellite presence within the SADC region to support
              regional engagement and service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border shadow-2xl bg-card p-12 text-center">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Building2 className="h-6 w-6 text-lime-500" />
          </div>
          <h2 className="font-heading text-3xl font-bold md:text-4xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
            Work with an African climate-market implementation partner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Speak to AICTS about your institutional, project, policy, REC, ESG, MRV
            or climate finance needs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild className="bg-lime-500">
              <Link href="/contact">
                Contact AICTS <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button  size="lg" asChild className="bg-emerald-500">
              <Link href="/tools/diagnostic">Start a Diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
