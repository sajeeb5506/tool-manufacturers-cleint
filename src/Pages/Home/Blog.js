import React from 'react';

import img from '../../assets/img/array.png';

const About = () => {
    return (
        <div class=" bg-base-200 p-3 ">
        <div className=" my-5">
          <h1 className='text-3xl font-bold text-primary'> 1. How will you improve the performance of a React Application?</h1>
          <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

           According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.
           
           In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.
           
           In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
           <ol>
               <li>1. Keeping component state local where necessary</li>
               <li>2. Memoizing React components to prevent unnecessary re-renders</li>      
               <li>3.Code-splitting in React using dynamic import()</li>
               <li>4.Windowing or list virtualization in React</li>
               <li>5.Lazy loading images in React</li>
               </ol>
           
           </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-primary'>2. What are the different ways to manage a state in a React application?</h1>
               <p>Are you facing difficulties in making loading spinners or a pop-up appears at the right time? It can be because of an unmanaged state in React. A state is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI elements in the frontend.
               
               The state helps in keeping the data of different components in sync since each state update will re-render all relevant components. It can also act as a medium to communicate between various components. Managing state is one of the hardest parts of any application, and that is why there are so many state management libraries/tools available, including Redux, MobX, Flux, RxJS, and more.
                <li>1 . Communication State</li> 
                <p>Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app.</p>
                <li>2. Data State</li>
                <p>Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things – project names, contacts, details about the clients, etc.</p> 
                <li>3. Control State</li> 
                <p>Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information.</p>
                <li>4. Session State</li>
                <p>So far, we have discussed the following states:

              1. Data/ Communication State- Predictable shaped states which are required application-wide

              2. Control State- Unpredictable shaped states which are not required throughout

               Now let’s discuss a state which is required to be available throughout the application but has a lesser well-defined shape.</p> 
                 <li>5. Location State</li> 
                 <p>Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>
                
              </p>
           </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-primary'>3.How does prototypical inheritance work?</h1>
               <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.

            Sharing amid objects makes for easy inheritance of structure (data fields), behavior (functions / methods), and state (data values).
            
            JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.
            
            Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</p>
              </div>
           <div className="py-5">
               <h1 className='text-3xl font-bold text-primary'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
               <img src={img} alt="" />
                  </div>

           <div className="py-5">
               <h1 className='text-3xl font-bold text-primary'> 5.What is a unit test? Why should write unit tests?</h1>
               <h2 className='text-2xl font-bold text-primary'>Unit test:</h2>
               <p>Unit testing involves the testing of each unit or an individual component of the software application. It is the first level of functional testing. The aim behind unit testing is to validate unit components with its performance.

                 A unit is a single testable part of a software system and tested during the development phase of the application software.
                 
                 The purpose of unit testing is to test the correctness of isolated code. A unit component is an individual function or code of the application. White box testing approach used for unit testing and usually done by the developers.
                 
                 Whenever the application is ready and given to the Test engineer, he/she will start checking every component of the module or module of the application independently or one by one, and this process is known as Unit testing or components testing.</p>
                 <h2 className='text-2xl font-bold text-primary'>Why write unit tests:</h2>
               <p>In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.
               Generally, the software goes under four level of testing: Unit Testing, Integration Testing, System Testing, and Acceptance Testing but sometimes due to time consumption software testers does minimal unit testing but skipping of unit testing may lead to higher defects during Integration Testing, System Testing, and Acceptance Testing or even during Beta Testing which takes place after the completion of software application.
               </p>
              </div>



      </div>
    );
};

export default About;