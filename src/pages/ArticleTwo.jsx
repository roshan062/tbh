import React, { useEffect, useRef, useState } from 'react';
import styles from './ArticleTwo.module.css';
import Carousel from '../components/Carousel';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import { useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'

const ArticleTwo = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/2/152";
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

    const videoref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const status = videoref.current;
    function togglePlay() {
        if (isPlaying) {
            status.pause();
            setIsPlaying(false);
        }
        else {
            status.play();
            setIsPlaying(true);
        }
    }

    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            // modifiedUrl = imageIP + url.replace("localhost/", "");
            modifiedUrl = imageIP + url.replace("localhost/Admin_panel/uploads/", "/app/");
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return (<img src={modifiedUrl} className={styles.article_image} />)
            } else {
                return (
                    <div>
                        <video className={styles.video_player} ref={videoref} onClick={togglePlay}>
                            <source src={modifiedUrl} type="video/mp4" />
                        </video>
                        {!isPlaying && (
                            <img src='./play-btn.png' alt='play-button-img'
                                className={styles.play_button} onClick={togglePlay}></img>
                        )}
                    </div>
                )
            }

        }
    }

    return (<main className={styles.home_container}>
        {data ? (<>

            {imageUrl(data.image)}

            <div className={styles.image_text}>
                <h1 className={styles.heading_text}>
                    {data.head_title}
                </h1>
            </div>

            <section className={styles.title_grid}>
                <section className={styles.subtitle}>

                    <div dangerouslySetInnerHTML={{ __html: data.title }}></div>

                </section>
                <section className={styles.middletext}>

                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>

                </section>
            </section>


            <section className={styles.middlemedia}>

                {imageUrl(data.media)}

            </section>


            <section className={styles.quote_divider}>
                <section className={styles.quote_section}>

                    <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>

                </section>

                <section className={styles.lowertext}>

                    <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>

                </section>

            </section>

            <section className={styles.carousel}>
                <Carousel images={data.images} />
            </section>

            <section className={styles.direct}>
                <p> <span><BsArrowLeft /></span> Previous</p>
                <p>All Productions</p>
                <p>Next <span><BsArrowRight /></span></p>
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

export default ArticleTwo