import React, { useEffect, useState, useRef } from 'react';
import styles from './HomeOne.module.css';
import styless from '../App.module.css'
import { BsArrowUpRight } from 'react-icons/bs';
import QuoteCarousel from '../components/QuoteCarousel';
import ImageTextCarousel from '../components/ImageTextCarousel';
import SuggestionArticle from '../components/SuggestionArticle';
import { ColorRing } from 'react-loader-spinner'
import { useLocation } from 'react-router-dom';

const HomeOne = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/home";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
    // console.log("api to fetch: ", api)
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);


    //fetching url data on page load
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData);
            // console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    // Getting Image url after replacing localhost by ip
    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
        return modifiedUrl;
    }


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

    //Returning image/video element after verifying the url extension
    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            modifiedUrl = imageIP + url.replace("localhost/", "");
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg') || modifiedUrl.endsWith('.png');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return (<img src={modifiedUrl} className={styles.article_image} />)
            }
            else {
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
        if (whereTo == "mission") {
            const section = document.getElementById('mission');
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
    return (
        <main>
            {data ? (<>
                <section>
                    {imageUrl(data.homepage_elements[0].image)}
                </section>

                <section>
                    <div className={styles.image_text_container}>
                        <div className={styles.image_text}>{data.homepage_elements[0].hero_text}</div>
                        {/* <img onClick={() => scrollToSection("mission")} className={styles.down_arrow} src='./down-arrow.png' /> */}
                    </div>
                </section>

                <section className={styles.b_design} id='mission'>
                    <div className={styles.mission}>
                        <div className={styles.container}>
                            <div className={styles.box}><p>OUR MISSION</p></div>
                            <div className={styles.box2}></div>
                        </div>
                        <div className={styles.missiontext_container}>
                            <div className={styles.left} dangerouslySetInnerHTML={{ __html: data.homepage_elements[0].mission_text }}>
                            </div>
                            <div className={styles.right} dangerouslySetInnerHTML={{ __html: data.homepage_elements[0].mission_list }}>
                            </div>
                        </div>
                    </div>
                    <img src='./Mask Group 29.png' alt='pic' className={styles.b_img} />
                </section>

                <section>
                    <div className={styles.do_it}>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading1}</h2>
                            <p>{data.homepage_elements[0].description1}</p>
                            {
                                (data.homepage_elements[0].link1) && <a href={data.homepage_elements[0].link1}>
                                    <h3> Become A Member<BsArrowUpRight className={styless.icon_color} /></h3></a>
                            }
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.homepage_elements[0].image1)} alt='pic' className={styles.selfimg} />
                            <img className={styles.rectangle_overlay_image_blue} src='./Path 507.png' alt="Overlay Image 1" />
                            <img className={styles.rectangle_overlay_image_red} src='./Rectangle 1620.png' alt="Overlay Image 2" />
                        </div>
                        <div className={`${styles.img_item} ${styles.do_it_middle_image}`}>
                            <img className={styles.rectangle_overlay_image_blue} src='./Path 507.png' alt="Overlay Image 1" />
                            <img className={styles.rectangle_overlay_image_red} src='./Rectangle 1620.png' alt="Overlay Image 2" />
                            <img src={cleanImgUrl(data.homepage_elements[0].image2)} alt='pic' className={styles.selfimg} />
                        </div>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading2}</h2>
                            <p>{data.homepage_elements[0].description2}</p>
                            {(data.homepage_elements[0].link2) && <a href={data.homepage_elements[0].link2}>
                                <h3> Become A Member<BsArrowUpRight className={styless.icon_color} /></h3></a>
                            }
                        </div>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading3}</h2>
                            <p>{data.homepage_elements[0].description3}</p>
                            {data.homepage_elements[0].link3 && <a href={data.homepage_elements[0].link3}>
                                <h3>Get Involved <BsArrowUpRight className={styless.icon_color} /></h3></a>
                            }
                        </div>
                        <div className={styles.img_item}>
                            <img className={styles.rectangle_overlay_image_blue} src='./Path 507.png' alt="Overlay Image 1" />
                            <img className={styles.rectangle_overlay_image_red} src='./Rectangle 1620.png' alt="Overlay Image 2" />
                            <img src={cleanImgUrl(data.homepage_elements[0].image3)} alt='pic' className={styles.selfimg} />
                        </div>
                    </div>
                </section>

                <section className={styles.both_carousel_container}>
                    <ImageTextCarousel slides={data.slides} />
                    <QuoteCarousel testimonial={data.testimonials} />
                </section>

                <section>
                    <SuggestionArticle />
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

export default HomeOne