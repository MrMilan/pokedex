import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 *
 * @param inputs - The class names to be combined.
 * @returns The combined class names as a string.
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Converts the first letter of a string to uppercase and the rest to lowercase.
 * If no string is provided or an empty string is provided, returns an empty string.
 * @param stringValue The string to convert.
 * @returns The converted string.
 */
export const toTitleCase = (stringValue?: string) => {
  if (!stringValue?.length) {
    return "";
  }
  // Replace underscores with spaces before proceeding with title casing
  const stringWithSpaces = stringValue.replace(/_/g, " ");
  return stringWithSpaces.charAt(0).toUpperCase() + stringWithSpaces.substring(1).toLowerCase();
};
