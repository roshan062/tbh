import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleFour.module.css';
import Carousel from '../components/Carousel';

const ArticleFour = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/4/150";
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
            modifiedUrl = imageIP + url.replace("localhost/Admin_panel", "");
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

    return (<>
        {data ? (<>

            {imageUrl(data.image)}
        </>
        ) : (
            <p>Loading data...</p>
        )}
        <div className={styles.image_text}>
            <div className={styles.container}>
                <div className={styles.box}><p>THE BIG MOUTH</p></div>
                <div className={styles.box2}></div>
            </div>
            <h1 className={styles.heading_text}>
                {data.head_title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
        </div>

        <section className={styles.subtitle}>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.title }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>
        <section className={styles.middletext}>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section>
            {data && data.media ? (<>
                {imageUrl(data.media)}
            </>
            ) : (
                <p></p>
            )}
        </section>

        <section className={styles.quote_section}>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section className={styles.lowertext}>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section className={styles.carousel}>
            {data ? (<>
                <Carousel images={data.images} />

            </>
            ) : (
                <p>Loading carousel...</p>
            )}
        </section>
    </>
    )
}

export default ArticleFour