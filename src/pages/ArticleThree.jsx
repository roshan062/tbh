import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleThree.module.css'
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import { BsArrowLeft } from 'react-icons/bs'

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
                    {/* <p dangerouslySetInnerHTML={{ __html: data.title }}></p> */}
                </div>

                <section className={styles.title_section}>
                    <h1>{data.head_title}</h1>
                    <p className={styles.title_section_para}>By <span>The Big House Means Business | </span> Workshop Focus: Diversity Inclusion</p>
                </section>

                <section className={styles.middletext}>
                    <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                </section>

                <section className={styles.quote_section}>
                    <div dangerouslySetInnerHTML={{ __html: data.quote_2 }}></div>
                    <p className={styles.publisher_name}>SAGE Publishing Employee</p>
                </section>

                <section>
                    {imageUrl(data.media)}
                </section>

                <section className={styles.quote_section}>
                    <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
                    <p className={styles.publisher_name}>SAGE Publishing Employee</p>
                </section>

                <section className={styles.inquiry}>
                    <span className={styles.bold}>To Book or make an enquiry </span> about how this workshop can be tailored to your needs
                    <span className={styles.blue_underline}> contact The Big House Means Business team today </span> or check out our
                    <span className={styles.blue_underline}> other workshops</span>
                </section>

                <section className={styles.workshop}>
                    <div className={styles.iconWrapper}>
                        <BsArrowLeft className={styles.arrow_icon} />
                    </div>
                    <span>All Workshops</span>
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