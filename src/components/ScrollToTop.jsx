import React from 'react'
import styles from './ScrollToTop.module.css'

const ScrollToTop = () => {
    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <img onClick={scrollToTop} src='../../scroll-to-top.png' alt='scroll-to-top-img' className={styles.img} />
        </div>
    )
}

export default ScrollToTop