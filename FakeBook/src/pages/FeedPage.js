import './FeedPage.css'
import Button from "../buttons/Button"
import fbLogo from './facebookLogo3.png'
import redButton from './redButton.png'
import SearchTab from '../inputs/SearchTab'
import Post from '../inputs/Post'
import RanPic from './myprofile.png'
import posts from '../data/db.json'
import HillelPic from './hilel.png'
import YuliPic from './yuli.png'

function FeedPage(){
	let profilePics ={
		'Ran': {
			'pic' : RanPic
		},
		'Hilel':{
			'pic':HillelPic
		},
		'Yuli':{
			'pic' : YuliPic
		}
	}
	
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
			</div>
			<div className="left_col">
	
			</div>
			{
			posts.map((post)=>
			<Post
			author={post.author}
			icon={profilePics[post.icon]['pic']}
			content={post.content}
			></Post>
			)}
		</body>			
		</html>
	);
} export default FeedPage