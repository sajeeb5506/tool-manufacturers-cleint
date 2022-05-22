import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='text-center my-5'>
            <h1 className='text-primary text-4xl font-serif font-bold  '>Our Business Summary</h1>
       
        <div class="stats shadow bg-primary flex align-middle my-10">
  
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="stat-title font-bold"> We served</div>
          <div class="stat-value">120K</div>
          <div class="stat-desc text-accent font-2xl font-bold">customers</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div class="stat-title font-bold">Annual revenue</div>
          <div class="stat-value">150M +</div>
          <div class="stat-desc text-accent font-2xl font-bold">↗︎ 400 (22%)</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title font-bold">Reviews</div>
          <div class="stat-value">55k +</div>
          <div class="rating rating-sm">
             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
             <input type="radio" name="rating-6" class="mask mask-star-2  bg-orange-400"  />
             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400"  />
             <input type="radio" name="rating-6" class="mask mask-star-2   bg-orange-400" checked/>
             <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
         </div>
          <div class="stat-desc text-accent font-2xl font-bold">↗︎ 500 (42%)</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div class="stat-title font-bold">Items</div>
          <div class="stat-value">50+ tools</div>
          <div class="stat-desc text-accent font-2xl font-bold">↗︎ 10 (2%)</div>
        </div>
        
      </div>
      </div>
    );
};

export default BusinessSummary;