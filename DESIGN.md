---
name: Reliant Admin
# SINGLE SOURCE OF TRUTH for tokens: /assets/tailwind-config.js
# This file documents that config in prose. If the two ever disagree,
# the .js file is authoritative — update this doc to match it.
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e4'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fe'
  surface-container: '#efecf8'
  surface-container-high: '#eae6f2'
  surface-container-highest: '#e4e1ec'
  on-surface: '#1b1b23'
  on-surface-variant: '#464554'
  inverse-surface: '#303038'
  inverse-on-surface: '#f2effb'
  outline: '#777586'
  outline-variant: '#c7c4d7'
  surface-tint: '#4c4bd2'
  primary: '#3b39c2'
  on-primary: '#ffffff'
  primary-container: '#5555db'
  on-primary-container: '#e6e4ff'
  inverse-primary: '#c1c1ff'
  secondary: '#006879'
  on-secondary: '#ffffff'
  secondary-container: '#74e3fe'
  on-secondary-container: '#006576'
  tertiary: '#3c5701'
  on-tertiary: '#ffffff'
  tertiary-container: '#53701c'
  on-tertiary-container: '#cff38f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1dfff'
  primary-fixed-dim: '#c1c1ff'
  on-primary-fixed: '#09006b'
  on-primary-fixed-variant: '#322fb9'
  secondary-fixed: '#aaedff'
  secondary-fixed-dim: '#64d5ef'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ccef8c'
  tertiary-fixed-dim: '#b0d272'
  on-tertiary-fixed: '#131f00'
  on-tertiary-fixed-variant: '#354e00'
  background: '#fcf8ff'
  on-background: '#1b1b23'
  surface-variant: '#e4e1ec'
  # --- Status pill tokens (promoted from index.html so every page can use them) ---
  status-pending-bg: '#aaedff'
  status-pending-text: '#006879'
  status-completed-bg: '#ccef8c'
  status-completed-text: '#3c5701'
  status-rejected-bg: '#ffdad6'
  status-rejected-text: '#ba1a1a'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  title-sm:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
# Radius scale below matches the Tailwind borderRadius config EXACTLY.
# (Previous versions of this doc listed a different scale than the build;
#  reconciled 2026-06-30. Cards use `rounded-lg` = 0.25rem = 4px per the prose.)
rounded:
  DEFAULT: 0.125rem   # 2px
  lg: 0.25rem         # 4px  -> standard cards/buttons/inputs
  xl: 0.5rem          # 8px
  full: 9999px        # true pill / circle (was 0.75rem — a bug; fixed)
spacing:
  sidebar_width: 260px
  container_padding: 32px
  gutter: 24px
  stack_sm: 8px
  stack_md: 16px
  stack_lg: 24px
---

## Single Source of Truth

All design tokens live in **`/assets/tailwind-config.js`**, loaded by every page right after the Tailwind CDN script. Every page also loads **`/assets/app.css`** for the shared font imports and the page background. Do not re-inline a `tailwind.config` block into individual pages — change tokens in the one `.js` file and all pages update together. This document is the human-readable description of that config.

## Brand & Style

This design system is engineered for the "Closed Account" enterprise application, prioritizing high-legibility, clarity, and professional rigor. The target audience includes back-office staff and administrative professionals, often in the 40+ age demographic, requiring a UI that minimizes cognitive load and maximizes accessibility.

The aesthetic follows a **Corporate / Modern** movement, blending structural stability with clean, functional clarity. It utilizes a two-column layout with a persistent sidebar for effortless navigation and high-contrast data visualization to ensure accuracy in account management. The personality is authoritative, dependable, and efficient.

## Colors

The palette is anchored by a deep primary purple-blue, used for key actions and navigational focus.
- **Primary (`#3b39c2`):** The core brand blue. Used for the active sidebar item, links, icons, and the standard primary-button fill (`bg-primary`).
- **Primary Container (`#5555db`):** A lighter companion blue. Used for emphasis fills and hover/active treatments. NOTE: button fills currently vary between `primary` and `primary-container` across pages — standardize on one (see Components › Buttons).
- **Secondary / Tertiary:** Teal and Sage, used primarily for status indicators and success states.
- **Neutral:** A light gray canvas (`#F4F4F6`, set on `body` in `app.css`) provides separation between the white sidebar and the off-white (`#fcf8ff`) content surfaces.
- **Status tokens:** `status-pending` (teal), `status-completed` (green), `status-rejected` (red) each have a `-bg` and `-text` pair for accessible pills. These are now defined globally — use them on every page rather than hand-coding pill colors.
- **Accessibility:** All text-on-background combinations must meet WCAG AA standards.

## Typography

Using **Hanken Grotesk**, a sharp and contemporary sans-serif, we ensure readability across different optical sizes.
- **High Readability:** Minimum body size is 14px, with 16px preferred for primary data entry to accommodate older age groups.
- **Information Hierarchy:** Bold caps are used for metadata labels to distinguish them from user input.
- **Contrast:** High contrast between text (`#1b1b23`) and surface (`#ffffff`/`#fcf8ff`) is maintained throughout.

## Layout & Spacing

The system uses a **Fixed Sidebar / Fluid Content** grid.
- **Sidebar:** 260px width, off-white background, containing the logo and primary navigation.
- **Main Canvas:** Uses the `#F4F4F6` body background with white/off-white "Summary Cards" and "Form Containers" stacked vertically.
- **Grid:** A 12-column grid is utilized within the content area. Cards typically span 4 columns (Summary) or 12 columns (Tables/Forms).
- **Rhythm:** An 8px base unit controls all padding and margins (`stack_sm`/`stack_md`/`stack_lg`, `gutter`).

## Elevation & Depth

To maintain a professional and "flat" corporate feel, elevation is achieved through **Tonal Layers** rather than heavy shadows.
- **Level 0:** Body canvas (`#F4F4F6`).
- **Level 1:** Content Cards and Sidebar (`#fcf8ff` / `#ffffff`). No shadows, or a very subtle blur at low opacity to lift against the gray.
- **Interactive:** Buttons use a solid fill; secondary buttons use a 1px border.
- **Form Inputs:** Inset 1px border to define the entry field clearly without excessive depth.

## Shapes

The shape language is conservative and **Soft**.
- **Standard Elements:** Buttons, inputs, and cards use `rounded-lg` = **0.25rem (4px)**.
- **Subtle Elements:** `DEFAULT`/`rounded` = 0.125rem (2px); `xl` = 0.5rem (8px) for larger panels.
- **Pills & Avatars:** Status indicators and avatars use `rounded-full` = **9999px** (true pill / circle). (This was previously mis-set to 0.75rem, which rendered avatars as rounded squares; corrected.)
- **Checkboxes:** Square with a 2px radius for a traditional, reliable feel.

## Components

### Buttons
- **Primary:** Solid fill with white text, 48px height (`h-12`) for high click targets.
- **OPEN ITEM — fill color:** pages currently mix `bg-primary` (`#3b39c2`) and `bg-primary-container` (`#5555db`) for the main action button, sometimes within the same page. Pick one and apply it to every primary action. (Recommended: `bg-primary` `#3b39c2`, which the majority of action buttons and the active-nav state already use.)
- **Secondary:** Light fill or transparent with a 1px border.
- **Action (Table):** Small, outlined "View" buttons to keep rows compact.

### Cards & Tables
- **Summary Cards:** White/off-white background, `rounded-lg`, featuring large "Big Number" KPI displays.
- **Tables:** No outer border, horizontal dividers only. Header text is bold and uppercase.

### Forms & Inputs
- **Vertical Alignment:** Labels always sit above inputs to simplify the scanning path.
- **Input Fields:** 44px height, 1px light border, 16px internal padding.
- **Status Pills:** Use the `status-*` token pairs (e.g. `bg-status-pending-bg text-status-pending-text`). Fully rounded (`rounded-full`).

### Timeline
- **Workflow History:** Vertical line on the left with circular nodes. Completed nodes are solid Primary; future nodes are outlined. Timestamps sit to the right of the node label.

## Shared component styles (follow-up)

These rules currently appear inline on *some* pages only and differ between them — they should migrate into `app.css` so every page matches:
- `.sidebar-active` (active nav item) — definitions differ (background vs. border-right treatment).
- `.material-symbols-outlined` `font-variation-settings` — present on some pages, missing on others (icons render differently).
- `input:focus` / `textarea:focus` outline styling.
