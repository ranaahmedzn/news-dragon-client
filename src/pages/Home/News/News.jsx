import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import EditorsInsight from '../../Shared/EditorsInsight/EditorsInsight';

const News = () => {
    const [news, setNews] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/news/${id}`)
            .then(res => res.json())
            .then(data => setNews(data))
    }, [id])

    // const news = useLoaderData()
    // console.log(news)

    const { category_id, title, image_url, details } = news;


    return (
        <div>
            <h4 className='mb-3'>Dragon News</h4>
            <Card className='mb-4'>
                <Card.Body>
                    <Card.Img className='mb-3' variant="top" src={image_url} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Button variant="danger">
                        <Link className='text-decoration-none text-white' to={`/category/${category_id}`}>
                            <FaArrowLeft /> All news in this category
                        </Link>
                    </Button>
                </Card.Body>
            </Card>

            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default News;