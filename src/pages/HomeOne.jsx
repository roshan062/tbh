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
                    <p>Loading data...</p>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>Incredible theatre comes from care</div>
                    </div>
                </>
                ) : (
                    <p>Loading data...</p>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.mission}>
                        <div>The Big House has a simple mission:</div>
                        <div>To Enable care Leavers and at risk young people to fulfill their potential.</div>
                    </div>
                </>
                ) : (
                    <p>Loading data...</p>
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.do_it}>
                        <div>
                            <div className={styles.container}>
                                <div className={styles.box}><p>HOW WE DO IT</p></div>
                                <div className={styles.box2}></div>
                            </div>
                        </div>
                        <div className={styles.big_work_commit_collab}>
                            <div className={styles.item}>
                                <h2>Big Work</h2>
                                <p>The Big House works with young people who have been through the care system
                                    and are finding life dificult. We provide a platform for them to participate in
                                    the making of theatre and to have their voice heard.</p>
                                <h3>More About Us <BsArrowUpRight /></h3>
                            </div>
                            <div className={styles.item}>
                                <h2>Big Commitment</h2>
                                <p>The Big House works with young people who have been through the care system
                                    and are finding life dificult. We provide a platform for them to participate in
                                    the making of theatre and to have their voice heard.</p>
                                <h3>Become A Member <BsArrowUpRight /></h3></div>
                            <div className={styles.item}>
                                <h2>Big Collaborations</h2>
                                <p>The Big House works with young people who have been through the care system
                                    and are finding life dificult. We provide a platform for them to participate in
                                    the making of theatre and to have their voice heard.</p>
                                <h3>Get Involved <BsArrowUpRight /></h3>
                            </div>
                        </div>
                    </div>
                </>
                ) : (
                    <p>Loading data...</p>
                )}
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
                <div >
                    {/* <img src="/red-b.svg" alt="Letter B" style={{ width: '256px', height: '256px' }} /> */}
                    {/* <img src="/blue-b.svg" alt="Letter B" style={{ width: '256px', height: '256px' }} /> */}
                    {/* <img src="/white-b.svg" alt="Letter B" style={{ width: '256px', height: '256px' }} /> */}
                </div>

                <div className={styles.big_b_design}>
                    {/* <img className={styles.red_bb} src="/red-b.svg" alt="Letter B" /> */}

                    <p className={styles.blue_b}>B</p>
                    <p className={styles.white_b}>B</p>
                    <p className={styles.red_b}>B</p>
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