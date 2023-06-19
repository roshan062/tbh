import React from 'react'
import styles from './Carousel.module.css'


const Carousel = ({ images }) => {
    let ip = 'http://13.53.142.82';

    const updatedImageUrls = images.map((obj) => {
        const updatedUrl = obj.image.replace('localhost', ip);
        return updatedUrl;
    });
    let box = document.querySelector(`.${styles.product_container}`);


    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - 500;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + 500;
        console.log(width)
    }

    return (
        <div className={styles.product_carousel}>
            <button className={styles.pre_btn} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.next_btn} onClick={btnpressnext}><p>&gt;</p></button>
            <div className={styles.product_container}>
                {updatedImageUrls.map((slideImage, index) => (
                    <div key={index}>
                        {console.log(slideImage)}
                        <img src={slideImage} className={styles.article_image} alt='carousel-img' />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Carousel