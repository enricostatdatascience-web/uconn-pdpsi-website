# Pi Delta Psi Fraternity, Inc. — Omega Chapter at UConn

The official chapter website, rebuilt as a fast, interactive static site to replace the Wix build.

No frameworks, no build step, no dependencies. Open a file, edit it, push it — it's live.

---

## Quick start

```bash
# Clone or open this folder in VS Code
code .

# Preview locally (any one of these works)
python3 -m http.server 8000     # then open http://localhost:8000
npx serve                       # if you have Node
```

Or install the **Live Server** extension in VS Code, right-click `index.html`, and choose
_Open with Live Server_.

---

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `uconn-pdpsi-website`).
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: new chapter website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/uconn-pdpsi-website.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
   The included workflow (`.github/workflows/deploy.yml`) publishes on every push to `main`.

Your site will be live at `https://YOUR-USERNAME.github.io/uconn-pdpsi-website/`.

### Using a custom domain

1. Buy a domain (Namecheap, Cloudflare, Porkbun — roughly $10–15/year).
2. Add a file named `CNAME` in the repo root containing just your domain, e.g.
   `uconnpdpsi.org`
3. At your registrar, add these DNS records:

   | Type  | Name | Value |
   |-------|------|-------|
   | A     | @    | `185.199.108.153` |
   | A     | @    | `185.199.109.153` |
   | A     | @    | `185.199.110.153` |
   | A     | @    | `185.199.111.153` |
   | CNAME | www  | `YOUR-USERNAME.github.io` |

4. Back in **Settings → Pages**, enter the domain and tick **Enforce HTTPS**.

Netlify and Cloudflare Pages also work — drag the folder in, or connect the repo. No build
command needed; the publish directory is the repo root.

---

## Project structure

```
uconn-pdpsi-website/
├── index.html          Home
├── about.html          Mission, objectives, four pillars
├── history.html        National + chapter history, founders, past presidents
├── chapters.html       Searchable national chapter directory
├── rush.html           Recruitment info + FAQ accordion
├── roster.html         Searchable/filterable roster of all brothers
├── board.html          Executive board, committees, active house
├── assets/
│   ├── css/styles.css  All styling (design tokens at the top)
│   ├── js/data.js      ← ALL CHAPTER CONTENT LIVES HERE
│   ├── js/main.js      Nav, footer, and all interactive modules
│   └── img/            Drop photos here
├── .github/workflows/deploy.yml
├── .nojekyll
└── README.md
```

---

## How to update the site

**Almost every routine update is a change to one file: `assets/js/data.js`.**

### Add a new pledge class

Open `assets/js/data.js`, find `PLEDGE_CLASSES`, and add a block before the `Annexed` entry:

```js
{
  name: "Alpha Theta", greek: "ΑΘ", term: "Fall 2025",
  educator: 'Some Brother "LINE NAME"',
  assistant: 'Another Brother "LINE NAME"',
  brothers: [
    [125, "First Last", "LINE NAME"],
    [126, "First Last", "LINE NAME"]
  ]
},
```

The roster page, the brother count on the home page, and the class filters all update
automatically.

### Update the executive board

Edit the `EXEC_BOARD` array. Same for `COMMITTEES` (minor board) and `PAST_PRESIDENTS`.

### Update who's active on campus

`ACTIVE_HOUSE` is just a list of line numbers. Add or remove numbers; the board page pulls
each brother's name and line name from the roster automatically.

### Change a pillar icon

The four pillar icons are the symbols from the chapter crest (scroll, tree, scales,
clasped hands), cut out and recoloured to the chapter red. They live in
`assets/img/pillar-<name>.png` at 256x256 with transparent backgrounds.

In `data.js` each pillar names its icon with `icon: "scroll"`. To swap one, replace the
PNG at that path and keep the filename. The four pillars always render on a single row
on desktop (`.grid--pillars` in the CSS).

### Change the nav links or social media

Top of `assets/js/main.js` — the `NAV_LINKS` and `SOCIALS` constants.

### Change the colors

Top of `assets/css/styles.css`, in the `:root` block:

```css
--black-900: #0a0a0a;  /* page background */
--red-500:  #c8102e;   /* primary accent */
--red-400:  #e11d34;   /* brighter accent */
```

Change those three and the whole site follows. The current palette is red, black, and white.
Swap in exact hex values if the chapter has official ones.

### Add photos

Drop images into `assets/img/` and reference them as `assets/img/filename.jpg`. Composite
group photos work well as a hero background — see the `.hero__bg` rule in the CSS.

---

## What's different from the Wix site

- **Interactive roster** — live search across all 117 brothers by name, line name, or number,
  with era filters and expand/collapse by pledge class.
- **Searchable chapter directory** — filter 29 chapters nationwide instantly.
- **FAQ accordion** on the rush page instead of a wall of text.
- **Past presidents timeline** on the history page.
- **Real mobile navigation** — a proper hamburger menu, not a squeezed desktop layout.
- **Scroll animations and animated counters** throughout.
- **Loads in well under a second** — no Wix runtime, no page builder overhead.
- **Free hosting** on GitHub Pages, with a custom domain if you want one.
- **Content lives in one data file**, so a future webmaster doesn't need to touch HTML.

---

## Notes and things to check

- The home page shows **117 brothers** (counted live from `data.js`). The old Wix site's
  About text said 111; that number appears to have gone stale. Update the About copy in
  `index.html` if you want a different figure.
- Line numbers **19, 41, 45, 54, 57, 64, 78, 85** don't appear in the roster carried over from
  Wix. If those brothers exist, add them to `data.js`.
- Line **#111** is used twice in the source data — Edwin Cao (Alpha Gamma) and Steven Lean
  (Annexed). Worth confirming with the historian.
- There's no contact form yet. If you want one, [Formspree](https://formspree.io) or
  [Netlify Forms](https://docs.netlify.com/forms/setup/) both work on a static site with no
  backend.

---

## Accessibility & browser support

Semantic HTML, keyboard-navigable, visible focus rings, `prefers-reduced-motion` respected,
and a print stylesheet that expands the whole roster. Works in all current browsers.

---

© Pi Delta Psi Fraternity, Inc. — Omega Chapter, University of Connecticut.
