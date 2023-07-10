import React, { useState } from 'react';
import styles from './Navbar.module.css';
import menuImage from '/menu.png';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.logo}>
                <p>
                    <span>The</span>
                    <br />
                    Big
                    <br />
                    House
                </p>
            </div>
            <div className={`${styles.menu_icon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <img src={menuImage} alt="Menu" />
            </div>
            <ul className={`${styles.nav_items} ${isMenuOpen ? styles.open : ''}`}>

                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT US</a>
                </li>
                <li>
                    <a href="/theatre">THEATRE</a>
                </li>
                {/* <li>
                    <a href="/articles">ARTICLES</a>
                </li> */}
                <li>
                    <a href="/get-involved">GET INVOLVED</a>
                </li>
                <li>
                    <a href="/business">TBH MEANS BUSINESS</a>
                </li>
                <li>
                    <a href="/big-mouth">THE BIG MOUTH</a>
                </li>
            </ul>
            <div className={styles.search_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
        </nav>
    );
};

export default Navbar;
