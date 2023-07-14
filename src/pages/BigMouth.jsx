import React, { useState, useEffect } from 'react'
import styles from './BigMouth.module.css';
import styless from '../App.module.css'
import { ColorRing } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

const BigMouth = () => {

    const [data, setData] = useState('');

    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/big-mouth";

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


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


    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = ip + fetchedUrl.replace("localhost", "");
        return modifiedUrl;
    }


    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            modifiedUrl = ip + url.replace("localhost", "");

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
        <main>
            {data ? (<>
                <section>

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

export default BigMouth