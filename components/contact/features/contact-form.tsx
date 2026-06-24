"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Building2,
  Layers,
  Globe,
  Phone,
  Users,
  Target,
  Loader2,
} from "lucide-react"

interface FormData {
  fullName: string
  email: string
  phone: string
  organisation: string
  jobTitle: string
  country: string
  sector: string
  stakeholderType: string
  areaOfInterest: string
  message: string
  consent: boolean
}

type FormStatus = "idle" | "loading" | "success" | "error"

const SECTORS = [
  "Government & Public Sector",
  "Private Sector / Corporate",
  "Financial Institution / Investor",
  "Project Developer",
  "NGO / Civil Society",
  "Academia / Research",
  "Development Partner / Donor",
  "Energy & Utilities",
  "Agriculture & Forestry",
  "Other",
]

const STAKEHOLDER_TYPES = [
  "Buyer of Credits / Offsets",
  "Project Developer",
  "Investor / Financier",
  "Policymaker / Regulator",
  "Technical / Advisory Partner",
  "Community / Landowner",
  "Student / Trainee",
  "Other",
]

const AREAS_OF_INTEREST = [
  "Carbon Markets and Project Development",
  "Article 6, Policy and Regulatory Advisory",
  "Renewable Energy Certificates",
  "ESG, GHG and Carbon Footprinting",
  "MRV, Safeguards and Stakeholder Engagement",
  "Climate Finance and Investor Readiness",
  "AICTS Academy / Training",
  "Africa RECs / ZAM-REC / ZIM-REC",
  "Grow A Tree Foundation",
  "General enquiry",
]

const COUNTRIES = [
  "South Africa",
  "Zambia",
  "Zimbabwe",
  "Kenya",
  "Nigeria",
  "Ghana",
  "Tanzania",
  "Uganda",
  "Rwanda",
  "Mozambique",
  "Botswana",
  "Namibia",
  "Other African Country",
  "Outside Africa",
]

const initialData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  organisation: "",
  jobTitle: "",
  country: "",
  sector: "",
  stakeholderType: "",
  areaOfInterest: "",
  message: "",
  consent: false,
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelect = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      setStatus("error")
      setErrorMessage("Please confirm your consent to be contacted.")
      return
    }

    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData(initialData)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      )
    }
  }

  if (status === "success") {
    return (
      <Card className="w-full max-w-lg mx-auto">
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-lime-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Thank you for contacting AICTS
            </h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              Your enquiry has been received. We will review your message and
              respond as soon as possible.
            </p>
            <Button onClick={() => setStatus("idle")} variant="outline">
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const isLoading = status === "loading"

  return (
    <Card className="w-full max-w-3xl mx-auto mb-10 shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Tell us about your enquiry and we&apos;ll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4 text-lime-500" />
                Full name
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-lime-500" />
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-lime-500" />
                Phone number
                <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+27 ..."
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organisation" className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-lime-500" />
                Organisation
                <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <Input
                id="organisation"
                name="organisation"
                placeholder="Company or organisation"
                value={formData.organisation}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-lime-500" />
                Job title
                <span className="text-muted-foreground text-sm">(optional)</span>
              </Label>
              <Input
                id="jobTitle"
                name="jobTitle"
                placeholder="e.g. Sustainability Manager"
                value={formData.jobTitle}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-lime-500" />
                Country
              </Label>
              <Select
                value={formData.country}
                onValueChange={(v) => handleSelect("country", v)}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-lime-500" />
                Sector
              </Label>
              <Select
                value={formData.sector}
                onValueChange={(v) => handleSelect("sector", v)}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a sector" />
                </SelectTrigger>
                <SelectContent>
                  {SECTORS.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4 text-lime-500" />
                Stakeholder type
              </Label>
              <Select
                value={formData.stakeholderType}
                onValueChange={(v) => handleSelect("stakeholderType", v)}
                disabled={isLoading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select stakeholder type" />
                </SelectTrigger>
                <SelectContent>
                  {STAKEHOLDER_TYPES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Target className="w-4 h-4 text-lime-500" />
              Area of interest
            </Label>
            <Select
              value={formData.areaOfInterest}
              onValueChange={(v) => handleSelect("areaOfInterest", v)}
              disabled={isLoading}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an area of interest" />
              </SelectTrigger>
              <SelectContent>
                {AREAS_OF_INTEREST.map((a) => (
                  <SelectItem key={a} value={a}>
                    {a}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-lime-500" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="How can we help?"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="resize-none"
            />
          </div>

          <div className="flex items-start gap-3 rounded-md border border-border p-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({ ...prev, consent: checked === true }))
              }
              disabled={isLoading}
              className="mt-0.5"
            />
            <Label
              htmlFor="consent"
              className="text-sm font-normal leading-relaxed text-muted-foreground"
            >
              I consent to AICTS contacting me regarding my enquiry and storing
              the information I have provided for this purpose.
            </Label>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 p-3 bg-destructive/10 text-destructive rounded-md">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground leading-relaxed text-pretty pt-2 border-t border-border">
            AICTS is committed to supporting Africa&apos;s transition towards
            credible carbon markets, renewable energy certificate systems, ESG
            maturity, climate finance readiness and sustainable development.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
