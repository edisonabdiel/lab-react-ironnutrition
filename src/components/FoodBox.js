import React from 'react';
import 'bulma/css/bulma.css';



function FoodBox (props) {

    return (
        <div>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={props.food.image} alt="food"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{props.food.name}</strong> <br />
                            <small>{props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                                <button className="button is-info">
                                    +
          </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
};

export default FoodBox;