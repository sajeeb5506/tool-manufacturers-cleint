import React from 'react';
import { Link } from 'react-router-dom';

const Myorderitem = ({order,index}) => {
    const number = index +1;
    console.log(order)
    return (
       
            <tr>
                <th>{number}</th>
                <td> {order.name}</td>
                <td> {order.email}</td>
                <td> {order.productName}</td>
                <td> {order.quantity}</td>
                <td> {order.price}</td>
                <td> <Link to={`/dashboard/payment/${order._id}`}  class="btn btn-xs">pay</Link></td>
            </tr>
        
    );
};

export default Myorderitem;