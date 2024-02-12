import Like from '../res/comment_icon.png'
import Button from './Button';
function CommentButton({postId = "", onClick}){
	return (
        <Button id= {"interaction-button"} icon = {Like} onClick={onClick} >
            
        </Button>
    );
} export default CommentButton;