import React from 'react';
import { Link } from 'react-router-dom';

const Myorderitem = ({order,index}) => {
    const number = index +1;
    const  handeldelete = ()=>{
        const id = order._id;
      
        const proceed = window.confirm('Are You Sure cancel this order!');
        if(proceed){
        
        const url = `https://salty-tor-68806.herokuapp.com/allorders/${id}`;
        fetch (url, {
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{ 
            console.log(data);
            if(data){
                window.location.reload(true);
            }
        })
        
      }
    }

    return (
       
            <tr>
                <th>{number}</th>
                <td> {order.name}</td>
                <td> {order.email}</td>
                <td> {order.productName}</td>
                <td> {order.quantity}</td>
                <td> {order?.paid  ? <div className='text-green-500 font-bold'> {order.transaction}</div>: <div  className='text-green-500 font-bold'>{order.price}</div> }</td>
                <td> { order?.paid ?  <h1 className='text-green-500 font-bold'>paid</h1>  :<Link to={`/dashboard/payment/${order._id}`}  class="btn btn-xs">pay</Link> }</td>
                <td> { order?.paid ? <></>  : <button onClick={handeldelete} className='btn btn-error'>Cancel</button>}</td>
            </tr>
        
    );
};

export default Myorderitem;