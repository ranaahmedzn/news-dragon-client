import React from 'react';
import Header from '../pages/Shared/Header/Header';
import RightNav from '../pages/Shared/RightNav/RightNav';
import News from '../pages/Home/News/News';
import { Outlet } from 'react-router-dom';

const NewsLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className="row my-5">
                <div className='col-9'>
                    <Outlet />
                </div>

                <div className='col-3'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default NewsLayout;