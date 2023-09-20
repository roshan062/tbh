import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleFour.module.css';
import Carousel from '../components/Carousel';
import ArticleOneCarousel from '../components/ArticleOneCarousel';
import ArticleFourCarousel from '../components/ArticleFourCarousel';
import { useLocation, useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import VideoImage from '../components/VideoImage';
import BigMouthArticleFourCaraousel from '../components/BigMouthArticleFourCarousel';
import BigMouthArticlesRelatedCarousel from '../components/BigMouthArticlesRelatedCarousel';


const ArticleFour = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    // const api = ip + "/article/4/150";
    const { id: routePath } = useParams();
    const api = ip + `/article/4/${routePath}/`;

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

    //array for carousel images
    // let imagess = [];
    // if (data) {
    //     for (let i = 1; i <= 8; i++) {
    //         imagess.push(`${data.slider_image}${i}`);
    //     }
    //     console.log(imagess)
    // }

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

                    <section className={styles.quote_section}>
                        <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
                    </section>

                    <section className={styles.lowertext}>
                        <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>
                    </section>

                    {/* <section className={styles.thumbnail_container}>
                        <VideoImage videoimageurl="./blank-carousel.png" />
                    </section> */}

                    {/* <section className={styles.another_section}>
                        <h1 className={styles.another_title}>
                           
                            {data.sub_desc_title}
                        </h1>
                        <p className={styles.another_para}>
                          
                            {data.sub_desc}
                        </p>
                    </section> */}

                    <section className={styles.carousel}>
                        {/* <ArticleOneCarousel images={imagess} /> */}
                        <ArticleFourCarousel />
                    </section>

                    <section className={styles.you_may_like_container}>
                        <div className={styles['containerr']}>
                            <div className={styles['boxx']}>
                                <p>YOU MAY ALSO LIKE</p>
                            </div>
                            <div className={styles['boxx2']}></div>
                        </div>
                        <BigMouthArticlesRelatedCarousel articlenum="4" />
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