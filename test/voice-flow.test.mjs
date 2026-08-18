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
