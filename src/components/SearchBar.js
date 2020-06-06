import React from 'react';

function SearchBar(props) {

    let searchHandler = (event) => {
        let inputValue = event.target.value
    
        props.onSearchCallBack(inputValue)
    }
      
    return (
        <div>
            <input placeholder="search.." onChange={searchHandler} value={props.currentSearchTerm}></input>
        </div>
    )
};

export default SearchBar;