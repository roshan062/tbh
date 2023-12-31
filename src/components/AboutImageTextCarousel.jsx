import React, { useEffect, useState } from "react";
// import { BsArrowUpRight } from 'react-icons/bs';
import styles from './AboutImageTextCarousel.module.css'
import styless from '../App.module.css'
import { Link } from 'react-router-dom'
import ArrowAnimation from '../components/Arrow';

const AboutImageTextCarousel = ({ slides }) => {
    const [activeSlide, setActiveSlide] = useState(1);

    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/Admin_panel/uploads/", "/app/");
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
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>OUR HISTORY</p></div>
                <div className={styles.box2}></div>
            </div>

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
                            <blockquote className={styles.carousel__quote}>
                                <h2 className={styles.heading}>{heading}</h2>
                                <p className={styles.desc}>{description}</p>
                                <Link to={link} className={styles.link}>
                                    <h3>More Info
                                        {/* <BsArrowUpRight className={`${styless.icon_color} ${styles.arrow_icon}`} /> */}
                                        <ArrowAnimation />
                                    </h3>
                                </Link>
                            </blockquote>
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

export default AboutImageTextCarousel;
