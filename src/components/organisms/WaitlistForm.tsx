"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { InputField } from "../atoms/InputField";
import { SelectField } from "../atoms/SelectField";
import { TextArea } from "../atoms/TextArea";
import { FormGroup } from "../molecules/FormGroup";
import { waitlistData } from "@/data/waitlist";

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  city: string;
  joinAs: string;
  mainGoal: string;
  estimatedBudget: string;
  agreed: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const WaitlistForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    email: "",
    city: "",
    joinAs: "",
    mainGoal: "",
    estimatedBudget: "",
    agreed: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.joinAs) newErrors.joinAs = "Please select an option";
    if (!formData.mainGoal.trim()) newErrors.mainGoal = "Main Goal is required";
    if (!formData.agreed) newErrors.agreed = "You must agree to be contacted";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-slate-900 rounded-3xl p-10 text-center w-full max-w-[500px] mx-auto border border-slate-200 dark:border-slate-700 shadow-2xl relative z-20"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="flex justify-center"
        >
          <CheckCircle2 className="w-20 h-20 text-accent-500 mb-6 drop-shadow-sm" />
        </motion.div>
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
          {waitlistData.successMessage.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
          {waitlistData.successMessage.description}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl rounded-3xl p-6 sm:p-10 w-full max-w-[650px] mx-auto relative z-20 group/form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <FormGroup
        label={waitlistData.form.labels.fullName}
        htmlFor="fullName"
        required
      >
        <InputField
          id="fullName"
          name="fullName"
          placeholder={waitlistData.form.placeholders.fullName}
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          disabled={isSubmitting}
        />
      </FormGroup>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
        <FormGroup
          label={waitlistData.form.labels.phoneNumber}
          htmlFor="phoneNumber"
          required
        >
          <InputField
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder={waitlistData.form.placeholders.phoneNumber}
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup label={waitlistData.form.labels.email} htmlFor="email">
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder={waitlistData.form.placeholders.email}
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            disabled={isSubmitting}
          />
        </FormGroup>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-6">
        <FormGroup
          label={waitlistData.form.labels.city}
          htmlFor="city"
          required
        >
          <InputField
            id="city"
            name="city"
            placeholder={waitlistData.form.placeholders.city}
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
            disabled={isSubmitting}
          />
        </FormGroup>

        <FormGroup
          label={waitlistData.form.labels.joinAs}
          htmlFor="joinAs"
          required
        >
          <SelectField
            id="joinAs"
            name="joinAs"
            options={waitlistData.form.joinOptions}
            placeholder="Select category..."
            value={formData.joinAs}
            onChange={handleChange}
            error={errors.joinAs}
            disabled={isSubmitting}
          />
        </FormGroup>
      </div>

      <FormGroup
        label={waitlistData.form.labels.mainGoal}
        htmlFor="mainGoal"
        required
      >
        <TextArea
          id="mainGoal"
          name="mainGoal"
          placeholder={waitlistData.form.placeholders.mainGoal}
          value={formData.mainGoal}
          onChange={handleChange}
          error={errors.mainGoal}
          disabled={isSubmitting}
        />
      </FormGroup>

      <FormGroup
        label={waitlistData.form.labels.estimatedBudget}
        htmlFor="estimatedBudget"
      >
        <InputField
          id="estimatedBudget"
          name="estimatedBudget"
          placeholder={waitlistData.form.placeholders.estimatedBudget}
          value={formData.estimatedBudget}
          onChange={handleChange}
          error={errors.estimatedBudget}
          disabled={isSubmitting}
        />
      </FormGroup>

      <div className="mt-8 mb-8">
        <label className="flex items-start gap-4 cursor-pointer group p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            disabled={isSubmitting}
            className="mt-1 min-w-5 w-5 h-5 rounded border-2 border-slate-300 dark:border-slate-600 text-primary-600 focus:ring-primary-500 disabled:opacity-50 transition-colors"
          />
          <span className="text-sm sm:text-[0.95rem] font-medium text-slate-700 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors leading-relaxed">
            {waitlistData.form.checkboxLabel}
          </span>
        </label>
        {errors.agreed && (
          <span className="block text-sm font-medium text-red-500 mt-2 px-4">
            {errors.agreed}
          </span>
        )}
      </div>

      {errors.submit && (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-xl mb-6 text-center font-medium">
          {errors.submit}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-primary-500/25 transition-all hover:shadow-primary-500/40 active:scale-[0.98] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-3 relative overflow-hidden"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          waitlistData.form.submitButton
        )}
      </button>
    </motion.form>
  );
};
