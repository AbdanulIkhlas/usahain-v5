"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardList, Target, TrendingUp, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={32} />,
    title: "1. Assessment",
    description:
      "We help evaluate your capital, readiness, and risk profile to find the perfect micro-business model for you.",
    colorClass: "text-primary-500 bg-primary-100 dark:bg-primary-900/40",
  },
  {
    icon: <Target size={32} />,
    title: "2. Planning",
    description:
      "Get a structured roadmap detailing everything from supplier connections to location mapping.",
    colorClass: "text-secondary-500 bg-secondary-100 dark:bg-secondary-900/40",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "3. Preparation",
    description:
      "Connect with curated partners for booths, equipment, and raw materials with transparent pricing.",
    colorClass: "text-accent-500 bg-accent-100 dark:bg-accent-900/40",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "4. Launch & Grow",
    description:
      "Start your business with confidence, guided by our operational frameworks and community support.",
    colorClass: "text-primary-500 bg-primary-100 dark:bg-primary-900/40",
  },
];

export const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            The <span className="text-gradient">Structured</span> Journey
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From idea to grand opening, USAHAin removes the guesswork from
            starting your micro-business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-200 dark:hover:border-primary-800 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${step.colorClass}`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
