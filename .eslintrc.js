module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["airbnb", "prettier"],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    "no-console": "error",
  },
};
