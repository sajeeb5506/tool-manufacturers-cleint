import React from 'react';

const AllReview = ({review}) => {
    return (
        <div class="card w-80 bg-neutral text-neutral-content ">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{review.name}</h2>
          <p>{review.Review}</p>
          <p>{review.retting}</p>
          <p>
          <div class="rating rating-xs">
         <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
         <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
         <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
        </div>
          </p>
        </div>
      </div>
    );
};

export default AllReview;