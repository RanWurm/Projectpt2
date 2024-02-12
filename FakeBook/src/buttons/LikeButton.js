import Like from '../res/like_icon.png'
import Button from './Button';
function LikeButton({onClick}){
	return (
        <Button id= "interaction-button" icon = {Like} onClick={onClick} >
            
        </Button>
    );
} export default LikeButton;