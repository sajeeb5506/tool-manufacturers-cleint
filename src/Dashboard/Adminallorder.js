import React from 'react';


const Adminallorder = ({order,index}) => {
    const number = index +1;
   
    const handeldelete = ()=>{
    const id = order._id;
    console.log(id);

    
    const proceed = window.confirm('Are You Sure Delete this order!');
    if(proceed){
    
    const url = `https://salty-tor-68806.herokuapp.com/allorders/${id}`;
    fetch (url, {
        method : 'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{ 
        console.log(data);
    })
     window.location.reload(false);
  }
    }
 
    return (
     
              <tr>
                <th>{number}</th>
                <td> {order.name}</td>
                <td> {order.email}</td>
                <td> {order.productName}</td>
                <td> {order?.transaction}</td>
                <td> {order?.paid  ? <h1 className='text-green-500 font-bold'>paid</h1>: <button onClick={handeldelete} className='btn btn-error'>Delete</button> }</td>
               
            </tr>
   
    );
};

export default Adminallorder;