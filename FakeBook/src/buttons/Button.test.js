import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import Button from './Button';

it('renders a button with the correct meme prop', () => {
  const div = document.createElement('div');
  act(() => {
    ReactDOM.render(<Button meme="no" />, div);
  });

  // Find the rendered button element
  const button = div.querySelector('button');

  // Check if the button exists
  expect(button).not.toBeNull();

  // Check if the meme prop is correctly applied to the button
  expect(button.getAttribute('meme')).toEqual(null);

  // Unmount the component
  ReactDOM.unmountComponentAtNode(div);
});
