'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  TreePine,
  Scale,
  Sun,
  BarChart3,
  ClipboardCheck,
  GraduationCap,
  Banknote,
  Search,
  Compass,
  FileText,
  Users,
  Rocket,
  LineChart,
  ArrowRight,
  MessageCircle,
  HelpCircle,
} from "lucide-react";

const pillars = [
  {
    icon: TreePine,
    title: "Carbon Markets and Project Development",
    description:
      "Carbon opportunity screening, eligibility assessment, feasibility studies, baseline assessment, methodology mapping, PIN/PDD support, MRV planning, validation and verification readiness, registry-readiness and buyer-readiness support.",
    to: "/services/carbonmarkets",
  },
  {
    icon: Scale,
    title: "Article 6, Policy and Regulatory Advisory",
    description:
      "Carbon market policy advisory, Article 6 readiness, host-country authorisation pathways, institutional mapping, registry-readiness, safeguards, stakeholder consultation and implementation roadmaps.",
    to: "/services/article6",
  },
  {
    icon: Sun,
    title: "Renewable Energy Certificates and Energy Attribute Markets",
    description:
      "REC awareness, renewable energy generator readiness, documentation review, metering evidence, Evident Registry-related preparation support, buyer education and REC transaction-readiness.",
    to: "/services/recs",
  },
  {
    icon: BarChart3,
    title: "Carbon Footprint, GHG and ESG Services",
    description:
      "Organisational carbon footprints, Scope 1, Scope 2 and selected Scope 3 assessments, GHG inventories, ESG baselines, sustainability reports, reduction roadmaps and executive ESG briefings.",
    to: "/services/esgfootprint",
  },
  {
    icon: ClipboardCheck,
    title: "MRV, Safeguards and Stakeholder Engagement",
    description:
      "MRV systems, monitoring plans, data templates, evidence files, stakeholder mapping, community consultations, FPIC support, safeguards and verification-readiness checklists.",
    to: "/services/mrvsafeguard",
  },
  {
    icon: GraduationCap,
    title: "AICTS Academy, Research and Capacity Building",
    description:
      "Online courses, executive masterclasses, customised training, government and regulator training, workshops, technical clinics and market intelligence notes.",
    to: "/academy",
  },
  {
    icon: Banknote,
    title: "Climate Finance and Investor Readiness",
    description:
      "Climate finance concept notes, investment-readiness assessments, carbon and REC value analysis, project teasers, funder-facing proposals, due diligence support and investor documentation.",
    to: "/services/climatefinance",
  },
];

const packages = [
  "Carbon Opportunity Diagnostic — for project owners, developers, municipalities and NGOs.",
  "REC Readiness Assessment — for renewable energy producers.",
  "Carbon Footprint Starter Package — for banks, corporates, SMEs and public institutions.",
  "ESG Baseline Review — for corporates, banks, mining companies and technology firms.",
  "Article 6 / Policy Readiness Review — for governments and regulators.",
  "MRV and Safeguards Design Package — for carbon projects, NGOs and developers.",
  "Investor Readiness Pack — for project owners seeking finance.",
  "Executive Carbon Market Masterclass — for boards, ministries, banks and corporates.",
];

const methodology = [
  {
    icon: Search,
    title: "Diagnose",
    description:
      "Assess objectives, assets, data, policy context and market opportunity.",
  },
  {
    icon: Compass,
    title: "Design",
    description:
      "Develop the pathway for carbon, REC, ESG, MRV, policy, training or finance readiness.",
  },
  {
    icon: FileText,
    title: "Document",
    description:
      "Prepare technical, policy, ESG, GHG, MRV, stakeholder or investor-facing documentation.",
  },
  {
    icon: Users,
    title: "Engage",
    description:
      "Support consultations, stakeholder processes and institutional coordination.",
  },
  {
    icon: Rocket,
    title: "Implement",
    description:
      "Support systems, training, evidence files and readiness processes.",
  },
  {
    icon: LineChart,
    title: "Monitor and Improve",
    description:
      "Track progress, improve systems and support reporting or verification readiness.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AICTS Services",
  description:
    "Explore AICTS advisory services in carbon project development, Article 6, RECs, ESG, GHG accounting, MRV and climate finance.",
  url: "https://carbon-scroll-story.lovable.app/services",
  provider: {
    "@type": "Organization",
    name: "Africa Institute for Carbon Trading and Sustainability",
    alternateName: "AICTS",
  },
  areaServed: "Africa",
  serviceType: [
    "Carbon market advisory",
    "Renewable Energy Certificate advisory",
    "ESG consulting",
    "MRV consulting",
    "Climate finance advisory",
    "Article 6 advisory",
  ],
};

const Services = () => {
   const canonicalUrl = "https://carbon-scroll-story.lovable.app/services";
  const heroRef = useRef<HTMLDivElement>(null);
  
 

  const pillarsRef = useRef<HTMLDivElement>(null);
  const pillarsInView = useInView(pillarsRef, { once: true, margin: "-100px" });

  const packagesRef = useRef<HTMLDivElement>(null);
  const packagesInView = useInView(packagesRef, { once: true, margin: "-100px" });

  const methodRef = useRef<HTMLDivElement>(null);
  const methodInView = useInView(methodRef, { once: true, margin: "-100px" });

  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
     <Head>
      <title>
        AICTS Services | Carbon Markets, RECs, ESG, MRV &amp; Climate Finance
      </title>

      <meta
        name="description"
        content="Explore AICTS advisory services in carbon project development, Article 6, RECs, ESG, GHG accounting, MRV and climate finance."
      />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="AICTS Services | Carbon Markets, RECs, ESG, MRV & Climate Finance"
      />
      <meta
        property="og:description"
        content="Explore AICTS advisory services in carbon project development, Article 6, RECs, ESG, GHG accounting, MRV and climate finance."
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // next/head expects string children; JSON.stringify ensures that
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
    
      {/* Seven connected service pillars */}
      <section ref={pillarsRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Seven connected service pillars
            </p>
            <h2 className="font-heading text-4xl font-bold md:text-5xl">
              A full readiness journey
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-16 max-w-3xl text-center text-muted-foreground"
          >
            Our services are designed as connected pathways. A client may begin
            with a carbon footprint assessment, a REC readiness review, a policy
            readiness assessment, a feasibility study, an executive training
            programme or an investor-readiness pack.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={p.to}
                  className="group flex h-full flex-col rounded-xl border shadow-2xl border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-(--shadow-glow)"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <p.icon className="h-6 w-6 text-lime-500" />
                  </div>
                  <h3 className="mb-3 font-heading text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-medium text-emerald-500 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical engagement packages */}
      <section ref={packagesRef} className="bg-card/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={packagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Practical engagement packages
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Entry points for every stage
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={packagesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 rounded-xl border border-lime-500 bg-card p-6"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-500 text-primary">
                  <span className="text-xs font-bold  text-white">{i + 1}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pkg}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section ref={methodRef} className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={methodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              How we work
            </p>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              From diagnosis to continuous improvement
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-x-0 top-12 hidden h-0.5 bg-linear-to-r from-transparent via-primary/30 to-transparent md:block" />
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {methodology.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={methodInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative text-center"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-lime-200 text-primary shadow-sm">
                    <step.icon className="h-7 w-7 text-lime-500" />
                  </div>
                  <p className="mb-2 font-heading text-sm font-bold text-primary">
                    Step {i + 1}
                  </p>
                  <h3 className="mb-2 font-heading text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={methodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-16 max-w-3xl rounded-xl border border-red-500 bg-card p-8 text-center"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <HelpCircle className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="mb-3 font-heading text-lg font-semibold">
              Integrity note
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              AICTS provides readiness, advisory and documentation support. Carbon
              credits, RECs, finance, investment and offtake outcomes depend on
              applicable standards, regulation, registry processes, verification,
              project performance and market conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="px-6 py-24">
        <div className="mx-auto max-w-3xl shadow-2xl rounded-2xl border border-border bg-card p-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Begin with a focused diagnostic. AICTS will help identify the most
              credible next step for your project, institution or portfolio.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button  size="lg" asChild className="bg-lime-500">
                <Link href="/tools/diagnostic">
                  Request a Diagnostic <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button  size="lg" asChild className="bg-emerald-500">
                <Link href="/contact">Contact AICTS</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    
    </div>
  );
};

export default Services;
