import React from 'react'
import styles from './MoveDownArrow.module.css';

const MoveDownArrow = ({ icon }) => {
    // let new_src = icon;
    const scrollToSection = (whereTo) => {
        if (whereTo == "arrow") {
            const section = document.getElementById('arrow');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <div className={styles.container}>
            {/* <img onClick={() => scrollToSection("arrow")} className={styles.down_arrow} src='./down-arrow.png'  /> */}
            <img onClick={() => scrollToSection("arrow")} className={styles.down_arrow} src={`${icon ? icon : "./down-arrow.png"}`} />
        </div>
    )
}

export default MoveDownArrow