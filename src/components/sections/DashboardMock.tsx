"use client";

import { useRef, useState } from "react";
import { AnimatePresence, easeInOut, motion, useScroll, useTransform } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  Truck,
  Route,
  Wallet,
  Bot,
  Settings,
  MapPin,
  CircleCheck,
  CircleAlert,
  CircleX,
} from "lucide-react";

type Tab = "dispatch" | "tracking" | "decision";

const TABS: { id: Tab; label: string }[] = [
  { id: "decision", label: "Decisions" },
  { id: "dispatch", label: "Dispatch" },
  { id: "tracking", label: "Tracking" },
];

const SIDEBAR_ITEMS = [
  { icon: LayoutDashboard, active: true },
  { icon: Package, active: false },
  { icon: Truck, active: false },
  { icon: Route, active: false },
  { icon: Wallet, active: false },
  { icon: Bot, active: false },
  { icon: Settings, active: false },
];

const STAT_CARDS = [
  { label: "Total Shipments", value: "128", tone: "text-primary-dark" },
  { label: "In Transit", value: "34", tone: "text-primary-blue" },
  { label: "Delivered", value: "94", tone: "text-secondary-green" },
];

const SHIPMENTS = [
  { route: "Dallas, TX → Memphis, TN", driver: "Unit 214", status: "In Transit" },
  { route: "Phoenix, AZ → Denver, CO", driver: "Unit 108", status: "Dispatched" },
  { route: "Atlanta, GA → Charlotte, NC", driver: "Unit 331", status: "Delivered" },
  { route: "Chicago, IL → Indianapolis, IN", driver: "Unit 219", status: "In Transit" },
];

const FLEET = [
  { unit: "Unit 214", location: "I-40, near Little Rock, AR", eta: "ETA 4h 20m" },
  { unit: "Unit 108", location: "I-25, near Albuquerque, NM", eta: "ETA 6h 05m" },
  { unit: "Unit 331", location: "Charlotte, NC", eta: "Delivered" },
];

const PROFITABILITY = [
  { label: "RPM", value: "$2.41" },
  { label: "Deadhead", value: "6%" },
  { label: "Est. Profit", value: "$1,180" },
];

const DECISIONS = [
  {
    icon: CircleCheck,
    tag: "Recommended",
    tone: "text-secondary-green",
    bg: "bg-secondary-green/8",
    title: "Dallas, TX → Atlanta, GA",
    body: "Lower rate, but stronger reload odds and lower deadhead than the alternative below.",
  },
  {
    icon: CircleAlert,
    tag: "Alternative",
    tone: "text-neutral-gray",
    bg: "bg-neutral-light",
    title: "Dallas, TX → Nashville, TN",
    body: "+$300 upfront, longer historical reload time.",
  },
  {
    icon: CircleX,
    tag: "Avoid",
    tone: "text-red-500",
    bg: "bg-red-50",
    title: "Dallas, TX → Jackson, MS",
    body: "Weak reload market with high deadhead risk after delivery.",
  },
];

function statusTone(status: string) {
  if (status === "Delivered") return "bg-secondary-green/15 text-secondary-green-dark";
  if (status === "In Transit") return "bg-primary-blue/10 text-primary-blue";
  return "bg-neutral-gray/10 text-neutral-gray";
}

export function DashboardMock() {
  const [tab, setTab] = useState<Tab>("dispatch");

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start 45%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1], { ease: easeInOut });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1], { ease: easeInOut });

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="flex aspect-16/11 w-full flex-col overflow-hidden rounded-2xl border border-neutral-border bg-white shadow-2xl shadow-black/40"
    >
      <div className="flex shrink-0 items-center justify-between border-b border-neutral-border px-3 py-3 sm:px-5 sm:py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 hidden text-xs font-medium text-neutral-gray sm:inline">
            Rollin Dispatch Console
          </span>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-neutral-light p-1">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`relative rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors sm:px-3.5 sm:py-1.5 sm:text-xs ${
                tab === t.id ? "text-white" : "text-neutral-gray hover:text-primary-dark"
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="dashboard-tab-pill"
                  className="absolute inset-0 rounded-full bg-primary-blue"
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        <div className="flex w-10 shrink-0 flex-col items-center gap-1 border-r border-neutral-border py-3 sm:w-14 sm:py-5">
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`flex h-7 w-7 items-center justify-center rounded-lg sm:h-9 sm:w-9 ${
                item.active ? "bg-primary-blue/10 text-primary-blue" : "text-neutral-gray-light"
              }`}
            >
              <item.icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" strokeWidth={1.75} />
            </div>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-6">
          <AnimatePresence mode="wait">
            {tab === "dispatch" && (
              <motion.div
                key="dispatch"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: easeInOut }}
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {STAT_CARDS.map((s) => (
                    <div key={s.label} className="rounded-xl bg-neutral-light p-2.5 sm:p-4">
                      <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-gray sm:text-[11px]">
                        {s.label}
                      </p>
                      <p className={`mt-1 font-heading text-base font-bold sm:mt-1.5 sm:text-2xl ${s.tone}`}>
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-neutral-gray sm:mt-5 sm:text-[11px]">
                  Recent Shipments
                </p>
                <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {SHIPMENTS.map((s) => (
                    <div
                      key={s.route}
                      className="flex items-center justify-between rounded-lg bg-neutral-light px-3 py-2 sm:px-4 sm:py-3"
                    >
                      <div>
                        <p className="text-xs font-medium text-primary-dark sm:text-sm">{s.route}</p>
                        <p className="text-[10px] text-neutral-gray sm:text-xs">{s.driver}</p>
                      </div>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[9px] font-semibold sm:px-2.5 sm:py-1 sm:text-[11px] ${statusTone(
                          s.status
                        )}`}
                      >
                        {s.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {tab === "tracking" && (
              <motion.div
                key="tracking"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: easeInOut }}
              >
                <div className="relative h-28 overflow-hidden rounded-xl bg-neutral-light sm:h-40">
                  <svg viewBox="0 0 400 160" className="h-full w-full" aria-hidden="true">
                    <path
                      d="M20,130 C100,130 120,50 200,50 C280,50 300,110 380,110"
                      stroke="#2F6BFF"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      fill="none"
                      opacity="0.6"
                    />
                    <circle cx="20" cy="130" r="5" fill="#22C55E" />
                    <circle cx="200" cy="50" r="5" fill="#2F6BFF" />
                    <circle cx="380" cy="110" r="5" fill="#2F6BFF" />
                  </svg>
                  <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-medium text-neutral-gray shadow-sm sm:left-3 sm:top-3 sm:text-[11px]">
                    <MapPin className="h-3 w-3 text-secondary-green" />
                    Fleet Map
                  </div>
                </div>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-neutral-gray sm:mt-5 sm:text-[11px]">
                  Fleet Status
                </p>
                <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {FLEET.map((f) => (
                    <div
                      key={f.unit}
                      className="flex items-center justify-between rounded-lg bg-neutral-light px-3 py-2 sm:px-4 sm:py-3"
                    >
                      <div>
                        <p className="text-xs font-medium text-primary-dark sm:text-sm">{f.unit}</p>
                        <p className="text-[10px] text-neutral-gray sm:text-xs">{f.location}</p>
                      </div>
                      <span className="text-[10px] font-medium text-neutral-gray sm:text-xs">{f.eta}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {tab === "decision" && (
              <motion.div
                key="decision"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: easeInOut }}
              >
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {PROFITABILITY.map((s) => (
                    <div key={s.label} className="rounded-xl bg-neutral-light p-2.5 sm:p-4">
                      <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-gray sm:text-[11px]">
                        {s.label}
                      </p>
                      <p className="mt-1 font-heading text-sm font-bold text-primary-dark sm:mt-1.5 sm:text-xl">
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-neutral-gray sm:mt-5 sm:text-[11px]">
                  Dallas, TX · Next Load
                </div>
                <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                  {DECISIONS.map((d) => (
                    <div key={d.title} className={`flex gap-2.5 rounded-lg px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3.5 ${d.bg}`}>
                      <d.icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 ${d.tone}`} strokeWidth={1.75} />
                      <div>
                        <p className={`text-[10px] font-semibold sm:text-[11px] ${d.tone}`}>{d.tag}</p>
                        <p className="mt-0.5 text-xs font-medium text-primary-dark sm:text-sm">{d.title}</p>
                        <p className="mt-1 text-[10px] leading-relaxed text-neutral-gray sm:text-xs">{d.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
