import React from 'react';
import { render } from '@testing-library/react';
import Comment from './Comment';

describe('Comment component', () => {
  it('renders an empty div when commentList is empty or issShow is false', () => {
    const { container } = render(<Comment commentList={[]} issShow={false} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders a list of comments when commentList is not empty and issShow is true', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];
    const { getByText } = render(<Comment commentList={commentList} issShow={true} />);
    commentList.forEach((text, index) => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });
});