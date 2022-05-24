import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';

import auth from '../firebase.init';
import UbdateInfo from './UbdateInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth);
   
    const userEmail = user?.email;
    const [userinfo, setUserinfo]=useState([]);
   
    useEffect(()=>{
        const url=`http://localhost:5000/singleuser?userEmail=${userEmail}`;
       
        fetch(url)
        
        .then(res=>res.json())
        .then(data=>setUserinfo(data))
   
    },[]);

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
       
       
        const url = `http://localhost:5000/users`;
        fetch(url, {
                      method:'POST',
                      headers: {
                          'content-type':'application/json'
                      },
                      body: JSON.stringify(data )
                  })
                   .then(res=>res.json())
                   .then(data=> {
                       console.log(data);
                      if(data.success){
                        toast("Information Added Successfully ")
                      }
                      else{
                        toast.error('Already Added')
                      }
                   } )
               reset();
              }



    return (
        <div className=''>
            <h1 className='text-center text-3xl font-serif font-bold text-primary my-5'>My Profile</h1>
         
        
            <div className="flex ">
                {
                    userinfo?.map(info=><UbdateInfo
                    key={info?._id}
                    info={info}
                    ></UbdateInfo>)
                }
            </div>

            

         
   
            <div className="">
                <h1 className='text-2xl font-bold text-primary text-center'>Add Information</h1>
                 
       
     <form onSubmit={handleSubmit(onSubmit)} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 mb-5' >
   
      <input  className='input input-bordered my-2' readOnly defaultValue={userEmail} {...register("email")} />
      <input className='input input-bordered my-2' placeholder='Name' {...register("name", { required: true })} />
      <input className='input input-bordered my-2' placeholder='Education' {...register("education", { required: true })} />
      <input className='input input-bordered my-2' placeholder='Location'  {...register("location", { required: true })} />
      <input className='input input-bordered my-2' type='number' placeholder='Phone'  {...register("phone", { required: true })} />
      <input className='input input-bordered my-2' placeholder='Social Link'  {...register("social", { required: true })} />
      
    
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input  className='btn btn-primary text-white' type="submit" value='Add Info' />
    </form>

     
      </div>

            {/* <div className="">
                <Link to='/update' className='text-info font-bold text-2xl underline'>Update Information</Link>

                 
            </div> */}
        </div>
    );
};

export default MyProfile;