import React from 'react';

import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'
import foods from '../foods.json';
import AddNewFoods from './AddNewFoods'
import SearchBar from './SearchBar';



class FoodList extends React.Component{
  
  state = {
    foods: foods,
    formShow: false,
    searchTerm: ""
  }
  
  addNewFoodHandler = (newFood) => {
    this.setState({
      foods: this.state.foods.concat(newFood),
      formShow: false
    })
  }

  toggleButton = (event) => {
    this.setState({
      formShow: true
    })
  }

  searchHandler = (event) => {
    let inputValue = event.target.value
    
        this.setState({
          searchTerm: inputValue
        })
}

  render() {

let filteredFood = this.state.foods.filter((food) => food.name.toLowerCase().includes(this.state.searchTerm))

    return (
      <div>
        <div>
          <SearchBar onSearchCallBack={this.searchHandler} value={this.searchHandler} currentSearchTerm={this.state.searchTerm}/>
        </div>
         <div>
          {this.state.formShow ? <AddNewFoods addNewFoodHandler={this.addNewFoodHandler}/> : <button onClick={this.toggleButton}>Add New Food</button>}
      </div>
      <div className="App">
        {filteredFood.map((fd) => <FoodBox key={fd.name} food={fd} />)}
      </div>
      </div>
    );
  }
};
  

export default FoodList;
