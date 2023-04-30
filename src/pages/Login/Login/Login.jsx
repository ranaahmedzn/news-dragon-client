import React, { useContext } from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    // console.log(location)

    const from = location.state?.from?.pathname || '/category/0'
    console.log(from)

    const handleLogin = (event) => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signInUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast.success('Login successful!')
            form.reset()
            navigate(from)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div style={{ width: '100%', minHeight: '100vh' }} className='py-5'>
            <Form onSubmit={handleLogin} className='form-container'>
                <h4 className='text-center'>Login your account</h4>
                <hr className='mb-4' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' className='commonInput' placeholder="Enter your email" required/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' className='commonInput' placeholder="Enter your password" required/>
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