import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';
import './AuthScreen.css';

function AuthScreen({ initialIsRegistering = false, onBack }) {
  const [isRegistering, setIsRegistering] = useState(initialIsRegistering);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (authError) {
      setError(authError.message || 'Authentication failed.');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (authError) {
      setError(authError.message || 'Google sign-in failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="auth-title">
        <div className="auth-brand"><span className="auth-brand-mark">T</span><span>textify</span></div>
        <h1 id="auth-title">{isRegistering ? 'Create your account' : 'Welcome back'}</h1>
        <p className="auth-intro">{isRegistering ? 'Your next great idea starts here.' : 'Sign in to pick up where you left off.'}</p>
        <form onSubmit={submit}>
          <label htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            autoComplete="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            autoComplete={isRegistering ? 'new-password' : 'current-password'}
            type="password"
            minLength="6"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && <p className="auth-error" role="alert">{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Please wait…' : isRegistering ? 'Create account' : 'Sign in'}
          </button>
        </form>
        <button className="google-sign-in" type="button" onClick={signInWithGoogle} disabled={loading}>
          Continue with Google
        </button>
        <button
          className="auth-toggle"
          type="button"
          onClick={() => {
            setError('');
            setIsRegistering((value) => !value);
          }}
        >
          {isRegistering ? 'Already have an account? Sign in' : 'Need an account? Create one'}
        </button>
        {onBack && (
          <button className="auth-back" type="button" onClick={onBack}>
            Back to home
          </button>
        )}
      </section>
    </main>
  );
}

export default AuthScreen;
