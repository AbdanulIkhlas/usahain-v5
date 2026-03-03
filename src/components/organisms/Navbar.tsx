"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 shadow-sm" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tight">
          <Link href="/" className="text-gradient">
            USAHAin
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-[0.95rem] text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/#start-business"
            className="hover:text-foreground transition-colors"
          >
            Start Business
          </Link>
          <Link
            href="/#partners"
            className="hover:text-foreground transition-colors"
          >
            Partners
          </Link>
          <Link
            href="/#community"
            className="hover:text-foreground transition-colors"
          >
            Community
          </Link>
          <Link
            href="/waitlist"
            className="text-primary-600 dark:text-primary-400 font-semibold"
          >
            Join Waitlist
          </Link>
          <Link
            href="/#about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/waitlist"
            className="px-5 py-2.5 rounded-lg font-semibold text-sm text-primary-600 dark:text-primary-400 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 transition-colors border border-primary-200 dark:border-primary-800"
          >
            Join Waitlist
          </Link>
          <button className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-foreground hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-colors shadow-md">
            Mulai Sekarang
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground py-2 border-b border-slate-100 dark:border-slate-800"
              >
                Home
              </Link>
              <Link
                href="/#how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground py-2 border-b border-slate-100 dark:border-slate-800"
              >
                How It Works
              </Link>
              <Link
                href="/#start-business"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground py-2 border-b border-slate-100 dark:border-slate-800"
              >
                Start Business
              </Link>
              <Link
                href="/#partners"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-semibold text-foreground py-2 border-b border-slate-100 dark:border-slate-800"
              >
                Partners
              </Link>
              <Link
                href="/waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold text-primary-600 dark:text-primary-400 py-2 border-b border-slate-100 dark:border-slate-800"
              >
                Join Waitlist
              </Link>
              <div className="pt-4 flex flex-col gap-3">
                <Link
                  href="/waitlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-5 py-3 rounded-lg font-semibold text-primary-600 bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800"
                >
                  Join Waitlist
                </Link>
                <button className="w-full px-5 py-3 rounded-lg font-semibold text-white bg-foreground dark:bg-white dark:text-slate-900 shadow-md">
                  Mulai Sekarang
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
