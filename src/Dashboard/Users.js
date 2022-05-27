import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Pages/Shared/Loding';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading,refetch}=useQuery('users', ()=> fetch('https://salty-tor-68806.herokuapp.com/user').then(res=>res.json()));
    if(isLoading){
        return <Loding></Loding>
    }
    return (
        <div>
            <h1 className='text-2xl text-primary font-sans font-bold text-center my-3'>Total User :{users.length}</h1>
            <div class="overflow-y-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Add Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      
 {
     users.map((user,index)=><UserRow
     key={user._id}
     user={user}
     index={index}
     refetch={refetch}
     ></UserRow>)
 }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;