import React, { useEffect, useState, useRef } from 'react';
import styles from './HomeOne.module.css';
import { BsArrowUpRight } from 'react-icons/bs';
import QuoteCarousel from '../components/QuoteCarousel';
import ImageTextCarousel from '../components/ImageTextCarousel';
import SuggestionArticle from '../components/SuggestionArticle';
import { RotatingLines } from 'react-loader-spinner'


const HomeOne = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/home";


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
        const modifiedUrl = ip + fetchedUrl.replace("localhost", "");
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
            // const ip = "http://13.53.142.82/";
            modifiedUrl = ip + url.replace("localhost", "");
            console.log(modifiedUrl)
            // const isImage = modifiedUrl && modifiedUrl.endsWith('.png');
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
    return (
        <>
            <section>
                {data ? (<>
                    {imageUrl(data.homepage_elements[0].image)}
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
                        <div className={styles.image_text}>{data.homepage_elements[0].hero_text}</div>
                    </div>
                </>
                ) : (<>
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

            <section className={styles.b_design}>

                {data ? (<>
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
                    <div className={styles.do_it}>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading1}</h2>
                            <p>{data.homepage_elements[0].description1}</p>
                            <a href={data.homepage_elements[0].link1}> <h3> <BsArrowUpRight /></h3></a>
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.homepage_elements[0].image1)} alt='pic' />
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.homepage_elements[0].image2)} alt='pic' />
                        </div>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading2}</h2>
                            <p>{data.homepage_elements[0].description2}</p>
                            <a href={data.homepage_elements[0].link2}> <h3> <BsArrowUpRight /></h3></a>
                        </div>
                        <div className={styles.item}>
                            <h2>{data.homepage_elements[0].heading3}</h2>
                            <p>{data.homepage_elements[0].description3}</p>
                            <a href={data.homepage_elements[0].link3}> <h3> <BsArrowUpRight /></h3></a>
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.homepage_elements[0].image3)} alt='pic' />
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

            <section className={styles.both_carousel_container}>
                <div>
                    {data ? (<>
                        <ImageTextCarousel slides={data.slides} />
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
                </div>

                <div>
                    {data ? (<>
                        <QuoteCarousel testimonial={data.testimonials} />
                    </>
                    ) : (<>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                    )}
                </div>
            </section>

            <section>
                <div>
                    {data ? (<>
                        <SuggestionArticle />

                    </>
                    ) : (<>
                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="76"
                            visible={true}
                        />
                    </>
                    )}
                </div>
            </section>
        </>
    )
}

export default HomeOne