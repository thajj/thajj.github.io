const baseURL = "toufichajj.dev";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": false,
};

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
  //   "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

const effects = {
  gradient: false,
  dots: true,
  lines: false,
};

const style = {
  theme: "light" as "light" | "dark",
  neutral: "sand",
  brand: "yellow",
  accent: "indigo",
  solid: "contrast",
  solidStyle: "plastic",
  border: "playful",
  surface: "translucent",
  transition: "all",
};

const display = {
  location: false,
  time: false,
};

// Function to toggle theme
function toggleTheme() {
  const currentTheme = style.theme;
  style.theme = currentTheme === "light" ? "dark" : "light";
  // Sync with Magic UI
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", style.theme);
    localStorage.setItem("theme", style.theme);
  }
}

// Function to set theme
function setTheme(theme: "light" | "dark") {
  style.theme = theme;
  // Sync with Magic UI
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
}

export { routes, protectedRoutes, effects, style, display, baseURL, toggleTheme, setTheme };
