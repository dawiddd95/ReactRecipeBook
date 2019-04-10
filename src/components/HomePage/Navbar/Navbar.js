import React, {Component} from 'react'

import * as S from './StyledNavbar';

import NavbarLogo from '../../NavbarLogo/NavbarLogo';
import NavbarLoginForm from '../../../containers/HomePage/NavbarLoginForm/NavbarLoginForm';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

class Navbar extends Component {
   render() {
      return (  
         <S.Wrapper>
            <NavbarLogo />
            <ForgotPassword />
            <NavbarLoginForm />
         </S.Wrapper>
      );
   }
}
 
export default Navbar;