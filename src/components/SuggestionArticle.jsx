import React, { useState, useEffect } from 'react'
import styles from './SuggestionArticle.module.css'
import { Link, Outlet } from 'react-router-dom'


const SuggestionArticle = () => {
    const [data, setData] = useState('');
    const [totalArticles, setTotalArticles] = useState(4);
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
            <div className={styles.hanging_container}>
                <div className={styles.box}><p>NEWS</p></div>
                <div className={styles.box2}></div>
            </div>
            <div className={styles.grid_container}>
                {
                    data ? (
                        <>
                            {data.map((api, index) => {
                                if (index > totalArticles) return
                                if (api.type == 0) return
                                const ref = `/${api.type}`;
                                let url = api.image.replace("localhost/Admin_panel", imageIP)
                                return (
                                    <div key={index} className={styles.article_cards}>
                                        <Link to={ref} className={styles.link}>
                                            <img src={url} className={styles.image_container} />
                                        </Link>
                                        <div className={styles.cards_content}>
                                            <p>{api.head_title}</p>
                                        </div>
                                        <Outlet />
                                    </div>
                                );
                            })
                            }
                        </>
                    ) : (
                        <p>Api's data not fetched</p>
                    )
                }
            </div>

            <div className={styles.show_more}>
                <p onClick={() => setTotalArticles(totalArticles + 4)}><span>+</span><br />Show More</p>
            </div>
        </div>
    )
}

export default SuggestionArticle