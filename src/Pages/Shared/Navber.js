import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../../src/assets/img/Risorsa-36.png'

const Navber = () => {
  const nevigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
      signOut(auth);
      localStorage.removeItem('accessToken');
      nevigate('/')
      
    };
    const menuItem = <>

        <li className='text-primary font-bold '> <Link to="/">Home</Link></li>
        <li className='text-primary font-bold'> <Link to="/blog">Blog</Link></li>
        <li className='text-primary font-bold'> <Link to="/portfolio"> My Portfolio</Link></li>

        {
          user?<li className='text-primary font-bold'> <Link to="/dashboard">Dashboard</Link></li>:<></>

        }
        
    

    </>
    const authentication= <>

       <li>{user? <button  onClick={logout} class="btn btn-ghost text-primary font-bold">Sign Out</button>:
       <Link className='text-primary font-bold' to="/login">Login</Link>}</li>

    </> 

    return (

    <div class="navbar bg-base-100 ">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menuItem}
      </ul>
    </div>
    <Link to="/" ><img className='h-8' src={logo} alt="" /></Link>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    {menuItem}
    </ul>
  </div>
  <div class="navbar-end">
  <ul class="menu menu-horizontal p-0">
    {authentication}

   
    </ul>
  </div>

</div>

    );
};

export default Navber;