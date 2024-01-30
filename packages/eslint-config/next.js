const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        require.resolve("@vercel/style-guide/eslint/next"),
        "eslint-config-turbo",
        "prettier",
    ],
    globals: {
        React: true,
        JSX: true,
    },
    env: {
        node: true,
        browser: true,
    },
    plugins: ["only-warn", "prettier"],
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    ignorePatterns: [
        // Ignore dotfiles
        ".*.js",
        "node_modules/",
    ],
    overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
    rules: {
        "react-refresh/only-export-components": [
            "off",
            { allowConstantExport: true },
        ],
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        quotes: ["warn", "double"],
        "jsx-quotes": ["warn", "prefer-double"],
        semi: ["warn", "always"],
        "react/prop-types": "off",
        "react/no-unescaped-entities": "off",
        "prettier/prettier": "warn",
        "no-console": "error",
    },
};
