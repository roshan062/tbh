import React from 'react';
import styles from './Arrow.module.css'

const ArrowAnimation = () => {
    return (
        <div className={styles.arrow}>
            <img src='./arrow-line.png' alt='arrow-line' className={styles.arrow_line} />
            <img src='./arrow-top.png' alt='arrow-top' className={styles.arrow_top} />
        </div>
    );
};

export default ArrowAnimation;
