import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Myorderitem from './Myorderitem';

const Myorder = () => {

    const [user] = useAuthState(auth);
    const email= user?.email;

    const [myorder, setMyorder]=useState([]);
    
    useEffect(()=>{
        const url=`https://salty-tor-68806.herokuapp.com/booking/?email=${email}`;
       
        fetch(url)
        
        .then(res=>res.json())
        .then(data=>setMyorder(data))
   
    },[]);
    return (
        <div>
            <h1 className='text-2xl text-primary font-bold text-center my-3 '>My Total order{myorder.length}</h1>
            <div className="overflow-x-auto">
            <table class="table w-full">
   
             <thead>
              <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Place Order</th>
              <th>Cancel</th>
              </tr>
             </thead>
                <tbody>
                {
                    myorder.map((order,index)=><Myorderitem
                    key={order._id}
                    order={order}
                    index={index}
                    ></Myorderitem>)
                }

               </tbody>
            </table>
            </div>
        </div>
    );
};

export default Myorder;