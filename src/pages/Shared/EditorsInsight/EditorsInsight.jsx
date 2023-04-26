import React from 'react';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import { Card, Col, Row } from 'react-bootstrap';
import { FaCalendar } from 'react-icons/fa';

export const editorsInsightData = [
    {
        id: 1,
        img: first,
        title: "21 The Most Stylish Wedding Guest Dresses For Spring",
        date: '24/04/2023'
    },
    {
        id: 2,
        img: second,
        title: "21 The Most Stylish Wedding Guest Dresses For Spring",
        date: '12/12/2022'
    },
    {
        id: 3,
        img: third,
        title: "21 The Most Stylish Wedding Guest Dresses For Spring",
        date: '15/02/2023'
    }
]

const EditorsInsight = () => {
    return (
        <div>
            <h4 className='mb-3'>Editors Insight</h4>
            <Row xs={1} md={2} lg={3} className="g-4">
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
    );
};

export default EditorsInsight;