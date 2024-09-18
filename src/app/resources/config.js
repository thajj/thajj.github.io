const baseURL = "toufichajj.dev";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/experience": true,
  "/projects": true,
  "/skills": true,
  "/contact": true,
  //   "/blog": true,
  //   "/gallery": true,
  "/test": true,
};

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

const style = {
  theme: "light", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
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

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL };
