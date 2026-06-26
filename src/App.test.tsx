import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// @rulecms/widget-react ships an ESM-only bundle that react-scripts' Jest setup
// does not transform, and the real widget fetches over the network on mount.
// This smoke test only verifies the demo app's own markup renders, so we mock
// the widget components (their behavior is covered by the widget-react package's
// own test suite).
jest.mock('@rulecms/widget-react', () => ({
  RuleCMSWidgetProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  RuleCMSWidget: () => null,
}));

test('renders the RuleCMS widget demo heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /rulecms widget demo/i,
    level: 1,
  });
  expect(heading).toBeInTheDocument();
});
