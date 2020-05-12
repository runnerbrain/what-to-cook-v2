import React from 'react';
import './App.css';

const SearchForm = () => {
  return (
    <form className="searchForm">
      <div className="searchFieldWrapper">
        <input className="searchFieldText" type="text" />
        <button className="searchFieldButton">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;
