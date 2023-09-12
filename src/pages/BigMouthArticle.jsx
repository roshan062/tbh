import React, { useState, useEffect, useRef } from 'react'
import styles from './BigMouthArticle.module.css';
// import styless from '../App.module.css'
import { ColorRing } from 'react-loader-spinner'
// import { BsArrowUpRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
// import BigMouthCards from '../components/BigMouthCards';
import { BsTriangleFill } from 'react-icons/bs';
import BigMouthCaraouselOne from '../components/BigMouthCaraouselOne';
import BigMouthCaraousel from '../components/BigMouthCaraousel';
import VideoImage from '../components/VideoImage';
import MoveDownArrow from '../components/MoveDownArrow';

const BigMouthArticle = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/big-mouth";
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



    return (
        <main className={styles.home_container}>
            <section className={styles.thumbnail_container}>
                {/* <VideoImage videoimageurl="./images/bigmouth/c3.png" /> */}
                <VideoImage videoimageurl='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    posterurl="./images/bigmouth/poster.png" />
                <MoveDownArrow icon="./bm-down-arrow.png" />
            </section>

            <section>
                <div className={styles.image_text_container} >
                    <div className={styles.image_text}>A ONE OFF</div>
                </div>
            </section>

            <section className={styles.middletext} id='arrow'>
                <h6 className={styles.heading}>ABOUT</h6>
                <p className={styles.para}>Introductory text about the Project/series. Mauris fringilla gravida purus, vel iaculis
                    mauris commodo dignissim. Ut tempus pretium est, in feugiat libero volutpat at. Aenean tempus
                    purus et lectus facilisis placerat. Aenean ipsum purus, <span>read article</span> in pretium accumsan,
                    eleifend et nulla</p>
                <p className={styles.more}>more
                    <img src='./da.png' alt='down-arrow' className={styles.da} />
                </p>
            </section>

            <div className={styles.border}> </div>
            <section className={styles.info}>
                <p>INFORMATION
                    <img src='./da.png' alt='down-arrow' className={styles.da} />
                </p>
            </section>
            <div className={styles.border}></div>


            <section className={styles.bigmouth_cards_section}>
                <p className={styles.carousel_heading}>Related</p>
                <BigMouthCaraousel />
            </section>

            {/* </>
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
            )} */}
        </main>
    )
}

export default BigMouthArticle