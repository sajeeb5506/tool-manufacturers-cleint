import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useTooken from '../hooks/useTooken';
import Loding from '../Pages/Shared/Loding';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [token]=useTooken(user||gUser);


      let signInError;
      let navigate = useNavigate();
      let location = useLocation();
      let from = location.state?.from?.pathname || "/";
     if(loading || gLoading){
       return <Loding></Loding>
     }  
 
     if(error || gError){
        signInError=<small className='text-red-500'>{error?.message || gError?.message }</small>
     }
  

    if (token){
        // console.log(user  || gUser);
        navigate(from, { replace: true });
    }
   
    const onSubmit = data =>{
       
         signInWithEmailAndPassword(data.email, data.password);
    };

    return (
         <div className=' flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
          <h2 class=" text-center text-2xl font-bold text-primary">Login</h2>
          
          <form onSubmit={handleSubmit(onSubmit)}>

          <div class="form-control w-full max-w-xs">
           <label class="label">
              <span class="label-text">Email</span>
              
            </label>
            <input 
            type="email"
            placeholder="Enter your email"
            class="input input-bordered w-full max-w-xs"
            {...register("email", {
               
                required: {
                  value: true,
                  message: 'Email is Required' 
                },
                pattern: {
                  value:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: 'Provide a valid Email' 
                }
              })}

              />
              <label class="label">
              {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
           </label>
          </div>

          {/* pass */}

          <div class="form-control w-full max-w-xs">
           <label class="label">
              <span class="label-text">Password</span>
              
            </label>
            <input 
            type="password"
            placeholder="Enter your password"
            class="input input-bordered w-full max-w-xs"
            {...register("password", {
               
                required: {
                  value: true,
                  message: 'password is Required' 
                },
                minLength: {
                  value:6,
                  message: 'Must bd 6 charecters or longer' 
                }
              })}

              />
              <label class="label">
              {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
           </label>
          </div>
         
         {signInError}
        
      <input  class="btn w-full max-w-xs text-white bg-primary border-0"  type="submit" value='Login ' />
      
      </form>

       <p> <small>New to Doctors portal? <Link className='text-primary' to='/signup'> Create New Account</Link> </small> </p>
          
          <div class="divider">OR</div>
          <button onClick={() => signInWithGoogle()} class="btn btn-outline bg-primary border-0">Continue with Google</button>
        
           </div>
          </div>
        </div>
    );
};

export default Login;