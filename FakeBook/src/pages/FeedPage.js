import "../css/pagesCss/FeedPage.css"
import fbLogo from '../res/facebookLogo3.png'
import NavBar from "../Bars/NavBar"
import Post from '../inputs/Post'
import RanPic from '../res/myprofile.png'
import posts from '../data/db.json'
import HillelPic from '../res/hilel.png'
import YuliPic from '../res/yuli.png'

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
			<NavBar logo={fbLogo}/>
			<div className='posts_col'>
			{
			posts.map((post)=>
			<Post
			author={post.author}
			icon={profilePics[post.icon]['pic']}
			content={post.content}
			></Post>
			)}	
			</div>

		</body>			
		</html>
	);
} export default FeedPage