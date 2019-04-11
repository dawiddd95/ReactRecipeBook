import React from 'react';
import {Link} from 'react-router-dom';

import * as S from './StyledPageNav';

const PageNav = () => {
   return (  
      <S.Wrapper>
         <Link to='/'>
            <S.Span> &larr; </S.Span> 
            <p>Comeback To Homesite</p>
         </Link>
      </S.Wrapper>
   );
}
 
export default PageNav;