import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className ="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img className ="hugeImg" src="https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <p>Everything you need to know about the ever so changing tech landscape all in one place! From the emerging fields of Data engineering, Block Chain and many more roles. We got you covered!</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Categories</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        Life
                    </li>
                    <li className="sidebarListItem">
                        Music
                    </li>
                    <li className="sidebarListItem">
                        Style
                    </li>
                    <li className="sidebarListItem">
                        Tech
                    </li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className ="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
