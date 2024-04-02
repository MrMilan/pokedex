import formsPlugin from "@tailwindcss/forms";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        tertiary: "rgb(var(--tertiary) / <alpha-value>)",
        negative: "rgb(var(--negative) / <alpha-value>)",
        "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "bg-tertiary": "rgb(var(--bg-tertiary) / <alpha-value>)",
        "fg-primary": "rgb(var(--fg-primary) / <alpha-value>)",
        "fg-secondary": "rgb(var(--fg-secondary) / <alpha-value>)",
        "fg-tertiary": "rgb(var(--fg-tertiary) / <alpha-value>)",
        favorite: "rgb(var(--favorite) / <alpha-value>)",
        "hp-bar": "rgb(var(--hp-bar) / <alpha-value>)",
        "cp-bar": "rgb(var(--cp-bar) / <alpha-value>)",
      },
    },
  },
  plugins: [formsPlugin],
};
export default config;
