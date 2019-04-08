import React from 'react'

import PageNav from '../PageNav/PageNav';
import ConnectedPageForm from '../../containers/ForgotPasswordPageForm/ForgotPasswordPageForm';

const ForgotPasswordPage = () => {
   return (  
      <div className='forgotPassword__page'>
         <PageNav />
         <ConnectedPageForm />
      </div>
   );
}
 
export default ForgotPasswordPage;