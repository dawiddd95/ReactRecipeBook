import React, {Component} from 'react'

import './Navbar.scss';

import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarLoginForm from './NavbarLoginForm/NavbarLoginForm';
import ForgotPassword from './ForgotPassword/ForgotPassword';

class Navbar extends Component {
   render() {
      return (  
         <nav className="homePage__navbar">
            <NavbarLogo />
            <ForgotPassword />
            <NavbarLoginForm />
         </nav>
      );
   }
}
 
export default Navbar;