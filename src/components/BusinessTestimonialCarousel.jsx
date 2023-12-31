import React, { useEffect, useState } from "react";
import styles from './BusinessTestimonialCarousel.module.css'

const BusinessTestimonialCarousel = ({ testimonial }) => {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        let current = 1;
        const cycleReviews = () => {
            if (current === testimonial.length) {
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
            <ul className={styles.carousel__list}>
                {testimonial.map((review, index) => {
                    const { id, client_name, client_desc, quote } = review;
                    const count = index + 1;
                    return (
                        <li
                            className={`${styles.carousel__item} ${count === activeSlide ? styles.active : ""
                                } ${count < activeSlide ? styles.left : ""} ${count > activeSlide ? styles.right : ""
                                }`}
                            key={id}
                        >
                            <blockquote className={styles.carousel__quote}>
                                <p>`{quote}`</p>
                                <cite>
                                    <span className={styles.carousel__name}>{client_name}</span>
                                    <p className={styles.client_desc}>{client_desc}</p>
                                </cite>
                            </blockquote>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.carousel__indicator}>
                {testimonial.map((_, index) => (
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

export default BusinessTestimonialCarousel;
