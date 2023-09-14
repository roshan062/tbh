import React, { useState, useEffect, useRef } from 'react'
import styles from './Business.module.css'
import styless from '../App.module.css'
import { BsArrowUpRight } from 'react-icons/bs';
import { ColorRing } from 'react-loader-spinner'
import WorkshopCards from '../components/WorkshopCards'
import BusinessTestimonialCarousel from '../components/BusinessTestimonialCarousel'
import BusinessImageTextCarousel from '../components/BusinessImageTextCarousel'
import { useLocation } from 'react-router-dom';
import VideoImage from '../components/VideoImage';
import MoveDownArrow from '../components/MoveDownArrow';

const Business = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/get-tbh-means-business";
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
                return (<img src={modifiedUrl} className={styles.article_image}
                    onError={(e) => {
                        e.target.src = "./md-img1.png";
                    }} />)
            } else {
                return (
                    <div>
                        <video className={styles.video_player} ref={videoref} onClick={togglePlay}>
                            <source src={modifiedUrl} type="video/mp4" />
                        </video>
                        {!isPlaying && (
                            <button className={styles.play_button} onClick={togglePlay}>
                                ▶
                            </button>
                        )}
                    </div>
                )
            }
        }
    }


    const scrollToSection = (whereTo) => {
        if (whereTo == "arrow") {
            const section = document.getElementById('arrow');
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (whereTo === "venuehire") {
            const section = document.getElementById('venuehire');
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (whereTo === "partnerships") {
            const section = document.getElementById('partnerships');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const styleLastWord = (text) => {
        const lastSpaceIndex = text.lastIndexOf('brochure');
        const restOfText = text.slice(0, lastSpaceIndex);
        const lastWord = text.slice(lastSpaceIndex);
        return (
            <>
                {restOfText}{''}
                <a href='www.example.com' style={{ color: '#009FE3', fontWeight: '400', textDecoration: 'none' }}>{lastWord}</a>
            </>
        );
    };

    return (
        <main className={styles.home_container}>
            {data ? (<>
                <section className={styles.thumbnail_container}>
                    {/* {imageUrl(data['get_involved_elements'][0]['bg_image'])} */}
                    <VideoImage videoimageurl={data['get_involved_elements'][0]['bg_image']} />
                    <MoveDownArrow icon="./business-da.png" />
                </section>

                <section>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>
                            {data.get_involved_elements[0].hero_content.split(' ').map((word, index) => (
                                <span key={index} >
                                    {word + " "}
                                </span>
                            ))}
                        </div>

                        <div className={styles.spanText}>
                            <span onClick={() => scrollToSection("arrow")}>WORKSHOPS</span>
                            <span onClick={() => scrollToSection("venuehire")}>VENUE HIRE</span>
                            <span onClick={() => scrollToSection("partnerships")}>PARTNERSHIPS</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div id='arrow' className={styles.workshops}>
                        <div className={styles.hanging_container}>
                            <div className={styles.box}><p>WORKSHOPS</p></div>
                            <div className={styles.box2}></div>
                        </div>
                        <div>
                            <h1 className={styles.workshop_heading}>{data.get_involved_elements[0].workshop_slide_headings}</h1>
                            <p className={styles.workshop_content}>{data.get_involved_elements[0].workshop_slide_content}</p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={styles.workshop_cards}>
                        <WorkshopCards />
                    </div>
                </section>

                <section>
                    <div className={styles.workshop_cards}>
                        <BusinessTestimonialCarousel testimonial={data.testimonials} />
                    </div>
                </section>

                <section className={styles.venuehire_container}>
                    <div id='venuehire' className={styles.venuehire}>
                        <div className={styles.hanging_container}>
                            <div className={styles.box}><p>VENUE HIRE</p></div>
                            <div className={styles.box2}></div>
                        </div>
                        <div>
                            <h1 className={styles.venue_hire_heading}>{data.get_involved_elements[0].venue_hire_heading}</h1>
                            <p className={styles.venue_hire_content}>{data.get_involved_elements[0].venue_hire_content}</p>
                        </div>
                    </div>
                    <img src='./b-animate-img/blue-b.png' alt='pic' className={styles.blue_img} />
                    <img src='./b-animate-img/white-b.png' alt='pic' className={styles.white_img} />
                    <img src='./b-animate-img/red-b.png' alt='pic' className={styles.red_img} />
                    <img src='./b-animate-img/b-design-mobile.png' alt='pic' className={styles.three_xb_img} />
                </section>

                <section>
                    <div className={`${styles.venuehire_image_video} ${styles.thumbnail_container}`}>
                        {imageUrl(data.get_involved_elements[0].venue_hire_image)}
                        {/* <VideoImage videoimageurl={data.get_involved_elements[0].venue_hire_image} /> */}
                    </div>
                </section>

                <section>
                    <BusinessImageTextCarousel slides={data.space_slides} enquiry={data.get_involved_elements[0].make_inquiry_link} />
                </section>

                <section>
                    <div className={styles.partnership_container} id='partnerships'>
                        <div className={`${styles.partnership_image} ${styles.thumbnail_container}`}>
                            {imageUrl(data.get_involved_elements[0].partnership_image)}
                            {/* <VideoImage videoimageurl={data.get_involved_elements[0].partnership_image} /> */}
                        </div>
                        <div className={styles.partnership_text}>
                            <div className={styles.hanging_container}>
                                <div className={styles.box}><p>PARTNERSHIPS</p></div>
                                <div className={styles.box2}></div>
                            </div>
                            <p className={styles.content}>
                                {styleLastWord(data.get_involved_elements[0].partnership_content)}
                            </p>
                            <h2 className={styles.get_link}>
                                <span>
                                    Get Involved
                                    {/* <BsArrowUpRight className={`${styless.icon_color} ${styles.arrow_icon}`} /> */}
                                    <div className={styles.arrow}>
                                        <img src='./b-arrow-line.png' alt='arrow-line' className={styles.arrow_line} />
                                        <img src='./b-arrow-top.png' alt='arrow-top' className={styles.arrow_top} />
                                    </div>
                                </span></h2>
                        </div>
                    </div>
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

export default Business