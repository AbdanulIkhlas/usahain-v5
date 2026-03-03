"use client";

import React from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent-100 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300 font-semibold text-sm mb-6 border border-accent-200 dark:border-accent-800">
            Our Mission
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-8 leading-tight">
            Democratizing{" "}
            <span className="text-gradient">Entrepreneurship</span> in Indonesia
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
            The first year of business is terrifying. High failure rates are
            mostly driven by bad planning and lack of transparent information.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            USAHAin was built specifically for first-time
            entrepreneurs—employees planning to resign, housewives, and fresh
            graduates. We aim to inject clarity into every step of your
            micro-business creation, dramatically increasing your probability of
            success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <div className="text-5xl font-black text-primary-600 dark:text-primary-400 tracking-tight">
                60M+
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                MSMEs in Indonesia
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-5xl font-black text-secondary-500 dark:text-secondary-400 tracking-tight">
                1st
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                Platform of Its Kind
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-5xl font-black text-accent-500 dark:text-accent-400 tracking-tight">
                100%
              </div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                Transparent Pricing
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
