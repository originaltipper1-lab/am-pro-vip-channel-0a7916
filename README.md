# AM PRO VIP Channel

A static, mobile-friendly landing page for the AM PRO Telegram VIP channel. It preserves the supplied neon design, a ten-second automatic redirect, an invitation popup at five seconds, and Meta Pixel PageView and Lead events.

Built with plain HTML, CSS, and JavaScript. No dependencies or build step are required. Netlify publishes the project root.

To view locally, serve this directory with a static HTTP server, such as `python3 -m http.server 8080`, and open http://localhost:8080. The countdown redirects to Telegram after ten seconds.

`index.html` contains the page and social metadata, `styles.css` contains its responsive presentation, and `script.js` handles the countdown, modal accessibility, navigation, and tracking. Update both HTML invitation links and `TELEGRAM_URL` in JavaScript together if the destination changes. Tracking requires access to Meta's external scripts; fonts and icons use Google Fonts and cdnjs.
