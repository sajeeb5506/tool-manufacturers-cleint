import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


import { useForm } from 'react-hook-form';
import auth from '../firebase.init';
// import { toast } from 'react-toastify';


const UbdateInfo = ({info}) => {
    const [user] = useAuthState(auth);
    // console.log(info);
    const id = info._id

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
           const url =`https://salty-tor-68806.herokuapp.com/users/${id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
     reset();
    })
              
    }
    return (
        <div className=''  >

      <div className=''>
          <h1 className='text-secondary font-bold text-2xl'  > <span className='text-primary'>Name: </span>{info.name }</h1>   
          <h1 className='text-secondary font-bold text-2xl'  > <span className='text-primary'>Email:</span> {info.email }</h1>   
          <h1 className='text-secondary font-bold text-2xl'  > <span className='text-primary'>City: </span>{info.location}</h1>   
          <h1 className='text-secondary font-bold text-2xl'  > <span className='text-primary'>Education: </span>{info.education}</h1>   
          <h1 className='text-secondary font-bold text-2xl'  > <span className='text-primary'>Phone:</span> {info.phone}</h1>   
            <a  className='text-info font-bold text-2xl underline'  target='_blank' href={info.social}>Social Link</a>
       </div>


             <div className="">
                 <form onSubmit={handleSubmit(onSubmit)} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5 mb-5' >
   

                <input className='input input-bordered my-2' readOnly value={user.email} {...register("email")} />
                <input className='input input-bordered my-2' placeholder='Name' {...register("name")} />
                <input className='input input-bordered my-2' placeholder='Education' {...register("education")} />
                <input className='input input-bordered my-2' placeholder='Location'  {...register("location")} />
                <input className='input input-bordered my-2' type='number' placeholder='Phone'  {...register("phone")} />
                <input className='input input-bordered my-2' placeholder='Social Link'  {...register("social")} />
                
              
                <input  className='btn btn-primary text-white' type="submit" value='Update Info' />
              </form>
              </div>


        </div>

      
    );
};

export default UbdateInfo;