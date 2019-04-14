import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledSubmitErrors';

const SubmitErrors = ({errors}) => {
   return (  
      <S.Wrapper>
         {errors.emailExist ? <S.Paragraph>Email already in use</S.Paragraph> : undefined}
         {errors.errName < 3 && !errors.errName ? 
            <S.Paragraph>
               Minimum 3 letters in name
            </S.Paragraph> : undefined
         }
         {errors.errSurname < 3 && !errors.errSurname ? 
            <S.Paragraph>
               Minimum 3 letters in surname
            </S.Paragraph> : undefined
         }
         {errors.errPassword < 6 && !errors.errPassword ? 
            <S.Paragraph>
               Minimum 6 letters in password
            </S.Paragraph> : undefined
         }            
         {!errors.errCheck ? <S.Paragraph>You must accept terms of use</S.Paragraph> : undefined}
      </S.Wrapper>
   );
}
 
export default SubmitErrors;

SubmitErrors.propTypes = {
   errors: PropTypes.object.isRequired
}