import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'letstypifythecontent',
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const missingConfig = ['apiKey', 'authDomain', 'appId']
  .filter((key) => !firebaseConfig[key]);

export const firebaseConfigError = missingConfig.length
  ? `Missing Firebase web app configuration: ${missingConfig.join(', ')}.`
  : '';

export const auth = firebaseConfigError
  ? null
  : getAuth(getApps().length ? getApp() : initializeApp(firebaseConfig));

export const db = firebaseConfigError ? null : getFirestore(getApp());
