import React from 'react';
import img from '../../../src/assets/img/i1.jpg'
const Gallery = () => {
    return (
        <div class="hero min-h-2/4 ">
        <div class="hero-content flex-col lg:flex-row">
          <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold text-primary">About the company</h1>
            <h2 className='text-3xl'>Itatools srl is an Italian Manufacturer of <span className='text-primary font-bold'>Strapping tools</span>.</h2>
            <p class="py-6 ">Our product portfolio include a complete range of <span className='text-primary font-bold'>battery operated, pneumatic and manual strapping tools</span>, suitable for almost any plastic, steel and textile strap, used for multiple applications and in several different sectors.</p>
            <button class="btn btn-primary badge-secondary text-white">Read more</button>
          </div>
        </div>
      </div>
    );
};

export default Gallery;