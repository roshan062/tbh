import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleOne.module.css';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import { useLocation } from 'react-router-dom';


const ArticleOne = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/145";
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
            modifiedUrl = imageIP + url.replace("localhost/", "");
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return <img src={modifiedUrl} className={styles['article_imagee']} />;
            } else {
                return (
                    <div>
                        <video className={styles.video_playerr} ref={videoref} onClick={togglePlay}>
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

    const fetchedString = data?.description;
    const div = document.createElement('div');
    div.innerHTML = fetchedString;
    const modifiedText = div.textContent || div.innerText;
    const index = modifiedText.indexOf("It");
    const descriptionText = modifiedText.substring(index);

    return (
        <main className={styles.home_container}>
            {data ? (<>
                {imageUrl(data.image)
                }
                <div className={styles['image_textt']}>
                    <div className={styles['containerr']}>
                        <div className={styles['boxx']}>
                            <p>NEWS</p>
                        </div>
                        <div className={styles['boxx2']}></div>
                    </div>
                    <h1 className={styles['heading_text']}>{data?.head_title}!!</h1>
                    <p className={styles['para_text']}>
                        By <span>The Big House</span> | Posted in: NEWSLETTER | 1st June 2023
                    </p>
                </div>

                <section className={styles['title_section']}>
                    <h1>{data?.title}</h1>
                    <p>
                        By <span>The Big House</span> | Posted in: NEWSLETTER | 1st June 2023
                    </p>
                    <p className={styles.desc_text}>
                        {descriptionText}
                    </p>
                </section>

                <section className={styles['middle_section']}>

                    {imageUrl(data.subheadings[0].image)}

                    <div className={styles['text_container_right']}>

                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[0].sub_heading }}></div>
                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[0].description }}></div>

                    </div>

                    <div className={styles['text_container_left']}>

                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[1].sub_heading }}></div>
                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[1].description }}></div>

                    </div>


                    {imageUrl(data.subheadings[1].image)}

                    {imageUrl(data.subheadings[2].image)}

                    <div className={styles['text_container_right']}>

                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[2].sub_heading }}></div>
                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[2].description }}></div>

                    </div>

                    <div className={styles['text_container_left']}>

                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[3].sub_heading }}></div>
                        <div dangerouslySetInnerHTML={{ __html: data.subheadings[3].description }}></div>

                    </div>


                    {imageUrl(data.subheadings[3].image)}

                </section>

                <section className={styles['quote_section']}>

                    <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>

                </section>

                <section className={styles['prologue']}>

                    <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>


                    <h2 className={styles['l_arrow']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 512 512" id="left_arrow">
                            <path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"></path>
                        </svg>
                        Back To News
                    </h2>
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
    );
};

export default ArticleOne;
