import { auth } from './firebase';
import { getIdToken } from 'firebase/auth';

export const apiBaseUrl = (
  process.env.REACT_APP_API_BASE_URL
  || (process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8787' : '')
).replace(/\/+$/, '');

export async function apiRequest(path, options = {}) {
  if (!auth?.currentUser) {
    throw new Error('Please sign in before using Textify.');
  }

  const token = await getIdToken(auth.currentUser);
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    let message = 'The processing request failed.';
    try {
      const body = await response.json();
      if (typeof body.error === 'string') message = body.error;
    } catch {
      // Keep the generic message when the server does not return JSON.
    }
    throw new Error(message);
  }

  return response;
}

export async function apiPostJson(path, body) {
  const response = await apiRequest(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response.json();
}
