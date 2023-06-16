import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet } from 'react-router-dom'
import styles from './HomePage.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import ArticleFive from './ArticleFive';
// import ArticleFour from './ArticleFour';
// import ArticleOne from './ArticleOne';
// import ArticleThree from './ArticleThree';

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
            console.log(jsonData)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    // console.log(data[0].type);
    return (
        <>
            {/* <Navbar /> */}
            {/* {
                data ? (
                    <>
                        {
                            data.map((api, index) => (
                                <div key={index}>

                                    <Link to={api.type}>
                                        <p>{api.type}</p>
                                        {console.log("console data", api.type, index)}
                                    </Link>
                                    <Outlet />
                                </div>
                            ))
                        }
                    </>
                ) : (
                    <p>Api's data not fetched</p>
                )
            } */}
            {/* <Footer /> */}
            <Link to="/1">
                Article One
            </Link>
            <br />
            <br />

            <Link to="/2">
                Article Two
            </Link>
            <br />
            <br />

            <Link to="/3">
                Article Three
            </Link>
            <br />
            <br />

            <Link to="/4">
                Article Four
            </Link>
            <br />
            <br />

            <Link to="/5">
                Article Five
            </Link>
            <br />
            <br />

            <Link to="/">
                Home Page
            </Link>
            <Outlet />

        </>
    )
}

export default HomePage