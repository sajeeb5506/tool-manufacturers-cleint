import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,refetch}) => {
    const {_id,email,role}=user;
    const makeAdmin =()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
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
        <th>{_id}</th>
        <td>{email}</td>
        <td>{role !== 'admin' && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
        <td><button class="btn btn-xs">Remove User</button></td>
      </tr>
    );
};

export default UserRow;