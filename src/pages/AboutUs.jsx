import React, { useState, useEffect, useRef } from 'react'
import styles from './AboutUs.module.css';
import styless from '../App.module.css'
import AboutImageTextCarousel from '../components/AboutImageTextCarousel';
import { RotatingLines } from 'react-loader-spinner'
import Pie from '../components/Pie'
import { BsArrowUpRight } from 'react-icons/bs';
import FullImageCarousel from '../components/FullImageCarousel';
import TabbedMultiCarousel from '../components/TabbedMultiCarousel';


const AboutUs = () => {
    const [data, setData] = useState('');
    const [activeIndex, setActiveIndex] = useState(1);
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/aboutus";


    //For tabbed carousel switcher
    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };


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
            modifiedUrl = ip + url.replace("localhost", "");

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

    function percentageParsing(value) {
        const percentageValue = parseFloat(value);
        return percentageValue
    }

    const scrollToSection = (whereTo) => {
        if (whereTo == "history") {
            const section = document.getElementById('history');
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (whereTo === "impact") {
            const section = document.getElementById('impact');
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (whereTo === "people") {
            const section = document.getElementById('people');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <section>
                {data ? (<>

                    {imageUrl(data['aboutus_elements'][0]['image'])}
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
                        <div className={styles.image_text}>{data.aboutus_elements[0].hero_content}</div>
                        <div className={styles.spanText}>
                            <span onClick={() => scrollToSection("history")}>HISTORY</span>
                            <span onClick={() => scrollToSection("impact")}>IMPACT</span>
                            <span onClick={() => scrollToSection("people")}>PEOPLE</span>
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

            <section className={styles.img_text_carousel_section} id='history'>
                <div>
                    {data ? (<>
                        <AboutImageTextCarousel slides={data.history_slides} />
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
                </div>
            </section>


            <section className={styles.video_image_container}>
                {data ? (<>
                    <div dangerouslySetInnerHTML={{ __html: data.aboutus_elements[0].video_link_embed }} />
                    <p className={styles.video_image_desc}>{data.aboutus_elements[0].video_desc}</p>
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



            <section className={styles.work} id='impact'>
                {data ? (<>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>IMPACT</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <div className={styles.work_grid_container}>
                        <div className={`${styles.item} ${styles.item1}`}><p>{data.aboutus_elements[0].mission_heading}</p></div>
                        <div className={`${styles.item} ${styles.item2}`}><p>{data.aboutus_elements[0].mission_description}</p>
                        </div>
                        <div className={`${styles.item} ${styles.item3}`}>
                            <img src='' alt='image' />
                        </div>
                        <div className={`${styles.item} ${styles.item4}`}>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data1)} colour="#009FE3" />
                                <p>{data.aboutus_elements[0].data_desc1}</p>
                            </div>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data2)} colour="#009FE3" />
                                <p>{data.aboutus_elements[0].data_desc2}</p>
                            </div>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data3)} colour="#009FE3" />
                                <p>{data.aboutus_elements[0].data_desc3}</p>
                            </div>
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


            <section className={styles.tabbed_carousel} id='people'>
                {data ? (<>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>PEOPLE</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <div className={styles.tabbed_carousel_container}>
                        <p className={styles.tab_carousel_switcher}>
                            <span onClick={() => handleButtonClick(1)} >TEAM</span>
                            <span onClick={() => handleButtonClick(2)}  >CREATIVES</span>
                            <span onClick={() => handleButtonClick(3)} >TRUSTEES</span>
                        </p>
                        {activeIndex === 1 && (
                            <TabbedMultiCarousel slides={data.teams} />
                        )}
                        {activeIndex === 2 && (
                            <TabbedMultiCarousel slides={data.creatives} />
                        )}
                        {activeIndex === 3 && (
                            <TabbedMultiCarousel slides={data.trustees} />
                        )}
                    </div>
                </>) : (<>
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="76"
                        visible={true}
                    />
                </>)}
            </section>


            <section className={styles.carousel_container}>
                {data ? (<>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>MEMBERS</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <p>{data.aboutus_elements[0].member_description}</p>
                    <div className={`${styles.full_image_carousel}`}>
                        <img src="./3b.svg" alt="3b-design-image" className={styles.overlay} />
                        <FullImageCarousel slides={data.member_slides} />
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
                    <div className={styles.role_grid_container}>
                        <div className={styles.item1}>
                            <p>{data.aboutus_elements[0].data_slide_heading}</p>
                            <h1>{data.aboutus_elements[0].links_sec_heading}</h1>
                        </div>
                        <div className={styles.item2}>
                            <img src='' alt='image' />
                            <div className={styles.links}>
                                <a href={data.aboutus_elements[0].link1}><h3>{data.aboutus_elements[0].link1_title}<BsArrowUpRight className={styless.icon_color} /></h3></a>
                                <a href={data.aboutus_elements[0].link2}><h3>{data.aboutus_elements[0].link2_title}<BsArrowUpRight className={styless.icon_color} /></h3></a>
                                <a href={data.aboutus_elements[0].link3}><h3>{data.aboutus_elements[0].link3_title}<BsArrowUpRight className={styless.icon_color} /></h3></a>
                                <a href={data.aboutus_elements[0].link4}><h3>{data.aboutus_elements[0].link4_title}<BsArrowUpRight className={styless.icon_color} /></h3></a>
                            </div>
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
        </>
    )
}

export default AboutUs