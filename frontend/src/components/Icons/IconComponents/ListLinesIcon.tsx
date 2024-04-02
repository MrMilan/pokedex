import { forwardRef, SVGProps } from "react";

export const ListLinesIcon = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="1.5" width="32" height="5" rx="2" fill="currentColor"></rect>
    <rect x="0" y="9.5" width="32" height="5" rx="2" fill="currentColor"></rect>
    <rect x="0" y="17.5" width="32" height="5" rx="2" fill="currentColor"></rect>
    <rect x="0" y="25.5" width="32" height="5" rx="2" fill="currentColor"></rect>
  </svg>
));

ListLinesIcon.displayName = "ListLinesIcon";
