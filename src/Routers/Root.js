import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from '../components/HomePage/HomePage';
import RecipeBook from '../components/RecipeBook/RecipeBook';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ForgotPasswordPage from '../components/ForgotPasswordPage/ForgotPasswordPage';

class Root extends Component {
   render() {  
      return (  
         <Router>
            <Switch>
               <Route exact path='/' component={HomePage}/>
               <Route path='/forgotPassword' component={ForgotPasswordPage} />
               <PrivateRoute path="/app" component={RecipeBook} authed={this.props.isLoggedIn}/>
               <Route component={ErrorPage} />
            </Switch>
         </Router>
      );
   }
}

const mapStateToProps = state => {
   return {
     isLoggedIn: state.permissionReducer 
   }
 }
 
const ConnectedRoot = connect(mapStateToProps)(Root);

export default ConnectedRoot;