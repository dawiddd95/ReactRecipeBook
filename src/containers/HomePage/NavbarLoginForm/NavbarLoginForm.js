import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';

import * as S from './StyledNavbarLoginForm';

import {changeLoggedIn} from '../../../actions/actions';

import LoginFormInput from '../../../components/HomePage/LoginFormInput/LoginFormInput';
import LoginError from '../../../components/HomePage/LoginError/LoginError';


class NavbarLoginForm extends Component {
   state = {
      loginErr: false
   }

   submit = values => {   
      const userEmails = this.props.userData.map(currentElement => currentElement.email);
      const userPasswords = this.props.userData.map(currentElement => currentElement.password);
      const emailIndex = userEmails.findIndex(currentElement => currentElement === values.email);
      const passwordIndex = userPasswords.findIndex(currentElement => currentElement === values.password);
      const isCorrect = emailIndex === passwordIndex;

      if(isCorrect && (emailIndex > -1 || passwordIndex > -1)) {
         this.props.loggedIn();
         this.setState({
            loginErr: false 
         })
      } else {
         this.setState({
            loginErr: true
         })
      }
   }

   render() {
      const {loginErr} = this.state;

      if(this.props.isLoggedIn) {
         return <Redirect to='/app/home' />
      }

      return (  
         <S.Form onSubmit={this.props.handleSubmit(this.submit)}>
            <LoginFormInput 
               name='email'
               content='Email or username'
               type='text'
            />
            <LoginFormInput 
               name='password'
               content='Password'
               type='password'
            />
            <S.Button>
               Log In
            </S.Button>
            {loginErr && <LoginError /> }
         </S.Form>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loggedIn: () => dispatch(changeLoggedIn(true)),
   }
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.permissionReducer,
      userData: state.userRegisterReducer 
   }
}

NavbarLoginForm = connect(mapStateToProps, mapDispatchToProps)(NavbarLoginForm)

export default reduxForm({
   form: 'loginForm'
})(NavbarLoginForm); 