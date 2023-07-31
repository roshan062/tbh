import React, { useState, useEffect } from 'react'
import styles from './TheatrePreviousShows.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'


const TheatrePreviousShows = () => {
    const [data, setData] = useState('');
    const [totalArticles, setTotalArticles] = useState(4);
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const api = ip + "/articles";

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
        <div className={styles.previous_shows}>
            {
                data ? (
                    <>
                        <div className={styles.hanging_container}>
                            <div className={styles.box}><p>PREVIOUS SHOWS</p></div>
                            <div className={styles.box2}></div>
                        </div>
                        <div className={styles.grid_container}>
                            {data.map((api, index) => {
                                if (index > totalArticles) return
                                if (api.type == 0) return
                                const ref = `/${api.type}`;
                                let url = api.image.replace("localhost/", imageIP)
                                return (
                                    <div key={index} className={styles.article_cards} data-title={api.head_title}>
                                        <Link to={ref} className={styles.link}>
                                            <img src={url} className={styles.image_container}
                                                onError={(e) => {
                                                    e.target.src = "./md-img1.png";
                                                }}
                                            />
                                        </Link>
                                        <Outlet />
                                    </div>
                                );
                            })
                            }
                        </div>

                        <div className={styles.show_more}>
                            <p onClick={() => setTotalArticles(totalArticles + 4)}><span>+</span><br />Show More</p>
                        </div>
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
    )
}

export default TheatrePreviousShows