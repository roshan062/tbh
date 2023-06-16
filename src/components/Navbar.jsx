import React, { useState } from 'react';
import './Navbar.css';
import menuImage from '/menu.png';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo">
                <p>
                    <span>The</span>
                    <br />
                    Big
                    <br />
                    House
                </p>
            </div>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <img src={menuImage} alt="Menu" />
            </div>
            <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT US</a>
                </li>
                <li>
                    <a href="/services">THEATRE</a>
                </li>
                <li>
                    <a href="/portfolio">TBH MEANS BUSINESS</a>
                </li>
                <li>
                    <a href="/blog">GET INVOLVED</a>
                </li>
                <li>
                    <a href="/contact">THE BIG MOUTH</a>
                </li>
            </ul>
            <div className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
        </nav>
    );
};

export default Navbar;
