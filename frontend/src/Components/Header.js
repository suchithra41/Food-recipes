import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header.css'

const Header = () => {
    return (
    <header>
        <div className="header-container">
            <div id="title">
                <Link to='/'>DM's Arena</Link>
            </div>
            <div id="nav">
                <nav id="nav">
                    <ul>
                        <Link to='/'><li>RECIPES <i className="fas fa-utensils"></i></li></Link>
                        <Link to='/admin'><li>ADMIN <i className="fas fa-user-cog"></i></li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}

export default Header
