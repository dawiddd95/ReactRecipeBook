import React from 'react'

import './Main.scss';

import RegisterForm from './RegisterForm/RegisterForm';

const Main = () => {
   return (  
      <div className='homePage__main'>
         <RegisterForm/>
         <div className='main__mainTitle'>
            <h1>PLAN. SHOP. COOK.</h1>
            <h2>LET`S MAKE MEAL TOGETHER</h2> 
         </div>
      </div>
   );
}
 
export default Main;