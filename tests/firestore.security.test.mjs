import assert from 'node:assert/strict';
import { test } from 'node:test';
import { deleteApp, initializeApp } from 'firebase/app';
import {
  connectFirestoreEmulator, deleteDoc, doc, getDoc, getFirestore,
  serverTimestamp, setDoc, updateDoc,
} from 'firebase/firestore';

const emulator = /^127\.0\.0\.1:(\d+)$/.exec(process.env.FIRESTORE_EMULATOR_HOST ?? '');
assert.ok(emulator, 'Run this suite with the local Firestore emulator.');

test('Firestore restricts history to its owner and validates writes', async () => {
  const apps = [];
  const historyDoc = (name, uid) => {
    const app = initializeApp({ projectId: 'demo-textify' }, name);
    apps.push(app);
    const db = getFirestore(app);
    connectFirestoreEmulator(db, '127.0.0.1', Number(emulator[1]), {
      ...(uid && { mockUserToken: { sub: uid } }),
    });
    return doc(db, 'users', 'owner', 'history', 'entry');
  };
  const owner = historyDoc('owner', 'owner');
  const other = historyDoc('other', 'other');
  const guest = historyDoc('guest');
  const entry = { title: 'Test', mode: 'Text', action: 'Generate', input: { text: 'test' },
    output: { text: 'answer' }, createdAt: serverTimestamp() };
  const denied = { code: 'permission-denied' };

  try {
    await assert.rejects(setDoc(other, entry), denied);
    await assert.rejects(setDoc(guest, entry), denied);
    await assert.rejects(setDoc(owner, { ...entry, createdAt: 'invalid' }), denied);
    await setDoc(owner, entry);
    assert.equal((await getDoc(owner)).data().output.text, 'answer');
    await assert.rejects(getDoc(other), denied);
    await assert.rejects(getDoc(guest), denied);
    await assert.rejects(updateDoc(owner, { title: 'changed' }), denied);
    await assert.rejects(updateDoc(owner, { output: { text: 123 } }), denied);
    await assert.rejects(updateDoc(other, { output: { text: 'changed' } }), denied);
    await updateDoc(owner, { output: { text: 'updated' } });
    await assert.rejects(deleteDoc(other), denied);
    await deleteDoc(owner);
    assert.equal((await getDoc(owner)).exists(), false);
  } finally {
    await Promise.all(apps.map(deleteApp));
  }
});
