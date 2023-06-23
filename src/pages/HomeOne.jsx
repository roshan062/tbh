import React, { useEffect, useState, useRef } from 'react';
import styles from './HomeOne.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import QuoteCarousel from '../components/QuoteCarousel';
import ImageTextCarousel from '../components/ImageTextCarousel';
import SuggestionArticle from '../components/SuggestionArticle';


const HomeOne = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/article/4/150');
            const jsonData = await response.json();
            setData(jsonData);
            // console.log(jsonData)
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
    return (
        <>
            <section>
                {data ? (<>

                    {imageUrl(data.image)}
                </>
                ) : (
                    <>
                        <img src='./blank.jpeg' alt='top-image' className={styles.article_image} />
                        {/* <p>Loading data...</p> */}
                    </>
                )}
            </section>

            <section>
                {/* {data ? (<> */}
                <div className={styles.image_text_container}>
                    <div className={styles.image_text}>Incredible theatre comes from care</div>
                </div>
                {/* </> */}
                {/* ) : ( */}
                {/* <p>Loading data...</p> */}
                {/* )} */}
            </section>

            <section className={styles.b_design}>

                {/* {data ? (<> */}
                <div className={styles.mission}>
                    <div className={styles.container}>
                        <div className={styles.box}><p>OUR MISSION</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <div className={styles.missiontext_container}>
                        <div className={styles.left}>
                            <p>The Big House has a mission:</p>
                            <h2>TO EMPOWER CARE LEAVERS AND AT RISK YOUNG PEOPLE TO</h2>
                        </div>
                        <div className={styles.right}>
                            <li>Transforming young lives through power of performance.</li>
                            <li>Unlocking potential, unleashing creativity</li>
                            <li>Building supportive</li>
                            <li>Producing art and artist</li>
                        </div>
                    </div>
                </div>
                {/* </> */}
                {/* ) : ( */}
                {/* <p>Loading data...</p> */}
                {/* )} */}
            </section>

            <section>
                {/* {data ? (<> */}
                <div className={styles.do_it}>
                    <div className={styles.item}>
                        <h2>Big Work</h2>
                        <p>The Big House works with young people who have been through the care system
                            and are finding life dificult. We provide a platform for them to participate in
                            the making of theatre and to have their voice heard.</p>
                        <h3>More About Us <BsArrowUpRight /></h3>
                    </div>
                    <div className={styles.img_item}><img src='' alt='pic' /></div>
                    <div className={styles.img_item}><img src='' alt='pic' /></div>
                    <div className={styles.item}>
                        <h2>Big Commitment</h2>
                        <p>The Big House works with young people who have been through the care system
                            and are finding life dificult. We provide a platform for them to participate in
                            the making of theatre and to have their voice heard.</p>
                        <h3>Become A Member <BsArrowUpRight /></h3>
                    </div>
                    <div className={styles.item}>
                        <h2>Big Collaborations</h2>
                        <p>The Big House works with young people who have been through the care system
                            and are finding life dificult. We provide a platform for them to participate in
                            the making of theatre and to have their voice heard.</p>
                        <h3>Get Involved <BsArrowUpRight /></h3>
                    </div>
                    <div className={styles.img_item}><img src='' alt='pic' /></div>

                </div>
                {/* </> */}
                {/* ) : ( */}
                {/* <p>Loading data...</p> */}
                {/* )} */}
            </section>

            <section className={styles.both_carousel_container}>
                <div>
                    {data ? (<>
                        <ImageTextCarousel />

                    </>
                    ) : (
                        <ImageTextCarousel />


                    )}
                </div>

                <div>
                    {data ? (<>
                        <QuoteCarousel />
                    </>
                    ) : (
                        < QuoteCarousel />

                    )}
                </div>
            </section>

            <section>
                <div>
                    {data ? (<>
                        <SuggestionArticle />

                    </>
                    ) : (
                        <SuggestionArticle />


                    )}
                </div>
            </section>
        </>
    )
}

export default HomeOne