import React from 'react';

const Nav = ({currentPage, handlePageChange}) => {
    return (
        <nav>
        <ul className="nav nav-tabs">
            <a href="#" class ="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <li className="nav-item">
                <a 
                href="#home" 
                onClick={()=> handlePageChange('Home')} 
                className={currentPage === 'Home' ? 'nav__link active' : 'nav__link'}>
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about-me" onClick={()=> handlePageChange('About-me')} className={currentPage === 'About-me' ? 'nav__link active' : 'nav__link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#my-work" onClick={()=> handlePageChange('My-work')} className={currentPage === 'My-work' ? 'nav__link active' : 'nav__link'}>
                    My Work
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={()=> handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav__link active' : 'nav__link'}>
                    Contact
                </a>
            </li>
        </ul>
    
        </nav>
    )
}

export default Nav