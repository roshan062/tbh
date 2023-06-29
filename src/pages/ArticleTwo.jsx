import React, { useEffect, useRef, useState } from 'react';
import styles from './ArticleTwo.module.css';
import Carousel from '../components/Carousel';

const ArticleTwo = () => {
    const [data, setData] = useState('');
    // const ip = import.meta.env.VITE_IP || 'default value';
    // const api = ip + ":5500/article/2/152";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/article/2/152');
            // const response = await fetch(api);
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
            const ip = "http://13.53.142.82/";
            modifiedUrl = ip + url.replace("localhost/", "");
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

    return (<main>
        {data ? (<>

            {imageUrl(data.image)}
        </>
        ) : (
            <p>Loading data...</p>
        )}
        <div className={styles.image_text}>
            <h1 className={styles.heading_text}>
                {data.head_title}
            </h1>
        </div>

        <section className={styles.title_grid}>
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
        </section>


        <section className={styles.middlemedia}>
            {data && data.media ? (<>
                {imageUrl(data.media)}
            </>
            ) : (
                <p></p>
            )}
        </section>


        <section className={styles.quote_divider}>
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

        </section>

        <section className={styles.carousel}>
            {data ? (<>
                <Carousel images={data.images} />

            </>
            ) : (
                <p>Loading carousel...</p>
            )}
        </section>
        <p className={styles.footer_border}></p>
    </main>
    )
}

export default ArticleTwo