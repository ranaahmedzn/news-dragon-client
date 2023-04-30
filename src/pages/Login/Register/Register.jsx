import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        // console.log(name, photoUrl, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser)
            toast.success("Register successful!")
            form.reset()

            updateUserProfile(name, photoUrl)
            .then(() => console.log('User profile updated'))
            .catch(err => console.log(err))
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    // handle email validation
    const handleEmail = (e) => {
        const emailInputValue = e.target.value;
        setEmail(emailInputValue)
    }

    // handle password validation
    const handlePassword = (e) => {
        const passwordInputValue = e.target.value;
        setPassword(passwordInputValue)
    }

    return (
        <div style={{ width: '100%', maxHeight: '100%' }} className='py-5'>
            <Form onSubmit={handleRegister} className='form-container'>
                <h4 className='text-center'>Register your account</h4>
                <hr className='mb-4' />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' className='commonInput' placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoUrl' className='commonInput' placeholder="Enter your photo url" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" name='email' className='commonInput' placeholder="Enter your email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" className='commonInput' id='password' placeholder="Enter your password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>
                <input className='btn-submit' type="submit" value="Register" />
                <p className="text-muted text-center mb-0 mt-3">
                    Already have an account? <Link className='register-link' to={'/login'}>Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;