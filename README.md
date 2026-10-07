# FORGE Web Studio

Static multilingual website for a web studio, for clients from any country and any industry. No npm install, build step, recurring software dependency, or paid service is required to run the files.

## Languages
The header selector supports English, Russian, German, Dutch, Finnish, Simplified Chinese, French, Italian, Spanish and Portuguese. Translations live in `translations.js`; `i18n.js` updates the page, metadata and accessibility labels. The privacy page and runtime form messages are also translated. Proper names and screenshots remain original.

Initial language priority: a supported `?lang=` parameter, saved preference, browser language, then English. Only the language preference is saved in local storage; form entries are not. Switching languages preserves the entered brief and any already-prepared message. New messages use the selected language; the visitor's own text is never automatically translated. Canonical service values stay stable across languages. No translation API or network service is used.

## Preview
Serve this directory with any static HTTP server. Open `index.html`. Plain HTML, self-hosted fonts, CSS and JavaScript; no framework.

## Written enquiries
Set a public email address or Telegram username in `config.js`. The form prepares a message locally. An email destination creates a mail draft; Telegram opens a chat after the visitor copies the message. The visitor sends the message. There is no backend or fake submission confirmation.

Until a contact is configured, the page explicitly reports preview mode and offers a copyable brief. No call booking or price is shown. Prices, scope and schedule are discussed in writing.

## Content truth
3 years and 50+ delivered projects were explicitly confirmed by the owner. Cheapassbikes, Utica Creative Reuse, Social Fabric and The James Brand are owner-supplied real cases. Descriptions do not invent a specific project role or measured results. Northline is labelled as an illustrative design concept; it is not a client or testimonial. FORGE is a working name, with trademark/domain checks not performed.

## Before publishing
Replace the working name if needed, complete operator details in the privacy notice, and update `robots.txt`. The site is published with GitHub Pages from `main` at https://prodetine.github.io/SITEDEMO/. Third-party commercial terms and timelines are agreed per project.

## Repository
Source repository: https://github.com/prodetine/SITEDEMO. Its previous website was replaced with FORGE at the owner's request; earlier versions remain in Git history.

## Assets
Switzer inherited from the reference project and distributed by Fontshare under its font licence. Inter Variable is self-hosted from https://rsms.me/inter/font-files/InterVariable.woff2 and includes Cyrillic; its OFL licence is included. Chinese uses the device's available Chinese fonts. Portfolio images are screenshots of the four public websites supplied by the owner; source URLs and capture information are stored alongside them. Northline’s preview is live HTML/CSS geometry, not third-party photography.
