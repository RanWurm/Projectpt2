import React from 'react';
import { getByPlaceholderText, render } from '@testing-library/react';
import Search from './SearchTab';

test('displays the correct message', () => {
  const { getByPlaceholderText } = render(<Search />);
  const messageElement = getByPlaceholderText(/Search in FakeBook/i);
  expect(messageElement).toBeInTheDocument();
});