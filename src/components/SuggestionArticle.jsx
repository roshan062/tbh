import React, { useState, useEffect } from 'react'
import styles from './SuggestionArticle.module.css'
import { Link, Outlet } from 'react-router-dom'


const SuggestionArticle = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/articles";

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
                {/* <div className={styles.article_cards}><img src='' alt='pic' /></div>
                <div className={styles.article_cards}>Article 1</div>
                <div className={styles.article_cards}>Article 3</div>
                <div className={styles.article_cards}>Article 4</div> */}
                {
                    data ? (
                        <>
                            {data.map((api, index) => {
                                if (index > 4) return
                                if (api.type == 0) return
                                const ref = `/${api.type}`;
                                let url = api.image.replace("localhost", ip)
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
                <p><span>+</span><br />Show More</p>
            </div>
        </div>
    )
}

export default SuggestionArticle