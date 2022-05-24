import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import {  toast } from 'react-toastify';

import auth from '../firebase.init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const userEmail = user?.email;
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
       
        console.log(data);
        const url = `http://localhost:5000/users`;
        fetch(url, {
                      method:'POST',
                      headers: {
                          'content-type':'application/json'
                      },
                      body: JSON.stringify(data )
                  })
                   .then(res=>res.json())
                   .then(result=> {
                       console.log(result);
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
        <div>
            <h1>my prodile</h1>
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
   
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
        </div>
    );
};

export default MyProfile;