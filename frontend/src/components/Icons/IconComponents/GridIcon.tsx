import { forwardRef, SVGProps } from "react";

export const GridIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="3.5" width="9" height="12" rx="1" fill="currentColor" />
    <rect x="11.5" y="3.5" width="9" height="12" rx="1" fill="currentColor" />
    <rect x="21.5" y="3.5" width="9" height="12" rx="1" fill="currentColor" />
    <rect x="1.5" y="16.5" width="9" height="12" rx="1" fill="currentColor" />
    <rect x="11.5" y="16.5" width="9" height="12" rx="1" fill="currentColor" />
    <rect x="21.5" y="16.5" width="9" height="12" rx="1" fill="currentColor" />
  </svg>
));

GridIcon.displayName = "GridIcon";
