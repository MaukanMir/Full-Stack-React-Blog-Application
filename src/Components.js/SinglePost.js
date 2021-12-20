import React from 'react'
import "./SinglePost.css"

const SinglePost = () => {
    return (
        <div className ="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.</h1>
                <div className="singlePostEdit">
                    <i className ="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                <div className="singlePostInfo">
                    <span className = "singlePostAuthor">Author: <b> name</b></span>
                    <span className = "singlePostDate">1 Hour Ago</span>
                </div>
                <p className ="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta obcaecati numquam eius, nulla magni neque sunt nesciunt necessitatibus quae? Sunt ipsum iure nam laborum?</p>
            </div>
        </div>
    )
}

export default SinglePost
