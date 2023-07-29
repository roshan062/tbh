import React, { useEffect, useState, useRef } from 'react';
import styles from './Theatre.module.css';
import { ColorRing } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';
import styless from '../App.module.css'
import TheatrePreviousShows from '../components/TheatrePreviousShows';
import { useLocation } from 'react-router-dom';

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
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg') || modifiedUrl.endsWith('.png');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return (<img src={modifiedUrl} className={styles.article_image} />)
            }
            else {
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

    const scrollToSection = (whereTo) => {
        if (whereTo == "shows") {
            const section = document.getElementById('shows');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main>
            {data ? (<>
                <section>
                    {imageUrl(data.image)}
                </section>

                <section >
                    <div className={styles['image_textt']}>
                        <div className={styles['containerr']}>
                            <div className={styles['boxx']}>
                                <p>BOOKING NOW...</p>
                            </div>
                            <div className={styles['boxx2']}></div>
                        </div>
                        <h1 className={styles['heading_text']}>{data?.head_title}!!</h1>
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: data.description }} />
                        <p className={styles.more_info}>More Info <BsArrowUpRight className={styless.icon_color} /></p>
                    </div>
                    {/* <img onClick={() => scrollToSection("shows")} className={styles.down_arrow} src='./down-arrow.png' /> */}
                </section>

                <section id='shows'>
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