import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [show, setShow] = useState(false)
    const [agree, setAgree] = useState(false)
    const {createUser, updateUserProfile, sendVerificationEmail} = useContext(AuthContext)

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

            sendVerificationEmail()
            .then(() => toast.success('Please check your inbox to verify your email!'))
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
    
    const handleTerms = (e) => {
        setAgree(e.target.checked)
    }

    return (
        <div style={{ width: '100%', maxHeight: '100%' }} className='py-5'>
            <Form onSubmit={handleRegister} className='form-container'>
                <h4 className='text-center'>Register your account</h4>
                <hr className='mb-4' />
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' className='commonInput' placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photoUrl' className='commonInput' placeholder="Enter your photo url"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" name='email' className='commonInput' placeholder="Enter your email" required/>
                </Form.Group>

                <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type={show ? "text" : "password"} className='commonInput' placeholder="Enter your password" required/>

                    {
                        show ? <FaEyeSlash onClick={() => setShow(!show)} className='eye-icon position-absolute'></FaEyeSlash>
                        :<FaEye onClick={() => setShow(!show)} className='eye-icon position-absolute'></FaEye>
                    }

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleTerms} type="checkbox" label={<>Accept <span className='fw-semibold text-primary'>Terms & Conditions</span></>} />
                </Form.Group>
                <input className='btn-submit' type="submit" disabled={!agree} value="Register" />
                <p className="text-muted text-center mb-0 mt-3">
                    Already have an account? <Link className='register-link' to={'/login'}>Login</Link>
                </p>
            </Form>
        </div>
    );
};

export default Register;