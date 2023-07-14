import React, { useState, useEffect, useRef } from 'react'
import styles from './Business.module.css'
import styless from '../App.module.css'
import { BsArrowUpRight } from 'react-icons/bs';
import { ColorRing } from 'react-loader-spinner'
import WorkshopCards from '../components/WorkshopCards'
import BusinessTestimonialCarousel from '../components/BusinessTestimonialCarousel'
import BusinessImageTextCarousel from '../components/BusinessImageTextCarousel'
import { useLocation } from 'react-router-dom';

const Business = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/get-tbh-means-business";

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
        // console.log(url)
        let modifiedUrl;
        if (data) {
            modifiedUrl = ip + url.replace("localhost", "");
            // console.log(modifiedUrl)

            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg') || modifiedUrl.endsWith('.png');
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


    const scrollToSection = (whereTo) => {
        if (whereTo == "workshops") {
            const section = document.getElementById('workshops');
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

    return (
        <main>
            {data ? (<>
                <section>
                    {imageUrl(data['get_involved_elements'][0]['bg_image'])}
                </section>

                <section>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>{data.get_involved_elements[0].hero_content}</div>
                        <div className={styles.spanText}>
                            <div onClick={() => scrollToSection("workshops")}>WORKSHOPS</div>
                            <div onClick={() => scrollToSection("venuehire")}>VENUE HIRE</div>
                            <div onClick={() => scrollToSection("partnerships")}>PARTNERSHIPS</div>
                        </div>
                        <img onClick={() => scrollToSection("workshops")} className={styles.down_arrow} src='./down-arrow.png' />
                    </div>
                </section>

                <section>
                    <div id='workshops' className={styles.workshops}>
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

                <section>
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
                </section>

                <section>
                    <div className={styles.venuehire_image_video}>
                        {imageUrl(data.get_involved_elements[0].venue_hire_image)}
                    </div>
                </section>

                <section>
                    <BusinessImageTextCarousel slides={data.space_slides} enquiry={data.get_involved_elements[0].make_inquiry_link} />
                </section>

                <section>
                    <div className={styles.partnership_container} id='partnerships'>
                        <div className={styles.partnership_image}>
                            {imageUrl(data.get_involved_elements[0].partnership_image)}
                        </div>
                        <div className={styles.partnership_text}>
                            <div className={styles.hanging_container}>
                                <div className={styles.box}><p>PARTNERSHIPS</p></div>
                                <div className={styles.box2}></div>
                            </div>
                            <p className={styles.content}>
                                {data.get_involved_elements[0].partnership_content}
                            </p>
                            <h2>Get Involved <BsArrowUpRight className={styless.icon_color} /></h2>
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