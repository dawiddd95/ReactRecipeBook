import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import * as S from './StyledRegisterForm';
import {changeLoggedIn, userRegisterAction} from '../../../actions/actions';

import SubmitErrors from '../../../components/HomePage/SubmitErrors/SubmitErrors';
import H2 from '../../../components/H2/H2';
import RegisterFormInput from '../../../components/HomePage/RegisterFormInput/RegisterFormInput';
import RegisterFormCheckbox from '../../../components/HomePage/RegisterFormCheckbox/RegisterFormCheckbox';

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

      return (
         <S.Form onSubmit={this.props.handleSubmit(this.submit)}>
            <H2 text='CREATE NEW ACCOUNT' />
            <H2 text='IT`S FREE AND ALWAYS BE.' />
            <S.InputsWrapper>
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
            </S.InputsWrapper>
            <S.SubmitWrapper>
               <S.Button>
                  Sign In
               </S.Button>
               <SubmitErrors 
                  errors={this.state.errors}
               />
               {registerSuccess && <p style={{'color': '#004c00'}}>Register Success! Now Log In ! :)</p>}
            </S.SubmitWrapper>
         </S.Form>
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