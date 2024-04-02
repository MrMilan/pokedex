import { SVGProps } from "react";
import { GridIcon } from "./IconComponents/GridIcon";
import { HeartIcon } from "./IconComponents/HeartIcon";
import { ListLinesIcon } from "./IconComponents/ListLinesIcon";

type IconRef = React.ForwardRefExoticComponent<SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>;

export { GridIcon, HeartIcon, ListLinesIcon, type IconRef };
