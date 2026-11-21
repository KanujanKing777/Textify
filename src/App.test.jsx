import { render, screen } from '@testing-library/react';
import React from 'react';
import { vi } from 'vitest';
import App from './App';

vi.mock('./firebase', () => ({
  auth: null,
  db: null,
  firebaseConfigError: 'Missing Firebase web app configuration: apiKey.',
}));

test('shows Firebase setup instructions when web app configuration is missing', () => {
  render(<App />);
  expect(screen.getByText(/Firebase Authentication is not configured/i)).toBeInTheDocument();
  expect(screen.getByText(/Missing Firebase web app configuration/i)).toBeInTheDocument();
});
