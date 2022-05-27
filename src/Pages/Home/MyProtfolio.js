import React from 'react';
import img from '../../assets/img/123662059_650127115869025_4478868560771517316_n.jpg'
import cardeler from '../../assets/img/cardeler.jpg'
import book from '../../assets/img/Screenshot_7.png'
import wrather from '../../assets/img/Screenshot_1.png'
const MyProtfolio = () => {
    return (
    <div className='bg-teal-400'>
        <div class="hero min-h-screen bg-teal-400">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold text-center my-5">About Myself </h1>
           <h1 className='text-3xl font-bold my-3'> Name : Md Sajeeb Sarker</h1>

              <h1 className='text-3xl font-bold  my-3'> Email : sajeebsarker44251415@gmail.com</h1>
                
               <h1 className='text-3xl font-bold'> SSC 2017 (Science)</h1>
              <p className='text-2xl font-bold mb-3'> Sobuj kanan school & College, Sirajganj</p>
                
              <h1 className='text-3xl font-bold '>  HSC 2019 (Science)</h1>
             <p className='text-2xl font-bold mb-3'>  Islamia Government College, Sirajganj</p>
                
              <h1 className='text-3xl font-bold'>  BBA 2019-20 sessoin (Physics Department)</h1>
             <p className='text-2xl font-bold mb-3'>  National University, Gazipur , Bangladesh</p>
                
              <h2 className='text-3xl font-bold'> Programming Skills</h2> 
               <p className='text-xl font-bold'> Html , Css , JavaScript, React.js , Node.js , Express.js , MongoDB , Heroku , Firebase, Code Editor vscode , React Bootstrap, Tailwind css , Daisy ui .</p>  
                 </div>
        </div>
        
      </div>
            <h1 className='text-center font-bold text-5xl text-secondary my-5'>My previous work</h1>
      <div class="hero min-h-screen bg-cyan-500">
          
     <div class="hero-content flex-col lg:flex-row">
    <img  className='max-w-sm rounded-lg shadow-2xl' src={cardeler} alt='' />
    <div>
      <h1 class="text-5xl font-bold">Name : Car Dealer</h1>
      <h2 class="py-6 text-2xl font-bold">Script Language : React.js , Node.js , Express.js</h2>
      <h3 class="py-6 text-2xl font-bold">Frameworks and libraries : MongoDB , Heroku , Firebase, React Font-awesome , React Bootstrap ,react-hot-toast, react-icons, react-scripts</h3>
      <a href='https://car-dealer-cccff.web.app/' target='_blank'  class="btn btn-secondary">Live site </a>
  

    </div>
    </div>
   </div>
      <div class="hero min-h-screen bg-cyan-500">
          
     <div class="hero-content flex-col lg:flex-row">
    <img  className='max-w-sm rounded-lg shadow-2xl' src={book} alt='' />
    <div>
      <h1 class="text-5xl font-bold">Name : Book </h1>
      <h2 class="py-6 text-2xl font-bold">Script Language : JavaScript</h2>

      <a href='https://bookshop-reactapp.netlify.app/' target='_blank'  class="btn btn-secondary">Live site </a>
  

    </div>
    </div>
   </div>
      <div class="hero min-h-screen bg-cyan-500">
          
     <div class="hero-content flex-col lg:flex-row">
    <img  className='max-w-sm rounded-lg shadow-2xl' src={wrather} alt='' />
    <div>
      <h1 class="text-5xl font-bold">Name : Weather app</h1>
      <h2 class="py-6 text-2xl font-bold">Script Language : Html, Css, JavaScript </h2>
   
      <a href='https://temperature-world.netlify.app/' target='_blank'  class="btn btn-secondary">Live site </a>
  

    </div>
    </div>
   </div>
      </div>
    );
};

export default MyProtfolio;