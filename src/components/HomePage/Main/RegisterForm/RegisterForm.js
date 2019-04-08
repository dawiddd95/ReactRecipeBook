import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import './RegisterForm.scss';

import SubmitErrors from './SubmitErrors/SubmitErrors';

import {changeLoggedIn, userRegisterAction} from '../../../../actions/actions';

class RegisterForm extends Component {
   state = {
      registerSuccess: false,
      errors: {
         errName: true,
         errSurname: true,
         errEmail: true,
         errPassword: true,
         errCheck: true,
         emailExist: false
      }
   }

   validateName = (name) => name && name.length > 2 ? true : false;

   validateSurname = (surname) => surname && surname.length > 2 ? true : false;

   validateEmail = (email) => email ? true : false;
   
   validatePassword = (password) => password && password.length > 5 ? true : false;

   validateCheck = (accept) => accept ? true : false;

   validateEmailExist = (email) => {
      const validateEmail = this.props.registerValues.some(currentElement => {
         return currentElement.email === email;
      })

      return validateEmail;
   }

   submit = values => {
      const validateName = this.validateName(values.name);
      const validateSurname = this.validateSurname(values.surname); 
      const validateEmail = this.validateEmail(values.email);
      const validatePassword = this.validatePassword(values.password);
      const validateCheck = this.validateCheck(values.accept);
      const emailExist = this.validateEmailExist(values.email); 

      if(validateName && 
         validateSurname && 
         validatePassword && 
         validateEmail && 
         validateCheck && 
         !emailExist
      ) {
         this.props.registerUser(values); 

         this.setState({
            registerSuccess: true
         })
      } else {
         this.setState({
            registerSuccess: false
         })
      }

      this.setState({
         errors: {
            errName: validateName,
            errSurname: validateSurname,
            errEmail: validateEmail,
            errPassword: validatePassword,
            errCheck: values.accept,
            emailExist: emailExist
         }
      })
   }

   render() {
      const {registerSuccess, errors} = this.state;
      const errorBorder = {'border': '2px solid red'};
      const success = {'color': '#004c00'};

      //if(this.props.isLoggedIn) {
      //   return <Redirect to='/app/home' />
      //}

      return (
         <form className='main__registerForm' onSubmit={this.props.handleSubmit(this.submit)}>
            <h2>CREATE NEW ACCOUNT</h2> 
            <h2>IT`S FREE AND ALWAYS BE.</h2> 
            <div className='registerForm__inputs'>
               <div className='registerForm__input'>
                  <label htmlFor="name">name:</label>
                  <Field 
                     style={!errors.errName ? errorBorder : {}} 
                     name="name" 
                     component="input" 
                     type="text" 
                  />
               </div>
               <div className='registerForm__input'>
                  <label htmlFor='surname'>surname:</label>
                  <Field 
                     style={!errors.errSurname ? errorBorder : {}}
                     name="surname" 
                     component="input" 
                     type="text" 
                  />
               </div>
               <div className='registerForm__input'>
                  <label htmlFor="email">email:</label>
                  <Field 
                     style={!errors.errEmail ? errorBorder : {}}
                     name="email" 
                     component="input" 
                     type="email" 
                  />
               </div>
               <div className='registerForm__input'>
                  <label htmlFor="password">password:</label>
                  <Field 
                     style={!errors.errPassword ? errorBorder : {}}
                     name="password" 
                     component="input" 
                     type="password" 
                  />
               </div>
               <div className='registerForm__input registerForm__input--checkbox'>
                  <Field   
                     name="accept" 
                     component="input" 
                     type="checkbox" 
                  />
                  <label 
                     style={!errors.errCheck ? {'color': 'red'} : {}} 
                     htmlFor="accept"
                  >
                     Accept Terms Of Use
                  </label>
               </div>
            </div>
            <div className='registerForm__submit'>
               <button className='submit__button' type='submit'>
                  Sign In
               </button>
               <SubmitErrors 
                  errors={this.state.errors}
                  registerUser={this.props.registerValues}
               />
               {registerSuccess && <p style={success}>Register Success! Now Log In ! :)</p>}
            </div>
         </form>
      )
   }
}

const mapDispatchToProps = dispatch => {
   return {
      loggedIn: () => dispatch(changeLoggedIn(true)),
      registerUser: (values) => dispatch(userRegisterAction(values))  
   }
}

const mapStateToProps = state => {
   return {
      isLoggedIn: state.permissionReducer,
      registerValues: state.userRegisterReducer
   }
}

RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterForm);

export default reduxForm({
   form: 'registerForm'
})(RegisterForm);