import React from 'react'

import * as S from './StyledMain'

import RegisterForm from '../../../containers/HomePage/RegisterForm/RegisterForm';
import H1 from '../../H1/H1';
import H2 from '../../H2/H2';

const Main = () => {
   return (  
      <S.Wrapper>
         <RegisterForm/>
         <S.Title>
            <H1 text='PLAN. SHOP. COOK.' />
            <H2 text='LET`S MAKE MEAL TOGETHER' />
         </S.Title>
      </S.Wrapper>
   );
}
 
export default Main;