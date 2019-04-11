import React from 'react'
import {Link} from 'react-router-dom';

import * as S from './StyledNavItem.js';

const NavItem = ({text, icon}) => {
   return (
      <Link style={{'textDecoration': 'none'}} to={`/app/${text.toLowerCase()}`}>
         <S.Item>
            <S.Img src={icon} alt=""/>
            {text}
         </S.Item>
      </Link>  
   );
}
 
export default NavItem;