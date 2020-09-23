import React from 'react';
import '../App.scss';

const Number = (props) => {
    return(
        <div className="App__item">
            <div>{props.name}</div>
            <button className="Num__btn"
            onClick={props.deleteItemHandler}
            >x</button>
        </div>
    )
}

export default Number;