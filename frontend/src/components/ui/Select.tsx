import * as React from "react";

import { cn } from "@/utils";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";
import { Label, LabelProps } from "./Label";

interface InputLabelProps extends Omit<LabelProps, "children"> {}

interface InputErrorProps extends Omit<ErrorMessageProps, "children"> {}

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  className?: string;
  error?: string;
  fieldClassName?: string;
  labelProps?: InputLabelProps;
  errorProps?: InputErrorProps;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, fieldClassName, labelProps, errorProps, ...props }, ref) => {
    return (
      <div className={cn("relative flex w-full cursor-wait flex-col space-y-2", fieldClassName)}>
        {label && <Label {...labelProps}>{label}</Label>}
        <select
          className={cn(
            "bg-bg-secondary block h-10 w-full appearance-none bg-none",
            "text-fg-primary placeholder:text-fg-tertiary text-base font-normal",
            "disabled:text-fg-secondary disabled:cursor-not-allowed disabled:opacity-70",
            error && "border-2 border-red-500 outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
          <div className="text-primary size-8">▼</div>
        </div>
        {error && <ErrorMessage {...errorProps}>{error}</ErrorMessage>}
      </div>
    );
  }
);
Select.displayName = "Select";
