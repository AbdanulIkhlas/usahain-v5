"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "Free",
    description: "Perfect for early exploration and capital estimation.",
    features: [
      "Access to Capital Estimator",
      "Readiness Score Assessment",
      "Community Forum Access",
      "Basic Business Blueprint",
    ],
    buttonText: "Join Waitlist",
    highlight: false,
  },
  {
    name: "Pro Partner",
    price: "Rp 99.000",
    period: "/month",
    description: "For serious entrepreneurs ready to source and launch.",
    features: [
      "Everything in Basic",
      "Direct Supplier Connections",
      "Cost-Price Transparency",
      "1-on-1 Mentor Sessions",
      "Priority Booth Booking",
    ],
    buttonText: "Get Early Access",
    highlight: true,
  },
];

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 px-6 bg-white dark:bg-slate-950 relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Start for free. Upgrade only when you are ready to secure suppliers
            and launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`p-8 sm:p-10 rounded-3xl flex flex-col h-full relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-br from-primary-600 to-secondary-600 text-white shadow-2xl shadow-primary-500/20 scale-100 md:scale-105 z-10 border-0"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-foreground shadow-lg hover:shadow-xl"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <h3
                className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-foreground"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`min-h-[3rem] mb-6 ${plan.highlight ? "text-white/80" : "text-slate-500"}`}
              >
                {plan.description}
              </p>

              <div className="mb-8 flex items-baseline gap-1">
                <span
                  className={`text-5xl font-extrabold tracking-tight ${plan.highlight ? "text-white" : "text-foreground"}`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`font-medium ${plan.highlight ? "text-white/70" : "text-slate-500"}`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="flex flex-col gap-4 mb-10 flex-1">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check
                      className={`w-6 h-6 shrink-0 ${plan.highlight ? "text-white" : "text-primary-500"}`}
                    />
                    <span
                      className={`font-medium leading-relaxed ${plan.highlight ? "text-white/90" : "text-slate-700 dark:text-slate-300"}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/waitlist"
                className={`w-full py-4 rounded-xl font-bold text-lg text-center transition-all ${
                  plan.highlight
                    ? "bg-white text-primary-600 hover:bg-slate-50 shadow-md hover:shadow-lg hover:-translate-y-1"
                    : "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 border border-primary-200 dark:border-primary-800"
                }`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
