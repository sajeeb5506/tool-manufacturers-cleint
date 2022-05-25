import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Pages/Shared/Loding';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading,refetch}=useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Loding></Loding>
    }
    return (
        <div>
            <h1 className='text-2xl text-primary font-sans font-bold text-center my-3'>Total User :{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Add Admin</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      
 {
     users.map(user=><UserRow
     key={user._id}
     user={user}
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