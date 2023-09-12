import React, { useEffect, useState, useRef } from 'react';
import styles from './ArticleFive.module.css'
import { useLocation } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'
import VideoImage from '../components/VideoImage';
import ArticleOneCarousel from '../components/ArticleOneCarousel'; //same required here(in article 5)
import BigMouthCaraousel from '../components/BigMouthCaraousel';


const ArticleFive = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/5/149";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

    const blankImage = [
        { image: "./blank-carousel.png" },
        { image: "./blank-carousel.png" },
        { image: "./blank-carousel.png" },
        { image: "./blank-carousel.png" },
    ]

    useEffect(() => {
        fetchData();
    }, []);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const fetchData = async () => {
        try {
            const response = await fetch(api);
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (<main className={styles.home_container}>
        {data ? (<>

            <section className={styles.thumbnail_container}>
                <VideoImage videoimageurl={data.image} />
            </section>

            <div className={styles['image_textt']}>
                <h1 dangerouslySetInnerHTML={{ __html: data.title }} className={styles['heading_text']}></h1>
            </div>

            <section className={styles.title_section}>
                <h1>
                    How Theatre Can Help You Heal:<br />
                    A Spotlight On Mental Health
                </h1>
            </section>

            <section className={styles.middletext}>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </section>

            <section className={styles.another_section}>
                <h1 className={styles.another_title}>
                    The Benefits of Getting Involved in Theatre:
                </h1>
                <p className={styles.another_para}>
                    The magic of theatre can be healing for many people. Participating in theatre can help to reduce
                    feelings of anxiety, depression, and other mental health issues. It can be a great way to find
                    a creative outlet, manage stress, and find a source of joy. Theatre can help to improve focus
                    and concentration, as well as to boost your confidence.<br /><br />
                    The theatre can help you to build a sense of community, which can be especially important if you need a group of
                    supportive people to lean on. Being a part of a theatrical group can also be great for networking. New directors,
                    producers, and other theatre professionals can be easier to connect with by being part of the theatre world.<br /><br />
                    The power of theatre to make people think, feel, and reflect on the world deeply is a great tool to make positive
                    changes in people’s lives. Through theatre, you can gain insight into yourself, learn more about the world,
                    and practice empathy while engaging your emotions in the process.
                </p>
            </section>

            <section>
                <VideoImage videoimageurl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </section>

            <section className={styles.quote_section}>
                <h3>‘Long Quote with full width and taking up around 4 lines.
                    A brilliant engaging and enlightening group discussion around an outstanding scene…
                    by the Big House’  </h3>
                <p className={styles.publisher_name}>SAGE Publishing Employee</p>
            </section>

            <section className={styles.another_section}>
                <h1 className={styles.another_title}>
                    Another sub section title
                </h1>
                <p className={styles.another_para}>
                    Theatre has been proven to be a form of therapy. It can help you work through difficult emotions and situations.
                    When you see a play, you can get lost in the story and the characters.
                    For a couple of hours, you can forget about your own troubles and immerse
                    <br /><br />
                    Theatre offers a safe and non-judgmental outlet for people to express themselves.
                    On stage, performers can be completely open, play roles opposite of their own personalities
                    or have an opportunity to break away from the stress and challenges of everyday life.
                    It is a way to be creative and explore different emotions without fear of criticism.
                    <br /><br />
                    Theatre can also be a form of cognitive therapy, as it helps to change pessimistic thought processes.
                    It is empowering when you understand how to use your own thoughts and emotions to enhance your
                    performance.
                </p>
            </section>

            <section className={styles.how_to_join}>
                <h1 className={styles.how_to_join_title}>
                    How can I join The Big House?
                </h1>
                <p className={styles.how_to_join_para}>
                    If you want to make new friends, get out of your comfort zone and do something
                    extraordinary - get in touch with us <span className={styles.how_to_join_span}>info@thebighouse.uk.com</span> or sign up using our
                    <span className={styles.how_to_join_span}>referral form </span> here.

                </p>
            </section>

            <section className={styles.carousel}>
                <ArticleOneCarousel images={blankImage} />
            </section>

            <section className={styles.you_may_like_container}>
                <div className={styles['containerr']}>
                    <div className={styles['boxx']}>
                        <p>YOU MAY ALSO LIKE</p>
                    </div>
                    <div className={styles['boxx2']}></div>
                </div>
                <BigMouthCaraousel />
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

export default ArticleFive