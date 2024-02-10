import React, { useState } from 'react';
import '../css/inputsCss/Post.css'; 
import '../css/inputsCss/Tab.css'
import LikeButton from '../buttons/LikeButton';
import like_icon  from  '../res/like_icon.png'
import CommentButton from '../buttons/CommentButton';
import comment_icon from '../res/comment_icon.png'
import Button from '../buttons/Button';
import redButton from '../res/redButton.png'
import Comment from './Comment';

function Post  ({ author, icon, content, postId }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeClick = () => {
    // Increment like count when the like button is clicked
    setLikeCount(likeCount + 1);
  };
  
  


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
      <div className="post-content">{content}  </div>
      <span className="interactions-count">
        <span className='right_col'>
         {likeCount}
        <img className = "interaction-icon" src ={like_icon} alt='' /> 
         {likeCount}
        <img className = "interaction-icon" src ={comment_icon} alt='' />
        </span>
      </span> 
      
     
      
      <div className='interactions-section'>
        <div className='post-buttons-bar'>
          <div className='post_left_col'>
          <LikeButton className onClick={handleLikeClick} />
          </div>
          <div className='post_center_col'>
             <CommentButton/>
          </div>
          <div className='post_right_col'>
            <Button id ={"interaction-button"} icon={redButton} meme = {"yes"}></Button>
          </div>
        </div>
      </div>
        
      <div className="post-content" >
          <div className="addCommentContainer">
     
            <Comment/>
          </div>
          <div className="listOfComments"></div>
     </div>
    </div>
  );
};

export default Post;
