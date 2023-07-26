import React, { useRef } from 'react'
import styles from './TabbedMultiCarousel.module.css'

const TabbedMultiCarousel = ({ slides }) => {
    const elementRef = useRef(null);

    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        return modifiedUrl;
    }
    const btnpressprev = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - 500;
    }

    const btnpressnext = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + 500;
    }

    return (
        <div className={styles.product_carousel}>
            <button className={styles.pre_btn} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.next_btn} onClick={btnpressnext}><p>&gt;</p></button>
            <div className={styles.product_container} ref={elementRef}>
                {slides.map((item, index) => {
                    const { name, description, image } = item;
                    return (
                        <div key={index} className={styles.each_card}>
                            <img src={cleanImgUrl(image)} className={styles.article_image} alt='carousel-img' />
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default TabbedMultiCarousel