import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils";

export const buttonVariants = cva(
  "inline-flex h-14 w-full items-center justify-center gap-2 whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-70",
  {
    variants: {
      variant: {
        solid: "text-primary border-primary border bg-white",
        basic: "text-primary hover:bg-bg-secondary/30 bg-white",
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, className }))} ref={ref} {...props} />;
  }
);
ToggleButton.displayName = "ToggleButton";
