import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='bg-dark mb-3 p-3 d-flex'>
            <Button variant="danger" className='me-3'>Latest</Button>
            <Marquee className='text-white'
            speed={70}
            pauseOnHover={true}
            >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;