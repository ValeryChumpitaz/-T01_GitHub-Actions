// src/tests/App.test.js
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = document.querySelector('a');
  expect(linkElement).toBeInTheDocument();
});

