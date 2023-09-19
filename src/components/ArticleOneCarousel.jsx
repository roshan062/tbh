// import React from 'react'
// import styles from './ArticleOneCarousel.module.css'

// const ArticleOneCarousel = ({ images }) => {
//     const ip = import.meta.env.VITE_IP || 'default value';
//     const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
//     const updatedImageUrls = images.map((obj) => {
//         if (obj.image.includes("localhost")) {

//             const updatedUrl = obj.image.replace('localhost/', imageIP);
//             return updatedUrl;
//         }
//         else {
//             return obj.image;
//         }
//     });


//     let box = document.querySelector(`.${styles.product_container}`);
//     const btnpressprev = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft - 500;
//     }

//     const btnpressnext = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft + 500;
//     }

//     return (
//         <div className={styles.product_carousel}>
//             <img src="./la.png" alt="left_arrow_img" className={styles.pre_btn}
//                 onClick={btnpressprev}
//             />
//             <img src="./ra.png" alt="left_arrow_img" className={styles.next_btn}
//                 onClick={btnpressnext}
//             />
//             <div className={styles.product_container}>
//                 {updatedImageUrls.map((slideImage, index) => (
//                     <div key={index}>
//                         <img src={slideImage} className={styles.article_image} alt='carousel-img' />
//                     </div>
//                 ))}
//             </div>

//         </div>
//     )
// }

// export default ArticleOneCarousel

import React, { useRef, useEffect } from 'react';
import styles from './ArticleOneCarousel.module.css';

const ArticleOneCarousel = ({ images }) => {
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value';
    const updatedImageUrls = images.map((obj) => {
        if (obj.image.includes("localhost")) {
            // const updatedUrl = obj.image.replace('localhost/', imageIP);
            const updatedUrl = imageIP + obj.image.replace("localhost/Admin_panel/uploads/", "/app/");
            return updatedUrl;
        } else {
            return obj.image;
        }
    });

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
            <img src="./la.png" alt="left_arrow_img" className={styles.pre_btn} onClick={btnpressprev} />
            <img src="./ra.png" alt="left_arrow_img" className={styles.next_btn} onClick={btnpressnext} />
            <div className={styles.product_container} ref={boxRef}>
                {updatedImageUrls.map((slideImage, index) => (
                    <div key={index}>
                        <img src={slideImage} className={styles.article_image} alt='carousel-img'
                            onError={(e) => {
                                e.target.src = "./md-img1.png";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleOneCarousel;
