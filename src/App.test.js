import { render, screen } from '@testing-library/react';
import App from './App';

test('renders prev text', () => {
  render(<App />);
  const linkElement = screen.getByText(/prev/i);
  expect(linkElement).toBeInTheDocument();
});
