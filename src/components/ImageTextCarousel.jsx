import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './ImageTextCarousel.module.css'
import { Link } from 'react-router-dom'

const QuoteCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === 3) {
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

    const reviews = [
        {
            title: "NO MANS LAND",
            quote:
                "Door.com has been great. I feel like I got to work with a specialist at each point in the process. Plus, I'm amazed at the flat-fee for the sale! Great way to save at closing. Door.com has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful."
        },
        {
            title: "NO MANS LAND",
            quote:
                "I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the Door.com business model."
        },
        {
            title: "NO MANS LAND",
            quote:
                "The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to $14,000 in commissions. I will absolutely be using Door.com for the sale of my next property."
        }
    ];

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
                {reviews.map((review, index) => {
                    const { title, quote } = review;
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={count}
                        >
                            <blockquote className={styles.carousel__quote}>
                                <h2>{title}</h2>
                                <p>"{quote}"</p>
                                <Link to='' className={styles.link}>
                                    <h3>More Info <BsArrowUpRight /></h3>
                                </Link>
                                <Link to='' className={styles.link}>
                                    <h3>BOOK NOW <BsArrowUpRight /></h3>
                                </Link>

                            </blockquote>
                            <div className={styles.carousel_img}>
                                <img src="" alt="Image of Carousel" />
                            </div>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.carousel__indicator}>
                {reviews.map((_, index) => (
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

export default QuoteCarousel;
