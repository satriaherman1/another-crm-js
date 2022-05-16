const { defineConfig } = require("windicss/helpers");

module.exports = defineConfig({
  extract: {
    include: ["**/*.{jsx,js,css,html}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "crm-dark": "#141518",
        "crm-gray-600": "#AFAFAF",
        "crm-gray-500": "#C4C4C4",
        "crm-gray-400": "#2C2E34",
        "crm-gray-350": "#404554",
        "crm-gray-300": "#3C4254",
        "crm-gray-200": "#282C38",
        "crm-gray": "#757B8C",
        "crm-primary": "#0EC8CE",
        "crm-dark-400": "#333641",
        "crm-dark-300": "#1E1F25",
        "crm-mutted-blue": "#98A5CD",
        "crm-red": "#EB5757",
        "crm-yellow": "#FFB545",
        "crm-orange": "#F2994A",
      },
    },
  },
  plugins: [],
});
