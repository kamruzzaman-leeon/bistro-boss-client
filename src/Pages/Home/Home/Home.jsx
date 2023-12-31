
import Banner from '../Banner/Banner';
import BistroInfo from '../BistroInfo/BistroInfo';
import CallUs from '../CallUs/CallUs';
import Category from '../Category/Category';
import ChifRecommends from '../ChifRecommends/ChifRecommends';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroInfo></BistroInfo>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChifRecommends></ChifRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;