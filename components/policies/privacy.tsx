'use client'

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "AICTS privacy policy: how we handle information submitted through contact forms, diagnostic forms and enquiry tools.",
  url: "https://carbon-scroll-story.lovable.app/privacy",
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
const Privacy = () => (
  <div className="min-h-screen">
    <Head>
      <title>Privacy Policy | AICTS</title>
      <meta
        name="description"
        content="AICTS privacy policy: how we handle information submitted through contact forms, diagnostic forms and enquiry tools."
      />
      <link rel="canonical" href="https://carbon-scroll-story.lovable.app/privacy" />
      <meta property="og:title" content="Privacy Policy | AICTS" />
      <meta
        property="og:description"
        content="AICTS privacy policy: how we handle information submitted through contact forms, diagnostic forms and enquiry tools."
      />
      <meta property="og:url" content="https://carbon-scroll-story.lovable.app/privacy" />
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
              <Lock className="h-5 w-5 text-yellow-500" />
            </div>
            <h2 className="font-heading text-2xl font-bold">Your privacy</h2>
          </div>
          <div className="space-y-6 leading-relaxed text-muted-foreground">
            <p>
              AICTS respects the privacy of individuals and organisations that
              contact us through this website. Information submitted through our
              contact forms, diagnostic forms or enquiry tools is used to respond
              to enquiries, assess service needs and communicate with users about
              relevant AICTS services.
            </p>
            <p>
              AICTS does not sell personal information to third parties. Where
              information relates to a project, institution, client or prospective
              client, AICTS treats that information as confidential unless
              disclosure is required by law or authorised by the relevant party.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
              <Shield className="mt-0.5 h-5 w-5 shrink-0 text-lime-500" />
              <div>
                <p className="font-medium text-foreground">Confidential by default</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Project and client information is treated as confidential.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-4">
              <FileText className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
              <div>
                <p className="font-medium text-foreground">Purpose-limited use</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We use your details only to respond and advise.
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
        className="mx-auto shadow-2xl max-w-3xl rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-10 text-center"
      >
        <h2 className="font-heading text-2xl font-bold md:text-3xl text-transparent bg-clip-text bg-linear-to-r from-emerald-500 via-lime-400 to-green-500">
          Contact AICTS about privacy
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          If you have questions about how we handle your information, please get
          in touch.
        </p>
        <Button  className="mt-6 bg-lime-500" asChild>
          <Link href="/contact">
            Contact AICTS <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
   
  </div>
);
export default Privacy;