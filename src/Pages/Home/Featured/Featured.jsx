import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import FeatureImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8'>
            <SectionTitle
            subHeading={'Check it out'}
            heading={'from our menu'}
            ></SectionTitle>
            <div className='md:flex justify-center gap-5 items-center pb-20 pt-12 px-2 md:px-36 bg-opacity-40 bg-slate-500'>
                <div>
                    <img src={FeatureImg} alt="" />
                </div>
                <div className='md:ml-5'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam non quae autem reiciendis inventore necessitatibus voluptatibus magnam numquam! Eos sed eveniet optio delectus sequi cum deleniti saepe aliquid ipsum, temporibus totam, recusandae suscipit reiciendis ex, corporis inventore nesciunt? Vel ipsa impedit minima quod vitae laborum natus fugiat? Quis, ipsa alias ex, nisi repellat accusantium iste sequi nihil provident molestiae obcaecati repudiandae eos impedit ipsum quisquam suscipit. Ipsam excepturi sapiente accusamus, eveniet temporibus odit natus fugit repellendus. Aperiam porro recusandae ipsum?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-5'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;