# StudyLink pwa-24 live verification

Date: 2026-08-26

The owner-authenticated GitHub commits are visible on `main`:

- `b96e7ae` — mobile Statut category color fallbacks in `css/styles.css`.
- `a3e91fb` — corrected service-worker registration in `js/app-v20.js`.

Live URL checked: `https://bamwangafelix-afk.github.io/studylink/?pwa24=owner-final-2`

The live shell loads:

- `js/app-v20.js?v=studylink-pwa-24`
- `css/styles.css?v=studylink-pwa-24`
- `manifest.webmanifest?v=studylink-pwa-24`

Initial inspection found the verification browser still controlled by `sw-v23.js`. After unregistering the stale controller and reloading, the active service worker became:

`https://bamwangafelix-afk.github.io/studylink/sw-v24.js?v=studylink-pwa-24`

A no-cache fetch of the live runtime now reports only `pwa-24` references and the registration call uses the pwa-24 worker URL. The public login shell renders successfully. Physical authenticated mobile testing of each Statut category remains the final user-device validation step.
