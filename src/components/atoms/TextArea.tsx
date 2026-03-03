import React, { TextareaHTMLAttributes } from "react";
import { cn } from "./InputField";

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1 w-full", className)}>
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-3 text-base text-foreground bg-slate-50 dark:bg-slate-900",
            "border border-slate-200 dark:border-slate-800 rounded-lg",
            "transition-all duration-200 ease-in-out outline-none min-h-[100px] resize-y",
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
TextArea.displayName = "TextArea";
