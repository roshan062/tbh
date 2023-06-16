import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade, Zoom, Slide } from 'react-slideshow-image'
import styles from './ImagesSlider.module.css'


const ImageSlider = ({ images }) => {
    const ipAddress = 'http://13.53.142.82';

    const updatedImageUrls = images.map((obj) => {
        const updatedUrl = obj.image.replace('localhost', ipAddress);
        return updatedUrl;
    });

    return (
        <div className="slide-container">
            <Slide>
                {updatedImageUrls.map((slideImage, index) => (
                    <div key={index}>
                        {console.log(slideImage)}
                        <img src={slideImage} className={styles.article_image} />

                    </div>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSlider