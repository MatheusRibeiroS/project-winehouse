import { render, screen } from '@testing-library/react';
import App from '../App';

test("renders Initial commit text", () => {
  render(<App />);
  const element = screen.getByText(/Initial commit/i);
  expect(element).toBeInTheDocument();
});
