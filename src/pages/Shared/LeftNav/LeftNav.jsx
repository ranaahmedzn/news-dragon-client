import React from 'react';
import './LeftNav.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';
import { editorsInsightData } from '../EditorsInsight/EditorsInsight';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className='mb-3'>
            <h4 className='mb-3'>All Categories</h4>
            <div>
                {
                    categories.map(category => <p
                        key={category.id}
                        className='category'
                    >
                        <Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>

            <div>
                <h4 className='my-3'>Editors Insight</h4>
                <Row className="g-4">
                    {
                        editorsInsightData.map(data => <Col
                            key={data.id}
                        >
                            <Card>
                                <Card.Img className='' variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the cards content.
                                    </Card.Text>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <FaCalendar />
                                        <span>{data.date}</span>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default LeftNav;