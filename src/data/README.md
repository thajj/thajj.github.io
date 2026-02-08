# Data sources

**Single source of truth for the live portfolio:** [`src/resources/content.tsx`](../resources/content.tsx). All pages (Home, About, Work, Blog, Contact, Gallery) read content from there.

**Legacy:** `portfolio-data.json` is only used by the unused `MainContent` / `Portfolio` components. Do not use it for new features; prefer `content.tsx` and MDX under `src/app/work/projects` and `src/app/blog/posts`.
