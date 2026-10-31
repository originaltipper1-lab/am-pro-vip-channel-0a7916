# Project architecture

This is a plain static HTML site with no framework, package manager, or build step. Netlify publishes the repository root, configured in netlify.toml.

- index.html: supplied AM PRO page, external font/icon stylesheets, Meta Pixel bootstrap, and social metadata.
- styles.css: mobile-first card, ambient gradients, countdown ring, CTA animations, responsive adjustments, and reduced-motion support.
- script.js: ten-second countdown, five-second popup, Telegram navigation, Lead tracking, focus restoration, and keyboard trapping.

Preserve the supplied visual design and marketing copy unless asked to change them. Keep Telegram URLs consistent between both anchors and the JavaScript constant. Manual navigation cancels the countdown to avoid duplicate Lead events. Closing the modal leaves the original countdown running. The modal background is inert while open. Keep hidden modal controls inaccessible to keyboard navigation.

Use semantic HTML, accessible control names, visible focus indicators, and reduced-motion overrides. No application data is stored. No build tooling or database is needed for the current page. Do not add an og:image; the hosting platform supplies the share image.
