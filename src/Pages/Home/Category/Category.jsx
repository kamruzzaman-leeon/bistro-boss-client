import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import slide1 from '../../../assets//home/slide1.jpg'
import slide2 from '../../../assets//home/slide2.jpg'
import slide3 from '../../../assets//home/slide3.jpg'
import slide4 from '../../../assets//home/slide4.jpg'
import slide5 from '../../../assets//home/slide5.jpg'
import SectionTitle from '../../../components/SectionTitle';


const Category = () => {
    return (
        
           <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
             <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay,Pagination]}
        
      >
        <SwiperSlide>
            <img src={slide1} alt=''></img>
            <h3 className='text-4xl uppercase -mt-16 text-white'>salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt=''></img>
            <h3 className='text-4xl uppercase -mt-16 text-white'>pizzaz</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt=''></img>
            <h3 className='text-4xl uppercase -mt-16 text-white'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt=''></img>
            <h3 className='text-4xl uppercase -mt-16 text-white'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt=''></img>
            <h3 className='text-4xl uppercase -mt-16 text-white'>salad</h3>
        </SwiperSlide>
        
      </Swiper>
           </section>
        
    );
};

export default Category;