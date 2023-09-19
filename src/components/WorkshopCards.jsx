import React, { useState, useEffect } from 'react'
import styles from './WorkshopCards.module.css'
import styless from '../App.module.css'
import { Link, Outlet } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';
import ArrowAnimation from '../components/Arrow';

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
                                {/* let url = item.image.replace("localhost/", imageIP) */ }
                                let url = imageIP + item.image.replace("localhost/Admin_panel/uploads/", "/app/");
                                return (
                                    <div key={item.id} className={styles.article_cards}>
                                        <img src={url} className={styles.image_container} />
                                        <div className={styles.cards_content}>
                                            <p className={styles.title}>{item.title}</p>
                                            <p className={styles.focus}>{item.workshop_focus}</p>
                                            <Link to={item.link} className={styles.link}>
                                                {/* <BsArrowUpRight className={styles.up_arrow} /> */}
                                                <div className={styles.arrow}>
                                                    <img src='./b-arrow-line.png' alt='arrow-line' className={styles.arrow_line} />
                                                    <img src='./b-arrow-top.png' alt='arrow-top' className={styles.arrow_top} />
                                                </div>
                                            </Link>
                                        </div>
                                        <img className={styles.rectangle_overlay_image_blue} src='./Path 507.png' alt="Overlay Image 1" />
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

            {/* <div className={styles.show_more}>
                <p><span>+</span><br />Show More</p>
            </div> */}

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

export default WorkshopCards