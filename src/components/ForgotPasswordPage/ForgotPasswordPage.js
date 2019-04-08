import React from 'react'

import PageNav from './PageNav/PageNav';
import ConnectedPageForm from './PageForm/PageForm';

const ForgotPasswordPage = () => {
   return (  
      <div className='forgotPassword__page'>
         <PageNav />
         <ConnectedPageForm />
      </div>
   );
}
 
export default ForgotPasswordPage;