import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className ="headerTitleSm">React & Node</span>
                <span className ="headerTitleLg">Blog</span>
            </div>
            <img className ="headerImg" src="https://images.pexels.com/photos/9647962/pexels-photo-9647962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
        </div>
    )
}

export default Header
