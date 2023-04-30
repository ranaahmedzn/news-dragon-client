import React from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ width: '100%', minHeight: '100vh' }} className='py-5'>
            <Form className='form-container'>
                <h4 className='text-center'>Login your account</h4>
                <hr className='mb-4' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' id='email' placeholder="Enter your email" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' id='password' placeholder="Enter your password" required/>
                </Form.Group>
                <input className='btn-submit' type="submit" value="Login" />
                <p className="text-muted text-center mb-0 mt-3">
                    Do not have an account? <Link className='login-link' to={'/register'}>Register</Link>
                </p>
            </Form>
        </div>
    );
};

export default Login;