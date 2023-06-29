import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './ImageTextCarousel.module.css'
import { Link } from 'react-router-dom'

const ImageTextCarousel = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(1);
    const ip = import.meta.env.VITE_IP || 'default value';

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
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const handleIndicatorClick = (slideIndex) => {
        setActiveSlide(slideIndex);
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
                    image = image.replace('localhost', ip)
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={count}
                        >
                            <blockquote className={styles.carousel__quote}>
                                <h2>{heading}</h2>
                                <p>"{description}"</p>
                                <Link to={link} className={styles.link}>
                                    <h3>More Info <BsArrowUpRight /></h3>
                                </Link>
                                <Link to={link} className={styles.link}>
                                    <h3>Book Now <BsArrowUpRight /></h3>
                                </Link>

                            </blockquote>
                            <div className={styles.carousel_img}>
                                <img src={image} alt="Image of Carousel" className={styles.selfimg} />
                            </div>
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
