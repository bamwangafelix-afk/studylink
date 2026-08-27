# StudyLink Maintenance TODO

- [x] Refresh PWA cache/version identifiers to deliver the latest Android recorder safeguards
- [x] Audit private and group recorder lifecycle, pointer gestures, and microphone-track recovery
- [x] Update regression coverage for the refreshed PWA version and recorder safeguards
- [x] Run automated tests and inspect the live shell, manifest, and service worker
- [x] Save the validated StudyLink checkpoint and report physical Android retest steps; all automated regression checks pass successfully
- [x] Reconcile the GitHub publishing session with the bamwangafelix-afk owner account
- [x] Verify installed PWA recorder behavior and session configuration
- [x] Fix the Me-page Disconnect button so it signs out reliably and returns to login
- [x] Add regression coverage for the Disconnect action
- [x] Validate the fix in the browser and publish when repository access is available
- [x] Reproduce the intermittent Disconnect failure and trace the complete click/auth/UI path
- [x] Replace the Disconnect flow with deterministic sign-out and reset behavior
- [x] Add or strengthen regression coverage for repeated Disconnect clicks and auth-state reset
- [x] Validate the second fix against the live GitHub Pages build
- [x] Update the live service-worker cache name from `studylink-shell-v2` to `studylink-shell-v3` so installed clients evict the stale bundle
- [x] Recheck public manifest propagation after the service-worker cache invalidation
- [x] Make StudyLink meet Android standalone-install criteria instead of falling back to a shortcut
- [x] Trace why Disconnect still fails in the installed/live app and make sign-out deterministic
- [x] Add regression coverage for standalone PWA metadata and Disconnect execution
- [x] Validate the installed-app flow and publish the final release
- [x] Publish the repository manifest and service worker on pwa-4; raw GitHub still serves pwa-3 and v3 cache content
- [x] Move the pwa-4 service worker to a new filename so GitHub Pages and installed clients cannot retain the stale `sw.js` response
- [x] Verify the new worker controls the installed app and the Disconnect handler is served from the matching pwa-4 bundle
- [x] Fix mobile navigation menus that do not respond and make Android Chrome expose a proper standalone installation action instead of “Install and create shortcut”.
- [x] Add regression coverage for mobile menu event wiring and the updated PWA install criteria.
- [x] Publish and verify the corrected mobile build on GitHub Pages.
- [x] Restore the previous login-page background visual without regressing the working Disconnect and mobile navigation flows.
- [x] Slightly enlarge the StudyLink wordmark beside the top-bar icon and verify responsive layout.
- [x] Run regression and responsive visual checks, then publish the visual refinement.
- [x] Make the Android install path use the in-app PWA prompt clearly and explain the native Chrome fallback without creating a plain shortcut.
- [x] Enlarge the StudyLink top-bar wordmark again while preserving mobile layout.
- [x] Add regression coverage for the strengthened install prompt and new wordmark size.
- [x] Publish and verify the Android installation refinement on GitHub Pages.
- [x] Create a lighter login-background preview with a pale blue-gray base and subtle StudyLink logo watermark while preserving the current design as the rollback reference.
- [x] Verify the preview visually and with the existing regression suite before publishing it.

- [x] Add a unified real-time presence state for private-chat typing and voice recording.
- [x] Add real-time typing and voice-recording indicators for group chats with cleanup on send, cancel, close, and disconnect.
- [x] Add regression coverage for private and group presence writes, listeners, and cleanup behavior.
- [x] Publish and verify the presence-indicator update on the live StudyLink build.
- [x] Correct the GitHub upload workflow so all pwa-7 root, js, css, and test files are actually committed and served by GitHub Pages.

- [x] Diagnose and fix blocked navigation menus in the published StudyLink build.
- [x] Diagnose and fix missing account discovery/user-list loading in the Messages page.
- [x] Verify that private/group typing and recording indicators remain integrated in the Messages page after the fix.
- [x] Advance the PWA asset version so installed and cached clients receive the corrected runtime instead of stale pwa-7 JavaScript.
- [x] Fix the Android startup path that remains indefinitely on Loading and restore a clear authenticated or logged-out state.
- [x] Make private and group typing/recording presence reliable in the open conversation and visible in the Messages user list.
- [x] Replace icon-based presence copy with professional name-only status text and add regression coverage for both display surfaces.
- [x] Advance the PWA release from pwa-8 to pwa-9 so cached clients receive the new list-level presence renderer.
- [x] Synchronize the pwa-9 shell, runtime, service worker, stylesheet, and regression suite to the bamwangafelix-afk/studylink main branch.
- [x] Verify GitHub Pages serves the pwa-9 shell and assets and that the startup overlay is hidden on the logged-out live view.
- [ ] Perform a physical two-account validation of typing and recording labels in the Messages list and open private/group chats.
- [x] Diagnose why the published pwa-9 presence indicators are not visible or updating for the user.
- [x] Replace the StudyLink login background with the supplied repeated SL-logo pattern and version the asset for cache eviction.
- [x] Add or strengthen regression coverage for the corrected presence behavior and login background.
- [x] Publish and verify the corrected release on GitHub Pages.
- [x] Correct the live pwa-10 asset path mismatch: `js/app-v10.js` and the login-pattern image currently return 404 from GitHub Pages.
- [x] Re-verify that the published shell, runtime, stylesheet, image, and service worker all return HTTP 200 before final user testing.
- [x] Trace and fix one-way typing presence so both accounts publish and receive the status symmetrically.
- [x] Repair `is recording...` presence updates for private and group conversations, including cleanup on stop, send, cancel, and failure.
- [x] Prepare a Vector-style login background preview while retaining the current SL-pattern asset as rollback reference.
- [ ] Add regression coverage, publish the corrected release, and verify the two-account flow.
- [x] Migrate stale pwa-9/pwa-10 service-worker controllers to pwa-12 so the repaired runtime cannot remain hidden behind old cached code.
- [x] Strengthen presence heartbeat and recorder start/stop cleanup for symmetric private and group updates.
- [x] Publish pwa-12 and verify the Vector login background plus asset and runtime responses.
- [x] Compare the supplied white and dark SL-logo backgrounds, choose the more professional option, replace the current Vector login background, and publish a cache-busted visual update.
- [ ] Replace the pwa-13 dark patterned login background with the supplied full STUDYLINK artwork (`1000337905.png`).
- [ ] Preserve the previous dark patterned background as a rollback asset and version the PWA cache for the new artwork.
- [ ] Run regression/live checks and publish the new login background to GitHub Pages.
- [ ] Replace the pwa-14 login background with the user-selected second artwork `login_mockup_recolored2.png` and republish the verified release.

## pwa-24 Statut category-color release

- [x] Apply category-aware colors to the Statut text, voice, and send controls; keep photo-only publication gray.
- [x] Add regression coverage for all six category colors and the photo-only fallback.
- [x] Diagnose the live mismatch: `index.html` referenced pwa-24 while the loaded `js/app-v20.js` still registered pwa-23.
- [x] Publish the pwa-24 service-worker registration in the actual `js/` runtime path used by GitHub Pages.
- [ ] Complete physical mobile validation of every Statut category and photo-only mode on the user’s device.
- [ ] If an installed app remains gray, clear its site data or uninstall/reinstall the old PWA before retesting.

**Note:** The two remaining items require the user’s physical device/session; automated source, asset, and public-shell checks are covered separately.

- [x] Add a category-synchronized Color Companion toolbar anchored above the real mobile keyboard for Statut text entry.
- [x] Keep Color Companion gray for photo-only Statut publication and preserve the existing text/voice smart composer behavior.
- [x] Add regression coverage and mobile visual verification for the Color Companion interactions.

- [x] Fix the Statut comment field being covered or visually hidden when the Android keyboard and Color Companion open.
- [x] Preserve the selected category color and quick publish/send behavior after the mobile comment-layout fix.
- [x] Add regression coverage for visible comment text and keyboard-safe viewport positioning.

- [x] Show the Color Companion only on the Statut publication page where quick publishing is available.
- [x] Hide the Color Companion from Statut viewing and commenting pages while preserving the normal comment composer and voice reply controls.
- [x] Add regression coverage for publication-only companion visibility and verify the mobile flows.

- [x] Compare the user-provided index.html with the current StudyLink index and preserve all features added today.
- [x] Merge any missing StudyLink functionality into the replacement index.html and validate the result.
- [x] Upload studylink-header-logo.png into the repository icons/ directory and verify the live shell references it where appropriate.

- [x] Align the supplied StudyLink header logo and wordmark vertically on mobile without changing their intended size or other features.
- [x] Run regression and mobile visual checks for the header alignment refinement.

- [x] Recheck the live mobile header because the previous logo-wordmark alignment change was not visibly reflected.
- [x] Apply and publish a stronger, selector-specific vertical alignment fix for the header logo and StudyLink wordmark.
- [x] Verify the final rendered header on mobile after cache invalidation.

- [ ] Reduce the header logo slightly and frame it in a clean circular badge on mobile.
- [ ] Lower the StudyLink wordmark and align it with the circular logo centerline without changing header actions.
- [ ] Run regression and mobile visual checks for the refined circular header treatment.

- [ ] Keep the StudyLink header logo large in the circular left badge instead of reducing it.
- [ ] Re-align the wordmark against the larger circular logo and re-run mobile regression checks.

- [x] Restore the exact user-provided StudyLink logo instead of the alternate cropped header asset.
- [x] Enlarge the left circular badge and use contain-style fitting so the complete logo remains visible with balanced inner spacing.
- [x] Run regression and visual checks for the uncropped large logo before publishing.

- [ ] Replace the current StudyLink header logo with the exact black version provided by the user, preserving the full uncropped artwork and existing circular badge layout.
- [x] Publish and verify the black-logo header update without regressing the publication-only Color Companion.

- [x] Preserve the exact blue-and-green StudyLink mark while changing the logo image background from white to black so it matches the circular header badge.

- [x] Use the user-provided blue-green `1000351475.png` artwork as the StudyLink installed app icon.
- [x] Update PWA icon assets, manifest metadata, and cache version, then publish and verify the new home-screen icon without regressing the Color Companion.

- [x] Update static StudyLink regression expectations from pwa-24 to pwa-26 after the new app-icon release, then rerun the suite.
