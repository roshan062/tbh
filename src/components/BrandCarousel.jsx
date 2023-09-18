import React, { useRef } from 'react'
import styles from './BrandCarousel.module.css'


const BrandCarousel = ({ images }) => {
    const boxx = useRef(null)
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    const cleanImgUrl = function (fetchedUrl) {
        // const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/Admin_panel/uploads/", "/app/Http");
        return modifiedUrl;
    }

    const btnpressprev = () => {
        let box = boxx.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - 500;
    }

    const btnpressnext = () => {
        let box = boxx.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + 500;
    }

    return (
        <div className={styles.product_carousel}>
            <button className={styles.pre_btn} onClick={btnpressprev}><p>&lt;</p></button>
            <button className={styles.next_btn} onClick={btnpressnext}><p>&gt;</p></button>
            <div className={styles.product_container} ref={boxx}>
                {images.map((slideImage, index) => (
                    <div key={index} className={styles.brand_img_container}>
                        <img src={cleanImgUrl(slideImage.partner_image)} className={styles.article_image} alt='carousel-img'
                            onError={(e) => {
                                e.target.src = "./wolkwagen.png";
                            }}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default BrandCarousel