import React from 'react';

const navTabs = (currentPage, handlePageChange) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a href="#home" onClick={()=> handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a href="#about-me" onClick={()=> handlePageChange('About-me')} className={currentPage === 'About-me' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#my-work" onClick={()=> handlePageChange('My-work')} className={currentPage === 'My-work' ? 'nav-link active' : 'nav-link'}>
                    My Work
                </a>
            </li>
            <li className="nav-item">
                <a href="#contact" onClick={()=> handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
    )
}

export default navTabs