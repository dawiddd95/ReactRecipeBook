import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import StarRatingComponent from 'react-star-rating-component';

import {addRecipeAction} from '../../actions/actions';

import './CreateRecipeForm.scss';
import AddRecipeFormInput from '../../components/AddRecipeFormInput/AddRecipeFormInput';
import addIngredientInput from '../../images/addIngredient.svg';
import addMethodInput from '../../images/addMethod.svg';

import FormRecipeProperties from '../../components/FormRecipeProperties/FormRecipeProperties';

class CreateRecipeForm extends Component {
   state = {  
      starRating: 0,
      recipeLp: 0,
      ingredientInputs: [{
         ingredientLp: 0, 
         ingredientValue: "",
      }],
      methodInputs: [{
         methodLp: 0,
         methodValue: "",
      }],    
      ingredient: {
         ingredientLp: 1,
         ingredientValue: "",
      },
      method: {
         methodLp: 1,
         methodValue: "",
      },
      redirectToNewPage: false
   }

   scrollToTop = () => {
      window.scrollTo(0,0);
   };
   onStarClick = (nextValue, prevValue, name) => {
      this.setState({
         starRating: nextValue
      })
   };
   addIngredientInput = () => {
      this.setState(prevState => ({
         ingredient: {
            ingredientLp: prevState.ingredient.ingredientLp+1
         }, 
         ingredientInputs: this.state.ingredientInputs.concat([{
            ingredientLp: this.state.ingredient.ingredientLp, 
            ingredientValue: ""
         }]) 
      }))
   };
   addMethodInput = () => {
      this.setState(prevState => ({
         method: {
            methodLp: prevState.method.methodLp+1
         }, 
         methodInputs: this.state.methodInputs.concat([{
            methodLp: this.state.method.methodLp, 
            methodValue: ""
         }]) 
      }))
   };
   changeIngredientInputValue = lp => event => {
      const newInput = this.state.ingredientInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, ingredientValue: event.target.value }
      })

      this.setState({
         ingredientInputs: newInput
      })
   };
   changeMethodInputValue = lp => event => {
      const newInput = this.state.methodInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, methodValue: event.target.value }
      })

      this.setState({
         methodInputs: newInput
      })
   };
   submit = values => {
      values.ingredients = this.state.ingredientInputs;
      values.method = this.state.methodInputs;
      values.starRating = this.state.starRating;
      values.favorite = false;
      values.lp = this.state.recipeLp;
      this.props.newRecipe(values);
      
      this.setState(prevState => ({
         recipeLp: prevState.recipeLp+1,
         redirectToNewPage: true
      }))

      console.log(values)
   }

   componentDidMount() {
      this.scrollToTop();
   }

   render() { 
      const { starRating, ingredientInputs, methodInputs, redirectToNewPage } = this.state;
      const styleRatingStars = {
         'marginBottom': '0',
         'paddingLeft': '10px',
         'borderLeft': '4px solid #333',
         'fontSize': '30px',
      };
      const ingredients = ingredientInputs.map((currentElement) => (
         <div key={currentElement.ingredientLp} className='inputs__ingredientInput'>
            <input  
               type="text"
               value={currentElement.ingredientValue}
               onChange={this.changeIngredientInputValue(currentElement.ingredientLp)}
            />
            <img
               key={currentElement.ingredientLp}
               onClick={() => this.addIngredientInput(currentElement.ingredientLp)} 
               src={addIngredientInput} 
               alt="add"
            /> 
         </div>
      ));
      const method = methodInputs.map(currentElement => (
         <div key={currentElement.methodLp} className='inputs__methodInput'>
            <label className='methodInput__label'>
               Step {currentElement.methodLp+1}:
            </label>
            <div className='methodInput__wrapper'>
               <input 
                  type="text"
                  value={currentElement.methodValue}
                  onChange={this.changeMethodInputValue(currentElement.methodLp)}
               />
               <img
                  key={currentElement.methodLp}
                  onClick={() => this.addMethodInput(currentElement.methodLp)} 
                  src={addMethodInput} 
                  alt="add"
               /> 
            </div>
         </div>
      ));

      if(redirectToNewPage) {
         return <Redirect to='/app/recipes' />
      }

      return (   
         <form className='createRecipe__form' onSubmit={this.props.handleSubmit(this.submit)}>
            <AddRecipeFormInput
               nameOfClass='form__recipeTitle'
               inputClass='recipeTitle__input form__input'
               title='Title'
               name='recipeTitle'
               type='text'
               placeholder=''
            /> 
            <AddRecipeFormInput
               nameOfClass='form__image'
               inputClass='image__input form__input'
               title='Recipe Image Link'
               name='recipeImage'
               type='text'
               placeholder='E.g. https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550.jpg'
            /> 
            <label className='form__starRating'>
               Rating: 
               <div className='starRating__stars' style={styleRatingStars}>
                  <StarRatingComponent
                     name='Rating: ' 
                     value={starRating} 
                     starCount={5} 
                     emptyStarColor="#f3f3f3"
                     onStarClick={this.onStarClick} 
                  />
               </div>
            </label>
            <AddRecipeFormInput
               nameOfClass='form__description'
               inputClass='description__input form__input'
               title='Description'
               name='recipeDescription'
               type='text'
               placeholder=''
            />
            <AddRecipeFormInput
               nameOfClass='form__nutrition'
               inputClass='nutrition__input form__input'
               title='Nutrition'
               name='recipeNutrition'
               type='text'
               placeholder=''
            />
            <FormRecipeProperties />
            <div className='form__ingredients'>
               <div className='ingredients__title'>
                  <p>Ingredients</p>
               </div>
               <div className='ingredients__inputs'>
                  {ingredients}
               </div>
            </div>
            <div className='form__method'>
               <div className='method__title'>
                  <p>Method</p>
               </div>
               <div className='method__inputs'>
                  {method}
               </div>
            </div>
            <AddRecipeFormInput
               nameOfClass='form__comment'
               inputClass='comment__input form__input'
               title='Comment To Recipe'
               name='recipeComment'
               type='text'
               placeholder=''
            />
            <AddRecipeFormInput
               nameOfClass='form__article'
               inputClass='article__input form__input'
               title='Recipe Article Link'
               name='recipeArticle'
               type='text'
               placeholder='E.g. https://www.delish.com/cooking/recipe-ideas/recipes/a51337/classic-lasagna-recipe/'
            />
            <AddRecipeFormInput
               nameOfClass='form__video'
               inputClass='video__input form__input'
               title='Recipe Video Link'
               name='recipeVideo'
               type='text'
               placeholder='E.g. https://www.youtube.com/watch?v=zVqunZUuwSs'
            />
            <div className='form__buttons'>
               <button className='buttons__add'>
                  Add Recipe
               </button>
               <Link to='/app/recipes'>
                  Cancel
               </Link>
            </div>
         </form>
      );
   }
}

const mapDispatchToProps = dispatch => {
   return {
      newRecipe: (values) => dispatch(addRecipeAction(values)),
   }
}
 
CreateRecipeForm = connect(undefined, mapDispatchToProps)(CreateRecipeForm)

export default reduxForm({
   form: 'loginForm'
})(CreateRecipeForm); 