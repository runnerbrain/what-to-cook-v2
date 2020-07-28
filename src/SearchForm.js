import React, { useState, Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

import Portal from './Portal';
import { Toggle } from './Toggle';

import './App.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const SearchForm = ({ onSearchClick }) => {
  const [queryObj, setQueryObj] = useState({});

  const handleInputChange = (event) => {
    const { name, value, checked, type, className } = event.target;
    switch (type) {
      case 'text':
        setQueryObj({ ...queryObj, [name]: value });
        break;
      case 'select-one':
        setQueryObj({ ...queryObj, [name]: value });
        break;
      case 'checkbox':
        switch (className) {
          case 'diet-cb': {
            checked
              ? setQueryObj({
                  ...queryObj,
                  diet: { ...queryObj.diet, [name]: true },
                })
              : setQueryObj({
                  ...queryObj,
                  diet: { ...queryObj.diet, [name]: false },
                });

            break;
          }
          case 'intolerance-cb': {
            checked
              ? setQueryObj({
                  ...queryObj,
                  intolerance: { ...queryObj.intolerance, [name]: true },
                })
              : setQueryObj({
                  ...queryObj,
                  intolerance: { ...queryObj.intolerance, [name]: false },
                });
            break;
          }
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const searchClicked = (e) => {
    console.log(queryObj);
    queryObj.number = 5;
    queryObj.offset = 0;
    onSearchClick(queryObj);
  };

  return (
    <form className="searchForm">
      <div className="searchFieldWrapper">
        <input
          className="searchFieldText"
          type="text"
          name="query"
          onChange={handleInputChange}
        />
        <Link to="/recipes">
          <button className="searchFieldButton" onClick={searchClicked}>
            Search
          </button>
        </Link>
      </div>

      <Toggle>
        {([toggled, toggle, transition, iconTransition]) => (
          <Fragment>
            {/* <Link to="/search" onClick={handleAdvanced}> */}
            <Link to="/search" onClick={toggle}>
              {iconTransition.map(({ item, key, props }) =>
                item ? (
                  <animated.div style={props}>
                    <FaAngleDoubleUp size={24} />
                  </animated.div>
                ) : (
                  <animated.div style={props}>
                    <FaAngleDoubleDown size={24} />
                  </animated.div>
                )
              )}
            </Link>
            {transition.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={props}
                    className="show-advanced"
                  >
                    <div className="advanced-row">
                      <select
                        className="custom-select"
                        name="cuisine"
                        id="inputGroupSelect02"
                        onChange={handleInputChange}
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
                        <option value="eastern european">
                          Eastern European
                        </option>
                        <option value="caribbean">Caribbean</option>
                        <option value="latin american">Latin American</option>
                      </select>
                    </div>
                    <div className="advanced-row">
                      <select
                        className="custom-select"
                        name="type"
                        id="inputGroupSelect01"
                        onChange={handleInputChange}
                      >
                        <option value="">Type ...</option>
                        <option value="main course">Main course</option>
                        <option value="side dish">Side dish</option>
                        <option value="dessert">Dessert</option>
                        <option value="appetizer">Appetizer</option>
                        <option value="salad">Salad</option>
                        <option value="bread">Bread</option>
                        <option value="breakfast">Breakfast</option>
                        <option value="soup">Soup</option>
                        <option value="beverage">Beverage</option>
                        <option value="sauce">Sauce</option>
                        <option value="drink">Drink</option>
                      </select>
                    </div>
                    <div className="advanced-row diet">
                      <label className="diets-label" id="diet-label">
                        Diet
                      </label>
                      <div className="diet-cb">
                        <label htmlFor="vegetarian">Vegetarian</label>
                        <input
                          id="vegetarian"
                          type="checkbox"
                          name="vegetarian"
                          onChange={handleInputChange}
                          className="diet-cb"
                        />
                      </div>
                      <div className="diet-cb">
                        <label htmlFor="vegan">Vegan</label>
                        <input
                          id="vegan"
                          type="checkbox"
                          name="vegan"
                          className="diet-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="diet-cb">
                        <label htmlFor="pesectarian">Pesectarian</label>
                        <input
                          id="pesectarian"
                          type="checkbox"
                          name="pesectarian"
                          className="diet-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="diet-cb large">
                        <label htmlFor="lactoVegetarian">
                          Lacto Vegetarian
                        </label>
                        <input
                          id="lactoVegetarian"
                          type="checkbox"
                          name="lactoVegetarian"
                          className="diet-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="diet-cb">
                        <label htmlFor="glutenFree">Gluten free</label>
                        <input
                          id="glutenFree"
                          type="checkbox"
                          name="glutenFree"
                          className="diet-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="advanced-row intolerances">
                      <label
                        className="intolerances-label"
                        id="intolerance-label"
                      >
                        Intolerances
                      </label>

                      <div className="intolerance-cb">
                        <label htmlFor="dairy">Dairy</label>
                        <input
                          id="dairy"
                          type="checkbox"
                          name="dairy"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="wheat">Wheat</label>
                        <input
                          id="wheat"
                          type="checkbox"
                          name="wheat"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="egg">Egg</label>
                        <input
                          id="egg"
                          type="checkbox"
                          name="egg"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="gluten">Gluten</label>
                        <input
                          name="gluten"
                          id="gluten"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="peanut">Peanut</label>
                        <input
                          name="peanut"
                          id="peanut"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="sesame">Sesame</label>
                        <input
                          name="sesame"
                          id="sesame"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="shellfish">Shellfish</label>
                        <input
                          name="shellfish"
                          id="shellfish"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="soy">Soy</label>
                        <input
                          name="soy"
                          id="soy"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="intolerance-cb">
                        <label htmlFor="sulfite">Sulfite</label>
                        <input
                          name="sulfite"
                          id="sulfite"
                          type="checkbox"
                          className="intolerance-cb"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </animated.div>
                )
            )}
          </Fragment>
        )}
      </Toggle>
    </form>
  );
};

export default SearchForm;
