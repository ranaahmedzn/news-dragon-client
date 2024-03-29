import React, { useContext } from 'react';
import './NavigationBar.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
    const { user, signOutUser } = useContext(AuthContext)

    const handleLogOut = () => {
        signOutUser()
        .then(() => {})
        .catch(err => console.log(err))
    }

    return (
        <Navbar style={{ backgroundColor: '#F3F3F3' }}>
            <Container>
                <Nav className="mx-auto gap-3">
                    <Link to='/category/0' className='nav-link'>Home</Link>
                    <Link className='nav-link'>About</Link>
                    <Link className='nav-link'>Career</Link>
                </Nav>
                <div className='d-flex align-items-center gap-3'>
                    {
                        user && user?.photoURL && <img className='profile-img' src={user.photoURL} alt="" />
                    }
                    {
                        user && !user?.photoURL && <span><FaUserCircle style={{ fontSize: '36px' }} /></span>
                    }
                    {
                        user ? <Button onClick={handleLogOut} className='btn-logout' variant="dark">Logout</Button>
                            : <Link to='/login'>
                                <Button className='btn-login' variant="dark">Login</Button>
                            </Link>
                    }
                </div>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;