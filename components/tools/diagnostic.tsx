"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const packages = [
  {
    id: "p1",
    title: "Carbon Opportunity Diagnostic",
    body: "For project owners, developers, municipalities and NGOs exploring carbon credit potential.",
  },
  {
    id: "p2",
    title: "REC Readiness Assessment",
    body: "For renewable energy producers preparing for renewable energy certificate market participation.",
  },
  {
    id: "p3",
    title: "Carbon Footprint Starter Package",
    body: "For organisations needing a practical GHG inventory and emissions baseline.",
  },
  {
    id: "p4",
    title: "ESG Baseline Review",
    body: "For corporates, banks, mining companies and technology firms preparing ESG reporting or improvement plans.",
  },
  {
    id: "p5",
    title: "Article 6 / Policy Readiness Review",
    body: "For governments and regulators seeking carbon market readiness and implementation guidance.",
  },
  {
    id: "p6",
    title: "MRV and Safeguards Design Package",
    body: "For climate projects requiring monitoring systems, stakeholder plans and evidence files.",
  },
  {
    id: "p7",
    title: "Investor Readiness Pack",
    body: "For project owners seeking climate finance, funder engagement or buyer-readiness documentation.",
  },
]

const sectors = [
  "Energy",
  "Banking & Finance",
  "Mining & Industry",
  "Public Sector",
  "Technology",
  "Agriculture & Forestry",
  "Water & Sanitation",
  "Manufacturing",
  "Waste & Circular Economy",
  "Education / NGO",
]

const stakeholders = [
  "Project owner / developer",
  "Corporate / company",
  "Government / regulator",
  "Investor / funder",
  "NGO / community",
  "Academic / researcher",
]

export function Diagnostic() {

  const [picked, setPicked] = useState<string>("p1")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    country: "",
    sector: "",
    stakeholder: "",
    support: "",
    description: "",
    hasDocs: "",
    contact: "Email",
  })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.description) {
      toast.error("Missing details", {
        description: "Name, email, and a short description are required.",
      })
      return
    }

    const support = packages.find((p) => p.id === picked)?.title ?? ""

    setLoading(true)
    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, support }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data.error || "Failed to send request")
      }
      setSent(true)
      toast("Diagnostic request received", {
        description: "AICTS will review and respond with a recommended next step.",
      })
    } catch (error) {
      toast.error("Something went wrong", {
        description: error instanceof Error ? error.message : "Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="px-6 pb-16 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 font-heading text-3xl font-bold">Choose your starting point</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {packages.map((p, i) => {
              const active = picked === p.id
              return (
                <motion.button
                  key={p.id}
                  type="button"
                  onClick={() => setPicked(p.id)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: (i % 4) * 0.04 }}
                  className={`rounded-xl border p-5 text-left transition-all ${
                    active
                      ? "border-primary bg-lime-600/30 shadow-[0_10px_40px_-20px_hsl(152_60%_42%/0.5)]"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                        active ? "border-emerald-500 bg-emerald-500" : "border-border"
                      }`}
                    >
                      {active && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <div>
                      <p className="font-heading font-semibold">{p.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-3xl">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-border bg-card p-12 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 font-heading text-2xl font-bold">Thank you for contacting AICTS</h3>
              <p className="mt-3 text-muted-foreground">
                We have received your diagnostic request and will review the information provided. Our team will respond
                with a recommended next step.
              </p>
              <Button variant="ghost" size="sm" className="mt-6" onClick={() => setSent(false)}>
                Submit another request
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-8 md:p-10">
              <h2 className="font-heading text-2xl font-bold">Diagnostic request</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about your organisation, project or policy need. AICTS will review your enquiry and recommend a
                practical starting pathway.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name *</Label>
                  <Input
                    id="name"
                    className="mt-1.5"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-1.5"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="org">Organisation</Label>
                  <Input
                    id="org"
                    className="mt-1.5"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    className="mt-1.5"
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="sector">Sector</Label>
                  <select
                    id="sector"
                    value={form.sector}
                    onChange={(e) => setForm({ ...form, sector: e.target.value })}
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select a sector</option>
                    {sectors.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="stake">Stakeholder type</Label>
                  <select
                    id="stake"
                    value={form.stakeholder}
                    onChange={(e) => setForm({ ...form, stakeholder: e.target.value })}
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select stakeholder type</option>
                    {stakeholders.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Which support do you need?</Label>
                  <p className="mt-1.5 rounded-md border border-border bg-background/40 px-3 py-2 text-sm">
                    {packages.find((p) => p.id === picked)?.title}
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="desc">Briefly describe your project, institution or objective *</Label>
                  <Textarea
                    id="desc"
                    rows={5}
                    className="mt-1.5"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="docs">Do you have existing data or documentation?</Label>
                  <select
                    id="docs"
                    value={form.hasDocs}
                    onChange={(e) => setForm({ ...form, hasDocs: e.target.value })}
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option value="">Select</option>
                    <option>Yes, comprehensive</option>
                    <option>Yes, partial</option>
                    <option>No, starting from scratch</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="contact">Preferred contact method</Label>
                  <select
                    id="contact"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  >
                    <option>Email</option>
                    <option>Phone / WhatsApp</option>
                    <option>Video call</option>
                  </select>
                </div>
              </div>

              <Button type="submit" disabled={loading} className="mt-8 w-full bg-lime-500">
                {loading ? "Submitting..." : "Submit a Diagnostic Request"}
                {!loading && <Send className="h-4 w-4" />}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
