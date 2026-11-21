import { auth } from './firebase';
import { getIdToken } from 'firebase/auth';

const isDevelopment = import.meta.env.DEV;
const configuredUrl = import.meta.env.REACT_APP_API_BASE_URL
  || (isDevelopment ? 'http://127.0.0.1:8787' : '');

function getApiBaseUrl() {
  try {
    const url = new URL(configuredUrl);
    const localHttp = isDevelopment && url.protocol === 'http:'
      && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
    if ((url.protocol === 'https:' || localHttp)
      && !url.username && !url.password && !url.search && !url.hash && url.pathname === '/') {
      return url.origin;
    }
  } catch {
    // Display the setup instructions when the configured URL is invalid.
  }
  return '';
}

export const apiBaseUrl = getApiBaseUrl();

export async function apiRequest(path, options = {}, guestToken) {
  if (!apiBaseUrl || !/^\/api\/[a-z]+\/[a-z]+$/.test(path)) {
    throw new Error('The processing endpoint is not configured.');
  }
  if (!guestToken && !auth?.currentUser && path !== '/api/guest/session') {
    throw new Error('Please sign in before using Textify.');
  }

  const authorization = guestToken ? `Guest ${guestToken}`
    : path === '/api/guest/session' ? null : `Bearer ${await getIdToken(auth.currentUser)}`;
  const response = await fetch(`${apiBaseUrl}${path}`, {
    ...options,
    redirect: 'error',
    headers: {
      ...options.headers,
      ...(authorization && { Authorization: authorization }),
    },
  });

  if (!response.ok) {
    let message = 'The processing request failed.';
    let code;
    try {
      const body = await response.json();
      if (typeof body.error === 'string') message = body.error;
      code = body.code;
    } catch {
      // Keep the generic message when the server does not return JSON.
    }
    throw Object.assign(new Error(message), { code });
  }

  return response;
}

export async function apiPostJson(path, body, guestToken) {
  const response = await apiRequest(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }, guestToken);
  return response.json();
}

export async function getGuestSession() {
  const key = 'textify.guestSession';
  const loadOrCreate = async () => {
    const existing = localStorage.getItem(key);
    const response = await apiRequest('/api/guest/session', { method: 'POST' }, existing);
    const session = await response.json();
    if (!existing) localStorage.setItem(key, session.token);
    return session;
  };
  return navigator.locks ? navigator.locks.request(key, loadOrCreate) : loadOrCreate();
}
