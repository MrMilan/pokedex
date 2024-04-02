import * as React from "react";

import { cn } from "@/libs/utils";

export interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const ErrorMessage = React.forwardRef<HTMLParagraphElement, ErrorMessageProps>(
  ({ className, children, id, ...props }, ref) => {
    if (!children) {
      return null;
    }

    return (
      <p ref={ref} id={id} className={cn("text-sm text-red-500", className)} {...props}>
        {children}
      </p>
    );
  }
);

ErrorMessage.displayName = "ErrorMessage";
