import React, { ReactNode } from "react";

interface FormGroupProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: ReactNode;
  description?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  required,
  children,
  description,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full mb-5">
      <label
        htmlFor={htmlFor}
        className="font-semibold text-[0.95rem] text-slate-800 dark:text-slate-200 inline-flex items-center gap-1"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      {description && (
        <p className="text-sm text-slate-500 dark:text-slate-400 -mt-1 mb-1">
          {description}
        </p>
      )}
      <div className="w-full">{children}</div>
    </div>
  );
};
