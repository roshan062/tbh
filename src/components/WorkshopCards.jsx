import React, { useState, useEffect } from 'react'
import styles from './WorkshopCards.module.css'
import { Link, Outlet } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';


const WorkshopCards = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/get-tbh-means-business";

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
                                {/* if (index > 4) return */ }
                                {/* if (api.type == 0) return */ }
                                {/* const ref = `/${api.type}`; */ }
                                let url = item.image.replace("localhost", ip)
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
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
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