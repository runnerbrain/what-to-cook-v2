import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";

const SearchForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [advancedIconToggle, setAdvancedIconToggle] = useState('advanced-icon-down');

  const handleAdvanced = () => {
    console.log("clicked arrow");
    if (!formVisible) {
      setFormVisible(true);
      setAdvancedIconToggle("advanced-icon-up");
    } else {
      setFormVisible(false);
      setAdvancedIconToggle("advanced-icon-down");
    }
  };

  return (
    <form className="searchForm">
      <div className="searchFieldWrapper">
        <input className="searchFieldText" type="text" />
        <button className="searchFieldButton">Search</button>
      </div>
      <Link to="/search" onClick={handleAdvanced}>
        <FaAngleDoubleDown size={24} className={advancedIconToggle} />
      </Link>
    </form>
  );
};

export default SearchForm;
