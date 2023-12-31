import React, { useState, useEffect, useRef } from 'react'
import styles from './AboutUs.module.css';
import styless from '../App.module.css'
import AboutImageTextCarousel from '../components/AboutImageTextCarousel';
import { ColorRing } from 'react-loader-spinner'
import Pie from '../components/Pie'
// import { BsArrowUpRight } from 'react-icons/bs';
import FullImageCarousel from '../components/FullImageCarousel';
import TabbedMultiCarousel from '../components/TabbedMultiCarousel';
import { useLocation } from 'react-router-dom';
import { BsTriangleFill } from 'react-icons/bs';
import ArrowAnimation from '../components/Arrow';
import VideoImage from '../components/VideoImage';
import MoveDownArrow from '../components/MoveDownArrow';

const AboutUs = () => {
    const [data, setData] = useState('');
    const [activeIndex, setActiveIndex] = useState(1);
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/aboutus";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'


    //For tabbed carousel switcher
    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])


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


    let Vsource;
    if (data) {
        Vsource = data.aboutus_elements[0].video_link_embed
    }


    // function imageUrl(url) {
    //     let modifiedUrl;
    //     if (data) {
    //         modifiedUrl = imageIP + url.replace("localhost/", "");

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

    function percentageParsing(value) {
        const percentageValue = parseFloat(value);
        return percentageValue
    }

    const scrollToSection = (whereTo) => {
        if (whereTo == "arrow") {
            const section = document.getElementById('arrow');
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
        <main className={styles.home_container}>
            {data ? (<>
                {/* <section>
                    {imageUrl(data['aboutus_elements'][0]['image'])}
                </section> */}

                <section className={styles.thumbnail_container}>
                    <VideoImage videoimageurl={data.aboutus_elements[0].image} />
                </section>

                <section>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>
                            {/* {data.aboutus_elements[0].hero_content} */}
                            {data.aboutus_elements[0].hero_content.split(' ').map((word, index) => (
                                <span key={index} >
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className={styles.spanText}>
                            <span onClick={() => scrollToSection("arrow")}>HISTORY</span>
                            <span onClick={() => scrollToSection("impact")}>IMPACT</span>
                            <span onClick={() => scrollToSection("people")}>PEOPLE</span>
                        </div>
                    </div>
                    <MoveDownArrow />

                </section>

                <section className={styles.img_text_carousel_section} id="arrow">
                    <AboutImageTextCarousel slides={data.history_slides} />
                </section>


                <section className={styles.video_image_container} >

                    <video ref={videoref} onClick={togglePlay} height='' width=''
                        poster='./images/about/poster.png'
                        className={styles.self_video}>
                        <source
                            src={Vsource}
                            type="video/mp4"
                        />
                    </video>
                    {!isPlaying && (
                        <button className={styles.content_video_play_button} >
                            <img src='./images/about/y-p.png' onClick={togglePlay} />
                            <img src='./images/about/circle.png' className={styles.red_circle} onClick={togglePlay} />
                            <img src='./images/about/triangle.png' className={styles.red_triangle} onClick={togglePlay} />
                            <BsTriangleFill className={styles.triangle_icon} />

                        </button>
                    )}
                    <p className={styles.video_image_desc}>{data.aboutus_elements[0].video_desc}</p>
                </section>

                {/* <section className={styles.thumbnail_container}>
                    <VideoImage videoimageurl={data.aboutus_elements[0].video_link_embed} />
                </section> */}


                <section className={styles.work} id='impact'>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>IMPACT</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <div className={styles.work_grid_container}>
                        <div className={`${styles.item} ${styles.item1}`}><p>{data.aboutus_elements[0].mission_heading}</p></div>
                        <div className={`${styles.item} ${styles.item2}`}><p>{data.aboutus_elements[0].mission_description}</p>
                        </div>
                        <div className={`${styles.item} ${styles.item3}`}>
                            <img src="https://example.com/image.jpg" alt='image' className={styles.impact_selfimg}
                                onError={(e) => {
                                    e.target.src = "./about-mission-working.jpg";
                                }}
                            />
                        </div>
                        <div className={`${styles.item} ${styles.item4}`}>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data1)} colour="white" />
                                <p>{data.aboutus_elements[0].data_desc1}</p>
                            </div>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data2)} colour="white" />
                                <p>{data.aboutus_elements[0].data_desc2}</p>
                            </div>
                            <div>
                                <Pie percentage={percentageParsing(data.aboutus_elements[0].data3)} colour="white" />
                                <p>{data.aboutus_elements[0].data_desc3}</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className={styles.tabbed_carousel} id='people'>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>PEOPLE</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <div className={styles.tabbed_carousel_container}>
                        <p className={styles.tab_carousel_switcher}>
                            <span className={`${activeIndex === 1 ? styles.active : ''}`} onClick={() => handleButtonClick(1)} >TEAM</span>
                            <span className={`${activeIndex === 2 ? styles.active : ''}`} onClick={() => handleButtonClick(2)}  >CREATIVES</span>
                            <span className={`${activeIndex === 3 ? styles.active : ''}`} onClick={() => handleButtonClick(3)} >TRUSTEES</span>
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
                </section>


                <section className={styles.carousel_container}>
                    <div className={styles.hanging_container}>
                        <div className={styles.box}><p>MEMBERS</p></div>
                        <div className={styles.box2}></div>
                    </div>
                    <p>{data.aboutus_elements[0].member_description}</p>
                    <div className={`${styles.full_image_carousel}`}>
                        <img src="./3b.svg" alt="3b-design-image" className={styles.overlay} />
                        <FullImageCarousel slides={data.member_slides} />
                    </div>
                </section>



                <section>
                    <div className={styles.role_grid_container}>
                        <div className={styles.item1}>
                            <p className={styles.para}>{data.aboutus_elements[0].data_slide_heading}</p>
                            <h1 className={styles.title}>{data.aboutus_elements[0].links_sec_heading}</h1>
                        </div>
                        <div className={styles.item2}>
                            <img src='' alt='image' className={styles.role_grid_container_img}
                                onError={(e) => {
                                    e.target.src = "./about-need.jpg";
                                }}
                            />
                            <div className={styles.links}>
                                <a href={data.aboutus_elements[0].link1}><h3>{data.aboutus_elements[0].link1_title}
                                    <ArrowAnimation />
                                </h3></a>
                                <a href={data.aboutus_elements[0].link2}><h3>{data.aboutus_elements[0].link2_title}
                                    <ArrowAnimation />
                                </h3></a>
                                <a href={data.aboutus_elements[0].link3}><h3>{data.aboutus_elements[0].link3_title}
                                    <ArrowAnimation />
                                </h3></a>
                                <a href={data.aboutus_elements[0].link4}><h3>{data.aboutus_elements[0].link4_title}
                                    <ArrowAnimation />
                                </h3></a>
                            </div>
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

export default AboutUs