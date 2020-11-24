import { render, screen } from '@testing-library/react';
import App from './App';

test('check for welcome', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
