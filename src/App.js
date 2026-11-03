// App.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AuthScreen from './AuthScreen';
import { apiBaseUrl } from './apiClient';
import { auth, firebaseConfigError } from './firebase';
import Home from './Home';
import './AuthScreen.css';

function App() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (!auth) return undefined;
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
  }, []);

  if (firebaseConfigError) {
    return (
      <main className="auth-config-error">
        <h1>Firebase Authentication is not configured</h1>
        <p>{firebaseConfigError}</p>
        <p>Set the Firebase web app values documented in <code>.env.example</code>, then restart the app.</p>
      </main>
    );
  }

  if (!apiBaseUrl) {
    return (
      <main className="auth-config-error">
        <h1>Cloudflare API is not configured</h1>
        <p>Set <code>REACT_APP_API_BASE_URL</code> to the deployed Worker URL, then rebuild the frontend.</p>
      </main>
    );
  }

  if (!authReady) {
    return <main className="auth-page">Loading…</main>;
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="App authenticated-app">
      <button className="sign-out-button" onClick={() => signOut(auth)} type="button">
        Sign out
      </button>
      <Home />
    </div>
  );
}

export default App;
