import React from 'react';

const FoodCard = ({item}) => {
    const {name,image,price,receipe}=item;
    return (
        
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
          <figure >
            <img src={image} alt={name} />
            </figure>
            <p className='bg-slate-900 absolute right-0 mr-4 mt-4 text-white p-1 rounded-sm'>{price}</p>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p >{receipe}</p>
            <div className="card-actions justify-end">
              <button className="btn  btn-outline border-0 border-b-4 text-yellow-500 hover:text-yellow-500">Add to Cart</button>
            </div>
          </div>
        </div>
    );
};

export default FoodCard;