import React, { useState } from 'react';
import '../css/inputsCss/Post.css'; 
import '../css/inputsCss/Tab.css'
import LikeButton from '../buttons/LikeButton';
import like_icon  from  '../res/like_icon.png'
import CommentButton from '../buttons/CommentButton';
import comment_icon from '../res/comment_icon.png'
import Button from '../buttons/Button';
import redButton from '../res/redButton.png'
import CommentSection from './CommentSection';
import Send from '../res/send_button.png'
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';

function Post  ({postID, author, icon, content,comments,handleDelete, handleEdit,handleGetPost}) {
  const [likeCount, setLikeCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [textList, setTextList] = useState([]);
  const [showPosts,setShowPosts] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  
  const handleShowpost = () =>{
    setShowPosts(!showPosts);
  };
  
  const handleLikeClick = () => {
    // Increment like count when the like button is clicked
    setLikeCount(likeCount + 1);
  };
  
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle adding text to the list
  const handleAddToList = () => {
    // Check if inputText is not empty
    if (inputText.trim() !== '') {
      let commentList = {
        
      }
      // Add inputText to the list
      setTextList([...textList, inputText]);
      // Clear the inputText
      setInputText('');
    }
  };
  const handleDeleteClick = () => {
    handleDelete(postID); // Call the handleDelete function with the post ID
};
const handleEditClick = () => {
  handleGetPost(postID)
  setIsEditing(true);
};
const handleSaveEdit = () => {
  // Perform the save action or update the post content
  setIsEditing(false);
  handleEdit(postID,editedContent);
};



  return ( 
    <div key = {postID} className="post">
     
      <div className="post-header">
        <img
          className="avatar"
          src={icon}
          alt={`${author}'s avatar`}
        />
        <div className="author-name">{author}</div>
        <div className ='post-buttons-bar'>
          <div className='post_right_col'>
            <div className='delete_post_button'>
            {isEditing ? (< EditButton handleClick={handleSaveEdit}>Save</EditButton>):(
              <EditButton handleClick={handleEditClick}></EditButton>
           )}
            <DeleteButton handleClick = {handleDeleteClick} />
            </div>
          </div>
        </div>
      </div>
      <div className="post-content">
        {isEditing ?(
                    <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
          
        ): (<p>{editedContent}</p>)}
        
        
          </div>
      <span className="interactions-count">
        <span className='right_col'>
         {likeCount}
        <img className = "interaction-icon" src ={like_icon} alt='' /> 
         {textList.length}
        <img className = "interaction-icon" src ={comment_icon} alt='' />
        </span>
      </span> 
      
     
      
      <div className='interactions-section'>
        <div className='post-buttons-bar'>
          <div className='post_left_col'>
          <LikeButton  onClick={handleLikeClick} />
          </div>
          <div className='post_center_col'>
             <CommentButton onClick={handleShowpost} />
          </div>
          <div className='post_right_col'>
            <Button id ={"interaction-button"} icon={redButton} meme = {"yes"}></Button>
          </div>
        </div>
      </div>
        
      <div className="comment-section" >
          <div className="addCommentContainer">
     
       <div className="comment-section">
        <CommentSection commentList={textList} issShow={showPosts}/>
       <input 
       className = "comment-section" 
       type = "text" 
       placeholder='add comment'
        value={inputText}
        onChange={handleInputChange}
      />
      <div className='left-col'>
      <button className='send-button' onClick={handleAddToList}>
      <img className='send-button-logo' src={Send} alt="" />
      </button>  
      </div>
      </div>
      </div> 
     </div>
    </div>
  );
};

export default Post;
