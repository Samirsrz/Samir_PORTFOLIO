# Samir Uddin Ahamed — Portfolio

Next.js 16 (App Router) + TypeScript + Tailwind v4 + hand-rolled shadcn-style
UI primitives + Framer Motion + a react-three-fiber signature scene in the
hero. Dark theme, maroon/gold palette.

## 1. Install

Open this folder in VS Code, open a terminal, then:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

Open http://localhost:3000 — check everything (photo, links, resume download)
before you deploy.

## 3. Edit your content

Everything you'll want to change lives in `src/data/`, not scattered across
components:

- `src/data/profile.ts` — name, summary/about text, socials, resume path
- `src/data/projects.ts` — your 3 featured projects + the ML project. Add a
  new object to the array to add a project; remove one to drop it. Omit any
  `links.live` / `links.client` / `links.server` you don't have — the button
  just won't render.
- `src/data/skills.ts` — skill groups/chips
- `src/data/education.ts` — education timeline + certifications

To swap your resume PDF, replace `public/resume.pdf` with the new file
(keep the same filename, or update `resumeFile` in `profile.ts`).

To swap your photo, edit the `src="..."` in `src/components/sections/hero.tsx`
(the `<Image>` tag). If you host it somewhere other than ImageBB, add that
domain to `remotePatterns` in `next.config.ts` or the image will fail to load.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Samirsrz/YOUR-REPO-NAME.git
git push -u origin main
```

(Create the empty repo on GitHub first, then paste its URL into the
`remote add` command above.)

## 5. Deploy to Vercel

Easiest path — install the CLI once, then deploy:

```bash
npm i -g vercel
vercel login
vercel        # first run: links the folder to a new Vercel project, deploys a preview
vercel --prod # promotes to your production URL
```

Alternative: skip the CLI entirely — go to vercel.com → "Add New Project" →
import the GitHub repo you just pushed → Deploy. After that, every
`git push` to `main` auto-deploys, so step 4 + a normal git push is all you
need for future updates (no need to run `vercel --prod` manually if you go
this route).

## 6. Updating later (the "shortcut" workflow)

1. Edit the relevant file in `src/data/` (e.g. add a real project link).
2. `git add . && git commit -m "update projects" && git push`
3. If you're using the CLI flow: `vercel --prod`. If you connected the GitHub
   repo in the Vercel dashboard: nothing else to do, it redeploys on push.

## Notes

- No backend/database — it's a static-shaped marketing site. The contact
  section uses `mailto:` / `tel:` links, not a form (no API key required).
- The 3D hero background is `@react-three/fiber`; it's dynamically imported
  client-side only, so it won't affect SEO or initial HTML.
- Blog section is an intentional "coming soon" empty state — see the comment
  at the top of `src/components/sections/blog.tsx` for how to wire up real
  MDX posts later.
