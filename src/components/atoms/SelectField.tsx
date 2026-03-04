import React, { SelectHTMLAttributes } from "react";
import { cn } from "./InputField"; // reusing our util

export interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const SelectField = React.forwardRef<
  HTMLSelectElement,
  SelectFieldProps
>(({ className = "", error, options, placeholder, ...props }, ref) => {
  return (
    <div className={cn("flex flex-col gap-1 w-full", className)}>
      <select
        ref={ref}
        className={cn(
          "w-full px-4 py-3 text-base text-slate-900 dark:text-white bg-white dark:bg-slate-900",
          "border-2 border-slate-200 dark:border-slate-700 rounded-xl",
          "transition-all duration-200 ease-in-out outline-none appearance-none",
          "bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat",
          "bg-position-[right_1.2rem_center] bg-size-[0.8em_auto]",
          !props.value && "text-slate-400 dark:text-slate-500",
          "focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
    </div>
  );
});
SelectField.displayName = "SelectField";
