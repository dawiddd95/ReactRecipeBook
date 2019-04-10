import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './ForgotPasswordPageForm.scss';

import FormMessages from '../../components/FormMessages/FormMessages';

class PageForm extends Component {
   state = {  
      inputValue: '',
      submit: false,
      err: false,
      success: false
   }

   handleFormSubmit = (event) => {
      event.preventDefault();

      if(this.state.inputValue && this.state.inputValue === this.props.userEmail) {
         this.setState({
            err: false,
            success: true
         })
      } else if(this.state.inputValue && this.state.inputValue !== this.props.userEmail) {
         this.setState({
            err: true,
            success: false
         })
      }

      this.setState({
         submit: true
      })
   }

   handleInputChange = (event) => {
      this.setState({
         inputValue: event.currentTarget.value,
         submit: false,
         err: false,
         success: false
      })
   }

   render() { 
      const {inputValue, submit, err, success} = this.state;

      if(this.props.isLoggedIn) {
         return <Redirect to='/app/home' />
      }

      return (  
         <div className='page__formWrapper'>
            <form onSubmit={this.handleFormSubmit} className='formWrapper__form'>
               <p className='form__title'>Find Your Account</p>
               Please enter your email to search for account
               <input 
                  type="text" 
                  placeholder='Enter email here'
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}   
               />
               <button>Search</button>
               <FormMessages 
                  inputValue={inputValue}
                  submit={submit}
                  err={err}
                  success={success}
               />
            </form>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      userEmail: state.userRegisterReducer.email,
      isLoggedIn: state.permissionReducer
   }
}

const ConnectedPageForm = connect(mapStateToProps)(PageForm);

export default ConnectedPageForm;