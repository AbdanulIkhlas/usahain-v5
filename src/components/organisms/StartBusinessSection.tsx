"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, MapPin, Store } from "lucide-react";

export const StartBusinessSection = () => {
  return (
    <section
      id="start-business"
      className="py-24 px-6 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <motion.div
            className="max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-900/40 text-secondary-700 dark:text-secondary-300 font-bold text-xs uppercase tracking-wider mb-6 border border-secondary-200 dark:border-secondary-800">
              Capital Estimator
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.15]">
              Estimate Your Capital,
              <br />
              <span className="text-gradient">Gain Clarity.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
              We provide tools to simulate your business costs so you know
              exactly how much you need to start. No hidden fees. Stop guessing,
              start calculating.
            </p>

            <ul className="flex flex-col gap-6 mb-10">
              {[
                {
                  icon: <Calculator size={20} />,
                  text: "Transparent Capital Estimation Tool",
                  color: "text-primary-600 dark:text-primary-400",
                  bg: "bg-primary-50 dark:bg-primary-900/30",
                  border: "border-primary-200 dark:border-primary-800",
                },
                {
                  icon: <Store size={20} />,
                  text: "Curated Booth & Equipment packages",
                  color: "text-secondary-600 dark:text-secondary-400",
                  bg: "bg-secondary-50 dark:bg-secondary-900/30",
                  border: "border-secondary-200 dark:border-secondary-800",
                },
                {
                  icon: <MapPin size={20} />,
                  text: "Location Risk & Readiness analysis",
                  color: "text-accent-600 dark:text-accent-400",
                  bg: "bg-accent-50 dark:bg-accent-900/30",
                  border: "border-accent-200 dark:border-accent-800",
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-slate-800 dark:text-slate-100 font-semibold"
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-xl shadow-sm border ${item.bg} ${item.color} ${item.border}`}
                  >
                    {item.icon}
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>

            <Link
              href="/waitlist"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-primary-500/20"
            >
              Try the Calculator <ArrowRight size={20} />
            </Link>
          </motion.div>

          <motion.div
            className="w-full flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Calculator Card UI */}
            <div className="w-full max-w-[440px] bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden relative z-10">
              <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 flex items-center border-b border-slate-200 dark:border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-4">
                  Calculator
                </div>
              </div>

              <div className="p-8 flex flex-col gap-6">
                {[
                  { label: "Booth Package", value: "Rp 2.500.000" },
                  { label: "Equipment", value: "Rp 1.200.000" },
                  { label: "Raw Materials (1 Mo)", value: "Rp 800.000" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center group cursor-default"
                  >
                    <div className="text-slate-500 dark:text-slate-400 font-medium group-hover:text-slate-800 dark:group-hover:text-white transition-colors">
                      {item.label}
                    </div>
                    <div className="font-semibold text-slate-800 dark:text-slate-100">
                      {item.value}
                    </div>
                  </div>
                ))}

                <div className="h-px w-full bg-slate-200 dark:bg-slate-700 my-2" />

                <div className="flex justify-between items-center">
                  <div className="font-bold text-slate-900 dark:text-white text-lg">
                    Estimated Total
                  </div>
                  <div className="font-black text-primary-600 dark:text-primary-400 text-2xl">
                    Rp 4.500.000
                  </div>
                </div>

                <div className="mt-4 p-5 bg-accent-50 dark:bg-accent-900/30 border border-accent-200 dark:border-accent-800 rounded-2xl flex items-center gap-4">
                  <span className="font-bold text-sm text-accent-700 dark:text-accent-300">
                    Readiness Score
                  </span>
                  <div className="flex-1 h-3 bg-accent-200/50 dark:bg-accent-900/50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{
                        duration: 1.2,
                        delay: 0.5,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                  <span className="font-black text-accent-700 dark:text-accent-300">
                    85%
                  </span>
                </div>
              </div>
            </div>

            {/* Soft backdrop glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[400px] bg-primary-400/5 dark:bg-primary-500/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
