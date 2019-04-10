import React, {Component} from 'react'
import {connect} from 'react-redux';

import './RecipeBookHome.scss';
import {trendingRecipesAction} from '../../actions/actions';

import SectionTitle from '../../components/SectionTitle/SectionTitle';
import TrendingRecipes from '../../components/TrendingRecipes/TrendingRecipes';
import LoadingFetchData from '../../components/LoadingFetchData/LoadingFetchData';
import EmptyList from '../../components/EmptyList/EmptyList';

const keyAPI = '30ff560c1955a48278f1a074be37ccfa';
//another keys if previous have limit
//const keyAPI = 'a7b83ca1fbaa55083cad4707834d4785' 
//const keyAPI = '361706a1a572c9554763dc4e7235b993';
//const keyAPI = '1ef68b71c2c80cd188b64df3f012b08e'; 
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
      isFetching: true,
      apiCallLimit: false
   }

   componentDidMount() {
      fetch(requestAPI)
      .then(response => {
         console.log(response)
         if(response.ok) {
            return response;
         } 
         throw Error("not connected with api");
      })
      .then(response => response.json())
      // tutaj obsluga
      .then(data => {
         if(data.error === 'limit') {
            this.setState({
               isFetching: false,
               apiCallLimit: true
            })
         } else if(data) {
            this.setState({
               recipes: data.recipes, // Poniewaz idziemy w obiekt.poleRecipes inaczej wywali blad w .map()
               isFetching: false,
               isLoaded: true
            })
            this.props.saveTrendingRecipes(data.recipes);
         }
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
            <TrendingRecipes 
               recipes={this.state.recipes}
            /> 
            {this.state.isFetching && <LoadingFetchData />}
            {this.state.apiCallLimit && 
               <div style={{'marginTop': '60px'}}>
                  <EmptyList text='API calls reached the limit :('/>
               </div>
            }
         </>
      ); 
   }
}

const mapDispatchToProps = dispatch => {
   return {
      saveTrendingRecipes: (data) => dispatch(trendingRecipesAction(data))
   }
}

RecipeBookHome = connect(undefined, mapDispatchToProps)(RecipeBookHome);
 
export default RecipeBookHome;