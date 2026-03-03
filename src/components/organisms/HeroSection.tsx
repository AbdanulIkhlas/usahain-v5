"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Softer Background Gradients */}
      <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[80vw] max-w-[800px] aspect-square rounded-full bg-primary-400/5 blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[60vw] max-w-[600px] aspect-square rounded-full bg-secondary-400/5 blur-[100px] translate-y-1/3 -translate-x-1/4" />

        {/* Subtle grid pattern for texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4xNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-40 dark:opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-primary-200/50 dark:border-primary-900/50 text-primary-700 dark:text-primary-300 font-semibold text-sm mb-8 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
          </span>
          Clarity before Capital
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15] text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Start Smart. Reduce Risk.
          <br className="hidden md:block" />
          <span className="text-gradient leading-normal">
            Build with Confidence.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mb-12 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          USAHAin is an integrated ecosystem that helps first-time micro
          entrepreneurs in Indonesia plan and prepare their business in a
          structured, guided, and risk-reduced way.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:shadow-primary-500/20 hover:-translate-y-0.5 text-lg">
            Mulai Sekarang
          </button>

          <Link
            href="/waitlist"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-slate-700 dark:text-white bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 text-lg"
          >
            Join Waitlist
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
