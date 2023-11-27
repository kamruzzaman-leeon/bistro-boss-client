import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className=' my-16'>
            {title && <Cover title={title} img={img}></Cover>}
            <div className='grid md:grid-cols-2 gap-10  mt-16'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='text-center'><Link to={`/order/${title}`}> <button className='btn btn-outline border-0 border-b-4 mt-8'>Order Your food</button></Link></div>
        </div>
    );
};

export default MenuCategory;