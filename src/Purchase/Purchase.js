import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    
    const [product,setProduct]=useState([]);

    useEffect(()=>{
          const url=`http://localhost:5000/products/${id}`
          fetch(url)
          .then(res=>res.json())
          .then(data=>setProduct(data))
 
    },[]);
    const {_id,name,image,description,minimum,quantity,price}=product;

    return (
        <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col  lg:flex-row-reverse ">
        
          <div class="text-center lg:text-left">
        
             <button class="btn btn-primary text-white">Buy Now</button>

         </div>

         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <img src={image} alt="Shoes" class="rounded-xl" />
          <h2 class="card-title text-primary font-bold">{name}</h2>
          <p className='text-xl font-bold' >{description}</p>
          <p className='text-2xl'> Minimum Order: <span className='text-primary font-bold'> {minimum}</span> </p>
          <p className='text-xl'> Available:<span className='text-primary font-bold'> {quantity}</span></p>
          <p className='text-xl' > Price:<span className='text-primary font-bold'> ${price}</span> (per unit) </p>
              
             
            </div>
          </div>

        </div>
      </div>
     
    );
};

export default Purchase;