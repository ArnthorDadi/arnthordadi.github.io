import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Arnþór Daði Jónasson/i);
  expect(linkElement).toBeInTheDocument();
});
