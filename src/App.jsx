// App.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import AuthScreen from './AuthScreen';
import { apiBaseUrl } from './apiClient';
import { auth, firebaseConfigError } from './firebase';
import Home from './Home';
import './AuthScreen.css';
import LandingPage from './LandingPage';

function App() {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [isRegistering, setIsRegistering] = useState(true);

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
    return showAuth ? (
      <AuthScreen
        initialIsRegistering={isRegistering}
        onBack={() => setShowAuth(false)}
      />
    ) : (
      <LandingPage
        onCreateAccount={() => {
          setIsRegistering(true);
          setShowAuth(true);
        }}
        onSignIn={() => {
          setIsRegistering(false);
          setShowAuth(true);
        }}
      />
    );
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
