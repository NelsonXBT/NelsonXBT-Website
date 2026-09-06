# NelsonXBT

Personal site for **NelsonXBT** — the personal brand of Nelson Edeh. Next.js
App Router, React Server Components, CSS Modules, no UI dependencies.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Routes

| Route               | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| `/`                 | Homepage — who, what, credibility, two actions |
| `/workshop`         | Crypto Clarity Workshop                        |
| `/workshop/payment` | Reserve a seat (USDT, `noindex`)               |
| `/1-on-1`           | Private coaching — 3 sessions                  |
| `/1-on-1/payment`   | Book the sessions (USDT, `noindex`)            |
| `/contact`          | Work with me — partnerships and inquiries      |
| `/terms`            | Terms of Service                               |
| `/privacy`          | Privacy Policy                                 |

## Editing content

Copy lives in `content/`, not in JSX. In most cases that is the only place
you need to touch:

- `content/site.ts` — brand facts, routes, social URLs, nav, portrait
- `content/home.ts` — hero copy, credibility items, the two primary actions
- `content/workshop.ts` — workshop topics, price, cohort dates
- `content/session.ts` — 1-on-1 topics, price, format, video
- `content/payment.ts` — USDT address, network, warning (used by both checkouts)
- `content/contact.ts` — the contact page
- `content/legal.ts` — terms and privacy, plus the "last updated" date shown
  on both (bump `legalUpdated` whenever you change them)

The wallet address, network and warning live in `content/payment.ts` alone, so
the two checkouts can never quote different details.

## Components

```
components/
  layout/    Navbar, Footer, Logo
  ui/        Button, Container, Eyebrow, StackedList
  home/      Hero, Credibility, PrimaryActions, CommunityLinks
  offer/     OfferHero, OfferVideo, Syllabus, Reserve, HowItWorks
  payment/   Checkout, AddressBlock
  legal/     LegalPage (shared shell for /terms and /privacy)
```

The `offer/` components are shared by `/workshop` and `/1-on-1` — both offers
present the same structure (hero with video, numbered syllabus, price and
inclusions, checkout) driven entirely by their own content file. `payment/`
does the same for the two checkouts.

Everything is a Server Component except `OfferVideo` (deferred YouTube embed)
and `AddressBlock` (copy to clipboard).

## Design system

Tokens live in `app/globals.css`; all component styling is in colocated CSS
Modules. Dark, editorial, one warm gold accent (`--accent`) used sparingly.
One typeface sitewide — Inter, self-hosted through `next/font` — with
hierarchy from size, weight and tracking rather than a second family.

## Assets

- `public/nelson-portrait.jpg` — hero portrait (144 KB, derived)
- `public/workshop-poster.jpg` — video poster (47 KB, derived)
- `app/icon.png`, `app/apple-icon.png` — favicons
- `design/source/nelson-portrait-source.png` — the 2048px original, kept out
  of `public/` so it isn't served
