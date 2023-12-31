import React, { useState, useEffect, useRef } from 'react'
import styles from './BigMouth.module.css';
import styless from '../App.module.css'
import { ColorRing } from 'react-loader-spinner'
// import { BsArrowUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
// import BigMouthCards from '../components/BigMouthCards';
import { BsTriangleFill } from 'react-icons/bs';
import BigMouthCaraouselOne from '../components/BigMouthCaraouselOne';
import BigMouthCaraousel from '../components/BigMouthCaraousel';
import VideoImage from '../components/VideoImage';
import MoveDownArrow from '../components/MoveDownArrow';

const BigMouth = () => {
    const [data, setData] = useState('');
    // const [data2, setData2] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/the-big-mouth";
    // const api2 = ip + "/article/5/149";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'


    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    useEffect(() => {
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetchData2();
    // }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // const fetchData2 = async () => {
    //     try {
    //         const response = await fetch(api2);
    //         const jsonData = await response.json();
    //         setData2(jsonData);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };


    // const cleanImgUrl = function (fetchedUrl) {
    // const modifiedUrl = imageIP + fetcheUrl.replace("localhost/Admin_panel/uploads/", "/app/");

    //     return modifiedUrl;
    // }

    // const videoref = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    // function togglePlay() {
    //     const status = videoref.current;
    //     if (isPlaying) {
    //         status.pause();
    //         setIsPlaying(false);
    //     }
    //     else {
    //         status.play();
    //         setIsPlaying(true);
    //     }
    // }


    // function imageUrl(url) {
    //     let modifiedUrl;
    //     console.log(url)
    //     if (data) {
    //         if (url.includes('localhost')) {
    //             modifiedUrl = imageIP + url.replace("localhost/", "");
    //         }
    //         else {
    //             modifiedUrl = url;
    //         }
    //         console.log("modified url: ", modifiedUrl)
    //         const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
    //         const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

    //         if (isImage) {
    //             return (<img src={modifiedUrl} className={styles.article_image} />)
    //         } else {
    //             return (
    //                 <div>
    //                     <video className={styles.video_player} ref={videoref} onClick={togglePlay}>
    //                         <source src={modifiedUrl} type="video/mp4" />
    //                     </video>
    //                     {!isPlaying && (
    //                         <button className={styles.play_button} onClick={togglePlay}>
    //                             ▶
    //                         </button>
    //                     )}
    //                 </div>
    //             )
    //         }
    //     }
    // }
    const scrollToSection = (whereTo) => {
        if (whereTo == "arrow") {
            const section = document.getElementById('arrow');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <main className={styles.home_container}>
            {data ? (<>

                <section className={styles.thumbnail_container}>
                    {/* {imageUrl(data[''][0][''])} */}
                    {/* <img src='./images/bigmouth/header.png' className={styles.article_image} /> */}
                    <VideoImage videoimageurl={data.elements[0].head_media} />
                    <img src='./images/bigmouth/big-mouth.png' className={styles.mouth_image} />
                    {/* <MoveDownArrow icon="./bm-down-arrow.png" /> */}
                    <img onClick={() => scrollToSection("arrow")} className={styles.down_arrow} src='./bm-down-arrow.png' />
                </section>

                <section>
                    <div className={styles.image_text_container} >
                        <div className={styles.image_text}>
                            {/* The Big Mouth */}
                            {data.elements[0].head_title}
                        </div>
                    </div>
                </section>

                <section className={styles.home_news} id='arrow'>
                    {/* <div className={styles.home_news_content}>
                        <h1>THE HOME <br /> OF OUR <br /><span className={styles.word}>NEWS HIT</span><br /> CONTENT</h1>
                    </div> */}

                    <div className={styles.home_news_content} dangerouslySetInnerHTML={{ __html: data.elements[0].heading }}>
                    </div>
                    <div className={styles.home_news_element}>
                        <p className={styles.news_para} dangerouslySetInnerHTML={{ __html: data.elements[0].description }}>

                            {/* {data.elements[0].description} */}
                        </p>
                        {/* <div className={styles.red_square}></div> */}
                    </div>
                </section>


                <section className={styles.thumbnail_container}>
                    <VideoImage videoimageurl={data.elements[0].media} />
                </section>

                <section className={styles.bigmouth_cards_section}>
                    <p className={styles.carousel_heading}>new to the big mouth</p>
                    <BigMouthCaraouselOne category="new to big mouth" />

                    {/* <p className={styles.carousel_heading}>behind the scenes</p>
                    <BigMouthCaraouselOne category="behind the scenes" />

                    <p className={styles.carousel_heading}>shorts</p>
                    <BigMouthCaraouselOne category="shorts" /> */}


                    {/* <p className={styles.carousel_heading}>behind the scenes</p>
                    <BigMouthCaraousel />
                    <p className={styles.carousel_heading}>shorts</p>
                    <BigMouthCaraousel /> */}
                </section>

                <div className={styles.show_more}>
                    <p
                    >
                        <span className={styles.plus}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41.979" viewBox="0 0 60 61.979" className={styles.color_change}>
                                <g id="PLUS" transform="translate(-897.5 -3715.5)">
                                    <path id="Line_477" data-name="Line 477" d="M60,2H0V-2H60Z" transform="translate(897.5 3745.5)" fill="#fff" />
                                    <path id="Line_478" data-name="Line 478" d="M60,2H0V-2H60Z" transform="translate(927.5 3715.5) rotate(90)" fill="#fff" />
                                    <path id="Path_471" data-name="Path 471" d="M18894.9-7283.257h-.9v-1.1h-1.1v-.9h1.1v-2h2.9v2.9h-2Z" transform="translate(9136.755 -14737.517) rotate(135)" fill="#fff" />
                                </g>
                            </svg>
                            <svg className={styles.vee} xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 1024 1024"><path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" /></svg>

                        </span><br />Show More</p>

                </div>

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