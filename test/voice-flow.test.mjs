import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const source = await readFile(new URL('../js/app-v20.js', import.meta.url), 'utf8');
const loginArtwork = await readFile(new URL('../icons/studylink-login-full-logo.png', import.meta.url));
const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');

test('records the actual MediaRecorder MIME type in the uploaded filename', () => {
  assert.match(source, /function voiceFileFromChunks\(chunks\)/);
  assert.match(source, /rawMime=chunks\.find\(c=>c\?\.type\)\?\.type\|\|'audio\/webm'/);
  assert.match(source, /return new File\(\[new Blob\(chunks/);
});

test('uses a multi-stage fallback (Firebase Storage + Inline) when Cloudinary fails', () => {
  assert.match(source, /function uploadVoiceToFirebase\(file\)/);
  assert.match(source, /storage:'firebase-storage'/);
  assert.match(source, /storage:'firestore-inline'/);
  assert.match(source, /failure=\[uploadCloud\.lastError,voiceFallbackError\]/);
});

test('covers Android touchstart and pointer haptic paths', () => {
  assert.match(source, /btn\.addEventListener\('touchstart'/);
  assert.match(source, /btn\.addEventListener\('pointerdown'/);
  assert.match(source, /navigator\.vibrate\(normalized\)/);
  assert.match(source, /let lastHapticAt=0/);
});

test('registers MediaRecorder error handlers for private and group voice', () => {
  assert.equal((source.match(/recorder error:/g) || []).length, 3);
  assert.match(source, /mr\.onerror=/);
  assert.match(source, /gmr\.onerror=/);
  assert.match(source, /stmr\.onerror=/);
});

test('does not stop a recorder before the Android startup window has elapsed', () => {
  assert.match(source, /const elapsed=Date\.now\(\)-\(vStartAt\|\|Date\.now\(\)\)/);
  assert.match(source, /if\(elapsed<350\)await new Promise/);
  assert.match(source, /Queue the lock even if getUserMedia is still pending/);
});

test('clears pending startup state after microphone permission or recorder failure', () => {
  assert.match(source, /classList\.remove\('voice-pending','rec','voice-locked'\)/);
  assert.match(source, /if\(!btn\.classList\.contains\('rec'\)\)\{resetState\(\);return;\}/);
});

test('uses large explicit non-submit microphone controls', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /<button type="button" class="cin-action" id="sendB"/);
  assert.match(html, /<button type="button" class="cin-action" id="gSendB"/);
  assert.match(html, /<script defer src="js\/app-v20\.js\?v=studylink-pwa-29"><\/script>/);
  assert.match(html, /<link rel="stylesheet" href="css\/styles\.css\?v=studylink-pwa-29">/);
  assert.match(css, /\.cin-action\{[^}]*width:50px;height:50px;min-width:50px/);
});

test('uses the conversation-style smart composer for Statut text and voice replies', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /id="stVReplyInput"[^>]*oninput="onStatusReplyInput\(\)"/);
  assert.match(html, /class="cin-action stVReplyBtn" id="stVReplyBtn"/);
  assert.match(html, /id="stVReplyBar"/);
  assert.match(source, /function onStatusReplyInput\(\)/);
  assert.match(source, /function smartStatusReply\(\)/);
  assert.match(source, /if\(stIsRec\)\{stopAndSendStatusVoice\(\);return;\}/);
  assert.match(source, /if\(el\('stVReplyInput'\)\?\.value\.trim\(\)\)\{sendStatusReply\(\);return;\}/);
  assert.match(source, /function startStatusVoice\(fromGesture=false\)/);
  assert.match(source, /function stopAndSendStatusVoice\(\)/);
  assert.match(source, /setupVoiceSwipe\('stVReplyBtn',startStatusVoice,stopAndSendStatusVoice,cancelStatusVoice\)/);
  assert.match(css, /#statusView \.stVReplyBtn\.rec\{background:var\(--status-accent\)/);
  assert.doesNotMatch(source, /stVReplyBtn[^\n]*style\.background='(?:#1976d2|rgba\(255,255,255,\.18\))'/);
});

test('keeps hardware back navigation inside open StudyLink overlays', () => {
  assert.match(source, /let slModalOpen=false;/);
  assert.match(source, /function pushModalState\(\)/);
  assert.match(source, /history\.pushState\(\{slModal:true\},document\.title\)/);
  assert.match(source, /function consumeModalState\(\)/);
  assert.match(source, /window\.addEventListener\('popstate'/);
  assert.match(source, /function closeTopModal\(\)/);
  assert.match(source, /pushModalState\(\);/);
  assert.match(source, /consumeModalState\(\);/);
});

test('opens the selected profile from the Statut viewer and preserves modal history', () => {
  assert.match(source, /function viewStatusProfile\(\)[\s\S]*closeStatusView\(true\)[\s\S]*openProfile\(uid\)/);
  assert.match(source, /function closeStatusView\(preserveHistory=false\)/);
  assert.match(source, /function openProfile\(uid\)[\s\S]*pushModalState\(\)/);
});

test('merges the user branch language switch without regressing pwa-29 Statut controls', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id="langBtn"[^>]*onclick="toggleLang\(\)"/);
  assert.match(html, /data-i18n="st_new_title"/);
  assert.match(html, /data-i18n="st_category_label"/);
  assert.match(html, /data-i18n-ph="st_reply_placeholder"/);
  assert.match(html, /id="stColorCompanion"/);
  assert.match(html, /id="stVReplyInput"[^>]*oninput="onStatusReplyInput\(\)"/);
  assert.match(source, /const I18N=\{/);
  assert.match(source, /let appLang=localStorage\.getItem\('appLang'\)\|\|'fr'/);
  assert.match(source, /function toggleLang\(\)/);
  assert.match(source, /function applyTranslations\(\)/);
  assert.match(source, /function catLabel\(key\)/);
  assert.match(source, /const workerUrl=new URL\('sw-v29\.js\?v=studylink-pwa-29'/);
  assert.match(source, /function smartStatusReply\(\)/);
  assert.match(source, /function startStatusVoice\(fromGesture=false\)/);
});

test('does not require a reload after microphone permission is granted', () => {
  assert.match(source, /function getVoiceStream\(\)/);
  assert.match(source, /Microphone bloqué\. Ouvrez le cadenas de Chrome, choisissez Autoriser, puis revenez ici\./);
  assert.doesNotMatch(source, /Allow Mic → Reload/);
});

test('protects an active mobile recording from accidental navigation and screen sleep', () => {
  assert.match(source, /if\(isRec\|\|gIsRec\|\|stIsRec\)\{e\.preventDefault\(\);e\.returnValue='';\}/);
  assert.match(source, /navigator\.wakeLock\?\.request/);
  assert.match(source, /\(isRec\|\|gIsRec\|\|stIsRec\)\)void keepVoiceScreenOn\(\)/);
  assert.match(source, /void keepVoiceScreenOn\(\)/);
  assert.match(source, /document\.activeElement\?\.id===inputId/);
});

test('uses elapsed wall-clock time instead of an accelerating interval counter', () => {
  assert.match(source, /const refreshVoiceTimer=\(\)=>\{vSec=Math\.max\(0,Math\.floor\(\(Date\.now\(\)-vStartAt\)\/1000\)\)/);
  assert.match(source, /const refreshGroupVoiceTimer=\(\)=>\{gvSec=Math\.max\(0,Math\.floor\(\(Date\.now\(\)-gVStartAt\)\/1000\)\)/);
  assert.match(source, /setInterval\(refreshVoiceTimer,250\)/);
  assert.match(source, /setInterval\(refreshGroupVoiceTimer,250\)/);
});

test('allows a new recording after finalization without overlapping recorder state', () => {
  assert.match(source, /vFinalizing=false/);
  assert.match(source, /if\(vFinalizing\|\|isRec\)return;/);
  assert.match(source, /vCh=\[\];vSec=0;mr=null;vStartAt=0;vFinalizing=false;/);
  assert.match(source, /gVFinalizing=false/);
  assert.match(source, /if\(gVFinalizing\|\|gIsRec\)return;/);
  assert.match(source, /gvCh=\[\];gvSec=0;gmr=null;gVStartAt=0;gVFinalizing=false;/);
});

test('stops other audio players and clamps seek positions', () => {
  assert.match(source, /function stopOtherVoicePlayers\(exceptId\)/);
  assert.match(source, /stopOtherVoicePlayers\(id\)/);
  assert.match(source, /const ratio=Math\.max\(0,Math\.min\(1,/);
  assert.match(source, /try\{player\.pause\(\);\}/);
});

test('uses one shared audio player and reads voice URLs from safe data attributes', () => {
  assert.match(source, /let voicePlayer=null,voicePlayerId=null,voicePlayerToken=0/);
  assert.match(source, /data-voice-src="\$\{esc\(m\.data\)\}" onclick="toggleVP\('\$\{m\.id\}'\)"/);
  assert.match(source, /btn\?\.dataset\?\.voiceSrc\|\|bubble\?\.dataset\?\.voiceSrc/);
  assert.match(source, /function resetVoicePlayer\(\)/);
  assert.match(source, /player\.removeAttribute\('src'\);player\.load\(\)/);
});

test('isolates playback failures and stale callbacks', () => {
  assert.match(source, /voicePlayerToken\+\+/);
  assert.match(source, /if\(token!==voicePlayerToken\)return/);
  assert.match(source, /Lecture impossible\. Appuyez de nouveau sur lecture/);
  assert.match(source, /a\.onerror=/);
});

test('keeps the group microphone orange in every state while private chat stays blue', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /id="gSendB"[^>]*background:#e67e22/);
  assert.equal((source.match(/gSendB'\)\.style\.background='#e67e22'/g) || []).length, 3);
  assert.match(css, /#gSendB,#gSendB\.voice-pending,#gSendB\.rec,#gSendB\.voice-locked\{background:#e67e22;\}/);
  assert.match(css, /\.cin-action\{background:var\(--btnB\)/);
  assert.match(css, /\.cin-action\.rec\{background:#1976d2/);
});

test('keeps the group recording strip and voice player orange while private voice stays blue', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /id="gvbar"[^>]*background:linear-gradient\(90deg,#fff3e0,#fffaf5\);border-top:1px solid #e67e22/);
  assert.match(html, /id="gvbar"[\s\S]*color:#e67e22/);
  assert.match(css, /#gvbar\{background:linear-gradient\(90deg,#fff3e0,#fffaf5\);border-top-color:#e67e22;\}/);
  assert.match(source, /drawBars\('gvWave',\(\)=>gIsRec,'#e67e22'\)/);
  assert.match(source, /const vBlue='#2196f3',vOrange='#e67e22'/);
  assert.match(source, /const vAccent=isGrp\?vOrange:vBlue/);
  assert.match(source, /const vBubbleBg=isGrp\?\(self\?'linear-gradient\(135deg,#e67e22,#f39c12\)'/);
  assert.match(source, /const audioAccent=isGrp\?'#e67e22':'#2196f3'/);
});

test('adds and removes the group REC pulse animation during active recording', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id="gRecIndicator"[^>]*class="recPulse"|id="gRecIndicator"/);
  assert.match(source, /gRecIndicator/);
  assert.match(source, /recPulse/);
});

test('recovers cleanly if Android ends the microphone track or MediaRecorder fails', () => {
  assert.match(source, /function resetRecorderUi\(kind\)/);
  assert.match(source, /function bindRecorderSafety\(stream,kind\)/);
  assert.match(source, /track\.addEventListener\('ended'/);
  assert.match(source, /resetRecorderUi\(kind\)/);
  assert.match(source, /resetRecorderUi\('private'\)/);
  assert.match(source, /resetRecorderUi\('group'\)/);
});

test('uses the selected second StudyLink login artwork at the expected mobile dimensions', () => {
  assert.equal(loginArtwork.readUInt32BE(16), 1440);
  assert.equal(loginArtwork.readUInt32BE(20), 2560);
  assert.equal(createHash('sha256').update(loginArtwork).digest('hex'), 'aad058591f0bc737c0d7317cd59229b115cae49b4ad8ecbcb42cbe54e1ab6983');
});

test('ships an installable PWA shell with the supplied StudyLink icon', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const manifest = await readFile(new URL('../manifest.webmanifest', import.meta.url), 'utf8');
  const worker = await readFile(new URL('../sw-v29.js', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /rel="manifest" href="manifest\.webmanifest\?v=studylink-pwa-29"/);
  assert.match(html, /icons\/studylink-192\.png\?v=studylink-pwa-29/);
  assert.match(html, /id="installBanner"/);
  assert.match(html, /meta name="mobile-web-app-capable" content="yes"/);
  assert.match(html, /meta name="apple-mobile-web-app-capable" content="yes"/);
  assert.match(html, /id="disconnectBtn"/);
  assert.doesNotMatch(html, /onclick="doOut\(\)"/);
  assert.match(source, /const workerUrl=new URL\('sw-v29\.js\?v=studylink-pwa-29',location\.href\)\.href/);
  assert.match(source, /beforeinstallprompt/);
  assert.match(source, /appinstalled/);
  assert.match(source, /updateViaCache:'none'/);
  assert.match(source, /display-mode: standalone/);
  assert.match(manifest, /"id": "https:\/\/bamwangafelix-afk\.github\.io\/studylink\//);
  assert.match(manifest, /"display": "standalone"/);
  assert.match(manifest, /"display_override": \["standalone", "minimal-ui"\]/);
  assert.match(manifest, /"prefer_related_applications": false/);
  assert.match(worker, /studylink-shell-v29/);
  assert.match(manifest, /"start_url": "\.\/\?source=pwa-29"/);
  assert.match(manifest, /studylink-512\.png\?v=studylink-pwa-29/);
  assert.match(worker, /self\.addEventListener\('fetch'/);
  assert.doesNotMatch(html, /data:image\/png;base64,/);
  assert.match(css, /#auth\{[^}]*background-color:#0d2f4d;background-image:url\('\.\.\/icons\/studylink-login-full-logo\.png\?v=studylink-pwa-29'\)/);
  assert.match(css, /background-size:cover;background-position:center/);
});

test('cancels recorder waveforms and keeps PWA bootstrap reliable after DOM readiness', () => {
  assert.match(source, /const waveTimers=Object\.create\(null\)/);
  assert.match(source, /function stopWave\(canvasId\)/);
  assert.match(source, /waveTimers\[canvasId\]=setTimeout\(tick,80\)/);
  assert.match(source, /stopWave\('vWave'\)/);
  assert.match(source, /stopWave\('gvWave'\)/);
  assert.match(source, /function bootstrapStudyLink\(\)/);
  assert.match(source, /if\(document\.readyState==='loading'\)document\.addEventListener\('DOMContentLoaded',startStudyLink/);
  assert.match(source, /else startStudyLink\(\)/);
});

test('mobile navigation uses explicit data-tab controls and keyboard-safe handlers', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /data-tab="home"[^>]*role="button"/);
  assert.match(html, /data-tab="find"[^>]*role="button"/);
  assert.match(html, /data-tab="post"[^>]*role="button"/);
  assert.match(html, /data-tab="msgs"[^>]*role="button"/);
  assert.match(html, /data-tab="me"[^>]*role="button"/);
  assert.doesNotMatch(html, /onclick="tab\('/);
  assert.match(source, /function setupNavigation\(\)/);
  assert.match(source, /document\.querySelectorAll\('\.ni\[data-tab\]'\)/);
  assert.match(source, /event\.key==='Enter'\|\|event\.key===' '/);
  assert.match(source, /el\('darkModeBtn'\)\?\.addEventListener/);
  assert.match(source, /el\('alertsBtn'\)\?\.addEventListener/);
});

test('Disconnect is explicitly bound and resets the UI after every auth session', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /id="disconnectBtn"/);
  assert.match(source, /let signOutInProgress=false,disconnectBound=false/);
  assert.match(source, /const disconnectButton=el\('disconnectBtn'\)/);
  assert.match(source, /disconnectButton\?\.addEventListener\('click',\(\)=>\{void doOut\(\);\}\)/);
  assert.match(source, /function cleanupAuthListeners\(\)/);
  assert.match(source, /function resetLoggedOutUi\(\)/);
  assert.match(source, /resetLoggedOutUi\(\);\n  \}catch/);
});

test('Disconnect cannot be blocked by an undeclared cleanup listener or slow presence update', () => {
  assert.match(source, /let signOutInProgress=false/);
  assert.match(source, /Promise\.race\(\[setPresence\('Offline'\),new Promise\(resolve=>setTimeout\(resolve,1500\)\)\]\)/);
  assert.match(source, /typeof inboxUnsub==='function'/);
  assert.match(source, /typeof inboxChatsUnsub==='function'/);
  assert.match(source, /await auth\.signOut\(\)/);
  assert.match(source, /button\.disabled=true/);
  assert.match(source, /}else\{\n    \/\/ Firebase can call this branch/);
  assert.match(source, /resetLoggedOutUi\(\)/);
  assert.match(source, /cleanupAuthListeners\(\)/);
});


test('ships realtime typing and recording presence for private and group chats', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(source, /function setPresenceState\(kind,id,state,active\)/);
  assert.match(source, /where\('participants','array-contains',CU\.uid\)\.onSnapshot/);
  assert.match(source, /if\(!inboxChatsUnsub\)startChatListener\(\)/);
  assert.doesNotMatch(source, /if\(!chatIds\.length\)\{/);
  assert.match(source, /presence\.\$\{CU\.uid\}\.\$\{state\}/);
  assert.match(source, /function clearPresenceState\(kind,id\)/);
  assert.match(source, /is recording\.\.\./);
  assert.match(source, /void setPresenceState\('private',cid,'typing',true\)/);
  assert.match(source, /void setPresenceState\('group',gid,'typing',true\)/);
  assert.match(source, /grpPresenceUnsub=gref\.onSnapshot/);
  assert.match(source, /pendingPresenceId=curChat&&CU\?getCID\(CU\.uid,curChat\.uid\):null/);
  assert.match(source, /if\(CU&&\(recChatId\|\|pendingPresenceId\)\)void clearPresenceState\('private',recChatId\|\|pendingPresenceId\)/);
  assert.match(source, /pendingGroupPresenceId=curGrp&&CU\?curGrp\.id:null/);
  assert.match(source, /if\(CU&&\(recGroupId\|\|pendingGroupPresenceId\)\)void clearPresenceState\('group',recGroupId\|\|pendingGroupPresenceId\)/);
  assert.match(html, /id="typebar"/);
  assert.match(html, /id="gTypebar"/);
  assert.match(css, /#typebar,#gTypebar/);
});

test('restores the login background and gives the top wordmark a clearer mobile size', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(css, /#auth\{[^}]*background-color:#0d2f4d;background-image:url\('\.\.\/icons\/studylink-login-full-logo\.png\?v=studylink-pwa-29'\)/);
  assert.match(css, /background-size:cover;background-position:center/);
  assert.match(css, /@media \(max-width:600px\)\{#auth>p\{margin-bottom:92px!important;\}#auth \.af\{transform:translateY\(18px\);\}\}/);
  assert.match(html, /<p id="asub" style="color:#405a78;margin-bottom:18px;font-size:14px;font-style:italic;visibility:hidden;">Connect &bull; Learn &bull; Grow<\/p>/);
  assert.match(html, /id="asub"[^>]*>Connect &bull; Learn &bull; Grow/);
  assert.match(html, /StudyLink/);
  assert.match(html, /font-size:26px;font-weight:bold;color:#fff/);
});

test('keeps the Android install action explicit when Chrome has not exposed a prompt', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(html, /Installer l’application StudyLink/);
  assert.match(source, /Install and create shortcut/);
  assert.match(html, /Installer l’app/);
  assert.match(html, /font-size:26px;font-weight:bold;color:#fff/);
  assert.match(source, /Pour une vraie application/);
  assert.match(source, /window\.setTimeout\(show,900\)/);
  assert.match(source, /choice\?\.outcome==='accepted'/);
});

test('bounds Firebase startup so Android cannot remain on Loading forever', () => {
  const runtime = source;
  assert.match(runtime, /let authStateResolved=false/);
  assert.match(runtime, /const authFallbackTimer=setTimeout/);
  assert.match(runtime, /},10000\)/);
  assert.match(runtime, /Reveal the shell immediately/);
  assert.match(runtime, /el\('auth'\)\.style\.display='none'/);
  assert.match(runtime, /el\('ov'\)\.style\.display='none'/);
});

test('renders text-only typing and recording status in the Messages list and open chat', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(source, /function privatePresenceText\(name,data,uid\)/);
  assert.match(source, /return name\+' is recording\.\.\.'/);
  assert.match(source, /return name\+' is typing\.\.\.'/);
  assert.doesNotMatch(source, /return '🎙️ '\+name\+' is recording/);
  assert.doesNotMatch(source, /return '⌨️ '\+name\+' is typing/);
  assert.match(source, /const _presenceText=privatePresenceText\(o\.name\|\|'User',data,ouid\)/);
  assert.match(source, /class="inbox-presence"/);
  assert.match(source, /esc\(_presenceText\|\|''\)\|\|_msgHtml/);
  assert.match(html, /id="typebar"/);
  assert.match(html, /id="gTypebar"/);
});

test('themes the Statut keyboard and send controls by status content', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(source, /const STATUS_THEME_KEYS=\['photo','text',\.\.\.Object\.keys\(CATS\)\]/);
  assert.match(source, /function statusThemeFor\(category,photo,message\)/);
  assert.match(source, /if\(photo&&!category&&!message\)return 'photo'/);
  assert.match(source, /applyStatusTheme\(el\('statusCreate'\),statusThemeFor\(selStatusCat,statusPhotoUrl,msg\)\)/);
  assert.match(source, /applyStatusTheme\(view,statusThemeFor\(sp\.category,sp\.photo,sp\.message\)\)/);
  assert.match(html, /oninput="el\('stCharCount'\)\.textContent=this\.value\.length\+' \/ 100';updateStatusCreateTheme\(\)"/);
  assert.match(css, /#statusCreate\.status-theme-text,[\s\S]*#statusCreate\.status-theme-dispo/);
  assert.match(css, /#statusCreate\.status-theme-photo,[\s\S]*--status-accent:#8a93a5/);
  assert.match(css, /#statusCreate \.stPubBtn\{background:var\(--status-accent\)/);
  assert.match(css, /#statusView \.stVReplyBtn:not\(\.rec\):not\(\.voice-pending\):not\(\.voice-locked\)\{background:var\(--status-accent\)/);
});

test('keeps each selected Statut category color on the keyboard and controls', async () => {
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  const themes = {
    text: '#2ecc71',
    dispo: '#2ecc71',
    revision: '#2563eb',
    aide: '#f5730a',
    session: '#7b2ff7',
    pause: '#8a93ab',
    objectif: '#f5b301',
    photo: '#8a93a5',
  };
  for(const [theme,accent] of Object.entries(themes)){
    assert.match(css, new RegExp(`status-theme-${theme}[\\s\\S]*--status-accent:${accent.replace('#','\\#')}`));
  }
  assert.match(css, /#statusView \.stVReplyBtn\.rec\{background:var\(--status-accent\)/);
  assert.match(css, /#statusCreate \.stPubBtn\{background:var\(--status-accent\)/);
});

test('adds a category-synchronized Color Companion above the real mobile keyboard', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
  assert.match(html, /id="stColorCompanion"/);
  assert.doesNotMatch(html, /id="stReplyCompanion"/);
  assert.match(html, /insertStatusCompanionEmoji\('\✨'\)/);
  assert.doesNotMatch(html, /showStatusReplyCompanion\(\)/);
  assert.match(source, /function syncStatusCompanionViewport\(\)/);
  assert.match(source, /window\.visualViewport\?\.addEventListener\('resize',syncStatusCompanionViewport\)/);
  assert.match(css, /\.status-color-companion\{display:none;position:fixed/);
  assert.match(css, /bottom:calc\(10px \+ var\(--status-keyboard-offset,0px\)\)/);
  assert.match(css, /\.status-color-companion\.is-visible\{display:flex;\}/);
  assert.doesNotMatch(css, /#statusView\.status-reply-companion-open \.stVBottom\{padding-bottom:calc\(22px \+ 58px \+ var\(--status-keyboard-offset,0px\)\);\}/);
  assert.doesNotMatch(source, /showStatusReplyCompanion/);
});

test('keeps the companion identity synchronized with the photo-only fallback', () => {
  assert.match(source, /STATUS_COMPANION_LABELS=\{photo:'Photo uniquement'/);
  assert.match(source, /updateStatusCompanionTheme\(statusThemeFor\(selStatusCat,statusPhotoUrl,msg\)\)/);
  assert.match(source, /if\(photo&&!category&&!message\)return 'photo'/);
});

test('places the account name above the right-aligned header controls', async () => {
  const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
  const headerActions = html.match(/<div class="hdr-actions">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/)?.[1] || '';
  assert.match(headerActions, /<span id="topN" class="hdr-account-name"/);
  assert.match(headerActions, /<div class="hdr-controls">/);
  assert.ok(headerActions.indexOf('hdr-account-name') < headerActions.indexOf('hdr-controls'));
  assert.match(css, /\.hdr-actions\{[^}]*flex-direction:column/);
  assert.match(css, /\.hdr-controls\{display:flex/);
});

test('wires all non-owner Statut menu actions to real handlers', () => {
  assert.match(source, /<button onclick="forwardStatus\(\)">\$\{t\('st_menu_forward'\)\}<\/button>/);
  assert.match(source, /<button onclick="replyToStatus\(\)">\$\{t\('st_menu_message'\)\}<\/button>/);
  assert.match(source, /function replyToStatus\(\)[\s\S]*openChat\(u\.name\|\|'Utilisateur',uid\)/);
  assert.match(source, /async function toggleStatusNotif\(\)[\s\S]*statusNotifyUids/);
  assert.match(source, /function hideStatusUser\(\)[\s\S]*hiddenStatusUids/);
  assert.match(source, /function reportStatus\(\)[\s\S]*collection\('reports'\)\.add/);
  assert.match(source, /openStatusCreate\(draftPhoto,true\)/);
});
