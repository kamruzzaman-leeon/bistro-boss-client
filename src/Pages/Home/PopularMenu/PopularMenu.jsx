// import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import Button from '../../../components/Button/Button';

const PopularMenu = () => {

    const [menu]=useMenu();
    const popular = menu.filter(item=>item.category==='popular')
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==='popular')
    //         // console.log(popularItems)
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div className='mb-12'>
             <SectionTitle
            subHeading='From Our Menu'
            heading='Popular Items'
            ></SectionTitle>
            <div className='grid md:grid-cols-2 my-5 gap-4'>
                {
                  popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
                <div className='text-center'><Button buttontitle={'View Full menu'}></Button></div>
        </div>
    );
};

export default PopularMenu;