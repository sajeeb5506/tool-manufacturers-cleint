import React from 'react';

const Contact = () => {
    return (
<div class="hero min-h-screen bg-primary">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold text-white">Contact Us</h1>
      <p class="py-6 font-bold text-accent">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-cyan-500">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
    
          </label>
          <input type="text" placeholder="Name*" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            
          </label>
          <input type="text" placeholder="email*" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
         
          </label>
          <input type="text" placeholder="Country*" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
           
          </label>
          <input type="text" placeholder="Your Message*" class="input input-bordered" />
     
        </div>
        <div class="form-control mt-6 ">
          <button class="btn btn-primary bg-secondary text-white border-0">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;