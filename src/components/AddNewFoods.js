import React from 'react';

class AddNewFoods extends React.Component {

    state = {
        image: "",
        name: "",
        calories: {
            type: Number,
            value: 0
        }
    }

    // addImageHandler = () => {
    //     let inputValue = event.target.value 

    //     this.setState({
    //         image: InputValue
    //     })
    // }

    nameChangeHandler =(event) => {

        let inputValue = event.target.value

        this.setState({
            name: inputValue
        })
    };

    caloriesChangeHandler = (event) => {

        let inputValue = event.target.value

        this.setState({
            calories: inputValue
        });
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        
        let newFood = this.state

        this.props.addNewFoodHandler(newFood)

        this.setState({
            image: "",
            name: "",
            calories: {
                type: Number,
                value: 0
            }
        });


    }


    render() {
        return (
            <div className="">
            <form onSubmit={this.formSubmitHandler}>
                {/* image: <input name="image" placeholder="img" value={this.state.image} onChange={this.addImageHandler}></input> */}
            Food Name: <input type="text" placeholder="food" name="name" value={this.state.name} onChange={this.nameChangeHandler}></input>
            Amount of Calories: <input type="number" placeholder="0" name="calories" value={this.state.calories} onChange={this.caloriesChangeHandler}></input>
              <button type="submit">Save</button>
            </form>
          </div>
    )
}

}

export default AddNewFoods;
