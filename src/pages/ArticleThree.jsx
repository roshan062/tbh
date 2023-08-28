import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleThree.module.css'
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'

const ArticleThree = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/3/151";
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
            // console.log(jsonData)
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
            modifiedUrl = imageIP + url.replace("localhost/", "");
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
                            <button className={styles.play_button} onClick={togglePlay}>
                                ▶️
                            </button>
                        )}
                    </div>
                )
            }

        }
    }

    return (
        <main className={styles.home_container}>
            {data ? (<>
                {imageUrl(data.image)}

                <div className={styles.image_text}>
                    <div className={styles.container}>
                        <div className={styles.box}><p>WORKSHOP</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <h1 className={styles.heading_text}>
                        {data.head_title}
                    </h1>
                    <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
                </div>

                <section className={styles.title_section}>
                    <h1>{data.head_title}</h1>
                </section>

                <section className={styles.middletext}>

                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>

                </section>

                <section className={styles.quote_section}>

                    <div dangerouslySetInnerHTML={{ __html: data.quote_2 }}></div>

                </section>

                <section>

                    {imageUrl(data.media)}

                </section>

                <section className={styles.quote_section}>

                    <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>

                </section>

                <section className={styles.prologue}>

                    <h2 className='l-arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 512 512" id="left-arrow"><path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 
        0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.
        1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"></path></svg>

                        All Workshops</h2>
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

export default ArticleThree