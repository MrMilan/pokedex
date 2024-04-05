"use client";
import { cn } from "@/utils";
import { forwardRef, useState } from "react";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

export type ButtonGroupOption = {
  value: string;
  Component?: React.ReactNode;
  label?: string;
};

export interface ButtonGroupProps {
  value: ButtonGroupOption["value"];
  options: ButtonGroupOption[];
  variant: ToggleButtonProps["variant"];
  onChange: (option: ButtonGroupOption["value"]) => void;
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ value, options, variant = "solid", onChange }, ref) => {
    const [selectedValue, setSelectedValue] = useState<ButtonGroupOption["value"] | null>(value);

    const handleOptionChange = (option: ButtonGroupOption["value"]) => {
      setSelectedValue(option);
      onChange(option);
    };

    const getSelectedVariantClasses = (isSelected: boolean) => {
      if (!isSelected) {
        return null;
      }
      if (variant === "solid") {
        return "bg-primary border border-primary text-white";
      }
      return "stroke-lime-200/70";
    };

    return (
      <div ref={ref} className="flex w-full">
        {options.map(({ value, label, Component }, index) => (
          <div className="flex w-full" key={value}>
            <ToggleButton
              type="button"
              variant={variant}
              onClick={() => handleOptionChange(value)}
              className={cn(
                "flex h-14 w-full",
                variant === "basic" && "px-1",
                getSelectedVariantClasses(value === selectedValue)
              )}
            >
              {label && <span>{label}</span>}
              {Component}
            </ToggleButton>
            {index < options.length - 1 && variant === "basic" && <div className="bg-bg-tertiary h-14 w-1" />}
          </div>
        ))}
      </div>
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";
