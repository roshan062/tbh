import React, { useState, useEffect } from 'react'
import styles from './BigMouthCards.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { FaVideo } from 'react-icons/fa';

const BigMouthCards = () => {
    const [data, setData] = useState('');
    const [totalArticles, setTotalArticles] = useState(3);
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

    return (
        <div className={styles.suggestion_article}>
            <div className={styles.grid_container}>
                {
                    data ? (
                        <>
                            {data.map((api, index) => {
                                if (index > totalArticles) return
                                if (api.type == 0) return
                                const ref = `/${api.type}`;
                                let url = api.image.replace("localhost/", imageIP)
                                return (
                                    <div key={index} className={styles.article_cards}>
                                        <h1 className={styles.head_title}>
                                            {api.head_title}
                                        </h1>
                                        <Link
                                            // to={ref} 

                                            className={styles.link}>
                                            <img
                                                // src={url}
                                                src='./images/bigmouth/tile.png'
                                                className={styles.image_container}
                                                onError={(e) => {
                                                    e.target.src = "./md-img1.png";
                                                }}
                                            />
                                            {/* <img className={styles.video_icon} src='./images/bigmouth/v-icon.png' alt='video-icon' /> */}
                                            {/* <i class="fa-solid fa-video"></i> */}
                                            <FaVideo className={`${styles.video_icon}`} />
                                            <img className={styles.rectangle_overlay_image_red} src='./images/bigmouth/red-rec.png' alt="red-img" />
                                            <img className={styles.rectangle_overlay_image_yellow} src='./images/bigmouth/yellow-rec.png' alt="yellow-img" />
                                        </Link>

                                        <Outlet />
                                    </div>
                                );
                            })
                            }
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

            <div className={styles.show_more}>
                <p onClick={() => setTotalArticles(totalArticles + 4)}><span>+</span><br />Show More</p>
            </div>
        </div>
    )
}

export default BigMouthCards