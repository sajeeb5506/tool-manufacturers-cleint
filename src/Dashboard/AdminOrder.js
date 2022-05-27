import React, { useEffect, useState } from 'react';
import Adminallorder from './Adminallorder';

const AdminOrder = () => {
    const [allorder ,setAllorder] = useState([]);
    useEffect(()=>{
        fetch('https://salty-tor-68806.herokuapp.com/allorders')
        .then(res=>res.json())
        .then(data=>setAllorder(data));

    },[])
    return (
        <div>
         <h1 className='text-2xl text-primary font-bold text-center my-3 '> Total orders {allorder.length}</h1>
            <div className="overflow-x-auto">
            <table class="table w-full">
   
             <thead>
              <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Transaction Id</th>
              <th>Cancel</th>
             
              </tr>
             </thead>
                <tbody>
                {
                    allorder.map((order,index)=><Adminallorder
                    key={order._id}
                    order={order}
                    index={index}
                    ></Adminallorder>)
                }

               </tbody>
            </table>
            </div>
        </div>
    );
};

export default AdminOrder;