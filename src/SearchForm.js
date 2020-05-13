import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const SearchForm = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [advancedIconToggle, setAdvancedIconToggle] = useState(
    'advanced-icon-down'
  );
  const [advanced, setAdvanced] = useState('hide-advanced');
  const [cuisineQuery, setCuisineQuery] = useState('');

  const handleAdvanced = () => {
    console.log('clicked arrow');
    if (!formVisible) {
      setFormVisible(true);
      setAdvanced('show-advanced');
      setAdvancedIconToggle('advanced-icon-up');
    } else {
      setFormVisible(false);
      setAdvanced('hide-advanced');
      setAdvancedIconToggle('advanced-icon-down');
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
      <div className={advanced}>
        <div className="advanced-row">
          <select
            className="custom-select"
            name={cuisineQuery}
            id="inputGroupSelect01"
          >
            <option value="">Cuisine ...</option>
            <option value="african">African</option>
            <option value="chinese">Chinese</option>
            <option value="japanese">Japanese</option>
            <option value="korean">Korean</option>
            <option value="vietnamese">Vietnamese</option>
            <option value="thai">Thai</option>
            <option value="indian">Indian</option>
            <option value="british">British</option>
            <option value="irish">Irish</option>
            <option value="french">French</option>
            <option value="italian">Italian</option>
            <option value="mexican">Mexican</option>
            <option value="spanish">Spanish</option>
            <option value="middle eastern">Middle Eastern</option>
            <option value="american">American</option>
            <option value="jewish">Jewish</option>
            <option value="cajun">Cajun</option>
            <option value="southern">Southern</option>
            <option value="greek">Greek</option>
            <option value="german">German</option>
            <option value="nordic">Nordic</option>
            <option value="eastern european">Eastern European</option>
            <option value="caribbean">Caribbean</option>
            <option value="latin american">Latin American</option>
          </select>
        </div>
        <div className="advanced-row diet">
          <label className="diets-label" id="diet-label">
            Diet
          </label>
          <div className="diet-cb">
            <label htmlFor="dairy">Vegetarian</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
          <div className="diet-cb">
            <label htmlFor="dairy">Vegan</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
          <div className="diet-cb">
            <label htmlFor="dairy">Pesectarian</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
          <div className="diet-cb large">
            <label htmlFor="dairy">Lacto Vegetarian</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
          <div className="diet-cb">
            <label htmlFor="dairy">Gluten free</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
        </div>
        <div className="advanced-row intolerances">
          <label className="intolerances-label" id="intolerance-label">
            Intolerances
          </label>

          <div className="intolerance-cb">
            <label htmlFor="dairy">Dairy</label>
            <input id="dairy" type="checkbox" name="dairyIntolerance" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="wheat">Wheat</label>
            <input id="wheat" type="checkbox" name="wheatIntolerance" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="egg">Egg</label>
            <input id="egg" type="checkbox" name="eggIntolerance" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="gluten">Gluten</label>
            <input name="glutenIntolerance" id="gluten" type="checkbox" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="peanut">Peanut</label>
            <input name="peanutIntolerance" id="peanut" type="checkbox" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="sesame">Sesame</label>
            <input name="sesameQuery" id="sesame" type="checkbox" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="shellfish">Shellfish</label>
            <input name="shellfishQuery" id="shellfish" type="checkbox" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="soy">Soy</label>
            <input name="soyQuery" id="soy" type="checkbox" />
          </div>
          <div className="intolerance-cb">
            <label htmlFor="sulfite">Sulfite</label>
            <input name="sulfiteQuery" id="sulfite" type="checkbox" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
