import React, { useState, useEffect } from 'react'
import styles from './BigMouthCaraousel.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BigMouthCaraousel = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/tbm_article5/";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.3,
            slidesToSlide: 3.3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 664, min: 0 },
            items: 1.2,
            slidesToSlide: 1.2 // optional, default to 1.
        }
    };

    const images = [
        // "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        // "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",

        "./images/bigmouth/c1.png",
        "./images/bigmouth/c2.png",
        "./images/bigmouth/c3.png",
        "./images/bigmouth/c4.png",
    ];

    const title = [
        "GET IN",
        "BIG UP",
        "A ONE OFF",
        "TITLE"
    ]

    return (
        <div className={styles.suggestion_article}>
            <div className={styles.grid_container}>
                {
                    data ? (
                        <>
                            <Carousel
                                arrows={false}

                                responsive={responsive}
                                className={styles.carousel_container}
                            >
                                {/* {images.slice(0, 4).map((image, i) => { */}
                                {data.elements.map((item, i) => {
                                    return (<div className={styles.image_container} key={i}>

                                        <img
                                            draggable={false}
                                            // src={image}
                                            src={item.video_image_link}
                                            className={styles.carousel_images}
                                        />
                                        {/* <p className={styles.overlay_title}>{title[i]}</p> */}
                                        <p className={styles.overlay_title}>{item.heading_text}</p>

                                    </div>
                                    );
                                })}
                            </Carousel>
                        </>

                    ) : (
                        <div className={styless.spinner}>
                            <ColorRing
                                className={styless.spinner}
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default BigMouthCaraousel