import React, { useState, useEffect } from 'react'
import styles from './WorkshopCards.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';


const WorkshopCards = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/get-tbh-means-business";
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
        <div className={styles.workshop_cards}>

            <div className={styles.grid_container}>
                {
                    data ? (
                        <>
                            {data.workshops.map((item, index) => {
                                let url = item.image.replace("localhost/Admin_panel", imageIP)
                                return (
                                    <div key={item.id} className={styles.article_cards}>
                                        <img src={url} className={styles.image_container} />
                                        <div className={styles.cards_content}>
                                            <p className={styles.title}>{item.title}</p>
                                            <p className={styles.focus}>{item.workshop_focus}</p>
                                            <Link to={item.link} className={styles.link}>
                                                <BsArrowUpRight className={styles.up_arrow} />
                                            </Link>
                                        </div>
                                        <Outlet />
                                    </div>
                                );
                            })
                            }
                        </>
                    ) : (
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
                    )
                }
            </div>

            <div className={styles.show_more}>
                <p><span>+</span><br />Show More</p>
            </div>
        </div>
    )
}

export default WorkshopCards