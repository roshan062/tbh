import React, { useState, useEffect } from 'react'
import styles from './BigMouthCaraouselOne.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BigMouthCaraouselOne = () => {
    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/articles";
    const art4 = ip + "/article/4/150";
    const art5 = ip + "/article/5/149/";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        fetchData2();
    }, []);
    useEffect(() => {
        fetchData3();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData);
            // console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData2 = async () => {
        try {
            const response = await fetch(art4);
            const jsonData = await response.json();
            setData2(jsonData);
            // console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const fetchData3 = async () => {
        try {
            const response = await fetch(art5);
            const jsonData = await response.json();
            setData3(jsonData);
            // console.log(jsonData)
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

    // const images = [
    //     "./images/bigmouth/c1.png",
    //     "./images/bigmouth/c2.png",
    //     "./images/bigmouth/c3.png",
    //     "./images/bigmouth/c4.png",
    // ];

    // const title = [
    //     "GET IN",
    //     "BIG UP",
    //     "A ONE OFF",
    //     "TITLE"
    // ]

    // { console.log(data3) }
    return (
        <div className={styles.suggestion_article}>
            <div className={styles.grid_container}>
                {
                    data3 && data3 ? (
                        <>
                            <Carousel
                                arrows={false}
                                responsive={responsive}
                                className={styles.carousel_container}
                            >
                                {/* {images.slice(0, 4).map((image, i) => { */}
                                {data.map((api, i) => {
                                    if (api.type < 4) return
                                    let url = ''
                                    const ref = `/${api.type}`;
                                    {/* console.log(data3) */ }
                                    {/* console.log(api.type) */ }
                                    if (api.type === 4) {
                                        url = imageIP + data2.thumbnail.replace("localhost/Admin_panel/uploads/", "/app/");
                                        {/* url = "./md-img1.png"; */ }
                                    }
                                    else if (api.type === 5) {
                                        url = imageIP + data3.thumbnail.replace("localhost/Admin_panel/uploads/", "/app/");

                                    }
                                    else {
                                        url = imageIP + api.image.replace("localhost/Admin_panel/uploads/", "/app/");
                                    }

                                    return (
                                        <div className={styles.image_container} key={i}>
                                            <Link to={ref} className={styles.link}>
                                                {console.log(api.type)}
                                                <img
                                                    draggable={false}
                                                    // src={images[0]}
                                                    src={url}
                                                    className={styles.carousel_images}
                                                    onError={(e) => {
                                                        e.target.src = "./md-img1.png";
                                                    }}
                                                />
                                                {/* <p className={styles.overlay_title}>{api.head_title}</p> */}
                                            </Link>
                                            <Outlet />
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

export default BigMouthCaraouselOne