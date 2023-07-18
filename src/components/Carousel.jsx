import React from 'react'
import styles from './Carousel.module.css'


const Carousel = ({ images }) => {
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const updatedImageUrls = images.map((obj) => {
        const updatedUrl = obj.image.replace('localhost/Admin_panel', imageIP);
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
                        <img src={slideImage} className={styles.article_image} alt='carousel-img' />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Carousel