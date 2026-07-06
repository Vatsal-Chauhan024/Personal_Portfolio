import path from "node:path"

import { includeIgnoreFile } from "@eslint/compat"
import js from "@eslint/js"
import eslintJs from "@eslint/js"
import { rules as airbnbRules, configs, plugins } from "eslint-config-airbnb-extended"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginReact from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import sortImports from "eslint-plugin-simple-import-sort"
import globals from "globals"
import tseslint from "typescript-eslint"

const gitignorePath = path.resolve(".", ".gitignore")

const jsConfig = [
  {
    name: "js/config",
    ...js.configs.recommended
  },
  plugins.stylistic,
  plugins.importX,
  ...configs.base.recommended,
  airbnbRules.base.importsStrict
]

const reactConfig = [
  plugins.react,
  plugins.reactA11y,
  ...configs.react.recommended,
  airbnbRules.react.strict
]

const typescriptConfig = [
  plugins.typescriptEslint,
  ...configs.base.typescript,
  airbnbRules.typescript.typescriptEslintStrict,
  ...configs.react.typescript
]

export default [
  includeIgnoreFile(gitignorePath),

  {
    ignores: [
      ".commitlintrc.mjs",
      "eslint.config.js",
      "packages/mobile/babel.config.js",
      "packages/mobile/metro.config.js",
      "commands",
      "**/dist/"
    ]
  },

  ...jsConfig,
  ...reactConfig,
  ...typescriptConfig,

  ...tseslint.config(
    {
      languageOptions: {
        ecmaVersion: "latest",
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          ecmaVersion: "latest",
          sourceType: "module"
        },
        sourceType: "module"
      }
    },
    {
      plugins: {
        "simple-import-sort": sortImports
      }
    },
    reactHooks.configs["recommended-latest"],
    eslintJs.configs.recommended,
    eslintPluginReact.configs.flat.recommended,
    eslintConfigPrettier,
    ...tseslint.configs.recommended,
    {
      rules: {
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            ignoreRestSiblings: true,
            varsIgnorePattern: "^_"
          }
        ],
        "consistent-type-specifier-style": "off",
        eqeqeq: "error",
        // Source - https://stackoverflow.com/a/59268871
        // Posted by superoryco, modified by community. See post 'Timeline' for change history
        // Retrieved 2026-06-01, License - CC BY-SA 4.0

        "import-x/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never"
          }
        ],
        "import-x/order": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-quotes": [2, "prefer-double"],
        "no-console": "error",
        "no-multiple-empty-lines": [
          "error",
          {
            max: 2,
            maxEOF: 1
          }
        ],
        "no-nested-ternary": "off",
        "no-param-reassign": "off",
        "no-unreachable": ["error"],
        "prefer-arrow-callback": ["error"],
        "prefer-template": ["error"],
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react/display-name": "off",
        "react/jsx-curly-brace-presence": ["error", { children: "never", props: "never" }],
        "react/jsx-first-prop-new-line": [2, "multiline"],
        "react/jsx-max-props-per-line": [2, { maximum: 2 }],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/react-in-jsx-scope": "off",
        "react/self-closing-comp": "error",
        semi: [2, "never"],
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error"
      },

      settings: {
        react: {
          version: "18.3.1"
        }
      }
    }
  )
]
