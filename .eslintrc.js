module.exports = {
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
        },
      },
    ],
  },
};
