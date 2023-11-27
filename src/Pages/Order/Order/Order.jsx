import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Order = () => {
    const categories = ['pizza', 'dessert','soup','salad','drinks'];
    const {category}=useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu] = useMenu();
    
    // console.log(category)
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
                <title>Order Food | Bistro Boss </title>
            </Helmet>
            <Cover img={orderCoverImg} title={"Order Food"}></Cover>
            <div className='my-5 mx-auto'>
                <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)} >
                    <TabList>
                        <Tab>Pizza</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                        <Tab>Drinks</Tab>
                        
                    </TabList>

                    <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={salad}></OrderTab></TabPanel>
                    <TabPanel><OrderTab items={drinks}></OrderTab></TabPanel>
                    
                </Tabs>
            </div>
        </div>

    );
};

export default Order;