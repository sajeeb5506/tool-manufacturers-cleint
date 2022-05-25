import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const Purchase = () => {
  const [user] = useAuthState(auth);
    const {id} = useParams();
    const [product,setProduct]=useState([]);
    const [quantity, setQuantity] = useState(product?.minimum);
    const [error, setError] = useState(false);
    useEffect(()=>{
      const url=`http://localhost:5000/products/${id}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>setProduct(data))

},[]);

 



 const handleQuantity = (event) => {
   setQuantity(event.target.value);
 };

 useEffect(() => {
   if (
     quantity > product?.quantity ||
     product?.minimum > quantity
   ) {
     setError(true);
   } else {
     setError(false);
   }
 });



    const handleSubmit = event=>{
     event.preventDefault();  
       const data = {
         email : event.target.email.value,
         name : event.target.name.value,
         productName : event.target.productName.value,
         price : event.target.price.value,
         quantity : event.target.quantity.value,
       }
       console.log(data)
    }
   

    return (
        <div class="hero min-h-screen bg-base-300">
        <div class="hero-content flex-col  lg:flex-row-reverse ">
        
          <div class="text-center lg:text-left">
         
        
            
        <form onSubmit={handleSubmit} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 mb-5'>
        <input
              type="text"
              
              defaultValue={user?.displayName}
              readOnly
              className='input input-bordered my-2'
              name="name"
            />
        <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className='input input-bordered my-2'
              name="email"
            />
        <input
              type="text"
              defaultValue={product?.name}
              readOnly
               className='input input-bordered my-2'
              name="productName"
            />
        <input
              type="number"
              defaultValue={product?.price}
              readOnly
              className='input input-bordered my-2'
              name="price"
            />
        <input
              type="number"
              id="quantity"
              defaultValue={product?.minimum}
              onChange={handleQuantity}
              className='input input-bordered my-2'
              name="quantity"
            />
           
               {error ? <span className="text-red-600 w-5 text-left">You can't order less than minimum quantity <br /> Or more than available quantity</span> : <button className='btn btn-primary text-white' type='submit'>submit</button>}
        </form>
           

         </div>

         <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
            <img src={product?.image} alt="Shoes" class="rounded-xl" />
          <h2 class="card-title text-primary font-bold">{product?.name}</h2>
          <p className='text-xl font-bold' >{product?.description}</p>
          <p className='text-2xl'> Minimum Order: <span className='text-primary font-bold'> {product?.minimum}</span> </p>
          <p className='text-xl'> Available:<span className='text-primary font-bold'> {product?.quantity}</span></p>
          <p className='text-xl' > Price:<span className='text-primary font-bold'> ${product?.price}</span> (per unit) </p>
              
             
            </div>
          </div>
       

        </div>
      </div>
     
    );
};

export default Purchase;