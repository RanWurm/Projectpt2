import React from 'react';
import './Post.css'; // Import your CSS file for styling

const Post = ({ author,icon, content }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img
          className="avatar"
          src={icon}
          alt={`${author}'s avatar`}
        />
        <div className="author-name">{author}</div>
      </div>
      <div className="post-content">{content}</div>
    </div>
  );
};

export default Post;
