import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // This object defines custom rules for your project
    rules: {
      // Disable the 'no-console' rule entirely
      "no-console": "off",
      // Disable the '@next/next/no-img-element' rule entirely
      "@next/next/no-img-element": "off",
      // You can also set rules to 'warn' instead of 'off' to show warnings instead of errors
      // "no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;