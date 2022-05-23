import React from 'react';
import { Link } from 'react-router-dom';
const Tool = ({product}) => {

    const {_id,name,image,description,minimum,quantity,price}=product;


    return (
       
        <div class="card w-80 bg-base-100 drop-shadow-xl ">
        <figure class="px-10 pt-10">
          <img src={image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-primary font-bold">{name}</h2>
          <p className='text-xl font-bold' >{description}</p>
          <p className='text-2xl'> Minimum Order: <span className='text-primary font-bold'> {minimum}</span> </p>
          <p className='text-xl'> Available:<span className='text-primary font-bold'> {quantity}</span></p>
          <p className='text-xl' > Price:<span className='text-primary font-bold'> ${price}</span> (per unit) </p>
          <div class="card-actions">
            <Link to={`/product/${_id}`}  class="btn btn-primary text-white">Buy Now</Link>
          </div>
        </div>
      </div>
     

    );
};

export default Tool;