import React from 'react';
import AllTools from './AllTools';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Contact from './Contact';
import Gallery from './About';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <AllTools/>
          <BusinessSummary/>
          <Gallery/>
          <Reviews/>
          <Contact/>
          
           
        </div>
    );
};

export default Home;<h2>home</h2>