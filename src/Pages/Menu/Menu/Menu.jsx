import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss  
                </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;