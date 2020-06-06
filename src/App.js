import React from 'react';
import './App.css'

import FoodList from './components/FoodList'

class App extends React.Component {


    render() {
        return(
            <div>
                <FoodList/>
            </div>
        )
    }
}

export default App;