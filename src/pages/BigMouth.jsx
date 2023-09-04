import React, { useState, useEffect, useRef } from 'react'
import styles from './BigMouth.module.css';
// import styless from '../App.module.css'
import { ColorRing } from 'react-loader-spinner'
// import { BsArrowUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import BigMouthCards from '../components/BigMouthCards';
import { BsTriangleFill } from 'react-icons/bs';
import BigMouthCaraousel from '../components/BigMouthCaraousel';


const BigMouth = () => {

    const [data, setData] = useState('');

    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/big-mouth";
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
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        return modifiedUrl;
    }

    const videoref = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    function togglePlay() {
        const status = videoref.current;
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
        console.log(url)
        if (data) {
            if (url.includes('localhost')) {
                modifiedUrl = imageIP + url.replace("localhost/", "");
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
        <main className={styles.home_container}>
            {/* {data ? (<> */}

            <section>
                {/* {imageUrl(data[''][0][''])} */}
                <img src='./images/bigmouth/header.png' className={styles.article_image} />
                <img src='./images/bigmouth/big-mouth.png' className={styles.mouth_image} />
            </section>

            <section>
                <div className={styles.image_text_container}>
                    <div className={styles.image_text}>The Big Mouth</div>
                </div>
            </section>

            <section className={styles.home_news}>
                <div className={styles.home_news_content}>
                    <h1>THE HOME <br /> OF OUR <br /><span className={styles.word}>NEWS HIT</span><br /> CONTENT</h1>
                </div>
                <div className={styles.home_news_element}>
                    <p className={styles.news_para}>
                        Welcome to The Big Mouth, the place where The Big House’s digital content lives.
                        It’s still early days and this is just the start of some big things to come.
                        Read more about what we’ve <span className={styles.inbetween_plan}> got planned </span>  or take a look below at what we have for you right now.
                    </p>
                    {/* <div className={styles.red_square}></div> */}
                </div>
            </section>


            <section className={styles.video_image_container}>
                {/* <div dangerouslySetInnerHTML={{ __html: data.aboutus_elements[0].video_link_embed }} /> */}
                {/* {imageUrl('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')} */}
                <video ref={videoref} onClick={togglePlay} height='' width=''
                    // poster='https://mannyadmin.bechocar.com/uploads/people_image.jpg'
                    poster='./images/bigmouth/video-banner.png'
                    className={styles.self_video}>
                    <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                        type="video/mp4"
                    />
                </video>
                {!isPlaying && (
                    <button className={styles.content_video_play_button} >
                        <img src='y-p.png' onClick={togglePlay} />
                        <img src='p-c.png' className={styles.red_circle} onClick={togglePlay} />
                        <img src='ics.png' className={styles.red_triangle} onClick={togglePlay} />
                        <BsTriangleFill className={styles.triangle_icon} />

                    </button>
                )}
            </section>

            <section className={styles.bigmouth_cards_section}>
                {/* <BigMouthCards /> */}
                <BigMouthCaraousel />
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