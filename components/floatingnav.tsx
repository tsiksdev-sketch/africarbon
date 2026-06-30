import { Shield } from "lucide-react";
import Link from "next/link";
import React from 'react'

export default function FloatingLegalNav() {
  return (
      <div className="fixed top-[90%] right-[15%] md:right-[8%] z-40  items-center gap-1 rounded-full border border-border/50 bg-lime-500/80 px-3 py-2 backdrop-blur-xl shadow-lg flex">
      <Shield className="h-4 w-4 text-white" />
      <Link
        href="/privacy"
        className="px-2 py-1 text-xs font-medium text-white transition-colors hover:text-foreground"
      >
        Privacy
      </Link>
      <span className="h-3 w-px bg-border" />
      <Link
        href="/terms"
        className="px-2 py-1 text-xs font-medium text-white transition-colors hover:text-foreground"
      >
        Terms
      </Link>
    </div>
  )
}

