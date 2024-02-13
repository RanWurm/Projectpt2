import React from 'react';
import { render } from '@testing-library/react';
import Feed from './FeedPage';

describe('Feed component', () => {
  it('renders Facebook logo', () => {
    const { queryByAltText } = render(<Feed />);
    const logo = queryByAltText('Facebook Logo');
    expect(logo).toBeInTheDocument(); // Asserts that the Facebook logo is included
  });
});
