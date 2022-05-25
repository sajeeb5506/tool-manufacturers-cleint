import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Dashboard/useAdmin';
import auth from '../firebase.init';
import Loding from '../Pages/Shared/Loding';


const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin]=useAdmin(user);
    const location = useLocation();
    if(loading){
        return <Loding></Loding>
    }

    if(!user || !admin ){
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    }
  return children;
  
};

export default RequireAdmin;