# StudyLink Color Companion live verification

Date: 2026-08-26

The live GitHub Pages shell at `https://bamwangafelix-afk.github.io/studylink/?color-companion=final-20260826` loads:

- `js/app-v20.js?v=studylink-pwa-24`
- `css/styles.css?v=studylink-pwa-24`
- Statut Color Companion markup (`color-companion` present in the document)

The public shell is reachable and renders the StudyLink login screen. The runtime hook is not inline in the HTML because it is loaded from the external `app-v20.js` asset; the asset URL itself is the pwa-24 versioned runtime. Authenticated category-by-category interaction still requires the user’s Firebase session on a physical mobile device.

## Mobile comment visibility follow-up

- The corrected `js/app-v20.js` was committed to the owner’s `main` branch as commit `309fe84`.
- The runtime now adds `status-reply-companion-open` while the reply companion is active and removes it on close or blur.
- The CSS reserves the reply companion height plus the visual-viewport keyboard offset so typed comments remain visible above the Android keyboard.
- Local regression suite result: 34 tests passed, 0 failed.


## Mobile comment visibility release

The live page `https://bamwangafelix-afk.github.io/studylink/?comment-fix=20260826-final` is reachable and renders the pwa-24 StudyLink shell. The public view confirms the versioned StudyLink assets and login surface are available after the runtime and stylesheet commits.

## Publication-only scope verification

- Live URL checked: https://bamwangafelix-afk.github.io/studylink/?companion-scope=publication-only-20260826
- The live shell loads `js/app-v20.js?v=studylink-pwa-24` and `manifest.webmanifest?v=studylink-pwa-24`.
- The reply-page companion selector count is 0 in the live shell; the publication companion is created by the publication view at runtime rather than present in the initial login DOM.
- Current main-branch commits include `Keep Color Companion only on publication page` for CSS, `Hide Color Companion on status viewing pages` for runtime, and `Keep Color Companion on publication page` for HTML.
