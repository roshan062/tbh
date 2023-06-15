import React, { useEffect, useState } from 'react';
import './ArticleThree.css'

const ArticleThree = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/article/3/151');
            const jsonData = await response.json();
            setData(jsonData);
            console.log(jsonData)
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
                return (<img src={modifiedUrl} className='article-image' />)
            } else {
                return (<video controls className='video-player'>
                    <source src={modifiedUrl} type="video/mp4" />
                </video>)
            }

        }
    }

    return (<>
        {data ? (<>

            {imageUrl(data.image)}
        </>
        ) : (
            <p>Loading data...</p>
        )}
        <div className="image-text">
            <div className="container">
                <div className="box"><p>WORKSHOP</p></div>
                <div className="box2"></div>
            </div>
            <h1 className="heading-text">
                {data.head_title}
            </h1>
            <p dangerouslySetInnerHTML={{ __html: data.title }}></p>
        </div>

        <section className='title-section'>
            <h1>{data.head_title}</h1>
        </section>

        <section className='middletext'>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section className='quote-section'>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.quote_2 }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section>
            {data && data.media ? (<>
                {imageUrl(data.media)}
            </>
            ) : (
                <p></p>
            )}
        </section>

        <section className='quote-section'>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.quote }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}
        </section>

        <section className='prologue'>

            <h2 className='l-arrow'>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 512 512" id="left-arrow"><path d="M189.8 349.7c3.1-3.1 3-8 0-11.3L123.4 264H408c4.4 
        0 8-3.6 8-8s-3.6-8-8-8H123.4l66.3-74.4c2.9-3.4 3.2-8.1.1-11.2-3.1-3.1-8.5-3.3-11.4-.1 0 0-79.2 87-80 88S96 253.
        1 96 256s1.6 4.9 2.4 5.7 80 88 80 88c1.5 1.5 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3z"></path></svg>

                All Workshops</h2>
        </section>
    </>
    )
}

export default ArticleThree