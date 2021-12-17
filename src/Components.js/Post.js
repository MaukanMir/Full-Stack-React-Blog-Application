import React from 'react'
import "./post.css"
const Post = () => {
    return (
        <div className ="post">
            <img src="https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="postImg" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Tech</span>
                    <span className="postCat">OutDoors</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquam dolore unde dicta laudantium quos accusamus! Nulla iure numquam suscipit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
                <p className ="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, rerum!</p>
            </div>
        </div>
    )
}

export default Post
