import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app with a button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
