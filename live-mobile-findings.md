# StudyLink live mobile findings

Date: 2026-08-22

The user reports that mobile navigation options do not respond. The Android Chrome menu screenshot shows the only installation entry as “Install and create shortcut”, not a standalone “Install app” action.

The public GitHub Pages site is https://bamwangafelix-afk.github.io/studylink/.

After the latest GitHub upload commit, an uncached fetch of the public `js/app.js` and `manifest.webmanifest` returned:
- `js/app.js` registration: `navigator.serviceWorker.register('sw-v4.js?v=studylink-pwa-4',{scope:'./'})`
- `disconnectBtn` binding and `doOut()` text present
- manifest `display`: `standalone`
- manifest `start_url`: `./?source=pwa`
- manifest `id`: `./`
- public `sw-v4.js` response status: 200

A browser registration inspection still showed an older active controller `sw.js?v=studylink-pwa-2`, indicating an installed/browser client may need site-data clearing or uninstall/reinstall before testing.

The latest public GitHub commit created through the owner-authenticated web upload was `9d3059f` with message “Add files via upload”.

External Android Chrome guidance checked 2026-08-22:
- Google Chrome Help, https://support.google.com/chrome/answer/9658361?hl=en&co=GENIE.Platform%3DAndroid, documents the path More → “Install and create shortcut” → “Install” for a web app. The same menu can offer “Create shortcut”, which is the browser shortcut path.
- Google Chrome Help, https://support.google.com/chrome/answer/15085120?hl=en&co=GENIE.Platform%3DAndroid, documents More → “Install and create shortcut” → “Create shortcut” for a website shortcut.
Conclusion: the screenshot’s “Install and create shortcut” label is not by itself proof of failure; the user must choose the subsequent “Install” option, not “Create shortcut”.

Live diagnostics:
- The public page was controlled by an older sw.js registration while the fetched current app.js contained sw-v4 registration.
- In the sandbox, the exact HTML app.js did not set __studylinkBooted until a cache-busted manual script load; this motivated bumping the HTML/app/manifest assets to pwa-5, adding defer, and adding explicit data-tab navigation bindings.
