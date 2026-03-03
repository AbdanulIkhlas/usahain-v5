"use client";

import React from "react";
import { motion } from "framer-motion";
import { Package, Truck, Wrench, Handshake } from "lucide-react";

const categories = [
  {
    icon: <Package size={28} />,
    title: "Raw Materials",
    desc: "Reliable suppliers for food and beverage ingredients.",
    color:
      "text-amber-500 bg-amber-100 dark:bg-amber-900/30 border-amber-200 dark:border-amber-800/50",
  },
  {
    icon: <Wrench size={28} />,
    title: "Equipment",
    desc: "Affordable cooking and operational tools.",
    color:
      "text-blue-500 bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800/50",
  },
  {
    icon: <Truck size={28} />,
    title: "Booth & Stand",
    desc: "Durable carts, tents, and custom booth builders.",
    color:
      "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800/50",
  },
  {
    icon: <Handshake size={28} />,
    title: "Franchisers",
    desc: "Trusted micro-franchise opportunities.",
    color:
      "text-purple-500 bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-800/50",
  },
];

export const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Curated <span className="text-gradient">Marketplace</span> (Mitra)
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We connect you directly with verified suppliers, eliminating the
            middleman and giving you the best prices to run your business
            sustainably.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-black/50 group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border ${cat.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
              >
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {cat.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
