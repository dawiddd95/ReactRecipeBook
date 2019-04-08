import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { reduxForm } from 'redux-form';
import StarRatingComponent from 'react-star-rating-component';

import {addRecipeAction} from '../../actions/actions';

import './CreateRecipeForm.scss';
import AddRecipeFormInput from '../../components/AddRecipeFormInput/AddRecipeFormInput';
import addIngredientInput from '../../images/addIngredient.svg';
import deleteIngredientInput from '../../images/deleteIngredient.svg'
import addMethodInput from '../../images/addMethod.svg';
import deleteMethodInput from '../../images/deleteMethod.svg';

import FormRecipeProperties from '../../components/FormRecipeProperties/FormRecipeProperties';

// usprawnic wstawianie do tablicy
// sprobowac i dynamiczne inputy zrobic w redux form
class CreateRecipeForm extends Component {
   state = {  
      starRating: 0,
      ingredientInputs: [{
         ingredientLp: 0, 
         ingredientValue: "",
         clicked: false,
      }],
      methodInputs: [{
         methodLp: 0,
         methodValue: "",
         clicked: false
      }],    
      ingredient: {
         ingredientLp: 1,
         ingredientValue: "",
         clicked: false,
      },
      method: {
         methodLp: 1,
         methodValue: "",
         clicked: false
      }
   }

   onStarClick = (nextValue, prevValue, name) => {
      this.setState({
         starRating: nextValue
      })
   }

   addIngredientInput = (lp) => {
      const ingredientInputs = this.state.ingredientInputs.map(currentElement => {
         if(currentElement.ingredientLp === lp) {
            currentElement.clicked = true;
         }

         this.setState({
            ingredientInputs
         })

         return currentElement;
      })

      this.setState(prevState => ({
         ingredient: {
            ingredientLp: prevState.ingredient.ingredientLp+1
         }, 
         ingredientInputs: this.state.ingredientInputs.concat([{
            ingredientLp: this.state.ingredient.ingredientLp, 
            ingredientValue: "",
            clicked: false
         }]) 
      }))
   }

   addMethodInput = (lp) => {
      const methodInputs = this.state.methodInputs.map(currentElement => {
         if(currentElement.methodLp === lp) {
            currentElement.clicked = true;
         }

         this.setState({
            methodInputs
         })

         return currentElement;
      })
      
      this.setState(prevState => ({
         method: {
            methodLp: prevState.method.methodLp+1
         }, 
         methodInputs: this.state.methodInputs.concat([{
            methodLp: this.state.method.methodLp, 
            methodValue: "",
            clicked: false
         }]) 
      }))
   }

   // tutaj 
   deleteMethodInput = lp => () => {
      this.setState({
         shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
       });
   }
   
   changeIngredientInputValue = lp => event => {
      const newInput = this.state.ingredientInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, ingredientValue: event.target.value }
      })

      this.setState({
         ingredientInputs: newInput
      })
   }

   changeMethodInputValue = lp => event => {
      const newInput = this.state.methodInputs.map((currentElement, index) => {
         if(lp !== index) return currentElement;
         return { ...currentElement, methodValue: event.target.value }
      })

      this.setState({
         methodInputs: newInput
      })
   }

   submit = values => {
      values.ingredients = this.state.ingredientInputs;
      values.method = this.state.methodInputs;
      values.starRating = this.state.starRating;
      
      console.log(values);
   }

   render() { 
      const { starRating, ingredientInputs, methodInputs } = this.state;

      const styleRatingStars = {
         'marginBottom': '0',
         'paddingLeft': '10px',
         'borderLeft': '4px solid #333',
         'fontSize': '30px',
      }

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
               src={!currentElement.clicked ? addIngredientInput : deleteIngredientInput} 
               alt=""
            /> 
         </div>
      ))

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
                  onClick={currentElement.clicked ?
                     () => this.addMethodInput(currentElement.methodLp) :
                     () => this.deleteMethodInput(currentElement.methodLp)
                  } 
                  src={!currentElement.clicked ? addMethodInput : deleteMethodInput} 
                  alt=""
               /> 
            </div>
         </div>
      ))

      return (   
            <form className='createRecipe__form' onSubmit={this.props.handleSubmit(this.submit)}>
               <AddRecipeFormInput
                  nameOfClass='form__recipeTitle'
                  inputClass='recipeTitle__input form__input'
                  name='Title'
                  type='text'
                  placeholder=''
               />
               <AddRecipeFormInput
                  nameOfClass='form__image'
                  inputClass='image__input form__input'
                  name='Recipe Image Link'
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
                  name='Description'
                  type='text'
                  placeholder=''
               />
               <AddRecipeFormInput
                  nameOfClass='form__nutrition'
                  inputClass='nutrition__input form__input'
                  name='Nutrition'
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
                  name='Comment To Recipe'
                  type='text'
                  placeholder=''
               />
               <AddRecipeFormInput
                  nameOfClass='form__article'
                  inputClass='article__input form__input'
                  name='Recipe Article Link'
                  type='text'
                  placeholder='E.g. https://www.delish.com/cooking/recipe-ideas/recipes/a51337/classic-lasagna-recipe/'
               />
               <AddRecipeFormInput
                  nameOfClass='form__video'
                  inputClass='video__input form__input'
                  name='Recipe Video Link'
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

const mapStateToProps = state => {
   return {
      recipe: state.addRecipeReducer,
   }
}
 
CreateRecipeForm = connect(mapStateToProps, mapDispatchToProps)(CreateRecipeForm)

export default reduxForm({
   form: 'loginForm'
})(CreateRecipeForm); 