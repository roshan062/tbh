import React, { useState, useEffect } from 'react'
import styles from './BigMouthCaraousel.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BigMouthCaraousel = () => {
    const [data, setData] = useState('');
    // const [totalArticles, setTotalArticles] = useState(3);
    const ip = import.meta.env.VITE_IP || 'default value';
    // const api = ip + "/articles";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch(api);
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div className={styles.suggestion_article}>
            <div className={styles.grid_container}>
                {/* {
                    data ? ( */}
                <>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                    </Carousel>;
                </>
                {/* ) : (
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
                } */}
            </div>
            <div className={styles.show_more}>
                <p
                //  onClick={() => setTotalArticles(totalArticles + 4)}
                >
                    <span className={styles.plus}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41.979" viewBox="0 0 60 61.979" className={styles.color_change}>
                            <g id="PLUS" transform="translate(-897.5 -3715.5)">
                                <path id="Line_477" data-name="Line 477" d="M60,2H0V-2H60Z" transform="translate(897.5 3745.5)" fill="#fff" />
                                <path id="Line_478" data-name="Line 478" d="M60,2H0V-2H60Z" transform="translate(927.5 3715.5) rotate(90)" fill="#fff" />
                                <path id="Path_471" data-name="Path 471" d="M18894.9-7283.257h-.9v-1.1h-1.1v-.9h1.1v-2h2.9v2.9h-2Z" transform="translate(9136.755 -14737.517) rotate(135)" fill="#fff" />
                            </g>
                        </svg>
                        <svg className={styles.vee} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" /></svg>

                    </span><br />Show More</p>

            </div>
        </div>
    )
}

export default BigMouthCaraousel