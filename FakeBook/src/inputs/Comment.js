import React from 'react';
import '../css/inputsCss/Comment.css';
import SendButton from '../buttons/SendButton'

const Comment = ({ text }) => {
  return (
    <div className="comment">
       <div className='comment-flex'>
        <h3 className='comment-text'></h3>
        <input className = "input-box" type = "text" placeholder='add comment'/>
        <div className='comment-flex-button'>
         <SendButton id = {'send_button'}></SendButton>
         </div>
      
       </div>
      
        </div>
  );
};

export default Comment;
