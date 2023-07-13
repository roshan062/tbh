import React, { useState } from 'react';
import styles from './Navbar.module.css';
import menuImage from '/menu.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles.logo}>
                <Link to='/'>
                    <p>
                        <span>The</span>
                        <br />
                        Big
                        <br />
                        House
                    </p>
                </Link>

            </div>
            <div className={`${styles.menu_icon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                <img src={menuImage} alt="Menu" />
            </div>
            <ul className={`${styles.nav_items} ${isMenuOpen ? styles.open : ''}`}>
                <li>
                    <Link to='/'>HOME</Link>
                </li>
                <li>
                    <Link to='/about'>ABOUT</Link>
                </li>
                <li>
                    <Link to='/theatre'>THEATRE</Link>
                </li>
                {/* <li>
                    <a href="/articles">ARTICLES</a>
                </li> */}
                <li>
                    <Link to='/get-involved'>GET INVOLVED</Link>
                </li>
                <li>
                    <Link to='/business'>TBH MEANS BUSINESS</Link>
                </li>
                <li>
                    <Link to='/big-mouth'>THE BIG MOUTH</Link>
                </li>
            </ul>
            <div className={styles.search_icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
        </nav>
    );
};

export default Navbar;
