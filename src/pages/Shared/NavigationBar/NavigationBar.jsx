import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Nav className="mx-auto gap-3">
                    <Link className='text-decoration-none'>Home</Link>
                    <Link className='text-decoration-none'>About</Link>
                    <Link className='text-decoration-none'>Career</Link>
                </Nav>
                <div className='d-flex align-items-center gap-3'>
                    <span>Profile</span>
                    <Button variant="dark">Login</Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;