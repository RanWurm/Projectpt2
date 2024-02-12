import "../css/pagesCss/FeedPage.css";
import fbLogo from '../res/facebookLogo3.png';
import NavBar from "../Bars/NavBar";
import Post from '../inputs/Post';
import RanPic from '../res/myprofile.png';
import posts from '../data/db.json';
import HillelPic from '../res/hilel.png';
import YuliPic from '../res/yuli.png';
import { useState } from "react";

function FeedPage() {
    const [inputText, setInputText] = useState('');

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

    const handleNewPost = () => {
        if (inputText.trim() !== '') {
            let post = {
                "author": "Ranel",
                "icon": "Ran",
                "content": inputText
            };
            posts.push(post);
            setInputText('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewPost(); // Call handleNewPost to add the new post
    };

    return (
        <div>
            <NavBar logo={fbLogo}/>
            <div className="float-parent-element">
                <div className="float-child-element">
                    <div className="left">
                        {posts.map((post) => (
                            <Post
                                author={post.author}
                                icon={profilePics[post.icon]['pic']}
                                content={post.content}
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
                            <button class = "new-post-button"
							onClick={handleNewPost}>add comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;
