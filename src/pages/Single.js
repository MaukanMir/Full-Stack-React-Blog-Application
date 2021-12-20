import React from 'react'
import "./single.css"
import Sidebar from '../Components.js/Sidebar'
import SinglePost from '../Components.js/SinglePost'
const Single = () => {
    return (
        <div className = "single">
            <SinglePost/>
            <Sidebar/>

        </div>
    )
}

export default Single
