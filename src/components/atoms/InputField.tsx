import React, { InputHTMLAttributes } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  className?: string;
}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1 w-full", className)}>
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-3 text-base text-foreground bg-slate-50 dark:bg-slate-900",
            "border border-slate-200 dark:border-slate-800 rounded-lg",
            "transition-all duration-200 ease-in-out outline-none",
            "placeholder:text-slate-400 dark:placeholder:text-slate-500",
            "focus:border-primary-500 focus:ring-4 focus:ring-primary-100 dark:focus:ring-primary-900/30 focus:bg-white dark:focus:bg-slate-800",
            error &&
              "border-red-500 focus:border-red-500 focus:ring-red-100 dark:focus:ring-red-900/30",
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-500 mt-1">{error}</span>}
      </div>
    );
  },
);
InputField.displayName = "InputField";
