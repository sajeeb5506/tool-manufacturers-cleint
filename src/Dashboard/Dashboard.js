import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from './useAdmin';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const[admin]=useAdmin(user);
  
    return (
        <div class="drawer drawer-mobile  ">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  ">
      <div className="flex justify-between">
      <h1 className='text-primary text-2xl font-bold  my-3 text-center'>Your Dashboard</h1>

    <label tabindex="0" class="btn btn-ghost lg:hidden"  for="my-drawer-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>

      </div>
          <Outlet />
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        
            <li className='text-primary font-bold '><Link to='/dashboard'>Dashboard</Link></li>
            <li className='text-primary font-bold '><Link to='/dashboard/review'>Add Review</Link></li>
            <li className='text-primary font-bold '><Link to='/dashboard/profile'>My Profile</Link></li>
           
            {admin && <li className='text-primary font-bold '><Link to='/dashboard/users'>All user <span className='text-sm text-purple-500'>admin </span></Link></li>}
            {admin &&  <li className='text-primary font-bold '><Link to='/dashboard/orders'>All Order <span className='text-sm text-purple-500'>admin </span></Link></li>}
       
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;