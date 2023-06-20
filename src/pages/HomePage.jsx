import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom'
import styles from './HomePage.module.css'


const HomePage = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/articles');
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div className={styles.article_cards}>
            {
                data ? (
                    <>
                        {data.map((api, index) => {
                            if (api.type == 0) return
                            const ref = `/${api.type}`;
                            let url = api.image.replace("localhost", "http://13.53.142.82")
                            return (
                                <div key={index} >
                                    <Link to={ref} className={styles.link}>
                                        <img src={url} className={styles.image_container} />
                                        <p>ARTICLE {ref} </p><br />
                                    </Link>
                                    <Outlet />
                                </div>
                            );
                        })
                        }
                    </>
                ) : (
                    <p>Api's data not fetched</p>
                )
            }


            <div>
                <Link to='/home' className={styles.link}>HomeOne </Link>
            </div>
        </div>
    )
}

export default HomePage