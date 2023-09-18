import React, { useRef, useState } from 'react';
import styles from './TabbedMultiCarousel.module.css';

const TabbedMultiCarousel = ({ slides }) => {
    const elementRef = useRef(null);
    const [cardClicked, setCardClicked] = useState(Array(slides.length).fill(false)); // Initialize an array of booleans
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value';

    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = imageIP + fetchedUrl.replace("localhost/Admin_panel/uploads/", "/app/Http");
        return modifiedUrl;
    }

    const btnpressprev = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - 500;
    }

    const btnpressnext = () => {
        let box = elementRef.current;
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + 500;
    }

    function handleCardClick(index) {
        const updatedCardClicked = [...cardClicked];
        updatedCardClicked[index] = !updatedCardClicked[index];
        setCardClicked(updatedCardClicked);
    }

    return (
        <div className={styles.product_carousel}>
            <img src="./la.png" alt="left_arrow_img" className={styles.left_arrow} onClick={btnpressprev} />
            <div className={styles.product_container} ref={elementRef}>
                {slides.map((item, index) => {
                    const { name, description, image } = item;
                    return (
                        <div key={index} onClick={() => handleCardClick(index)} className={`${cardClicked[index] ? styles.clicked : ''} ${styles.each_card}`}>
                            <img
                                src={cleanImgUrl(image)}
                                className={styles.article_image}
                                alt='carousel-img'
                            // onError={(e) => {
                            //     e.target.src = "./images/about/ziyad marar.jpg";
                            // }}
                            />
                            <h3 className={styles.title}>{name}</h3>
                            <p className={styles.desc}>{description}</p>
                            <p className={styles.bio}>Ziyad Marar was born in the Middle East and moved to London with his family at the
                                age of 10. He is executive vice-president and global publishing director of Sage, a leading academic publisher, where is
                                responsible for overall publishing strategy. He regulary speaks and writes artcles in support of the social sciences.
                            </p>
                        </div>
                    )
                })}
            </div>
            <img src="./ra.png" alt="right_arrow_img" className={styles.right_arrow} onClick={btnpressnext} />
        </div>
    );
}

export default TabbedMultiCarousel;


// import React, { useRef, useState } from 'react'
// import styles from './TabbedMultiCarousel.module.css'

// const TabbedMultiCarousel = ({ slides }) => {
//     const elementRef = useRef(null);
//     const [cardClicked, setCardClicked] = useState(false)
//     const ip = import.meta.env.VITE_IP || 'default value';
//     const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'
//     const cleanImgUrl = function (fetchedUrl) {
//         const modifiedUrl = imageIP + fetchedUrl.replace("localhost/", "");
//         return modifiedUrl;
//     }
//     const btnpressprev = () => {
//         let box = elementRef.current;
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft - 500;
//     }

//     const btnpressnext = () => {
//         let box = elementRef.current;
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft + 500;
//     }

//     function handleCardClick(index) {
//         setCardClicked(index)
//     }

//     return (
//         <div className={styles.product_carousel}>
//             <img src="./la.png" alt="left_arrow_img" className={styles.left_arrow}
//                 onClick={() => handleLeftClick(index + 1)}
//             />
//             <div className={styles.product_container} ref={elementRef}>
//                 {slides.map((item, index) => {
//                     const { name, description, image } = item;
//                     return (

//                         <div key={index} onClick={() => handleCardClick(index)} className={`${cardClicked == index ? styles.clicked : ''} ${styles.each_card}`}>
//                             <img src={cleanImgUrl(image)} className={styles.article_image} alt='carousel-img'
//                                 onError={(e) => {
//                                     e.target.src = "./images/about/ziyad marar.jpg";
//                                 }}
//                             />
//                             <h3 className={styles.title}>{name}</h3>
//                             <p className={styles.desc}>{description}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             <img src="./ra.png" alt="right_arrow_img" className={styles.right_arrow}
//                 onClick={() => handleRightClick(index + 1)}
//             />
//         </div>
//     )
// }

// export default TabbedMultiCarousel