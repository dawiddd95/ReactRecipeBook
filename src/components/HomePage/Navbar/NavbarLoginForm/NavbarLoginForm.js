import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import './NavbarLoginForm.scss';

import {changeLoggedIn} from '../../../../actions/actions';

import LoginError from './LoginError/LoginError';


class NavbarLoginForm extends Component {
   state = {
      loginErr: false
   }

   submit = values => {
      const userData = this.props.userData;

      let userIndex = this.props.userData.map((currentElement, index) => {
         if(currentElement.email === values.email) {
            return index;
         }
         return index;
      })

      userIndex = userIndex.filter(currentElement => currentElement !== undefined);

      if(userData[userIndex].email === values.email && userData[userIndex].password === values.password) {
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
            <div className='loginForm__input'>
               <label htmlFor='email'>
                  Email or username
               </label>
               <Field name="email" component="input" type="text" />
            </div>
            <div className='loginForm__input'>
               <label htmlFor='password'>
                  Password
               </label>
               <Field name="password" component="input" type="password" />
            </div>
            <button type='submit' className='loginForm__button'>
               Log In
            </button>
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