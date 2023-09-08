import React, { useEffect, useState, useRef } from 'react';
import styles from './Theatre.module.css';
import { ColorRing } from 'react-loader-spinner'
// import { BsArrowUpRight } from 'react-icons/bs';
import styless from '../App.module.css'
import TheatrePreviousShows from '../components/TheatrePreviousShows';
import { useLocation } from 'react-router-dom';
import VideoImage from '../components/VideoImage';
import ArrowAnimation from '../components/Arrow';

const Theatre = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    const api = ip + "/article/145";

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    //fetching url data on page load
    useEffect(() => {
        fetchData();
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


    return (
        <main className={styles.home_container}>
            {data ? (<>
                <section className={styles.thumbnail_container}>
                    <VideoImage videoimageurl={data.image} />
                </section>

                <section className={styles.top}>
                    <div className={styles['image_textt']}>

                        <p className={styles.book_now}>Booking Now...</p>
                        <h1 className={styles['heading_text']}>{data?.head_title}!!</h1>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: data.description }} />
                        <p className={styles.more_info}>More Info
                            {/* <BsArrowUpRight className={`${styless.icon_color} ${styles.arrow_icon}`} /> */}
                            <ArrowAnimation />
                        </p>
                    </div>
                </section>

                <section className={styles.shows}>
                    <TheatrePreviousShows />
                </section>
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
            )}
        </main>
    )
}

export default Theatre