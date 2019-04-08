import React from 'react'

import './Main.scss';

import RegisterForm from '../../containers/RegisterForm/RegisterForm';
import H1 from '../H1/H1';
import H2 from '../H2/H2';

const Main = () => {
   return (  
      <div className='homePage__main'>
         <RegisterForm/>
         <div className='main__mainTitle'>
            <H1 
               text='PLAN. SHOP. COOK.'
            />
            <H2 
               text='LET`S MAKE MEAL TOGETHER'
            />
         </div>
      </div>
   );
}
 
export default Main;