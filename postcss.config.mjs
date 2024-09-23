/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: ["src/styles/breakpoints.scss"],
      },
    ],
    "tailwindcss", // Add Tailwind CSS plugin
    "postcss-import",
    "autoprefixer",
    "postcss-custom-media",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};

export default config;
