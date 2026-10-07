---
name: FORGE Web Studio
description: Confident navy and gold website studio with heavyweight typography and precise flat surfaces.
colors:
  primary: "#efba4d"
  amber: "#4a3718"
  amber-hover: "#69501f"
  bg: "#070e17"
  band: "#0b1420"
  surface: "#111b28"
  text: "#f5f3ec"
  muted: "#b7c0ce"
  line: "#293442"
  button-text: "#ffffff"
typography:
  display:
    fontFamily: "Switzer, Inter, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Switzer, Inter, sans-serif"
    fontSize: "clamp(2rem, 3.7vw, 3.3rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Switzer, Inter, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "17px"
    lineHeight: 1.7
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "12px"
    fontWeight: 550
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    lineHeight: 1.4
rounded:
  control: "3px"
  form: "4px"
  specimen: "5px"
spacing:
  compact-gap: "18px"
  panel-mobile: "28px"
  form-padding: "30px"
  panel-padding: "40px"
  section-mobile: "70px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.button-text}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "19px 29px"
    height: "64px"
  button-primary-hover:
    backgroundColor: "{colors.amber-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
    padding: "10px 15px"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "12px 13px"
  card:
    backgroundColor: "{colors.surface}"
    padding: "40px"
---

# Design System: FORGE Web Studio

## Overview

**Creative North Star: "The Gold Standard Workshop"**

A dark, confident studio identity built from heavy uppercase statements, warm gold emphasis and restrained navy layers. The established visual direction adapts the user's banipremium and TRW references to FORGE's own website services.

Generous section spacing lets assertive headlines lead; compact supporting text and thin rules keep the long page orderly. Components feel firm and precise, with small corners and little decorative depth.

**Key Characteristics:**

- Deep navy fields with warm gold signals.
- Heavy uppercase display type with readable Inter copy.
- Flat surfaces, thin dividers and small corners.
- Consistent inline SVG arrows and visible keyboard focus.

## Colors

Gold supplies emphasis against a cool navy neutral range. Frontmatter records normative values.

### Primary

- **Workshop Gold:** actions, highlighted phrases, numbers, selected controls and focus outlines.
- **Burnished Amber:** filled primary buttons; its lighter hover shade makes interaction visible.

### Neutral

- **Midnight Navy:** page and field backgrounds.
- **Deep Navy Band:** alternating section fields.
- **Slate Navy Surface:** form, statement and project containers.
- **Warm Chalk:** primary reading and heading text; button labels use white.
- **Mist Slate:** supporting copy and secondary navigation.
- **Slate Rule:** boundaries and dividers.

**The Gold Signal Rule.** Reserve gold for emphasis and action; retain navy as the dominant field.

## Typography

**Display Font:** Switzer (with Inter and sans-serif fallbacks).
**Body Font:** Inter (with sans-serif fallback).

Switzer supplies dense, weighty uppercase headlines with tight tracking. Inter carries sentence-case explanations, navigation and fields. Display, headline and title primitives are defined in frontmatter; service titles and project titles have local size adjustments.

At the mobile breakpoint, display type becomes `clamp(30px, 7.2vw, 49px)` with (1.07) line height, and headlines become `clamp(28px, 6.5vw, 40px)`. Body copy in individual components ranges from (12px) utility text to (20px) emphasized copy. FAQ answers cap at (65ch).

**The Two Voices Rule.** Use heavy uppercase Switzer for statements and readable Inter for explanations. The embedded architecture concept has its own Georgia identity and does not redefine the studio type system.

## Layout

The main container caps at (1160px), with (32px) gutters on each side. At (760px) and below, gutters become (20px), sections use the mobile spacing primitive, and split sections, project features and three-column process layouts stack. The intermediate (1000px) breakpoint tightens gaps and hides the header CTA. Hero top spacing increases at (1600px).

Desktop split layouts use unequal columns and generous gaps, commonly (85px). Services use ruled rows rather than isolated cards. The proof strip retains three columns on mobile. The inline browser concept switches between desktop and phone layouts; its frame caps at (940px) and the phone width becomes (310px), or up to (280px) on mobile.

## Elevation & Depth

The studio interface is flat. Navy tonal shifts and fine rules distinguish sections and containers; the final browser frame has no shadow. A soft shadow inside the architecture illustration belongs to that concept's drawn buildings, not the studio component vocabulary. Hero arrival uses a short upward movement and blur; primary buttons rise slightly on hover. Reduced-motion preferences disable animations and transitions and restore automatic scrolling.

**The Flat Surface Rule.** Use tonal layering and borders for studio containers; keep illustrative depth local to the embedded concept.

## Shapes

Panels are predominantly rectangular. Controls have slight corners, the form is subtly softer, and the browser frame clips to its small radius, using the frontmatter primitives. Thin slate borders organize content; primary buttons use a stronger (2px) gold stroke. Arrow icons share inline SVG strokes with rounded caps and joins.

## Components

### Buttons

Firm, compact rectangles with bold labels. Primary buttons combine amber fill, white text and gold outline, using the frontmatter padding and radius. Hover lightens the fill and translates upward (2px) over (0.2s); active restores position. Disabled buttons lower opacity to (0.6). Mobile buttons have a (58px) minimum height and (17px 19px) padding. Secondary actions use transparent fill, gold text and a thin warm border.

### Cards / Containers

Flat navy panels with restrained borders. Statement panels use a warm top rule; comparison panels use slate or warm gold outlines. Project features join image and copy without rounding or shadows. The project title precedes its real-project metadata. Panel padding generally falls between (28px) and (40px).

### Inputs / Fields

Dark inset fields use a muted slate stroke (`#465365`), Inter at (14px), and the control primitive. Textareas resize vertically. Every keyboard-focusable control uses a (3px) gold outline with (5px) offset. Native validation remains visible; no separate custom error style is established.

### Navigation

Desktop navigation uses Inter at (13px), weight (600), with gold hover. Mobile navigation expands as a full-width vertical list beneath the brand through a bordered menu toggle. A fixed mobile CTA provides access to the brief; a skip link becomes visible on focus.

### Device Switch

Two small outlined buttons indicate desktop or phone mode using `aria-pressed`. Selected state adds gold text, a warm border and dark amber fill. The final frame changes width without animated resizing.

## Do's and Don'ts

### Do:

- **Do** preserve the navy/gold hierarchy and uppercase display voice.
- **Do** use consistent inline SVG arrows for action cues.
- **Do** keep keyboard focus visible and honor reduced motion.
- **Do** place project metadata beneath its title.

### Don't:

- **Don't** promote the embedded architecture concept's palette or serif typography into studio primitives.
- **Don't** add general container shadows to this flat system.
- **Don't** replace SVG action arrows with text glyphs.
