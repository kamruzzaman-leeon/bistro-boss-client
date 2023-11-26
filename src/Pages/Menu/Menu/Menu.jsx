import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss </title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offered"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

        </div>
    );
};

export default Menu;