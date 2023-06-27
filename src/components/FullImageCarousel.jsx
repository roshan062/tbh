import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const FullImageCarousel = () => {
    return (
        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
            <div>
                <img src="./md-img1.png" alt="Image 1" style={{ height: "90vh" }} />
            </div>
            <div>
                <img src="./md-img1.png" alt="Image 2" style={{ height: "90vh" }} />
            </div>
            <div>
                <img src="./md-img1.png" alt="Image 3" style={{ height: "90vh" }} />
            </div>
        </Carousel>
    );
};

export default FullImageCarousel
