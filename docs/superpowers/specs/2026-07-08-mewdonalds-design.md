# Spec: Mew Donalds ($mewdon) Landing Page Redesign

## Goal Description
Redesign the existing landing page template (originally for $DUIS) to support the **Mew Donalds ($mewdon)** meme coin on Solana. The design concept is a **Modern Digital Menu Board**, featuring a fast-food cooking cat theme ("Chef Mewdon").

---

## Visual Design System
*   **Primary Color (Red)**: Fast-food red (`#db0007`) for highlights, CTA buttons, and accent lines.
*   **Secondary Color (Yellow)**: Golden arches yellow (`#ffbc0d`) for text shadows, subheadings, and hover states.
*   **Background (Dark Charcoal)**: `#121212` or `#181818` for sections to replicate a backlit digital menu board.
*   **Accent Color (Cream/White)**: `#fcf8f2` / `#ffffff` for readability of body text.
*   **Typography**: Stopbuck font (already configured) for headers, fallback to system sans-serif.

---

## Asset Requirements

### Existing Assets (Available in `public/mewdonalds-assets/`)
*   `mewdons.jpeg`: Round logo coin badge containing Chef Mewdon. Will be copied/linked to `public/logo-coin.png` and used across the site.
*   `mewdon.png`: Wood background banner with Chef Mewdon badge, french fries, and menu sign. Used as the main visual banner in the Hero section.

### Requested Assets (To be generated or placeholder)
We will ask the user to generate these assets to make the theme fully consistent, or we can use clean styled CSS/placeholder fallbacks initially:
1.  `about-chef.png`: Chef Mewdon cooking in a fast-food kitchen (e.g., flipping a burger or holding a spatula).
2.  `burger.png`: A pixel/cartoon icon of a Cat Burger (Tokenomics LP).
3.  `fries.png`: A pixel/cartoon icon of Cat French Fries (Tokenomics Airdrop).
4.  `shake.png`: A pixel/cartoon icon of a Cat Milkshake (Tokenomics Marketing/Treasury).
5.  `soda.png`: A pixel/cartoon icon of a Cat Soda cup with straw (Tokenomics Locked LP/Team).

---

## Proposed Layout Structure

### 1. Navigation Header
*   Sticky bar with `bg-black/85 backdrop-blur-md` and a thin red border (`border-b border-[#db0007]`).
*   Left: Circle logo (`mewdons.jpeg`).
*   Center: Text links for *About*, *Menu*, *Drive-Thru*, *Order*.
*   Right: Red button with gold hover states: `"Order $MEWDON"` linking to DEX.

### 2. Hero Section
*   A large backlit signboard element containing the `mewdon.png` banner image.
*   A copyable "Receipt" widget containing the Contract Address (CA).
*   Flashing neon banner text: `"OPEN 24/7 ON SOLANA"`.

### 3. About Section (Our Kitchen Story)
*   Two-column grid:
    *   Left: `about-chef.png` image.
    *   Right: Humorous AI-written kitchen story about Chef Mewdon abandoning his human fast-food job for a decentralized franchise.
*   Bottom banner connecting the story to Solana.

### 4. Tokenomics (The Recipe Menu)
*   Layout styled like a triple LCD panel menu board.
*   Four combo cards:
    *   **Combo #1: LP Burger (85%)**: Bonding Curve liquidity.
    *   **Combo #2: Airdrop Fries (5%)**: Crispy community rewards.
    *   **Combo #3: Promo Shake (5%)**: Marketing and CEX treasury (Locked).
    *   **Combo #4: Security Soda (5%)**: Dev/Team locked tokens.

### 5. Roadmap (Drive-Thru Plan)
*   A vertical drive-thru lane timeline:
    *   **Fase 1: Opening the Kitchen** (Launch on pump.fun, Twitter shilling).
    *   **Fase 2: The Drive-Thru** (DexScreener verification, Meme contest, Trending).
    *   **Fase 3: Global Franchise** (Employee handbook, Community raids).
    *   **Goal**: Establish $MEWDON as the currency for hungry internet cats.

### 6. How To Buy (Ordering Process)
*   4-step card layout styled like ordering at the counter:
    1.  *Get a Tray*: Download Phantom wallet.
    2.  *Load up Cash*: Get Solana ($SOL) in your wallet.
    3.  *Swap at Cashier*: Swap $SOL for $MEWDON (0% tax).
    4.  *Grab your Meal*: Collect your $MEWDON tokens!

---

## File Modifications Plan

### Tailwind Config & Styles
*   `tailwind.config.js`: Extend colors with `mewdon-red: '#db0007'` and `mewdon-yellow: '#ffbc0d'`.
*   `app/globals.css`: Update `.text-shadow-duis` and text-shadow rules to use Mewdon's red and yellow theme.

### Component Code
*   `app/(landing)/page.js`: Update the layout flow to follow navigation.
*   `app/(landing)/_components/Nav.js`: Replace $DUIS references, adjust navbar styling.
*   `app/(landing)/_components/Hero.js`: Update visual layout to frame `mewdon.png` as a signboard.
*   `app/(landing)/_components/About.js`: Update story text and replace the dog image path.
*   `app/(landing)/_components/Tokenomics.js`: Update cards structure and pass new tokenomics icons.
*   `app/(landing)/_components/HowToBuy.js`: Update text references from $DUIS to $MEWDON.
*   `components/Card.js` / `components/OrderCard.js`: Adjust border, shadow, and text colors to red/yellow/black.
*   `constants/index.js`: Keep address as placeholder for now.
