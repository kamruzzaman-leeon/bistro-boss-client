
import Banner from '../Banner/Banner';
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
            <PopularMenu></PopularMenu>
            <ChifRecommends></ChifRecommends>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;