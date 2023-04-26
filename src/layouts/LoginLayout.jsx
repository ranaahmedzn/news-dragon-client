import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div style={{backgroundColor: '#F3F3F3'}} className='pt-4'>
            <div className='container mx-auto'>
                <NavigationBar></NavigationBar>
                <Outlet />
            </div>
        </div>
    );
};

export default LoginLayout;