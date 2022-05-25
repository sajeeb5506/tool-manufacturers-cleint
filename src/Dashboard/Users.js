import React from 'react';
import { useQuery } from 'react-query';
import Loding from '../Pages/Shared/Loding';

const Users = () => {
    const {data: users, isLoading}=useQuery('users', ()=> fetch('http://localhost:5000/user').then(res=>res.json()));
    if(isLoading){
        return <Loding></Loding>
    }
    return (
        <div>
            <h1>all user{users.length}</h1>
        </div>
    );
};

export default Users;