import React, { useState, useEffect, useRef } from 'react'
import styles from './GetInvolved.module.css';
import { RotatingLines } from 'react-loader-spinner'
import { BsArrowUpRight } from 'react-icons/bs';
import BrandCarousel from '../components/BrandCarousel';


const GetInvolved = () => {
    const [data, setData] = useState('');

    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/get-involved";


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


    const cleanImgUrl = function (fetchedUrl) {
        const modifiedUrl = ip + fetchedUrl.replace("localhost", "");
        return modifiedUrl;
    }


    function imageUrl(url) {
        let modifiedUrl;
        if (data) {
            modifiedUrl = ip + url.replace("localhost", "");

            const isImage = modifiedUrl && modifiedUrl.endsWith('.jpg');
            const isVideo = modifiedUrl && modifiedUrl.endsWith('.mp4');

            if (isImage) {
                return (<img src={modifiedUrl} className={styles.article_image} />)
            } else {
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

                    {imageUrl(data['get_involved_elements'][0]['bg_image'])}
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
                        <div className={styles.image_text}>{data.get_involved_elements[0].hero_content}</div>
                        <div className={styles.spanText}>
                            <span>SUPPORT US</span>
                            <span>BECOME A MEMBER</span>
                            <span>WORK WITH US</span>
                        </div>
                    </div>
                </>
                ) : (
                    <RotatingLines
                        strokeColor="grey"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="76"
                        visible={true}
                    />
                )}
            </section>

            <section>
                {data ? (<>
                    <div className={styles.do_it}>
                        {/* First Part */}
                        <div className={`${styles.item} ${styles.text_design_container}`}>
                            <div className={styles.container}>
                                <div className={styles.box}><p>SUPPORT US</p></div>
                                <div className={styles.box2}></div>
                            </div>
                            <h2>Static Heading</h2>
                            <p>{data.get_involved_elements[0].supportus_para1}</p>
                            <p>{data.get_involved_elements[0].supportus_para2}</p>
                            {
                                (data.get_involved_elements[0].support_us_link) && <a href={data.get_involved_elements[0].support_us_link}>
                                    <h3>Way To Support Us<BsArrowUpRight /></h3></a>
                            }
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.get_involved_elements[0].support_us_image)} alt='pic' className={styles.selfimg} />
                        </div>
                        {/* Second Part */}
                        <div className={`${styles.img_item} ${styles.do_it_middle_image}`}>
                            <img src={cleanImgUrl(data.get_involved_elements[0].become_member_image)} alt='pic' className={styles.selfimg} />
                        </div>
                        <div className={`${styles.item} ${styles.text_design_container}`}>
                            <div className={styles.container}>
                                <div className={styles.box}><p>BECOME A MEMBER</p></div>
                                <div className={styles.box2}></div>
                            </div>
                            <h2>Static Heading2</h2>
                            <p>{data.get_involved_elements[0].become_member_content}</p>
                            {(data.get_involved_elements[0].become_member_link) && <a href={data.get_involved_elements[0].become_member_link}>
                                <h3> Become A Member<BsArrowUpRight /></h3></a>
                            }
                        </div>
                        {/* Third Part */}
                        <div className={`${styles.item} ${styles.text_design_container}`}>
                            <div className={styles.container}>
                                <div className={styles.box}><p>WORK WITH US</p></div>
                                <div className={styles.box2}></div>
                            </div>
                            <h2>Static Heading3</h2>
                            <p>{data.get_involved_elements[0].work_w_us_para1}</p>
                            <p>{data.get_involved_elements[0].work_w_us_para2}</p>
                            {data.get_involved_elements[0].work_w_us_link && <a href={data.get_involved_elements[0].work_w_us_link}>
                                <h3>Get In Touch <BsArrowUpRight /></h3></a>
                            }
                        </div>
                        <div className={styles.img_item}>
                            <img src={cleanImgUrl(data.get_involved_elements[0].work_w_us_image)} alt='pic' className={styles.selfimg} />
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
                    <div className={styles.oppurtunities}>
                        <div className={styles.oppurtunities_left}>
                            <h1>Current Oppurtunities</h1>
                            <p>{data.get_involved_elements[0].co_para}</p>
                            {data.get_involved_elements[0].co_app_form_link && <a href={data.get_involved_elements[0].co_app_form_link}>
                                <h3>Download Application Form <BsArrowUpRight /></h3></a>
                            }
                        </div>
                        <div className={styles.oppurtunities_right}>
                            {data.jobs.map((items, index) => {
                                let { job_title: title, job_desc: desc, closing_date: date } = items;
                                return <div key={index}>
                                    <br />   <h2 className={styles.title}>{title}</h2>
                                    <p>{date}</p><br />
                                    <p>{desc}</p><br />
                                </div>
                            })}

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
                    <div className={styles.volunteer}>
                        <div className={styles.volunteer_left}>
                            <h1>Volunteer</h1><br />
                            <p>{data.get_involved_elements[0].volunteer_para1}</p>
                            <br />
                            <p>{data.get_involved_elements[0].volunteer_para2}</p>
                            <br />
                            {data.get_involved_elements[0].volunteer_link && <a href={data.get_involved_elements[0].volunteer_link}>
                                <h3>Volunteer Form <BsArrowUpRight /></h3></a>
                            }
                        </div>
                        <div>
                            <img src={cleanImgUrl(data.get_involved_elements[0].volunteer_image)} alt='pic' className={styles.volunteer_img} />

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
                    <div className={styles.partnership}>
                        <div className={styles.container}>
                            <div className={styles.box}><p>PARTNERSHIPS</p></div>
                            <div className={styles.box2}></div>
                        </div>
                        <p className={styles.partner_heading}>{data.get_involved_elements[0].partner_heading}</p>
                        <BrandCarousel images={data.partners} />
                        <p className={styles.partner_content}>{data.get_involved_elements[0].partner_content}</p>
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
        </>
    )
}

export default GetInvolved