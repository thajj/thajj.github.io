const baseURL = "toufichajj.dev";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/experience": true,
  "/projects": true,
  "/skills": true,
  "/contact": true,
  "/blog": false,
  "/gallery": false,
  "/test": true,
};

// Initialize theme from localStorage
let initialTheme = "light"; // Default theme
if (typeof window !== "undefined") {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    initialTheme = savedTheme;
    document.documentElement.setAttribute("data-theme", initialTheme);
  }
}
// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  //   "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const effects = {
  gradient: true,
  dots: true,
  lines: false,
};

// Function to toggle theme
function toggleTheme() {
  const currentTheme = style.theme;
  style.theme = currentTheme === "light" ? "dark" : "light";
  // Sync with Magic UI
  document.documentElement.setAttribute("data-theme", style.theme);
  localStorage.setItem("theme", style.theme);
}

// Function to set theme
function setTheme(theme) {
  style.theme = theme;
  // Sync with Magic UI
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    1;
    localStorage.setItem("theme", theme);
  }
}

const style = {
  theme: "dark", // dark | light
  neutral: "slate", // sand | gray | slate
  brand: "moss", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "plastic", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
};

const display = {
  location: false,
  time: false,
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    gradient: true,
    dots: false,
    lines: true,
  },
};

export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
  toggleTheme,
  setTheme,
};
