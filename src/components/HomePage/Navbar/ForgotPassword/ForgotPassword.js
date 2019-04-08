import React from 'react'
import {Link} from 'react-router-dom';

import './ForgotPassword.scss';

const ForgotPassword = () => {
   return (  
      <Link to='/forgotPassword'>
         <p className="navbar__forgotPassword">
            Forgot password ?
         </p>
      </Link>
   );
}
 
export default ForgotPassword;