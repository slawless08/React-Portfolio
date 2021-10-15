import React, { useState } from "react";

import Nav from "./Nav";
import Home from './pages/Home';
import AboutMe from './pages/About-me';
import MyWork from './pages/My-work';
import Contact from './pages/Contact';

export default function Header(){
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if(currentPage === 'Home'){
            return <Home />;
        }
        if(currentPage === 'About-me'){
            return <AboutMe />;
        }
        if(currentPage === 'My-work'){
            return <MyWork />;
        }
        if(currentPage === 'Contact'){
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    );
}