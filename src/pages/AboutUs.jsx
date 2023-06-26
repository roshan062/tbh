import React, { useState, useEffect, useRef } from 'react'
import styles from './AboutUs.module.css';
import AboutImageTextCarousel from '../components/AboutImageTextCarousel';
import { RotatingLines } from 'react-loader-spinner'
import Pie from '../components/Pie'
import { BsArrowUpRight } from 'react-icons/bs';


const AboutUs = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/articles');
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
                    <div className={styles.image_text}>ABOUT</div>
                    <div className={styles.spanText}>
                        <span>HISTORY</span>
                        <span>IMPACT</span>
                        <span>PEOPLE</span>
                    </div>
                </div>
                {/* </> */}
                {/* ) : ( */}
                {/* <p>Loading data...</p> */}
                {/* )} */}
            </section>

            <section>
                <div>
                    {data ? (<>
                        <AboutImageTextCarousel />

                    </>
                    ) : (
                        <AboutImageTextCarousel />


                    )}
                </div>
            </section>


            <section>
                {data ? (<>
                    {imageUrl(data.image)}
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



            <section className={styles.work}>
                <div className={styles.hanging_container}>
                    <div className={styles.box}><p>IMPACT</p></div>
                    <div className={styles.box2}></div>
                </div>

                <div className={styles.work_grid_container}>
                    <div className={`${styles.item} ${styles.item1}`}><p>OUR MISSION IS WORKING</p></div>
                    <div className={`${styles.item} ${styles.item2}`}><p>We have already placed xx young people in placement lroen ipsum
                        simplle text of just ot bkus used temoporay. </p></div>
                    <div className={`${styles.item} ${styles.item3}`}>
                        <img src='' alt='image' />
                    </div>
                    <div className={`${styles.item} ${styles.item4}`}>
                        <div>
                            <Pie percentage={80} colour="#009FE3" />
                            <p>The not offend and reoffered within 18 months of completing a project</p>
                        </div>
                        <div>
                            <Pie percentage={100} colour="#009FE3" />
                            <p>The not offend and reoffered within 18 months of completing a project</p>
                        </div>
                        <div>
                            <Pie percentage={75} colour="#009FE3" />
                            <p>The not offend and reoffered within 18 months of completing a project</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.role_grid_container}>
                    <div className={styles.item1}>
                        <p>BUT WE STILL NEED YOU</p>
                        <h1>HOW DO YOU WANT TO PLAY YOU PART</h1>
                    </div>
                    <div className={styles.item2}>
                        <img src='' alt='image' />
                        <div className={styles.links}>
                            <h3>DONATE <BsArrowUpRight /></h3>
                            <h3>BECOME A MEMBER <BsArrowUpRight /></h3>
                            <h3>SUPPORT US<BsArrowUpRight /></h3>
                            <h3>WORK WITH US <BsArrowUpRight /></h3>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutUs