import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id} = useParams();
    const [product,setProduct]=useState([]);
  

  const [selectQuantity, setQuantity] = useState(product?.minimum);
  const [error, setError] = useState(false);
  
  const handleQuantity = (event) => {
    setQuantity(event.target.value);
    event.preventDefault();
    console.log(selectQuantity)
  
  };
  
    useEffect(() => {
    if (
      selectQuantity > product?.quantity ||
      product?.quantity > quantity
    ) {
      setError(true );
    } else {
      setError(false );
    }
  });
 
 
  
    useEffect(()=>{
          const url=`http://localhost:5000/products/${id}`
          fetch(url)
          .then(res=>res.json())
          .then(data=>setProduct(data))
 
    },[]);
    const {_id,name,image,description,minimum,quantity,price}=product;


    //  const handleBooking = event =>{
    //    event.preventDefault();
    //    const productName = event.target.product.value;
    //    console.log(productName);

    //  }

    return (
        <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col  lg:flex-row-reverse ">
        
          <div class="text-center lg:text-left">
            
           <form onSubmit={handleQuantity} >
           
            {/* <label class="label"> <span class="label-text">Product</span> </label>
            <input type="text" name='product' value={name} disabled class="input input-bordered w-full max-w-xs" />

            <label class="label"> <span class="label-text">Price</span> </label>
            <input type="text" value={price} disabled class="input input-bordered w-full max-w-xs" /> */}

          

            <label class="label"> <span class="label-text">Minimum Order {minimum}</span> </label> 
            <input type="number" value={selectQuantity} class="input input-bordered w-full max-w-xs" />
            <label class="label"><span class="label-text-alt">{error}</span> </label>
            
            <input type="submit" placeholder="Type here" class="btn btn-primary text-white" />

           </form>
            
        
           

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