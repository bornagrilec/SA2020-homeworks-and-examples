import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <input className="SearchBar-Input"
                type="text"
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={(event) => props.onValueChange(event.target.value)} />
        </div>
    );
}

export default SearchBar;