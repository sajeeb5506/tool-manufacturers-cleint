import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch,index}) => {
    const {email,role}=user;
    const number = index + 1
  
    const makeAdmin =()=>{
        fetch(`https://salty-tor-68806.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers :{
                'content-type':'application/json'
             }
             
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            refetch();
            toast.success('Successfully make an admin')
        })
    }
    return (
        <tr>
        <th>{number}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
        <td><button class="btn btn-xs bg-red-500 text-white">Remove User</button></td>
      </tr>
    );
};

export default UserRow;