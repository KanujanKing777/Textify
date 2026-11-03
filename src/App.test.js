import { render, screen } from '@testing-library/react';
import App from './App';

test('shows Firebase setup instructions when web app configuration is missing', () => {
  render(<App />);
  expect(screen.getByText(/Firebase Authentication is not configured/i)).toBeInTheDocument();
  expect(screen.getByText(/Missing Firebase web app configuration/i)).toBeInTheDocument();
});
