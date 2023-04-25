import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Container } from 'react-bootstrap';
import BreakingNews from '../pages/Shared/BreakingNews/BreakingNews';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const MainLayout = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavigationBar></NavigationBar>
        </div>

    );
};

export default MainLayout;