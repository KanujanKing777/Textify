import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase';

const historyCollection = (userId) => collection(db, 'users', userId, 'history');

export function subscribeToChatHistory(userId, onEntries, onError) {
  if (!db) {
    throw new Error('Cloud Firestore is not configured.');
  }

  const historyQuery = query(historyCollection(userId), orderBy('createdAt', 'desc'));
  return onSnapshot(
    historyQuery,
    (snapshot) => {
      onEntries(snapshot.docs.map((entry) => ({ id: entry.id, ...entry.data() })));
    },
    onError,
  );
}

export async function saveChatHistoryEntry(entry) {
  if (!db) {
    throw new Error('Cloud Firestore is not configured.');
  }
  if (!auth?.currentUser) {
    throw new Error('Sign in to save chat history.');
  }

  const savedEntry = await addDoc(
    historyCollection(auth.currentUser.uid),
    { ...entry, createdAt: serverTimestamp() },
  );
  return savedEntry.id;
}

export async function updateChatHistoryOutput(entryId, output) {
  if (!db) {
    throw new Error('Cloud Firestore is not configured.');
  }
  if (!auth?.currentUser) {
    throw new Error('Sign in to update chat history.');
  }

  await updateDoc(
    doc(db, 'users', auth.currentUser.uid, 'history', entryId),
    { output },
  );
}
