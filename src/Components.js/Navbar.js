import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className ="top">
            <div className="topLeft">
            <i className ="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-instagram"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">Logout</li>
                </ul>
            </div>
            <div className="topRight">
                <img className ="topImg" src="https://images.pexels.com/photos/9556547/pexels-photo-9556547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <i className ="topSearch fas fa-search"></i>
            </div>
        </div>
    )
}

export default Navbar
