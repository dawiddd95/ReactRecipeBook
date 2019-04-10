import React from 'react'
import {Link} from 'react-router-dom';

import * as S from './StyledForgotPassword';

const ForgotPassword = () => {
   return (  
      <Link to='/forgotPassword'>
         <S.Paragraph>
            Forgot password ?
         </S.Paragraph>
      </Link>
   );
}
 
export default ForgotPassword;