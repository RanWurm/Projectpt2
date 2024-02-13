import React from 'react';
import { render } from '@testing-library/react';
import Comment from './CommentSection';

describe('Comment component', () => {
  it('renders a list of comments when commentList is not empty and issShow is true', () => {
    const commentList = ['Comment 1', 'Comment 2', 'Comment 3'];
    const { getByText } = render(<Comment commentList={commentList} issShow={true} />);
    commentList.forEach((text, index) => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });
});

