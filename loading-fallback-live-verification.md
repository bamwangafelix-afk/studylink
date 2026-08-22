# StudyLink pwa-8 Loading fallback verification

Date: 2026-08-23

The public GitHub Pages build loads `js/app-v8.js?v=studylink-pwa-8`.

The loading overlay is hidden after startup (`#ov` is not visible), while the authentication panel is visible (`#auth` has opacity 1). This confirms the app no longer remains indefinitely on the Loading screen and correctly presents the logged-out state when no Firebase account is authenticated.

The navigation controls `#nfind` and `#nmsgs` are present and have `pointer-events: auto`. The private and group presence bars `#typebar` and `#gTypebar` are also present in the live shell. Account discovery and message lists remain authentication-dependent and require a successful Firebase login.

The corrected local and remote `js/app-v8.js` files have matching SHA-256 checksums. The runtime includes the bounded startup fallback and the pwa-8 cache-busting markers.
