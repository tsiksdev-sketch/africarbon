'use client'

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, ArrowRight, AlertTriangle, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Website Terms and Disclaimer",
  description:
    "AICTS website terms and disclaimer: important information about the use of this website and its limitations.",
  url: "https://carbon-scroll-story.lovable.app/terms",
  mainEntity: {
    "@type": "Organization",
    name: "Africa Institute for Carbon Trading and Sustainability",
    alternateName: "AICTS",
  },
};
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};
const Terms = () => (
  <div className="min-h-screen">
    <Head>
      <title>Website Terms and Disclaimer | AICTS</title>
      <meta
        name="description"
        content="AICTS website terms and disclaimer: important information about the use of this website and its limitations."
      />
      <link rel="canonical" href="https://carbon-scroll-story.lovable.app/terms" />
      <meta property="og:title" content="Website Terms and Disclaimer | AICTS" />
      <meta
        property="og:description"
        content="AICTS website terms and disclaimer: important information about the use of this website and its limitations."
      />
      <meta property="og:url" content="https://carbon-scroll-story.lovable.app/terms" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>

    {/* Hero */}
    
    {/* Content */}
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <motion.div
          {...fadeUp}
          className="rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Scale className="h-5 w-5 text-lime-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold">Terms of use</h2>
          </div>
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              The information, tools and resources on this website are provided
              for general information and initial guidance only. They do not
              constitute legal advice, financial advice, investment advice,
              verification, certification, assurance or registry approval.
            </p>
            <p>
              Carbon credit issuance, REC participation, climate finance, buyer
              engagement, certification, validation or verification outcomes
              depend on applicable standards, regulation, registry processes,
              project performance, data quality, validation, verification and
              market conditions.
            </p>
            <p>
              AICTS provides advisory, readiness, documentation, training and
              implementation support. The use of this website does not create a
              client engagement unless a separate written agreement is entered
              into.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
              <div>
                <p className="font-medium text-foreground">Not professional advice</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Content is for general guidance only.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
              <Gavel className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <p className="font-medium text-foreground">No engagement by use</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  A written agreement is required for a client relationship.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    {/* CTA */}
    <section className="px-6 pb-32">
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-3xl rounded-2xl border border-border shadow-2xl bg-gradient-to-br from-primary/10 to-transparent p-10 text-center"
      >
        <h2 className="font-heading text-2xl font-bold md:text-3xl  text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">Contact AICTS</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          If you have questions about our terms, services or how to engage with
          AICTS, please reach out.
        </p>
        <Button className="mt-6 bg-lime-500" asChild>
          <Link href="/contact" className="">
            Contact AICTS <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>

  </div>
);
export default Terms;
