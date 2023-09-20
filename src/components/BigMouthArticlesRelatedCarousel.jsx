import React, { useState, useEffect } from 'react'
import styles from './BigMouthArticlesRelatedCarousel.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BigMouthArticlesRelatedCarousel = ({ category, articlenum }) => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/articles";
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
            slidesToSlide: 1 // optional, default to 1.
        }
    };


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
                                {data.map((api, i) => {
                                    {/* if (api.category?.toLowerCase() === category) { */ }
                                    if (api.type !== articlenum) return
                                    const ref = `/${api.type}/${api.id}`;
                                    let url = imageIP + api.thumbnail?.replace("localhost/Admin_panel/uploads/", "/app/")
                                    return (
                                        <div className={styles.image_container} key={i}>
                                            <Link to={ref} className={styles.link}>
                                                <img
                                                    draggable={false}
                                                    src={url}
                                                    className={styles.carousel_images}
                                                    onError={(e) => {
                                                        e.target.src = "./md-img1.png";
                                                    }}
                                                />
                                            </Link>
                                            <Outlet />
                                        </div>
                                    );
                                    {/* } */ }
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

export default BigMouthArticlesRelatedCarousel