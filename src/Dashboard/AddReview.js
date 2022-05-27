import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../firebase.init';


const Input = ({ label, register, required }) => (
    <>
      <label className='font-bold text-secondary'>{label}</label>
      <input className='input input-bordered my-2' {...register(label, { required })} />
    </>
  );
  
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label  className='font-bold text-secondary'>{label}</label>
      <select  className='font-bold text-secondary'  name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
        <option value="1">1 </option>
        <option value="2">2 </option>
        <option value="3">3 </option>
        <option value="4">4 </option>
        <option value="5">5 </option>
      </select>
    </>
  ));

const AddReview = () => {
    const [user] = useAuthState(auth);
     const userName =  user.displayName;
    
      const { register, handleSubmit } = useForm();

      const onSubmit = (data) => {
          console.log(data)
          
          const url =`https://salty-tor-68806.herokuapp.com/reviews`;
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
        })

    
       
      };



    return (

    <>
     <h1 className='text-2xl font-bold text-primary text-center'> Review Our Product Please</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10 p-10' >
        <input  className='text-secondary'  defaultValue={userName} {...register("name")} />
        <Input className='border'label="Review" register={register} required />

        <Select label="Retting" {...register("retting")} />

        <input  className='btn btn-primary text-white' type="submit" value='Add Review' />

        </form>
        </> 
    );

};

export default AddReview;