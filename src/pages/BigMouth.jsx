import React, { useState, useEffect, useRef } from 'react'
import styles from './BigMouth.module.css';
// import styless from '../App.module.css'
import { ColorRing } from 'react-loader-spinner'
// import { BsArrowUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import BigMouthCards from '../components/BigMouthCards';

const BigMouth = () => {

    const [data, setData] = useState('');

    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/big-mouth";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'


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
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/Admin_panel", "");
        return modifiedUrl;
    }

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
        console.log("modified url: ", url)
        if (data) {
            if (url.includes('localhost')) {
                modifiedUrl = imageIP + url.replace("localhost/Admin_panel", "");
            }
            else {
                modifiedUrl = url;
            }
            console.log("modified url: ", modifiedUrl)
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
            {/* {data ? (<> */}

            <section>
                {/* {imageUrl(data[''][0][''])} */}
                <img src='./blank.jpeg' className={styles.article_image} />
            </section>

            <section>
                <div className={styles.image_text_container}>
                    <div className={styles.image_text}>The Big Mouth</div>
                </div>
            </section>

            <section className={styles.home_news}>
                <div className={styles.home_news_content}>
                    <h1>THE HOME OF OUR <span>NEWS HIT</span> CONTENT</h1>
                </div>
                <div className={styles.home_news_element}>
                    <img src='./md-img1.png' alt='img' className={styles.selfimg} />
                    <img className={styles.red_square} src='./Rectangle 1620.png' alt='square_element' />
                </div>
            </section>


            <section className={styles.video_image_container}>
                {/* <div dangerouslySetInnerHTML={{ __html: data.aboutus_elements[0].video_link_embed }} /> */}
                {/* {imageUrl('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')} */}
                <video ref={videoref} onClick={togglePlay} controls height='70%' width='80%'>
                    <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                        type="video/mp4"
                    />
                </video>

            </section>

            <section>
                <BigMouthCards />
            </section>

            {/* </>
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
            )} */}
        </main>
    )
}

export default BigMouth