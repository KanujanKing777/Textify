import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: import.meta.env.REACT_APP_FIREBASE_APP_ID,
};

const missingConfig = Object.keys(firebaseConfig)
  .filter((key) => !firebaseConfig[key]?.trim());

export const firebaseConfigError = missingConfig.length
  ? `Missing Firebase web app configuration: ${missingConfig.join(', ')}.`
  : '';

const app = firebaseConfigError ? null : initializeApp(firebaseConfig, 'textify');

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
