import { cn } from "@/utils";

import { forwardRef } from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bg-bg-secondary border-fg-secondary text-fg-primary border", className)} {...props} />
));
Box.displayName = "Box";
