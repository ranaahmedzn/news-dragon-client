import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div style={{ width: '100%', maxHeight: '100%' }} className='py-5'>
            <Form className='form-container'>
                <h4 className='text-center'>Register your account</h4>
                <hr className='mb-4' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' id='name' placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo-url' id='photo-url' placeholder="Enter your photo url" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter your email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' id='password' placeholder="Enter your password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <input className='btn-submit' type="submit" value="Login" />
                <p className="text-muted text-center mb-0 mt-3">
                    Already have an account? <Link className='text-decoration-none fw-semibold' to={'/login/login'}>Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;