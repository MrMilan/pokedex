import * as React from "react";

import { cn } from "@/utils";
import { ErrorMessage, ErrorMessageProps } from "./ErrorMessage";
import { Label, LabelProps } from "./Label";

interface InputLabelProps extends Omit<LabelProps, "children"> {}

interface InputErrorProps extends Omit<ErrorMessageProps, "children"> {}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
  error?: string;
  fieldClassName?: string;
  labelProps?: InputLabelProps;
  errorProps?: InputErrorProps;
  showClearButton?: boolean;
  onClear?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, fieldClassName, labelProps, errorProps, showClearButton, disabled, onClear, ...props },
    ref
  ) => {
    return (
      <div className={cn("relative flex flex-col space-y-2", fieldClassName)}>
        {label && <Label {...labelProps}>{label}</Label>}
        <input
          ref={ref}
          className={cn(
            "bg-bg-secondary h-10 w-full border p-2",
            "text-fg-primary placeholder:text-fg-tertiary text-base font-normal",
            "disabled:text-fg-secondary disabled:cursor-not-allowed disabled:opacity-70",
            error && "border-2 border-red-500 outline-none",
            className
          )}
          disabled={disabled}
          {...props}
        />
        {showClearButton && (
          <button
            type="button"
            onMouseDown={onClear}
            className={cn(
              "absolute bottom-2 right-2",
              "size-6 rounded-full bg-slate-700 font-extrabold text-white",
              "disabled:text-fg-secondary disabled:cursor-not-allowed disabled:opacity-70"
            )}
            disabled={disabled}
          >
            X
          </button>
        )}
        {error && <ErrorMessage {...errorProps}>{error}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = "Input";
