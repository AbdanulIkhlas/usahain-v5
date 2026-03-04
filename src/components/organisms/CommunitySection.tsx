"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, CheckCircle2 } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section
      id="community"
      className="py-24 px-6 bg-white dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative w-full aspect-square max-w-[500px] mx-auto lg:order-1 order-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Visual background grid */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-70" />
              <Users className="w-40 h-40 text-primary-200 dark:text-primary-900/40 relative z-0" />

              <div className="absolute top-[15%] right-[-5%] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-float z-10 w-64">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Sales Milestone
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                    100th cup sold today! 🎉
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[20%] left-[-10%] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-float z-10 w-72 [animation-delay:-3s]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-secondary-400 to-primary-500 shrink-0" />
                <div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Budi (Kopi Gerobak)
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                    &quot;USAHAin saved me 30% capital&quot;
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-secondary-500/10 to-transparent -z-10 blur-2xl rounded-full" />
          </motion.div>

          <motion.div
            className="max-w-xl lg:order-2 order-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300 font-semibold text-sm mb-6 border border-primary-200 dark:border-primary-800">
              Komunitas
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              You Are <span className="text-gradient-accent">Not Alone</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Starting a business is lonely and intimidating. Our community is
              designed to help you exchange knowledge, find mentorship, and
              celebrate early wins together.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Mentor Office Hours",
                "Local Chapter Meetups",
                "Operational Support Groups",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-lg font-medium text-slate-800 dark:text-slate-100"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 font-bold text-sm">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/waitlist"
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Join the Community
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
