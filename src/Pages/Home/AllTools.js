import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const AllTools = () => {
    const [products ,setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://salty-tor-68806.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[])
    return (
        <div>
            <div className=" text-center my-5">
                <h1 className='text-primary text-4xl font-serif font-bold '>Our product range</h1>
               
            </div>
           <div className="grid  lg:grid-cols-3 gap-6 sm:grid-cols-1 gap-6 ">

               {
                   products.map(product=><Tool
                    key={product._id}
                    product={product}

                   ></Tool>)
               }
           </div>
            
        </div>
    );
};

export default AllTools;