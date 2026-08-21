import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');

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
  assert.equal((source.match(/recorder error:/g) || []).length, 2);
  assert.match(source, /mr\.onerror=/);
  assert.match(source, /gmr\.onerror=/);
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
  assert.match(html, /<script src="js\/app\.js\?v=orange-group-voice-3"><\/script>/);
  assert.match(html, /<link rel="stylesheet" href="css\/styles\.css\?v=orange-group-voice-3">/);
  assert.match(css, /\.cin-action\{[^}]*width:50px;height:50px;min-width:50px/);
});

test('does not require a reload after microphone permission is granted', () => {
  assert.match(source, /function getVoiceStream\(\)/);
  assert.match(source, /Microphone bloqué\. Ouvrez le cadenas de Chrome, choisissez Autoriser, puis revenez ici\./);
  assert.doesNotMatch(source, /Allow Mic → Reload/);
});

test('protects an active mobile recording from accidental navigation and screen sleep', () => {
  assert.match(source, /if\(isRec\|\|gIsRec\)\{e\.preventDefault\(\);e\.returnValue='';\}/);
  assert.match(source, /navigator\.wakeLock\?\.request/);
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
