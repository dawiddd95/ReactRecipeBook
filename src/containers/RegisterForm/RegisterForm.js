import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import './RegisterForm.scss';

import {changeLoggedIn, userRegisterAction} from '../../actions/actions';

import SubmitErrors from '../../components/SubmitErrors/SubmitErrors';
import H2 from '../../components/H2/H2';
import RegisterFormInput from '../../components/RegisterFormInput/RegisterFormInput';
import RegisterFormCheckbox from '../../components/RegisterFormCheckbox/RegisterFormCheckbox';
import FormButton from '../../components/FormButton/FormButton';

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
            <H2 text='CREATE NEW ACCOUNT' />
            <H2 text='IT`S FREE AND ALWAYS BE.' />
            <div className='registerForm__inputs'>
               <RegisterFormInput 
                  name='name'
                  error={errors.errName}
                  errorBorder={errorBorder}
                  type='text'
               />
               <RegisterFormInput 
                  name='surname'
                  error={errors.errSurname}
                  errorBorder={errorBorder}
                  type='text'
               />
               <RegisterFormInput 
                  name='email'
                  error={errors.errEmail}
                  errorBorder={errorBorder}
                  type='email'
               />
               <RegisterFormInput 
                  name='password'
                  error={errors.errPassword}
                  errorBorder={errorBorder}
                  type='password'
               />
               <RegisterFormCheckbox 
                  error={errors.errCheck}
               />
            </div>
            <div className='registerForm__submit'>
               <FormButton 
                  nameOfClass='submit__button'
                  text='Sign In'
               />
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