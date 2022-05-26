import React from 'react';

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
                <td> <button  class="btn btn-xs">pay</button></td>
            </tr>
        
    );
};

export default Myorderitem;