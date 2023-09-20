import React, { useState, useRef, useEffect } from 'react';
import styles from './ArticleFourCarousel.module.css';
import { ColorRing } from 'react-loader-spinner'
import styless from '../App.module.css'

const ArticleFourCarousel = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + "/article/4/150";
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'

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

    // const updatedImageUrls = images.map((obj) => {
    //     if (obj.image) {
    //         if (obj.image.includes("localhost")) {
    //             const updatedUrl = imageIP + obj.image.replace("localhost/Admin_panel/uploads/", "/app/");
    //             return updatedUrl;
    //         } else {
    //             return obj.image;
    //         }
    //     }

    // });

    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/Admin_panel/uploads/", "/app/");
        return modifiedUrl;
    }

    const boxRef = useRef(null);

    useEffect(() => {

        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth;
            // console.log(width);
        }
    }, []);

    const btnpressprev = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= 500;
        }
    };

    const btnpressnext = () => {
        if (boxRef.current) {
            const width = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += 500;
        }
    };

    return (
        <div className={styles.product_carousel}>
            {data ? (
                <>
                    <img src="../../la.png" alt="left_arrow_img" className={styles.pre_btn} onClick={btnpressprev} />
                    <img src="../../ra.png" alt="left_arrow_img" className={styles.next_btn} onClick={btnpressnext} />
                    <div className={styles.product_container} ref={boxRef}>
                        {/* {updatedImageUrls.map((slideImage, index) => (
                    <div key={index}> */}
                        <img src={cleanImgUrl(data.slider_image1)} className={styles.article_image} alt='carousel-img'
                            onError={(e) => {
                                e.target.src = "./md-img1.png";
                            }}
                        />
                        <img src={cleanImgUrl(data.slider_image2)} className={styles.article_image} alt='carousel-img'
                            onError={(e) => {
                                e.target.src = "./md-img1.png";
                            }}
                        />
                        <img src={cleanImgUrl(data.slider_image3)} className={styles.article_image} alt='carousel-img'
                            onError={(e) => {
                                e.target.src = "./md-img1.png";
                            }}
                        />
                        {/* </div>
                ))} */}
                    </div>

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
        </div>
    );
};

export default ArticleFourCarousel;
