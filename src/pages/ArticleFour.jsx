import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleFour.module.css';
import Carousel from '../components/Carousel';
import ArticleOneCarousel from '../components/ArticleOneCarousel';
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import VideoImage from '../components/VideoImage';
import BigMouthCaraousel from '../components/BigMouthCaraousel';


const ArticleFour = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/4/150";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    useEffect(() => {
        fetchData();
    }, []);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

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
        <main className={styles.home_container}>
            {data ? (
                <>

                    <section className={styles.thumbnail_container}>
                        <VideoImage videoimageurl={data.image} />
                    </section>

                    <div className={styles.image_text}>
                        <h1 className={styles.heading_text}>
                            {data.head_title}
                        </h1>
                        {/* <p dangerouslySetInnerHTML={{ __html: data.title }}></p> */}
                    </div>

                    <section className={styles.subtitle}>
                        <div dangerouslySetInnerHTML={{ __html: data.title }}></div>
                    </section>

                    <section className={styles.middletext}>
                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                    </section>

                    <section className={styles.thumbnail_container}>
                        <VideoImage videoimageurl={data.media} />
                    </section>

                    <section className={styles.lowertext}>
                        <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>
                    </section>

                    <section className={styles.thumbnail_container}>
                        <VideoImage videoimageurl="./blank-carousel.png" />
                    </section>

                    <section className={styles.another_section}>
                        <h1 className={styles.another_title}>
                            Another sub section title
                        </h1>
                        <p className={styles.another_para}>
                            The magic of theatre can be healing for many people. Participating in theatre can help to reduce feelings of
                            anxiety, depression, and other mental health issues. It can be a great way to find a creative outlet, manage stress,
                            and find a source of joy. Theatre can help to improve focus and concentration, as well as to boost your confidence.
                            <br /><br />
                            The theatre can help you to build a sense of community, which can be especially important if you need a group
                            of supportive people to lean on. Being a part of a theatrical group can also be great for networking. New directors,
                            producers, and other theatre professionals can be easier to connect with by being part of the theatre world.
                        </p>
                    </section>

                    <section className={styles.quote_section}>
                        <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
                    </section>

                    <section className={styles.carousel}>
                        <ArticleOneCarousel images={data.images} />
                    </section>

                    <section className={styles.you_may_like_container}>
                        <div className={styles['containerr']}>
                            <div className={styles['boxx']}>
                                <p>YOU MAY ALSO LIKE</p>
                            </div>
                            <div className={styles['boxx2']}></div>
                        </div>
                        <BigMouthCaraousel />
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

export default ArticleFour