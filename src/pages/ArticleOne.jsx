import React, { useEffect, useState } from 'react';
import styles from './ArticleOne.module.css';

const ArticleOne = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/article/145');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            const ip = "http://13.53.142.82/";
            modifiedUrl = ip + url.replace("localhost/", "");
            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return <img src={modifiedUrl} className={styles['article_imagee']} />;
            } else {
                return (
                    <video controls className={styles['video_playerr']}>
                        <source src={modifiedUrl} type="video/mp4" />
                    </video>
                );
            }
        }
    }

    const fetchedString = data?.description;
    const div = document.createElement('div');
    div.innerHTML = fetchedString;
    const modifiedText = div.textContent || div.innerText;
    const index = modifiedText.indexOf("It");
    const descriptionText = modifiedText.substring(index);

    return (
        <>
            {data ? (
                <>
                    {imageUrl(data.image)}
                </>
            ) : (
                <p>Loading data...</p>
            )}
            <div className={styles['image_textt']}>
                <div className={styles['containerr']}>
                    <div className={styles['boxx']}>
                        <p>NEWS</p>
                    </div>
                    <div className={styles['boxx2']}></div>
                </div>
                <h1 className={styles['heading_text']}>{data?.head_title}!!</h1>
                <p className={styles['para_text']}>
                    By <span>The Big House</span> | Posted in: NEWSLETTER | 1st June 2023
                </p>
            </div>

            <section className={styles['title_section']}>
                <h1>{data?.title}</h1>
                <p>
                    By <span>The Big House</span> | Posted in: NEWSLETTER | 1st June 2023
                </p>
                {data ? (
                    <>
                        <p>{descriptionText}</p>
                    </>
                ) : (
                    <p>Loading data...</p>
                )}
            </section>

            <section className={styles['middle_section']}>
                {data ? (
                    <>
                        {imageUrl(data.subheadings[0].image)}
                    </>
                ) : (
                    <p>Loading data...</p>
                )}
                <div className={styles['text_container_right']}>
                    {data ? (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[0].sub_heading }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[0].description }}></div>
                        </>
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>

                <div className={styles['text_container_left']}>
                    {data ? (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[1].sub_heading }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[1].description }}></div>
                        </>
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>

                {data ? (
                    <>
                        {imageUrl(data.subheadings[1].image)}
                    </>
                ) : (
                    <p>Loading data...</p>
                )}

                {data ? (
                    <>
                        {imageUrl(data.subheadings[2].image)}
                    </>
                ) : (
                    <p>Loading data...</p>
                )}
                <div className={styles['text_container_right']}>
                    {data ? (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[2].sub_heading }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[2].description }}></div>
                        </>
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>

                <div className={styles['text_container_left']}>
                    {data ? (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[3].sub_heading }}></div>
                            <div dangerouslySetInnerHTML={{ __html: data.subheadings[3].description }}></div>
                        </>
                    ) : (
                        <p>Loading data...</p>
                    )}
                </div>

                {data ? (
                    <>
                        {imageUrl(data.subheadings[3].image)}
                    </>
                ) : (
                    <p>Loading data...</p>
                )}
            </section>

            <section className={styles['quote_section']}>
                {data ? (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
                    </>
                ) : (
                    <p>Loading data...</p>
                )}
            </section>

            <section className={styles['prologue']}>
                {data ? (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: data.subheader }}></div>
                    </>
                ) : (
                    <p>Loading data...</p>
                )}

                <h2 className={styles['l_arrow']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 512 512" id="left_arrow">
                        <path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"></path>
                    </svg>
                    Back To News
                </h2>
            </section>
        </>
    );
};

export default ArticleOne;
