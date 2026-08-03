# toufichajj.dev

Source for my personal site — a portfolio and writing space for a senior full-stack and cloud platform engineer. It presents selected work as case studies, a full career history, and essays on platform engineering, public-sector delivery, and building software that has to survive real constraints.

Live at [toufichajj.dev](https://toufichajj.dev).

## 🌐 Current Product

- [Thirty North](https://thirtynorthgst.ca/) — privacy-first GST/HST threshold, registration-timing, filing-deadline, late-filing-penalty, and return-line tools for Canadian cross-border freelancers, with free resources in English and French.
  - [Free GST/HST tools](https://thirtynorthgst.ca/tools/)
  - [Canada sales tax calculator — all provinces and territories](https://thirtynorthgst.ca/tools/canada-sales-tax-calculator)
  - [Calculateur des taxes de vente au Canada — toutes les administrations](https://thirtynorthgst.ca/fr/outils/calculateur-taxes-vente-canada)
  - [GST/HST place-of-supply screener for ordinary services](https://thirtynorthgst.ca/tools/gst-hst-place-of-supply-services)
  - [Présélecteur du lieu de fourniture TPS/TVH des services](https://thirtynorthgst.ca/fr/outils/lieu-fourniture-services-tps-tvh)
  - [Québec GST/QST calculator — forward and reverse](https://thirtynorthgst.ca/tools/quebec-gst-qst-calculator)
  - [Calculateur TPS/TVQ du Québec — régulier et inverse](https://thirtynorthgst.ca/fr/outils/calculateur-tps-tvq-quebec)
  - [Québec GST/QST Quick Method calculator](https://thirtynorthgst.ca/tools/quebec-gst-qst-quick-method-calculator)
  - [Calculateur de la méthode rapide TPS/TVQ du Québec](https://thirtynorthgst.ca/fr/outils/calculateur-methode-rapide-tps-tvq-quebec)
  - [Registration deadline calculator](https://thirtynorthgst.ca/tools/gst-hst-registration-deadline-calculator)
  - [GST/HST filing and payment deadline calculator](https://thirtynorthgst.ca/tools/gst-hst-filing-deadline-calculator)
  - [Calculateur des dates limites de production et de paiement TPS/TVH](https://thirtynorthgst.ca/fr/outils/calculateur-date-limite-declaration-tps-tvh)
  - [GST/HST instalment calculator for annual filers](https://thirtynorthgst.ca/tools/gst-hst-instalment-calculator)
  - [Calculateur d’acomptes provisionnels TPS/TVQ](https://thirtynorthgst.ca/fr/outils/calculateur-acomptes-provisionnels-tps-tvq)
  - [GST/HST late-filing penalty calculator](https://thirtynorthgst.ca/tools/gst-hst-late-filing-penalty-calculator)
  - [Calculateur de pénalité pour production tardive TPS/TVH](https://thirtynorthgst.ca/fr/outils/calculateur-penalite-production-tardive-tps-tvh)
  - [GST/HST return calculator — lines 101 to 115](https://thirtynorthgst.ca/tools/gst-hst-return-calculator)
  - [Calculateur de déclaration TPS/TVH — lignes 101 à 115](https://thirtynorthgst.ca/fr/outils/calculateur-declaration-tps-tvh)
  - [Foreign-currency invoice converter](https://thirtynorthgst.ca/tools/usd-cad-invoice-converter-gst-hst)
  - [GST/HST invoice requirements checker](https://thirtynorthgst.ca/tools/gst-hst-invoice-requirements-checker)
  - [Vérificateur des exigences de facture TPS/TVQ](https://thirtynorthgst.ca/fr/outils/verificateur-exigences-facture-tps-tvq)
  - [No-GST/HST invoice template for Canadian small suppliers](https://thirtynorthgst.ca/tools/no-gst-hst-invoice-template-canada)
  - [Modèle de facture sans TPS/TVQ pour petit fournisseur](https://thirtynorthgst.ca/fr/outils/modele-facture-sans-tps-tvq)
  - [Copy-ready bilingual invoice templates on GitHub](https://github.com/thajj/canada-no-gst-hst-invoice-template)
  - [Québec GST/QST C$30,000 guide](https://thirtynorthgst.ca/guides/quebec-freelancer-gst-qst-30000-threshold)
  - [Guide québécois TPS/TVQ en français](https://thirtynorthgst.ca/fr/guides/travailleur-autonome-quebec-seuil-30000-tps-tvq)
  - [Outils gratuits en français](https://thirtynorthgst.ca/fr/outils/)

## 🗺 What's on the site

- **Home** — positioning, capability pillars, featured case studies, and a condensed career timeline.
- **Work** — case studies for BAnQ, Châlons-en-Champagne, Thirty North, Stonkify, Open Trivia, and this site, each framed by problem, approach, and outcome.
- **About** — full career history, an architect-level capability map, education, and certifications.
- **Blog** — essays on platform engineering, hybrid deployment, accessibility and privacy, and leading R&D without leaving the craft.

## 🛠 Stack

- **Next.js 14** (App Router) with a fully static export — no server runtime in production
- **TypeScript** and **React 18**
- **MDX** for case studies and blog posts, rendered through a custom component set
- A hand-authored **CSS design system** in `src/styles/premium/global.css` — no utility framework in the render path
- **Framer Motion** for page transitions and scroll reveals
- Self-hosted Google Fonts via `next/font` (Figtree and Source Serif 4)
- **GitHub Actions → GitHub Pages** for build and deploy

## 🏗 Project structure

```
src/
  app/
    (main)/           Route group carrying the site chrome and design system
      page.tsx        Home
      about/          About page
      work/           Work index, [slug] detail, and projects/*.mdx
      blog/           Blog index, [slug] detail, and posts/*.mdx
    layout.tsx        Root layout: fonts, metadata, analytics
    sitemap.ts        Generated sitemap and robots rules
  components/
    premium/          The component library the site is built from
  resources/
    content.tsx       Structured content: bio, experience, skills, education
    config.js         Base URL, routes, and site-level flags
  styles/premium/     The design system stylesheet
public/               Images, OG image, CNAME
```

Content lives in two places by design: prose-heavy pages are MDX files next to their route, while structured data that several pages share (work experience, skills, education) lives in `src/resources/content.tsx`.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # static export to ./out
npm run lint
```

Analytics are opt-in through `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Without it the tracker is a no-op, so local development stays clean.

## 📦 Deployment

Pushing to `main` triggers `.github/workflows/nextjs.yml`, which builds the static export and publishes `./out` to GitHub Pages. The custom domain is held in `public/CNAME` so it survives every export.

## 📞 Contact

Toufic Hajj — [LinkedIn](https://www.linkedin.com/in/toufic-hajj) · [toufichajj.dev](https://toufichajj.dev)
