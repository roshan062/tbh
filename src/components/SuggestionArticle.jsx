import React, { useState, useEffect } from 'react'
import styles from './SuggestionArticle.module.css'
import { Link, Outlet } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';
import ShowMore from './ShowMore';


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
                                let url = api.image.replace("localhost/", imageIP)
                                let newDescription = api.description.substring(0, 200)
                                return (
                                    <div key={index} className={styles.article_cards}>
                                        <Link to={ref} className={styles.link}>
                                            <img src={url} className={styles.image_container}
                                                onError={(e) => {
                                                    e.target.src = "./md-img1.png"

                                                }}
                                            />
                                        </Link>
                                        <div className={styles.cards_content}>
                                            <Link to={ref} className={styles.link}>
                                                <p className={styles.card_title}>{api.head_title}</p>
                                            </Link>
                                            {/* <div className={styles.card_description} dangerouslySetInnerHTML={{ __html: api.description }}> */}
                                            <div className={styles.card_description} dangerouslySetInnerHTML={{ __html: newDescription }}>
                                            </div>
                                        </div>
                                        <Outlet />
                                        {/* <AiOutlineArrowRight className={`${styles.arrow_icon}`} /> */}
                                        <div className={`${styles.arrow_icon}`}>
                                            <img src='./black-arrow-line.png' alt='arrow-line' className={styles.arrow_line} />
                                            <img src='./black-arrow-forward.png' alt='arrow-top' className={styles.arrow_top} />
                                        </div>
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
                <p onClick={() => setTotalArticles(totalArticles + 4)}><span className={styles.plus}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41.979" viewBox="0 0 60 61.979" className={styles.color_change}>
                        <g id="PLUS" transform="translate(-897.5 -3715.5)">
                            <path id="Line_477" data-name="Line 477" d="M60,2H0V-2H60Z" transform="translate(897.5 3745.5)" fill="#fff" />
                            <path id="Line_478" data-name="Line 478" d="M60,2H0V-2H60Z" transform="translate(927.5 3715.5) rotate(90)" fill="#fff" />
                            <path id="Path_471" data-name="Path 471" d="M18894.9-7283.257h-.9v-1.1h-1.1v-.9h1.1v-2h2.9v2.9h-2Z" transform="translate(9136.755 -14737.517) rotate(135)" fill="#fff" />
                        </g>
                    </svg>
                    <svg className={styles.vee} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" /></svg>
                    {/* <ShowMore /> */}
                </span><br />Show More</p>

            </div>
        </div>
    )
}

export default SuggestionArticle