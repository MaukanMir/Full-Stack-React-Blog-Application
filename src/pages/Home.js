import React from 'react'
import "./home.css"
import Header from "../Components.js/Header"
import Posts from "../Components.js/Posts"
import Sidebar from '../Components.js/Sidebar'

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar />
            </div>
        </>
    )
}

export default Home
