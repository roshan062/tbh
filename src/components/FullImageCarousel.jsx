// import React from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

// const FullImageCarousel = ({ slides }) => {
//     const ip = import.meta.env.VITE_IP || 'default value';
//     const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
//     const cleanImgUrl = function (fetchedUrl) {
//         const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
//         return modifiedUrl;
//     }

//     return (
//         <Carousel showThumbs={false} showStatus={false} showIndicators={true}>
//             {slides.map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <img src={cleanImgUrl(item.image)} alt="Image 2" style={{ maxHeight: "90vh" }} />
//                     </div>
//                 )
//             })}
//         </Carousel>
//     );
// };

// export default FullImageCarousel


import React, { useEffect, useState } from "react";
// import { BsArrowUpRight } from 'react-icons/bs';
import styles from './FullImageCarousel.module.css'
import styless from '../App.module.css'
import { Link } from 'react-router-dom'
import ArrowAnimation from '../components/Arrow';

const FullImageCarousel = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(1);

    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        return modifiedUrl;
    }

    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === slides.length) {
                current = 1;
            } else {
                current += 1;
            }
            setActiveSlide(current);
        };

        const intervalId = setInterval(() => {
            cycleReviews();
        }, 10000);

        return () => clearInterval(intervalId);
    }, []);


    const handleIndicatorClick = (slideIndex) => {
        setActiveSlide(slideIndex);
    };

    const handleRightClick = (slideIndex) => {
        if (slideIndex < slides.length) setActiveSlide(slideIndex + 1);
    };

    const handleLeftClick = (slideIndex) => {
        if (slideIndex > 1) setActiveSlide(slideIndex - 1);
    };

    return (
        <div className={styles.container}>

            <ul className={styles.carousel__list}>
                {slides.map((slides, index) => {
                    const { heading, description, link, image } = slides;
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={count}
                        >
                            <img src="./la.png" alt="left_arrow_img" className={styles.left_arrow}
                                onClick={() => handleLeftClick(index + 1)}
                            />
                            <div className={styles.carousel_img}>
                                <img src={cleanImgUrl(image)} alt="carousel-image" />
                            </div>
                            <img src="./ra.png" alt="right_arrow_img" className={styles.right_arrow}
                                onClick={() => handleRightClick(index + 1)}
                            />
                        </li>
                    );
                })}
            </ul>
            <div className={styles.carousel__indicator}>
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.carousel__dot} ${index + 1 === activeSlide ? styles.active : ""}`}
                        onClick={() => handleIndicatorClick(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FullImageCarousel;
