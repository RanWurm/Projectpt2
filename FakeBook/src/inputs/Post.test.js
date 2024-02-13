import React from 'react';
import { render } from '@testing-library/react';
import Post from './Post';

describe('Post component', () => {
  it('renders without expecting a red button', () => {
    const { queryByTestId } = render(<Post />);
    const redButton = queryByTestId('interaction-button');
    expect(redButton).not.toBeInTheDocument(); // Asserts that the red button should not be rendered
  });
});
