// ZAWSZE ROBILEM TAK ZE PIERW SIE REJESTROWALEM A POTEM LOGOWANIE

import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';

import './NavbarLoginForm.scss';

import {changeLoggedIn} from '../../actions/actions';

import LoginFormInput from '../../components/LoginFormInput/LoginFormInput';
import LoginError from '../../components/LoginError/LoginError';
import FormButton from '../../components/FormButton/FormButton';


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
         <form className='navbar__loginForm' onSubmit={this.props.handleSubmit(this.submit)}>
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
            <FormButton 
               nameOfClass='loginForm__button'
               text='Log In'
            />
            {loginErr && <LoginError /> }
         </form>
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