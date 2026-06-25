'use client'

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// AICTS WhatsApp number in international format, no "+" or spaces
const WHATSAPP_NUMBER = "263716780112"; // TODO: replace with real AICTS number
const AGENT_NAME = "AICTS Assistant";
type QuickReply = {
  label: string;
  message: string;
};
const quickReplies: QuickReply[] = [
  {
    label: "Training & Courses",
    message:
      "Hi AICTS, I'd like to learn more about your training programs and upcoming courses.",
  },
  {
    label: "Advisory & Diagnostics",
    message:
      "Hi AICTS, I'm interested in booking a diagnostic / advisory session for my organisation.",
  },
  {
    label: "Carbon Markets & RECs",
    message:
      "Hi AICTS, I'd like to discuss carbon market project development or Renewable Energy Certificates.",
  },
  {
    label: "General enquiry",
    message: "Hi AICTS, I have a general enquiry I'd like to discuss.",
  },
];
const openWhatsApp = (text: string) => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const handleSend = () => {
    const msg = custom.trim();
    if (!msg) return;
    openWhatsApp(msg);
    setCustom("");
  };
  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="fixed bottom-6 left-10 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition-transform hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366] ring-2 ring-background" />
          </span>
        )}
      </button>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-10 z-50 w-[calc(100vw-3rem)] max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="bg-[#075E54] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] font-semibold">
                  A
                </div>
                <div>
                  <div className="font-semibold">{AGENT_NAME}</div>
                  <div className="flex items-center gap-1.5 text-xs text-white/80">
                    <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                    Typically replies within an hour
                  </div>
                </div>
              </div>
            </div>
            {/* Body */}
            <div
              className="space-y-3 p-4"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.08) 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            >
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5 text-sm text-foreground shadow-sm">
                Hello! 👋 Welcome to <strong>AICTS</strong>. How can we help
                you today? Choose a topic below or type your own message —
                we'll continue on WhatsApp.
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {quickReplies.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => openWhatsApp(q.message)}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-left text-sm text-foreground transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
            {/* Composer */}
            <div className="flex items-center gap-2 border-t border-border bg-card p-3">
              <input
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Type a message…"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-[#25D366]"
              />
              <button
                onClick={handleSend}
                aria-label="Send on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default WhatsAppChat;
