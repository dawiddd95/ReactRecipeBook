import React from 'react';
import {NavLink} from 'react-router-dom';

import * as S from './StyledErrorPage.js';

import H1 from '../H1/H1';
import H2 from '../H2/H2';

const ErrorPage = () => {
   return (  
      <S.Wrapper>
         <S.Content>
            <H1 text='404'/>
            <H2 text='Error :(' />
            <S.Paragraph>
               There isn't a RecipeBook site here.
            </S.Paragraph>
            <S.Paragraph>
               If you want continue to use RecipeBook site go to
            </S.Paragraph>
            <NavLink to='/'>
               Home site
            </NavLink>
         </S.Content>   
      </S.Wrapper>
   );
}
 
export default ErrorPage;