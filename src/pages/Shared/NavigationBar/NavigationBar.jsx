import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar style={{backgroundColor: '#F3F3F3'}}>
            <Container>
                <Nav className="mx-auto gap-3">
                    <Link to='/category/0' className='text-decoration-none'>Home</Link>
                    <Link className='text-decoration-none'>About</Link>
                    <Link className='text-decoration-none'>Career</Link>
                </Nav>
                <div className='d-flex align-items-center gap-3'>
                    <span>Profile</span>
                    <Button variant="dark">
                        <Link to='/login/login'>Login</Link>
                    </Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;