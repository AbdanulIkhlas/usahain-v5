"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { InputField } from "../atoms/InputField";
import { TextArea } from "../atoms/TextArea";
import { FormGroup } from "../molecules/FormGroup";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              Let&apos;s Talk{" "}
              <span className="text-gradient hover:animate-pulse">
                Business
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
              Have questions about USAHAin? Want to partner as a supplier? Our
              team is always ready to connect and help you succeed.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-6 border border-primary-200 dark:border-primary-800 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    Email Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium tracking-wide">
                    hello@usahain.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 border border-secondary-200 dark:border-secondary-800 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors">
                    Call Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium tracking-wide">
                    +62 811 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:-rotate-3 border border-accent-200 dark:border-accent-800 shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    Visit Us
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    Menara Inovasi, 12th Floor
                    <br />
                    Jakarta Selatan, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 relative z-10">
                Send a Message
              </h3>
              <form
                className="relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <FormGroup label="Name" htmlFor="contactName">
                  <InputField id="contactName" placeholder="Your name" />
                </FormGroup>

                <FormGroup label="Email" htmlFor="contactEmail">
                  <InputField
                    id="contactEmail"
                    type="email"
                    placeholder="your@email.com"
                  />
                </FormGroup>

                <FormGroup label="Message" htmlFor="contactMessage">
                  <TextArea
                    id="contactMessage"
                    placeholder="How can we help?"
                  />
                </FormGroup>

                <button
                  type="button"
                  className="w-full py-4 mt-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex justify-center items-center gap-2 group"
                >
                  Send Message
                  <Send
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
