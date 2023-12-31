
import SectionTitle from '../../../components/SectionTitle';
import ChifRec from '../../../assets/home/slide1.jpg'
import Button from '../../../components/Button/Button';
const ChifRecommends = () => {
  return (
    <div>
      <SectionTitle
        subHeading={'Should Try'}
        heading={'chef recommends'}
      ></SectionTitle>
      <div className='py-5 grid grid-cols-3 gap-5'>
        
        
        <div className="card  bg-base-100 shadow-xl rounded-none">
          <figure className='h-64'><img src={ChifRec} alt="Shoes" className='w-full'/></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p >Lettuce, Eggs, Parmeasan Cheese, Chicken Breas Filters</p>
            <div className="card-actions justify-end">
            <Button buttontitle={'Add to Cart'}></Button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl rounded-none">
          <figure className='h-64'><img src={ChifRec} alt="Shoes" className='w-full'/></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p >Lettuce, Eggs, Parmeasan Cheese, Chicken Breas Filters</p>
            <div className="card-actions justify-end">
            <Button buttontitle={'Add to Cart'}></Button>
            </div>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl rounded-none">
          <figure className='h-64'><img src={ChifRec} alt="Shoes" className='w-full'/></figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p >Lettuce, Eggs, Parmeasan Cheese, Chicken Breas Filters</p>
            <div className="card-actions justify-end">
              <Button buttontitle={'Add to Cart'}></Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChifRecommends;