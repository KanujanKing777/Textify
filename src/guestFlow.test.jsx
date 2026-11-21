import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';

vi.mock('./firebase', () => ({ auth: {}, db: null, firebaseConfigError: '' }));
vi.mock('firebase/auth', async (importOriginal) => ({
  ...await importOriginal(),
  onAuthStateChanged: (_auth, callback) => {
    callback(null);
    return () => {};
  },
}));
vi.mock('./apiClient', async (importOriginal) => ({
  ...await importOriginal(),
  apiBaseUrl: 'https://api.example.invalid',
  getGuestSession: async () => ({
    token: 'guest-session',
    exhausted: { Blog: true, Story: false, Comic: false },
  }),
}));

test('Try now opens the guest studio and prompts for an account when a format is exhausted', async () => {
  render(<App />);
  fireEvent.click(await screen.findByRole('button', { name: /try now/i }));
  expect(await screen.findByRole('status')).toHaveTextContent('used both guest blog generations');
  expect(screen.getByRole('button', { name: /^generate/i })).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: /^story$/i }));
  expect(screen.getByRole('button', { name: /^generate/i })).toBeEnabled();
  fireEvent.click(screen.getByRole('button', { name: /create an account/i }));
  expect(screen.getByRole('heading', { name: /create your account/i })).toBeInTheDocument();
});
