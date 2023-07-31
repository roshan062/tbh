import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './ImageTextCarousel.module.css'
import styless from '../App.module.css'
import { Link } from 'react-router-dom'

const ImageTextCarousel = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(1);
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

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
        if (slideIndex < 3) setActiveSlide(slideIndex + 1);
        else if (slideIndex == slides.length) setActiveSlide(1)
    };

    const handleLeftClick = (slideIndex) => {
        if (slideIndex > 1) setActiveSlide(slideIndex - 1);
        else if (slideIndex == 1) setActiveSlide(slides.length)
    };

    return (
        <div className={styles.container}>
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>WHAT'S GOING DOWN</p></div>
                <div className={styles.box2}></div>
            </div>

            <ul className={styles.carousel__list}>
                {slides.map((review, index) => {
                    let { heading, description, link, image } = review;
                    image = image.replace('localhost/', imageIP)
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={count}
                        >
                            <img src="./Carousel Arrow -L.png" alt="left_arrow_img" className={styles.left_arrow}
                                onClick={() => handleLeftClick(index + 1)}
                            />
                            <blockquote className={styles.carousel__quote}>
                                <h2>{heading}</h2>
                                <p>"{description}"</p>
                                <Link to={link} className={styles.link}>
                                    <h3>More Info <BsArrowUpRight className={styless.icon_color} /></h3>
                                </Link>
                                <Link to={link} className={styles.link}>
                                    <h3>Book Now <BsArrowUpRight className={styless.icon_color} /></h3>
                                </Link>

                            </blockquote>
                            <div className={styles.carousel_img}>
                                <img src={image} alt="Image of Carousel" className={styles.selfimg} />
                            </div>
                            <img src="./Carousel Arrow -R.png" alt="right_arrow_img" className={styles.right_arrow}
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

export default ImageTextCarousel;
