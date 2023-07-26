import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const FullImageCarousel = ({ slides }) => {
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        return modifiedUrl;
    }

    return (
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
            {slides.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={cleanImgUrl(item.image)} alt="Image 2" style={{ height: "90vh" }} />
                    </div>
                )
            })}
        </Carousel>
    );
};

export default FullImageCarousel
