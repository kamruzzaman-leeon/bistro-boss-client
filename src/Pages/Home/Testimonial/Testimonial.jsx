import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews').then(res => res.json()).then(data => {
            // console.log(data)
            setReviews(data)
        })
    }, [])
    return (
        <div>
            <SectionTitle heading={"Testimonials"} subHeading={"What Our Client Say"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='m-24 flex flex-col items-center'>
                        <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            <h3 className='text-orange-400 text-2xl text-center'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Testimonial;