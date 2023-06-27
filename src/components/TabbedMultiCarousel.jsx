import React, { useEffect, useRef } from 'react'
import styles from './TabbedMultiCarousel.module.css'

const TabbedMultiCarousel = () => {
    // let ip = 'http://13.53.142.82';

    // const updatedImageUrls = images.map((obj) => {
    //     const updatedUrl = obj.image.replace('localhost', ip);
    //     return updatedUrl;
    // });


    const elementRef = useRef(null);
    // let box = document.querySelector(`.${styles.product_container}`);
    const btnpressprev = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - 500;
        console.log(width)
    }

    const btnpressnext = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + 500;
        console.log(width)
    }

    return (
        <div className={styles.product_carousel}>
            <button className={styles.pre_btn} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.next_btn} onClick={btnpressnext}><p>&gt;</p></button>
            <div className={styles.product_container} ref={elementRef}>
                {/* {updatedImageUrls.map((slideImage, index) => (
                    <div key={index}>
                        {console.log(slideImage)}
                        <img src={slideImage} className={styles.article_image} alt='carousel-img' />
                    </div>
                ))} */}

                <div >
                    <img src='./md-img1.png' className={styles.article_image} alt='carousel-img' />
                </div>
                <div >
                    <img src='./md-img1.png' className={styles.article_image} alt='carousel-img' />
                </div>
                <div >
                    <img src='./md-img1.png' className={styles.article_image} alt='carousel-img' />
                </div>
                <div >
                    <img src='./md-img1.png' className={styles.article_image} alt='carousel-img' />
                </div>
            </div>

        </div>
    )
}

export default TabbedMultiCarousel