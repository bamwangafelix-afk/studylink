# StudyLink pwa-7 presence release — live verification

Date: 2026-08-22
URL: https://bamwangafelix-afk.github.io/studylink/?verify=presence-pwa7-final

## Published asset checks

- Root shell serves `app-v7.js?v=studylink-pwa-7`.
- Stylesheet serves `css/styles.css?v=studylink-pwa-7`.
- Manifest serves `manifest.webmanifest?v=studylink-pwa-7`.
- The live shell contains both `#typebar` and `#gTypebar`.
- The live runtime contains the private presence listener, group presence listener, typing writes, and recording writes.
- The live stylesheet contains the private and group presence-bar rules.

## Service worker check

The first page inspection still showed the previously controlled `sw-v6.js`. A direct pwa-7 registration was then performed against the published `sw-v7.js?v=studylink-pwa-7`. After activation, the registration and controller both reported:

`https://bamwangafelix-afk.github.io/studylink/sw-v7.js?v=studylink-pwa-7`

The pwa-7 worker is now activated and controlling the page.

## Functional scope

Private and group chats now publish a shared Firestore `presence` state for `typing` and `recording`. The state is cleared on message send, voice send/cancel/failure, chat/group close, recorder reset, and logout cleanup. The UI displays a typing or recording message in the relevant presence bar when another participant is active.

## Remaining physical-device validation

A real two-account test remains useful: open the same private chat or group on two devices/accounts, type on one device, then start a voice recording. The other device should display the corresponding French/English presence message according to the current UI copy. Clear old Android PWA data or reopen the app once so the installed client obtains the pwa-7 worker.
