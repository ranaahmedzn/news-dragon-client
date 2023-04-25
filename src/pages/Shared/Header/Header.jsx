import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    return (
        <div className='text-center my-4'>
            <img className='mb-2' src={logo} alt="" />
            <p className='mb-2'>Journalism Without Fear or Favour</p>
            <p className='fw-semibold'>{moment().format('dddd, MMMM DD, yyyy')}</p>
        </div>
    );
};

export default Header;