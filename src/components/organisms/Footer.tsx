"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <div className="text-3xl font-extrabold tracking-tight mb-4">
              <span className="text-gradient">USAHAin</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6 font-medium max-w-xs">
              Empowering the next generation of Indonesian micro-entrepreneurs.
              Start smart, reduce risk, and build with confidence.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={`Social Media Link ${i + 1}`}
                  className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 flex items-center justify-center transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-foreground text-lg mb-6 tracking-wide">
              Product
            </h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#start-business"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Capital Estimator
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/waitlist"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
                >
                  Join Waitlist{" "}
                  <span className="px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-[10px] uppercase font-black tracking-widest">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-bold text-foreground text-lg mb-6 tracking-wide">
              Company
            </h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#partners"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-foreground text-lg mb-6 tracking-wide">
              Legal
            </h4>
            <ul className="flex flex-col gap-4 font-medium text-slate-500 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 dark:text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} USAHAin. All rights reserved.</p>
          <p>Made with ☕ in Jakarta</p>
        </div>
      </div>
    </footer>
  );
};
