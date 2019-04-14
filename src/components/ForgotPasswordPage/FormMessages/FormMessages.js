import React from 'react';
import PropTypes from 'prop-types';

import * as S from './StyledFormMessages';

const FormMessages = ({inputValue, submit, err, success}) => {
   return (  
      <>
         {(inputValue === '' && submit) && <S.Paragraph errorColor>
            Please enter email address
         </S.Paragraph>}
         {(err && inputValue !== '') && <S.Paragraph errorColor>
            We couldn't find your account with that information
         </S.Paragraph>}
         {success && <S.Paragraph>We send you a new password link on email</S.Paragraph>}
      </>
   );
}
 
export default FormMessages;

FormMessages.propTypes = {
   inputValue: PropTypes.string,
   submit: PropTypes.bool.isRequired ,
   err: PropTypes.bool.isRequired,
   success: PropTypes.bool.isRequired
}