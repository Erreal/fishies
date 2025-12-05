import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// eslint-plugin-prettier и eslint-config-prettier нужны для интеграции Prettier
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Подключаем Prettier в конец, чтобы он перекрывал правила форматирования, конфликтующие с ESLint
  {
    extends: ["plugin:prettier/recommended"],
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
