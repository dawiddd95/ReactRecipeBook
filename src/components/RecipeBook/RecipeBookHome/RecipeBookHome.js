import React, {Component} from 'react'

import './RecipeBookHome.scss';

import SectionTitle from '../SectionTitle/SectionTitle';
import Recipes from './Recipes/Recipes';
import LoadingFetchData from './LoadingFetchData/LoadingFetchData';

//const keyAPI = 'a7b83ca1fbaa55083cad4707834d4785' 
//another key if previous have limit
const keyAPI = '1ef68b71c2c80cd188b64df3f012b08e'; 
const requestAPI = `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${keyAPI}&count=50`;


class RecipeBookHome extends Component {
   // 1. Tworzymy componentDidMount() , .then() i .catch() nie mogą mieć na końcu śrendika
   // 2. Tworzymy stan recipes: []
   // 3. w then po response.json() wpisujemy this.setState({})
   // 4. Robimy .map() na zwroconym obiekcie
   // 5. recipes musi byc w storze
   // 6. Ze style w jsx piszemy w camelCase
   state = {
      recipes: [],
      isFetching: true
   }

   componentDidMount() {
      fetch(requestAPI)
      .then(response => {
         if(response.ok) {
            return response;
         } 
         throw Error("not connected with api");
      })
      .then(response => response.json())
      // tutaj obsluga
      .then(data => {
         console.log(data)
         this.setState({
            recipes: data.recipes, // Poniewaz idziemy w obiekt.poleRecipes inaczej wywali blad w .map()
            isFetching: false
         })
      })
      .catch(err => console.log(err))
   }
   
   render() {
      return (  
         <>
            <SectionTitle 
               title='TRENDING RECIPES'
               haveSelect={false}
            />
            <Recipes 
               recipes={this.state.recipes}
            />
            {this.state.isFetching && <LoadingFetchData />}
         </>
      ); 
   }
}
 
export default RecipeBookHome;