import React from 'react';

import './Search.style.css';

const Search = () => {
    return (
        <div className="search">
            <input className="search__input" type="text" placeholder="Search for a movie, tv show, person.."/>
            <span className="search__icon"></span>
        </div>
    )
}

export default Search;
