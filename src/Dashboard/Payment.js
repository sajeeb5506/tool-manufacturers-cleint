import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loding from '../Pages/Shared/Loding';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3bUaCpq3abtuydGetWBOCR3ckRRAYsKQcZh7rm6iWBxOdG3k5EJrZVsalQMCXufPB0BhVZfPfMsnatUS3V87P200bjKEqPYQ');


const Payment = () => {
    const {paymentid}=useParams();
const url=`https://salty-tor-68806.herokuapp.com/booking/${paymentid}`


const {data:prodect, isLoading,refetch} = useQuery(['booking', paymentid], ()=>fetch(url,{
 
    method: 'GET',
       headers:{
           'authorization': 'application/json'
       }

}).then(res=>res.json()));
if(isLoading){
    return <Loding></Loding>
}
// console.log(prodect);
    return (
        <div>
       
  
  <div class="card w-96 bg-base-100 shadow-xl my-5">
  <div class="card-body">
    <h2 class="card-title text-secondary">Hello, {prodect.name}</h2>
   <h2 className='font-bold'> For Pay : {prodect.productName}</h2>
   <h2 className='text-cyan-500'> Please pay : ${prodect.price}</h2>

  </div>
</div>
    <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
      
   
      <Elements stripe={stripePromise}>
    <CheckoutForm prodect={prodect} />
     </Elements>
      </div>
 
</div>
        </div>
    );
};

export default Payment;