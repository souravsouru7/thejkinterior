# JK Interiors — Landing Page Design Prompt
> Use this prompt in Claude (VS Code / Claude Code) to generate the complete landing page.
> Output must be **3 separate files**: `index.html`, `style.css`, `main.js`

---

## YOUR TASK

Build a **luxury interior design landing page** for **JK Interiors**, a premium interior design firm based in Hyderabad, India.

Output exactly **3 files**:
- `index.html` — all markup only, no inline styles
- `style.css` — all styles, linked externally
- `main.js` — all JavaScript, linked externally

---

## BRAND INFORMATION

**Company Name:** JK Interiors
**Location:** Hyderabad, Telangana, India
**Tagline:** *"Spaces that inspire the way you live"*
**Website:** https://www.thejkinteriors.com

**About the brand:**
JK Interiors is a premier interior design firm in Hyderabad specializing in innovative and elegant solutions. The team of expert designers works with clients every step of the way to create spaces that inspire. Great design goes beyond aesthetics — it's about creating functional spaces that reflect personality and enhance lifestyle.

**Stats:**
- 4.5+ Years of Experience
- 50+ Projects Delivered
- 1-Year Warranty Period
- 100% Client Satisfaction

**Key USPs:**
- Budget-friendly premium interiors (no hidden costs)
- Theme-based styling included — never charged separately
- 1-year warranty + post-handover maintenance support
- Complimentary smart door locks with every project
- Capability to import materials from Korea and abroad
- VR Experience Centre launching in ~3 months (clients walk through spaces virtually before execution begins)

**Services offered:**
- Full Home Interiors
- Modular Kitchen
- Bedroom Design
- Living Room
- Office & Commercial Spaces
- Bathroom & Luxury Bath

---

## DESIGN SYSTEM

### Color Palette — use only these, as CSS variables

```css
:root {
  --accent:       #b08968;   /* Primary brand color — all buttons, borders, icons, highlights */
  --accent-light: #ccab90;   /* Hover states, italic headline tints */
  --accent-pale:  #f0e6da;   /* Pill/badge fills, light accents */
  --accent-deep:  #8a6647;   /* Text on pale accent backgrounds */

  --dark:         #0c0b09;   /* Hero background, deepest dark */
  --dark-2:       #161410;   /* Process section background */
  --dark-3:       #1e1c17;   /* Works section background */

  --warm-white:   #faf8f4;   /* About, Testimonials section bg */
  --warm-gray:    #ece5d9;   /* Why Choose Us section bg */

  --text-main:    #1a1814;
  --text-muted:   #72685a;
  --text-faint:   #a09080;
}
```

> **Rule:** No hardcoded hex values in CSS — only CSS variables.  
> **No purple, blue, or generic gray color schemes anywhere.**

---

### Typography

```html
<!-- Add inside <head> -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

```css
--serif: 'Playfair Display', Georgia, serif;  /* All headings and display text */
--sans:  'Jost', sans-serif;                  /* All body text, labels, UI */
```

- Section headings: `font-family: var(--serif)`, `font-weight: 400`
- Body text: `font-family: var(--sans)`, `font-weight: 300`
- Eyebrow labels: `font-size: 0.7rem`, `letter-spacing: 0.2em`, `text-transform: uppercase`, `color: var(--accent)`
- **Never use:** Inter, Roboto, Arial, system-ui, or any generic font

---

### Aesthetic — Luxury / Refined Dark

- Dark backgrounds on Hero, Process, Works sections
- Warm backgrounds on About, Why Us, Testimonials sections
- Border radius: `1px` or `2px` only — sharp, architectural, never rounded
- Borders: always `1px solid rgba(176,137,104,0.18)` — thin and warm
- No heavy drop shadows; only subtle card hover shadows: `0 20px 50px rgba(0,0,0,0.07)`
- Hover effects: `transform: translateY(-5px)` + border color shift
- Button animation: `::before` pseudo-element slides in from left (fill effect)
- Atmospheric textures: ghost display text, radial glow on dark sections
- Custom cursor: small dot + larger trailing ring with lag animation

---

## PAGE SECTIONS — BUILD IN THIS ORDER

---

### SECTION 1 — Fixed Navbar

**Element:** `<nav id="navbar">`

- Logo: "JK" in `var(--accent)` + "Interiors" in white, thin italic — use `var(--serif)`
- Nav links: About · Process · Why Us · Works · Clients · **Get a Quote** (outlined CTA)
- Default state: transparent background
- On scroll past 60px: add class `.scrolled` → `background: rgba(12,11,9,0.96)`, `backdrop-filter: blur(16px)`, bottom border `rgba(176,137,104,0.18)` appears
- Link hover: color shifts to `var(--accent)` + underline slides in from left via `::after`

---

### SECTION 2 — VR Announcement Strip

**Element:** `<div id="vr-strip">`

- Slim dark strip below navbar (`background: var(--dark-3)`)
- Pulsing animated dot in `var(--accent)` (CSS `@keyframes` pulse)
- Text: **VR Experience Centre** — Walk Through Your Dream Home Virtually · Launching in ~3 Months
- Bottom border: `1px solid rgba(176,137,104,0.2)`

---

### SECTION 3 — Hero

**Element:** `<section id="hero">`

- Layout: CSS Grid, `grid-template-columns: 55% 45%`
- Min-height: `100vh`

**Left side** (dark background):
- Ghost decorative text "JK" — absolute positioned, `font-size: 22rem`, `opacity: 0.04`, `var(--accent)`, bottom-left
- Eyebrow label with line: `——— Premier Interiors · Hyderabad`
- H1 heading (Playfair Display): "Spaces that / *inspire* / the way you live" — italic word in `var(--accent-light)`
- Short description paragraph (light weight, muted color)
- Stats box — 3 cells in a bordered grid: `4.5+` Years · `50+` Projects · `100%` Satisfaction
  - Stat numbers: `var(--serif)`, `var(--accent)`, animated count-up on load
- Two CTAs: Primary button (Book Free Consultation) + Ghost text link (View Our Work →)

**Right side** (image):
- Full-bleed interior photo: `https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=85&auto=format&fit=crop`
- Dark overlay gradient from left
- Small badge bottom-right: "Trusted by Hyderabad / 50+ Happy Homes" — dark box with accent border

---

### SECTION 4 — About Us

**Element:** `<section id="about">`

Background: `var(--warm-white)` | Layout: `grid-template-columns: 1fr 1fr`

**Left — Image block:**
- Main photo: `https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85&auto=format&fit=crop`
- Height: `560px`, `object-fit: cover`
- Offset frame: `position: absolute`, `border: 1.5px solid rgba(176,137,104,0.35)`, offset `1.5rem` bottom-right
- Experience badge: absolute top-left, `background: var(--accent)`, shows "4.5+ / Yrs of Craft"

**Right — Text:**
- Eyebrow → H2: "Design is more than *aesthetics*" → divider line → 3 brand story paragraphs
- Feature pills grid (2 columns, 6 pills): Theme Styling · 1-Year Warranty · Smart Locks · Imported Materials · VR Preview · 100% Satisfaction
- Pills: `background: var(--accent-pale)`, `border: 1px solid rgba(176,137,104,0.2)`, small accent dot

---

### SECTION 5 — Working Process

**Element:** `<section id="process">`

Background: `var(--dark-2)` | Subtle radial glow: `radial-gradient(ellipse at 50% 100%, rgba(176,137,104,0.06), transparent)`

- Centered header: eyebrow → H2: "Our *5-Step* Design Journey" → centered divider
- Horizontal 5-step track (`grid-template-columns: repeat(5, 1fr)`)
- Connecting line: CSS `::before` pseudo, `top: 28px`, `height: 1px`, `rgba(176,137,104,0.3)`

**Each step contains:**
- Circular node (56px): `border: 1px solid rgba(176,137,104,0.4)`, number inside in `var(--accent)` serif
- Outer ring on node via `::after` (larger, subtle, accent)
- Hover: node border becomes solid `var(--accent)`, subtle bg fill
- Emoji icon below node
- Title (serif, white)
- Description (small, very muted)

**5 Steps:**
1. 💬 Free Consultation — Understand vision, budget, requirements
2. ✏️ Design & Planning — Mood boards, 3D renders, detailed layouts
3. ✅ Approval & Materials — Client approves; we source local + imported materials
4. 🔨 Execution — Expert craftsmen, precision, clean workmanship
5. 🏡 Handover + Warranty — Final walkthrough + 1-year service warranty

---

### SECTION 6 — Why Choose Us

**Element:** `<section id="why">`

Background: `var(--warm-gray)`

- Asymmetric layout: `grid-template-columns: 360px 1fr`
- Left column: `position: sticky; top: 6rem` — Eyebrow → H2: "What sets us *apart*" → divider → intro paragraph → primary CTA button
- Right: 2-column card grid (`grid-template-columns: 1fr 1fr`)

**6 Cards (each has):**
- Large emoji icon
- Title (serif)
- Description (sans, light weight, muted)
- Badge pill at bottom (`var(--accent-pale)` bg, `var(--accent-deep)` text)
- Hover: `translateY(-5px)`, bottom border slides in via `::after scaleX(0→1)`

**Card content:**
| # | Icon | Title | Badge |
|---|---|---|---|
| 1 | 💰 | Budget-Friendly Premium | No Hidden Costs |
| 2 | 🎨 | Theme Styling Free | Always Included |
| 3 | 🛡️ | 1-Year Warranty | Post-Handover Cover |
| 4 | 🔐 | Free Smart Door Locks | Complimentary Gift |
| 5 | ✈️ | Imported Materials | Korea & Beyond |
| 6 | 🥽 | VR Experience Centre | Launching Soon |

---

### SECTION 7 — Type of Works / End-to-End Solutions

**Element:** `<section id="works">`

Background: `var(--dark-3)`

- Header row (flex, space-between): Left (eyebrow + H2: "Every space, *reimagined*" + tagline) · Right (primary CTA)
- **CSS Grid mosaic layout** (`grid-template-columns: repeat(12, 1fr)`, `grid-template-rows: 300px 260px`):
  - Tile 1: `grid-column: 1/8`, row 1 — Full Home Interiors (large) + "Most Popular" badge
  - Tile 2: `grid-column: 8/13`, row 1 — Modular Kitchen
  - Tile 3: `grid-column: 1/5`, row 2 — Bedroom Design
  - Tile 4: `grid-column: 5/9`, row 2 — Living Room
  - Tile 5: `grid-column: 9/13`, row 2 — Office & Commercial

**Each tile:**
- Image with `filter: brightness(0.68) saturate(0.75)`
- Hover: `brightness(0.85)` + `transform: scale(1.04)` on image
- Overlay gradient label bottom: category (small, `var(--accent)`) + title (serif, white)

**Image URLs:**
- Full Home: `https://images.unsplash.com/photo-1600210491892-03d54079d6ac?w=900&q=80&auto=format&fit=crop`
- Kitchen: `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format&fit=crop`
- Bedroom: `https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80&auto=format&fit=crop`
- Living Room: `https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80&auto=format&fit=crop`
- Office: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop`

---

### SECTION 8 — Testimonials

**Element:** `<section id="testimonials">`

Background: `var(--warm-white)` | Centered header

- 3-column card grid (`grid-template-columns: repeat(3, 1fr)`)

**Each card:**
- Decorative `"` quote mark — absolute, `font-size: 6rem`, `var(--accent-pale)`, serif, top-right
- Star rating: `★★★★★` in `var(--accent)`
- Italic testimonial text (muted, light weight)
- Author row: avatar circle (initials, `var(--accent)` bg) + name + location

**3 Testimonials:**
1. **RP** — Ramesh Prasad, Homeowner · Gachibowli — *"JK Interiors transformed our 3BHK completely. The team was attentive, quality was exceptional, and they delivered on time. The smart locks were a lovely bonus!"*
2. **SK** — Sneha Kulkarni, Homeowner · Kondapur — *"I was worried about budget but they delivered a premium result without overspending. The Korean-imported tiles are absolutely gorgeous."*
3. **AV** — Arjun Venkat, Business Owner · Madhapur — *"We got our office redesigned and the team was professional throughout. They responded quickly to a post-handover issue under warranty. Outstanding."*

---

### SECTION 9 — Contact Us

**Element:** `<section id="contact">`

Background: `var(--dark)` | Layout: `grid-template-columns: 1fr 1fr`
Subtle radial glow: `radial-gradient(ellipse, rgba(176,137,104,0.04), transparent)` — left side

**Left — Info:**
- Eyebrow → H2: "Let's build your *dream space*" → divider → description paragraph
- Contact details list: 📍 Location · 📞 Phone · 📧 Email · 🕐 Hours
- Each row: icon in `var(--accent)` + bold label + value

**Right — Form card** (`id="contact-form"`):
- Card: `background: rgba(255,255,255,0.03)`, `border: 1px solid rgba(176,137,104,0.18)`, `border-radius: 2px`
- Top accent line: `height: 2px`, `background: linear-gradient(to right, var(--accent), transparent)`
- Form title (serif) + subtitle
- Fields: First Name, Last Name (row), Phone, Email (row), Project Type (select), Message (textarea)
- Input styles: dark transparent bg, thin accent border, focus state brightens border
- Submit button: slide-fill animation, uppercase, full width
- On submit: show "Sending…" for 1.2s → then "✦ Message Sent!" → reset form after 3s

**Project Type options:** Full Home Interiors · Modular Kitchen · Bedroom Design · Living Room · Office / Commercial · Bathroom · Other

---

### SECTION 10 — Footer

**Element:** `<footer id="footer">`

- `background: var(--dark)`, `border-top: 1px solid rgba(176,137,104,0.1)`
- Flex row: Logo (serif, `var(--accent)`) · Copyright text · Nav links
- Minimal and slim

---

## JAVASCRIPT REQUIREMENTS (`main.js`)

Implement all of the following in vanilla JS (no libraries, no frameworks):

```js
// 1. CUSTOM CURSOR
// - Create #cursor (10px dot, var(--accent), mix-blend-mode: difference)
// - Create #cursor-ring (36px ring, rgba(176,137,104,0.55) border)
// - Cursor follows mouse instantly; ring lags via requestAnimationFrame (lerp factor 0.12)
// - On hover over a/button/card elements: cursor enlarges to 18px

// 2. NAVBAR SCROLL STATE
// - On scrollY > 60: add class 'scrolled' to #navbar

// 3. SCROLL REVEAL
// - IntersectionObserver on all .reveal elements
// - On intersect: add class 'in-view' (triggers CSS opacity + translateY transition)
// - CSS delay classes: .reveal-delay-1 through .reveal-delay-4 (0.1s increments)

// 4. STAT COUNTER ANIMATION
// - On #hero .hero-stats entering viewport: animate counters
// - #stat-exp: count to 4 then append ".5+"
// - #stat-projects: count to 50 then append "+"
// - #stat-sat: count to 100 then append "%"
// - Use eased animation (ease-out cubic), duration ~1400ms

// 5. SMOOTH ANCHOR SCROLL
// - Intercept all <a href="#..."> clicks
// - Scroll to target with 72px offset for fixed navbar

// 6. ACTIVE NAV HIGHLIGHT
// - On scroll: detect which section is in view
// - Apply var(--accent) color to matching nav link

// 7. FORM SUBMISSION FEEDBACK
// - Intercept #contact-form submit (prevent default)
// - Button text: "Sending…" (1.2s) → "✦ Message Sent!" → reset form → restore original text (3s)
```

---

## CSS REQUIREMENTS (`style.css`)

```css
/* Must include: */

/* Custom cursor */
body { cursor: none; }
#cursor { /* dot */ }
#cursor-ring { /* trailing ring */ }

/* Scroll reveal base state */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.72s cubic-bezier(0.22,1,0.36,1),
              transform 0.72s cubic-bezier(0.22,1,0.36,1);
}
.reveal.in-view { opacity: 1; transform: none; }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.reveal-delay-4 { transition-delay: 0.4s; }

/* Button fill animation */
.btn-primary {
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute; inset: 0;
  background: var(--dark);
  transform: translateX(-101%);
  transition: transform 0.35s cubic-bezier(0.22,1,0.36,1);
}
.btn-primary:hover::before { transform: translateX(0); }
.btn-primary:hover { color: var(--accent); }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--dark); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 3px; }
```

---

## RESPONSIVE BREAKPOINTS

```css
@media (max-width: 1100px) {
  /* Why Us: single column layout */
  /* Works grid: 2 columns */
}
@media (max-width: 860px) {
  /* Hero: stacked (1 column) */
  /* About: stacked */
  /* Process: 2-column, hide connecting line */
  /* Contact: stacked */
  /* Form rows: single column */
}
@media (max-width: 560px) {
  /* Hide nav links */
  /* Stats: vertical stack */
  /* Footer: center-aligned column */
}
```

---

## QUALITY RULES

- **No frameworks** — pure HTML5, CSS3, vanilla JS (ES6+)
- **No inline styles** in HTML (except minor one-off `style=` overrides)
- **No `onclick=`** attributes — all events bound in `main.js`
- **No hardcoded colors** in CSS — only CSS variables
- **All images** from Unsplash with `?w=900&q=80&auto=format&fit=crop` params
- **Semantic HTML** — use `<section>`, `<nav>`, `<footer>`, `<form>`, `<article>` correctly
- **Every image** must have descriptive `alt` text
- **Google Fonts** loaded in `<head>` with `preconnect` hints
- **File linkage in HTML:**
  ```html
  <link rel="stylesheet" href="style.css" />   <!-- in <head> -->
  <script src="main.js" defer></script>          <!-- before </body> -->
  ```

---

## OUTPUT FORMAT

Provide the output as **3 clearly labeled code blocks**:

~~~
### index.html
```html
...
```

### style.css
```css
...
```

### main.js
```js
...
```
~~~

---

*Prompt for JK Interiors Landing Page · thejkinteriors.com · Hyderabad · 2025*
