import React from 'react'
import * as S from './StyledFormButton'

const FormButton = ({text}) => {
   return (  
      <S.Button type='submit'>
         {text}
      </S.Button>
   );
}
 
export default FormButton;
