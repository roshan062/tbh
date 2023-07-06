import React, { useState, useEffect, useRef } from 'react'
import styles from './Business.module.css'
import styless from '../App.module.css'
import { BsArrowUpRight } from 'react-icons/bs';
import { RotatingLines } from 'react-loader-spinner'
import WorkshopCards from '../components/WorkshopCards'
import BusinessTestimonialCarousel from '../components/BusinessTestimonialCarousel'
import BusinessImageTextCarousel from '../components/BusinessImageTextCarousel'


const Business = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/get-tbh-means-business";


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
        <>
            <section>
                {data ? (<>

                    {imageUrl(data['get_involved_elements'][0]['bg_image'])}
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>{data.get_involved_elements[0].hero_content}</div>
                        <div className={styles.spanText}>
                            <span onClick={() => scrollToSection("workshops")}>WORKSHOPS</span>
                            <span onClick={() => scrollToSection("venuehire")}>VENUE HIRE</span>
                            <span onClick={() => scrollToSection("partnerships")}>PARTNERSHIPS</span>
                        </div>
                    </div>
                </>
                ) : (
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="76"
                        visible={true}
                    />
                )}
            </section>

            <section>
                {data ? (<>
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
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.workshop_cards}>
                        <WorkshopCards />
                    </div>
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.workshop_cards}>
                        <BusinessTestimonialCarousel testimonial={data.testimonials} />
                    </div>
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>

            <section>
                {data ? (<>
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
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.venuehire_image_video}>
                        {imageUrl(data.get_involved_elements[0].venue_hire_image)}
                    </div>
                </>
                ) : (
                    <>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                )}
            </section>


        </>
    )
}

export default Business