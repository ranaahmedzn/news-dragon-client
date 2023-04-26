import React from 'react';
import './RightNav.css'
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import QZone from '../QZone/QZone';

const RightNav = () => {
    return (
        <div>
            <div className='mb-3'>
                <h4 className='mb-3'>Login with</h4>
                <Button className='w-100 mb-2' variant="outline-primary"><FcGoogle /> Login with Google</Button>
                <Button className='w-100 mb-2' variant="outline-secondary"><FaGithub /> Login with Github</Button>
            </div>
            <div className='mb-3'>
                <h4 className='mb-3'>Find us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='newspaper-container text-center py-5 px-4 text-white mb-3'>
                <h2>Create an Amazing Newspaper</h2>
                <p className='py-3'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant='danger'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;