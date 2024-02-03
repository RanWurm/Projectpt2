import './FeedPage.css'
import Button from "../buttons/Button"
import fbLogo from './facebookLogo3.png'
import redButton from './redButton.png'
import SearchTab from '../inputs/SearchTab'
import Post from '../inputs/Post'
import profilePic from './myprofile.png'
function FeedPage(){
	return(
		<html>
		<head><title>FakeBook</title></head>
		<body>
		<div className = "navbar">
			<div className="left_col">
					<Button id= {"logo"} icon = {fbLogo}></Button>
					<SearchTab id = {"search_icon"}></SearchTab>
					
				
			</div>
			
			<div className="center_col">
			<Button id ={"logo"} icon={redButton} meme = {"yes"}></Button>
			</div>
			s
			</div>	
			<Post
			author={"Ranel"}
			icon={profilePic}
			content={"yoyoyo Wassup biaaatchs"}
			></Post>
		</body>			
		</html>
	);
} export default FeedPage