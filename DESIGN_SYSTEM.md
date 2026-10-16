# New Leaf design system

New Leaf is a digital shopping and payments platform by DataWeave. Its feel is
"global commerce, grounded trust, new opportunities".

This file is the spec for:
- **Favour**, who is building the web app in Lovable
- **Isaac**, who is building the mobile app in FlutterFlow

To see every token rendered, open `design-system.html`. The CSS source is `css/tokens.css`.

## 1. Colour

| Token | Hex | Use | Never |
|---|---|---|---|
| `forest` | `#123C32` | Primary buttons, active nav, key headings, feature bands, footer | — |
| `emerald` | `#21866B` | Links, secondary actions, focus ring, positive accents | Large backgrounds |
| `ivory` | `#F7F6F0` | Page background | — |
| `white` | `#FFFFFF` | Cards, forms, checkout, panels | Page background |
| `gold` | `#C7A76C` | Hairlines, small icons, "Coming soon" tag border, footer headings on forest | Text on white or ivory |
| `charcoal` | `#202925` | Headings and body text | — |
| `slate` | `#68736D` | Descriptions, labels, timestamps | Body copy longer than 2 lines |
| `sage` | `#DDE4DE` | Borders, dividers, input outlines | Text |
| `success` | `#237A50` | Completed or verified states | — |
| `error` | `#B42332` | Errors, failed validation, payment warnings | — |

Allowed tints, with no new hues: emerald tint `#E8F3EF`, error tint `#FBEDEE`,
and forest hover `#0C2C24`.

**Status rule:** never show a status by colour alone. Always pair the colour
with a text label and a dot or icon.

**Rhythm:** ivory sections alternate with white bands. Add an occasional forest
band for a statement or feature. Don't put every section inside a card.

## 2. Typography

| Style | Font | Weight | Size (mobile → desktop) | Line height | Tracking |
|---|---|---|---|---|---|
| Display | Manrope | 700 | 40 → 68 | 1.02 | −3.5% |
| H1 | Manrope | 700 | 32 → 48 | 1.1 | −2% |
| H2 | Manrope | 700 | 26 → 36 | 1.15 | −2% |
| H3 | Manrope | 600 | 20 | 1.3 | −2% |
| H4 / card title | Manrope | 600 | 16–17 | 1.35 | −1% |
| Body large | Inter | 400 | 18 | 1.6 | 0 |
| Body | Inter | 400 | 16 | 1.6 | 0 |
| Small | Inter | 400–500 | 14 | 1.5 | 0 |
| Eyebrow / caption | Inter | 600 | 12, uppercase | 1.4 | +12% |
| Button | Inter | 600 | 14 | 1 | +1% |

## 3. Logo

- **Mark:** two leaf halves joined along a diagonal. Together they read as one
  leaf: new growth, moving up and forward, and two parties trading across a
  border. Files: `assets/logo-mark.svg` and `assets/app-icon.svg`.
- **Wordmark:** "New Leaf" in Manrope 700, tracking −2%, set to the right of
  the mark. The gap between them is 0.35 × the mark's width.
- **Versions:**

  | Version | Mark | Wordmark |
  |---|---|---|
  | Full colour | forest + emerald | — |
  | On dark | ivory + gold, on forest | — |
  | Monochrome | charcoal at 100% + charcoal at 55% | — |

- **App icon:** a forest square with corner radius 22% of its width. The mark
  sits in the centre at 62% of the icon's width, in ivory + gold.
- **Minimum size:** 16px. Clear space around the logo is half the mark's width.
- Don't add gradients, currency symbols, globes, leaf veins or outlines.

## 4. Spacing, radius, elevation

- Spacing uses a 4px base: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Radius: 6 for inputs and tags, 10 for buttons and cards, 16 for large media
  and bottom sheets.
- Use a shadow only on floating elements (the WhatsApp button, menus):
  `0 1px 2px rgba(18,60,50,.06), 0 8px 24px rgba(18,60,50,.06)`.
  Cards don't get a shadow.

## 5. Components

| Component | Spec |
|---|---|
| Primary button | forest fill, ivory text, 44px min height, 24px side padding, radius 10. Hover: `#0C2C24` |
| Secondary button | transparent, 1px forest border, forest text. Hover: fills forest |
| Text button | forest text, 600 weight, with an arrow that nudges 3px on hover |
| Input | white, 1px sage border, radius 6, 44px min height. Focus: emerald border + 3px emerald-tint ring. Error: error border + message below |
| Tag | pill, 12px uppercase. Category: emerald tint. Planned: sage outline. Coming soon: gold outline. Demo: dashed slate |
| Product card | 4:5 image (radius 10, no shadow, no border), title in Manrope 600, category, then price. Hover: image fades to 88% opacity |
| Header | ivory at 92% with a blur, sage bottom border, sticky. 64px tall on mobile, 72px from tablet up. Mobile layout: menu · logo · cart. Desktop layout: logo · nav · search / account / cart |
| Cart count | 18px forest badge with ivory number. Hidden when the cart is empty |
| Notice | white, sage border, 3px gold left edge. For errors: error edge on error tint |
| Footer | forest background. Gold uppercase column headings, ivory links at 82% opacity, large faint wordmark |

## 6. Pages

- **Home:**
  1. Hero image, then the headline and copy with two CTAs
  2. Category chips
  3. Featured product rail
  4. Forest statement band
  5. Shop feature split
  6. Payments "coming soon" split
  7. Three values
  8. Social strip
  9. Newsletter
- **Shop:** category filter chips + search. Grid of 2 columns on mobile, 3 on
  tablet, 4 on desktop. Shows a result count and an empty state.
- **Product:** gallery (1:1 main image + 4 thumbnails), then info that stays
  sticky on desktop. Info order:
  1. Tags
  2. Name
  3. Price
  4. Availability
  5. Quantity + Add to cart
  6. WhatsApp button
  7. Accordions
- **Cart / checkout:**
  - Steps (Cart, Details, Payment), a line-items panel, the delivery form and
    the payment options.
  - The order summary is a sticky aside on desktop.
  - Payment methods show "Not yet available" until real providers exist.
- **Payments:** a forest hero tagged "Planned". Shows the Nigeria → China
  route, three planned services and an email sign-up for launch updates.
  Nothing on it suggests that transfers or wallets are live.
- **Account:**
  - The sub-navigation is tabs on mobile and a sidebar on desktop.
  - Content: stat tiles, an order table with status labels, the details form
    and addresses.
  - Everything on it is labelled demo data.

## 7. Responsive

- Breakpoints: 640, 768, 960 (desktop nav), 1200. Write mobile styles first.
- Page gutters: 16px on mobile, 32 on tablet, 48 on desktop. Content is at
  most 1200px wide.
- Every tap target is at least 44px. Focus ring: 2px emerald, offset 2px.
- Motion uses opacity and transform only: hover 150ms, drawer 240ms, reveal
  600ms. Turn all of it off under reduced motion.

## 8. FlutterFlow mapping (Isaac)

| FlutterFlow theme | Value |
|---|---|
| Primary | `#123C32` |
| Secondary | `#21866B` |
| Tertiary | `#C7A76C` |
| Primary Background | `#F7F6F0` |
| Secondary Background | `#FFFFFF` |
| Primary Text | `#202925` |
| Secondary Text | `#68736D` |
| Alternate (borders) | `#DDE4DE` |
| Success | `#237A50` |
| Error | `#B42332` |
| Display/Headline font | Manrope |
| Title/Body/Label font | Inter |

## 9. Lovable prompt starter (Favour)

> Build with Tailwind. Theme colours: forest #123C32, emerald #21866B, ivory
> #F7F6F0, white, gold #C7A76C, charcoal #202925, slate #68736D, sage #DDE4DE,
> success #237A50, error #B42332. Headings in Manrope, body in Inter.
>
> Use an ivory page background. Product cards have no shadow; buttons have
> radius 10px. Every tap target is at least 44px. Follow DESIGN_SYSTEM.md
> exactly.
>
> Use image placeholders, and demo products with no prices. Payments are
> "coming soon": no fake provider logos, balances or confirmations.

## Content rules

- **Images** are placeholders. The company adds its own photos.
- **Products** are demo data (`js/site.js` → `PRODUCTS`) and have no prices.
  While `price` is undefined, the site shows "Price coming soon".
- **Contact:** phone and WhatsApp +234 913 710 4301. Email, address and social
  handles are still to be added. Don't invent them.
- Don't invent payment-provider logos, licences, regulatory approvals,
  addresses, balances or transactions.
