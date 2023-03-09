import { render, screen } from '@testing-library/react';
import App from './App';


test('renders text about me', () => {
  render(<App />)
  const nameElement = screen.getByText(/about me/i)
  expect(nameElement).toBeInTheDocument()
});
