import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleOne.module.css';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import { useLocation } from 'react-router-dom';
import { BsTriangleFill } from 'react-icons/bs';
import ArticleOneCarousel from '../components/ArticleOneCarousel';
import ArrowAnimation from '../components/Arrow';
import VideoImage from '../components/VideoImage';

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

    // let Vsource;
    // if (data) {
    //     Vsource = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
    // }

    // const videoref = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    // const status = videoref.current;
    // function togglePlay() {
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
    //     if (data) {
    // modifiedUrl = imageIP + url.replace("localhost/Admin_panel/uploads/", "/app/Http");
    //         const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
    //         const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

    //         if (isImage) {
    //             return <img src={modifiedUrl} className={styles['article_image']} />;
    //         } else {
    //             return (
    //                 <div>
    //                     <video className={styles.video_playerr} ref={videoref} onClick={togglePlay}>
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

    const fetchedString = data?.description;
    const div = document.createElement('div');
    div.innerHTML = fetchedString;
    const modifiedText = div.textContent || div.innerText;
    const index = modifiedText.indexOf("It");
    const descriptionText = modifiedText.substring(index);

    return (
        <main className={styles.home_container}>
            {data ? (<>
                {/* {imageUrl(data.image)
                } */}

                <section>
                    <VideoImage videoimageurl={data.image} />
                </section>
                <div className={styles['image_textt']}>
                    <h1 className={styles['heading_text']}>{data?.head_title}!!</h1>
                </div>

                <section className={styles['title_section']}>
                    <div className={styles['containerr']}>
                        <div className={styles['boxx']}>
                            <p>NEWS</p>
                        </div>
                        <div className={styles['boxx2']}></div>
                    </div>
                    <h1 className={styles.title_section_title}>{data.title}</h1>
                    <p className={styles.title_section_para}>
                        By <span>The Big House</span> | in NEWS | 1st May 2023
                    </p>
                    <p className={styles.desc_text}>
                        {descriptionText}
                    </p>
                    <h1 className={styles.title_section_subheading}>Sub Heading H3</h1>
                    <p className={styles.desc_text}>
                        Paragraph: The magic of theatre can be healing for many people. Participating in theatre can
                        help to reduce feelings of anxiety, depression, and other mental health issues. It can be a
                        great way to find a creative outlet, manage stress, and find a source of joy. Theatre can help
                        to improve focus and concentration, as well as to boost your confidence.
                        The power of theatre to make people think, feel, and reflect on the world deeply is a great
                        tool to make positive changes in people’s lives. Through theatre, you can gain insight into
                        yourself, learn more about the world, and practice empathy while engaging your emotions in the
                        process. If this content block is longer or shorter - the container adapts and the padding is
                        retained between sections.
                    </p>
                </section>

                {/* <section className={styles['middle_section']}>

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

                </section> */}

                {/* <section className={styles.video_image_container}>

                    <video ref={videoref} onClick={togglePlay} height='' width=''
                        poster='./images/article1/article_1_video.png'
                        className={styles.self_video}>
                        <source
                            src={Vsource}
                            type="video/mp4"
                        />
                    </video>
                    {!isPlaying && (
                        <div className={styles.content_video_play_button} >
                            <img src='./images/about/y-p.png' onClick={togglePlay} />
                            <img src='./images/about/circle.png' className={styles.red_circle} onClick={togglePlay} />
                            <img src='./images/about/triangle.png' className={styles.red_triangle} onClick={togglePlay} />

                        </div>
                    )}
                </section> */}

                <section>
                    <VideoImage videoimageurl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
                </section>


                <section className={styles.another_section}>
                    <h1 className={styles.another_title}>
                        Another sub section title
                    </h1>
                    <p className={styles.another_para}>
                        The magic of theatre can be healing for many people. Participating in theatre can help to reduce feelings of
                        anxiety, depression, and other mental health issues. It can be a great way to find a creative outlet, manage stress,
                        and find a source of joy. Theatre can help to improve focus and concentration, as well as to boost your confidence.
                        <br /><br />
                        The theatre can help you to build a sense of community, which can be especially important if you need a group
                        of supportive people to lean on. Being a part of a theatrical group can also be great for networking. New directors,
                        producers, and other theatre professionals can be easier to connect with by being part of the theatre world.
                    </p>
                </section>

                <section>
                    <VideoImage videoimageurl={data.image} />
                </section>

                <section className={styles['prologue']}>
                    <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>
                </section>


                <section className={styles.another_section}>
                    <h1 className={styles.another_title}>
                        Another sub section title
                    </h1>
                    <p className={styles.another_para}>
                        The magic of theatre can be healing for many people. Participating in theatre can help to reduce feelings of
                        anxiety, depression, and other mental health issues. It can be a great way to find a creative outlet, manage stress,
                        and find a source of joy. Theatre can help to improve focus and concentration, as well as to boost your confidence.
                        <br /><br />
                        The theatre can help you to build a sense of community, which can be especially important if you need a group
                        of supportive people to lean on. Being a part of a theatrical group can also be great for networking. New directors,
                        producers, and other theatre professionals can be easier to connect with by being part of the theatre world.
                    </p>
                </section>

                <section className={styles['quote_section']}>
                    <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
                </section>

                <section className={styles.carousel}>
                    <ArticleOneCarousel images={data.subheadings} />
                </section>

                <p className={styles.more_news}>More News
                    <ArrowAnimation />
                </p>
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
