import "../css/pagesCss/FeedPage.css";
import fbLogo from '../res/facebookLogo3.png';
import NavBar from "../Bars/NavBar";
import Post from '../inputs/Post';
import RanPic from '../res/myprofile.png';
import posts from '../data/db.json';
import HillelPic from '../res/hilel.png';
import YuliPic from '../res/yuli.png';
import { useState,useEffect } from "react";
import PageNavigator from "./PageNavigator";

function FeedPage({isApproveToBorwse, onApproveToBrowse,premissionRef}) {
    const [inputText, setInputText] = useState('');
    const [logOut, setLogOut] = useState(false);
    const [IsDarkMode, setIsDarkMode] = useState(false);
    const [clickedPostId, setClickedPostId] = useState(null);
    const [editedPostText, setEditedPostText] = useState(null);
    const [removedPostId, setRemovePostId] = useState(null);
    const [tposts, setPosts] = useState(posts);
    
    useEffect(()=>{
        if(logOut){
            onApproveToBrowse(false);
            premissionRef.current = false;
            return
        }
      });
      


    if(!isApproveToBorwse){
        console.log("feed page line 16");
        return (<PageNavigator caller={"FeedPage"}/>)
    }
    console.log("feed Page Line 19")

    let profilePics = {
        'Ran': {
            'pic': RanPic
        },
        'Hilel': {
            'pic': HillelPic
        },
        'Yuli': {
            'pic': YuliPic
        },
    };

    const handleClickPost = (id) =>{
        setClickedPostId(id);
    }
    const handleNewPost = () => {
        if (inputText.trim() !== '') {
            const newPost = {
                postId: Date.now(), // Assuming postId is a unique identifier
                author: "Ranel",
                icon: "Ran",
                content: inputText
            };
            setPosts([newPost, ...tposts]); // Add new post to the beginning of the array
            setInputText('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewPost(); // Call handleNewPost to add the new post
    };

    const handleLogOut = () => {
        setLogOut(true);
    };

    const handleRemovePost = (id) => {
        setRemovePostId(id);
        setPosts(prevPosts => prevPosts.filter(post => post.postId !== id));
    };

    const handlePostEdit = (id, text) => {
        setClickedPostId(id);
        setEditedPostText(text);
        const updatedPosts = tposts.map(post =>
            post.postId === id ? { ...post, content: text } : post
        );
        setPosts(updatedPosts);
        setClickedPostId(null);
        setEditedPostText(null);
    };

    const handleDarkMode = () => {
        setIsDarkMode(!IsDarkMode);
    };

    return (
        <div>
            <NavBar logo={fbLogo} firstHandleClick={handleLogOut} />
            <div className="float-parent-element">
                <div className="float-child-element">
                    <div className="left">
                        {tposts.map((post) => (
                            <Post
                                key={post.postId}
                                postID={post.postId}
                                author={post.author}
                                icon={profilePics[post.icon]['pic']}
                                content={post.content}
                                handleDelete={handleRemovePost}
                                handleEdit={handlePostEdit}
                                handleGetPost={handleClickPost}
                            />
                        ))}
                    </div>
                </div>
                <div className="float-child-element">
                    <div className="right">
                        <div className="new_post_box">
                            <h2 className="post_head">Write New FakePost</h2>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className="new-post-input"
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="What's on your fakeMind..."
                                    required
                                />
                            </form>
                            <button className="new-post-button" onClick={handleNewPost}>add comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;
