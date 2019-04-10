import React from 'react'

import * as S from './StyledSubmitErrors';

const SubmitErrors = ({errors}) => {
   return (  
      <S.Wrapper>
         {errors.emailExist ? <p>Email already in use</p> : undefined}
         {errors.errName < 3 && !errors.errName ? 
            <p>Minimum 3 letters in name</p> : undefined
         }
         {errors.errSurname < 3 && !errors.errSurname ? 
            <p>Minimum 3 letters in surname</p> : undefined
         }
         {errors.errPassword < 6 && !errors.errPassword ? 
            <p>Minimum 6 letters in password</p> : undefined
         }            
         {!errors.errCheck ? <p>You must accept terms of use</p> : undefined}
      </S.Wrapper>
   );
}
 
export default SubmitErrors;