import { Parallax } from 'react-parallax';
import bistroInfoImg from '../../../assets/home/chef-service.jpg';
// import Cover from '../../Shared/Cover/Cover';
const BistroInfo = () => {
    return (
        <section className='my-20'>
            <Parallax bgImage={bistroInfoImg} blur={{ min: -1, max: 3 }}>
                <div className='max-w-screen-xl p-5 md:p-20'>
                    <div className='bg-white p-5 md:p-20 w-11/12 md:w-3/4 mx-auto'>
                        <h3 className=' text-5xl text-center pb-5'>Bistro Boss</h3>
                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, voluptas repudiandae? Quasi aspernatur suscipit omnis aut, quod vero assumenda cumque laudantium vel odio tenetur inventore ea libero, veritatis nam exercitationem in necessitatibus. Minus quidem quo ad harum sit explicabo architecto obcaecati maiores rerum enim atque nihil voluptate dolorum velit, commodi optio, iste fugit veritatis aspernatur dolorem ducimus quis sunt! Fuga minus dolorem quae deleniti ducimus fugiat voluptatem amet quibusdam nobis aperiam sequi commodi, sapiente odit, numquam accusantium asperiores, obcaecati sed!</p>
                    </div>
                </div>

            </Parallax>
            {/* <Cover title={'Bistro Boss'} img={bistroInfoImg}></Cover> */}
        </section>

    );
};

export default BistroInfo;