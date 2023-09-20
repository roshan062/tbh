import React, { useEffect, useState, useRef } from 'react';
import styles from './VideoImage.module.css';
import { BsTriangleFill } from 'react-icons/bs';

const VideoImage = ({ videoimageurl, posterurl }) => {
    const ip = import.meta.env.VITE_IP || 'default value';
    const imageIP = import.meta.env.VITE_IMAGE_IP || 'default value'


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


    function imageUrl(url) {
        let modifiedUrl;
        if (url.includes('localhost')) {
            modifiedUrl = imageIP + url.replace("localhost/Admin_panel/uploads/", "/app/");
        }
        else {
            modifiedUrl = url;
        }
        // console.log("modified url: ", modifiedUrl)
        const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg') || modifiedUrl.endsWith('.png') || modifiedUrl.endsWith('.jpeg');
        const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4') || modifiedUrl.endsWith('.mkv');

        if (isImage) {
            return (<img src={modifiedUrl} className={styles.article_image}
                onError={(e) => {
                    // e.target.src = "./md-img1.png";
                    e.target.src = "../../md-img1.png";
                }}
            />)
        } else {
            return (
                <section className={styles.video_image_container}>
                    <video ref={videoref} onClick={togglePlay} height='' width=''
                        // poster='https://mannyadmin.bechocar.com/uploads/people_image.jpg'
                        // poster='./images/bigmouth/video-banner.png'
                        poster={`${posterurl ? posterurl : '/images/bigmouth/video-banner.png'}`}
                        className={styles.self_video}>
                        {/* <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' */}
                        <source src={modifiedUrl}
                            type="video/mp4"
                        />
                    </video>
                    {
                        !isPlaying && (
                            <button className={styles.content_video_play_button} >
                                <img src='y-p.png' onClick={togglePlay} />
                                <img src='p-c.png' className={styles.red_circle} onClick={togglePlay} />
                                <img src='ics.png' className={styles.red_triangle} onClick={togglePlay} />
                                <BsTriangleFill className={styles.triangle_icon} />
                            </button>
                        )
                    }
                </section >
            )
        }
    }
    return (
        <div>
            {imageUrl(videoimageurl)}
        </div>
    )
}

export default VideoImage