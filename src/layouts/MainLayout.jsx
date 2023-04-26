import React from 'react';
import Header from '../pages/Shared/Header/Header';
import BreakingNews from '../pages/Shared/BreakingNews/BreakingNews';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Category from '../pages/Home/Category/Category';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavigationBar></NavigationBar>
            <div className="row my-5">
                <div className='col-3'>
                    <LeftNav></LeftNav>
                </div>

                <div className="col-6">
                    <Category></Category>
                </div>

                <div className='col-3'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>

    );
};

export default MainLayout;