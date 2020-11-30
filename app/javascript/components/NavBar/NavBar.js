import React from 'react';
import './NavBar.css'


const NavBar = () => {
    return(
        <div>
            <nav>
                <div className='logo'><b>Anime</b>&nbsp;<i className="far fa-clock watch"></i></div>
                <ul className='nav-links'>
                    <li><a href='/'><b>Home</b>&nbsp;<i className="fas fa-home"></i></a></li>
                    <li><a href='/about'><b>About</b>&nbsp;<i className="fas fa-info-circle"></i></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;