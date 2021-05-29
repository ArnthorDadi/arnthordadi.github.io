import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Hi There!', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hi There!/i);
  expect(linkElement).toBeInTheDocument();
});
