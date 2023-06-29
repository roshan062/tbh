import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom'
import styles from './ArticleHome.module.css'


const ArticleHome = () => {
    const [data, setData] = useState('');
    const ip = import.meta.env.VITE_IP || 'default value';
    const api = ip + ":5500/articles";

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
        <div className={styles.article_cards}>
            {
                data ? (
                    <>
                        {data.map((api, index) => {
                            if (api.type == 0) return
                            const ref = `/${api.type}`;
                            let url = api.image.replace("localhost", ip)
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
        </div>


    )
}

export default ArticleHome