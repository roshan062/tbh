import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleFive.module.css'
import { useLocation } from 'react-router-dom';

const ArticleFive = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/5/149";
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
            console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            modifiedUrl = imageIP + url.replace("localhost/", "");
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');

            if (isImage) {
                return (<img src={modifiedUrl} className={styles.article_image} />)
            } else {
                return (
                    <div className={styles.video_player_container}>
                        <video
                            ref={videoRef}
                            className={styles.video_player}
                            src={modifiedUrl}
                            onClick={togglePlay}
                        />
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

    return (<>
        {data ? (<>
            {imageUrl(data.image)}
        </>
        ) : (
            <p>Loading video/image...</p>
        )}

        <section className={styles.title_section}>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        </section>

        <section className={styles.middletext}>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}

        </section>
    </>
    )
}

export default ArticleFive