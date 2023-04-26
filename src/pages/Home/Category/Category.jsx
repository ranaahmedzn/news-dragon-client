import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const [categoryNews, setCategoryNews] = useState([])
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
        .then(res => res.json())
        .then(data => setCategoryNews(data))
    }, [id])

    // const categoryNews = useLoaderData()
    // console.log(categoryNews)

    return (
        <div>
            <h4 className='mb-3'>Dragon News Home</h4>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;