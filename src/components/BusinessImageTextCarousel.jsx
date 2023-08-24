import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './BusinessImageTextCarousel.module.css'
import styless from '../App.module.css'
import { Link } from 'react-router-dom'

const BusinessImageTextCarousel = ({ slides, enquiry }) => {
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
        }, 15000);

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
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>SPACES</p></div>
                <div className={styles.box2}></div>
            </div>

            <ul className={styles.carousel__list}>
                {slides.map((slides, index) => {
                    const { id, heading, content, image } = slides;
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={id}
                        >
                            <img src="./la.png" alt="left_arrow_img" className={styles.left_arrow}
                                onClick={() => handleLeftClick(index + 1)}
                            />
                            <blockquote className={styles.carousel__quote}>
                                <h2 className={styles.heading}>{heading}</h2>
                                <p>{content}</p>
                                <Link to={enquiry} className={styles.link}>
                                    <h3>Make Enquiry <BsArrowUpRight className={`${styless.icon_color} ${styles.arrow_icon}`} /></h3>
                                </Link>
                            </blockquote>
                            <div className={styles.carousel_img}>
                                <img src={cleanImgUrl(image)} alt="carousel-image"
                                    onError={(e) => {
                                        e.target.src = "./md-img1.png";
                                    }}
                                />
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

export default BusinessImageTextCarousel;
