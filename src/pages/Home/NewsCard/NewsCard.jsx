import moment from 'moment';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaRegStar, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news;

    return (
        <Card className="mb-3">
            <Card.Header className='d-flex align-items-center'>
                <Card.Img style={{ width: '45px', height: '45px' }} className='rounded-circle' variant="top" src={author?.img} />

                <div className='ms-2 flex-grow-1'>
                    <h5>{author?.name}</h5>
                    <p className='m-0'>
                        {moment(author?.published_date).format('YYYY-MM-DD')}
                    </p>
                </div>

                <div style={{ fontSize: '20px' }} className='d-flex gap-2'>
                    <FaRegBookmark />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img className='mb-3 mt-2' variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.slice(0, 250)
                    }...
                    <Link to={`/news/${_id}`} className='fw-semibold text-decoration-none text-warning'>Read More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating className='text-warning'
                        readonly
                        placeholderRating={rating?.number}
                        emptySymbol={<FaRegStar />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                    />
                    <span> {rating?.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;