import React, { useEffect, useState } from 'react';
import AllReview from './AllReview';


const Reviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(data=>setReviews(data));

    },[])
    
    return (
        <div>
            <h1 className='text-3xl font-bold text-primary text-center my-5'>Customer Reviews</h1>
            <div className="grid  lg:grid-cols-3  sm:grid-cols-1 gap-5 p-5 ">
              {
                  reviews.map(review=><AllReview
                    review={review}
                  ></AllReview> )
              }
            </div>
        </div>
    );
};

export default Reviews;