import React, { useEffect, useState } from 'react';
import './ArticleFive.css'

const ArticleFive = () => {

    const [data, setData] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://13.53.142.82:5500/article/5/149');
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

    // const paragraphs = data.description.split('<p>').filter(Boolean);

    return (<>
        {data ? (<>

            {imageUrl(data.image)}
        </>
        ) : (
            <p>Loading video/image...</p>
        )}

        <section className='title-section'>
            <h1 dangerouslySetInnerHTML={{ __html: data.title }}></h1>
        </section>

        <section className='middletext'>
            {data ? (<>
                <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
            </>
            ) : (
                <p>Loading data...</p>
            )}

            {/* {paragraphs.map((paragraph, index) => (
                <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: `<p>${paragraph}</p><br>` }}
                />
            ))} */}

        </section>
    </>
    )
}

export default ArticleFive