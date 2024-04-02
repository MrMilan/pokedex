import { cn } from "@/libs/utils";
import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label ref={ref} className={cn("text-md text-fg-secondary font-medium", className)} {...props} />
));

Label.displayName = "Label";
