
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({prodect}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carderror,setCarderror]=useState('');
    const [success,setsuccess]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transcitation,setTranscitation]=useState('');
    const [clientSecret, setClientSecret] = useState("");
   const {_id,price,name,email} = prodect;

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("https://salty-tor-68806.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price}),
      })
        .then((res) => res.json())
        .then((data) => {
          if(data?.clientSecret){
            setClientSecret(data.clientSecret)
          }

        });
    }, [price]);

    const handleSubmit =async (event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
           
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          setCarderror(error?.message || '');
          setsuccess('');
          setProcessing(true);
//  confirm card payment
const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name:name ,
        email:email,
      },
    },
  },
);

if(intentError){
  setCarderror(intentError?.message);
  setProcessing(false);
}
else{
  setCarderror('')
  setTranscitation(paymentIntent.id)
  console.log(paymentIntent);
  setsuccess('Your payment is completed !')
  // store method on db
 const payment = {
   booking: _id,
   transaction:paymentIntent.id,
 }
  fetch(`https://salty-tor-68806.herokuapp.com/bookingorder/${_id}`,{
    method:'PATCH',
    headers: { "Content-Type": "application/json" },
     body:JSON.stringify(payment)
  }).then(res=>res.json())
  .then(data=>{
    setProcessing(false);
    console.log(data);

  })
}
    }
    return (
<>
<form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-sm mt-3' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      {
         carderror && <p className='text-red-500'>{carderror}</p>
      }
      {
         success && <div className='text-green-500 font-bold'>{success}
         <p >Your transaction id: <span className='text-orange-600'>{transcitation}</span></p>
         </div>
      }
</>
    );
};

export default CheckoutForm;