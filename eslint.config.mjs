import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
    extends: ["eslint:recommended"], // ✅ only real errors, no style noise
    rules: {
      "no-unused-vars": "off", // allow unused vars/args
      "no-console": "off",     // allow console.log
      "no-empty": "off"        // allow empty blocks
    }
  },
]);
