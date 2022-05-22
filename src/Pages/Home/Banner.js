import React from 'react';

import img1 from '../../../src/assets/img/16722-6316549.jpg'
import img3 from '../../../src/assets/img/maxresdefault.jpg'
const Banner = () => {
    return (
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full ">
    <img className='' src={img1} alt='img' />  
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" class="carousel-item relative w-full">
    <img  src={img3}  class="w-full" alt='img'/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 

</div>



    );
};

export default Banner;