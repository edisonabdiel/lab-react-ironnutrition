import React from 'react';
import './App.css';

import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'
import foods from './foods.json';
import AddNewFoods from './components/AddNewFoods'



class App extends React.Component{
  
  state = {
  foods: foods
  }
  
  addNewFoodHandler = (newFood) => {
    this.setState({
      foods : this.state.foods.concat(newFood)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.foods.map((fd) => <FoodBox food={fd} />)}
        <AddNewFoods addNewFoodHandler={this.addNewFoodHandler}></AddNewFoods>
      </div>
    );
  }
};
  

export default App;
