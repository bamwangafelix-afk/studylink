import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../js/app.js', import.meta.url), 'utf8');

test('records the actual MediaRecorder MIME type in the uploaded filename', () => {
  assert.match(source, /function voiceFileFromChunks\(chunks\)/);
  assert.match(source, /rawMime=chunks\.find\(c=>c\?\.type\)\?\.type\|\|'audio\/webm'/);
  assert.match(source, /return new File\(\[new Blob\(chunks/);
});

test('uses a bounded Firestore inline fallback when Cloudinary upload fails', () => {
  assert.match(source, /function readVoiceAsDataUrl\(file,maxBytes=300000\)/);
  assert.match(source, /storage:'firestore-inline'/);
  assert.match(source, /uploadCloud\.lastError\|\|'Audio upload failed'/);
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
  assert.match(css, /\.cin-action\{[^}]*width:50px;height:50px;min-width:50px/);
});
