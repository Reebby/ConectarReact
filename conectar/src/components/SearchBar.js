import React from 'react';

const SearchBar = ({searchChange}) => (
    <div className="wrap">
    <div className="search">
        <input type="text" className="searchTerm" placeholder="search animes by title"  onChange={searchChange} />
        <button type="submit" className="searchButton">
            <i className="fa fa-search" />
        </button>
    </div>
</div>
)

export default SearchBar;