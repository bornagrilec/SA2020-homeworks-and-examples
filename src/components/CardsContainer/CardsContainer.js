import React from 'react';
import './CardsContainer.scss';

const CardsContainer = (props) => {
    return (
        <div className="CardsContainer">
            {props.children}
        </div>
    );
}

export default CardsContainer;