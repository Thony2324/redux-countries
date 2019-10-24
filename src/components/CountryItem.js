import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

const Country = ({ country, handleDelete, selected, selectedCountries, history }) => {
  const onClickCountries = selected
    ? selectedCountries.filter(id => id !== country.id)
    : [...selectedCountries, country.id];

  const onClickCountriesSearch = queryString.stringify({ country: onClickCountries });

  console.log(country.id, selected);

  return (
    <li>
      <input
        className="uk-checkbox uk-margin-small-right"
        type="checkbox"
        checked={selected}
        onChange={() => {
          history.push(`/countries?${onClickCountriesSearch}`);
        }}
      />
      {/* <Link to={`/countries?${onClickCountriesSearch}`}>
        <div style={{ height: 20, width: 20, border: '2px solid blue', background: selected ? 'blue' : 'none' }}></div>
      </Link> */}
      <strong>
        {country.name} ({country.id})
      </strong>
      <button
        className="btn-delete uk-button uk-button-link uk-float-right"
        data-uk-tooltip="title: Delete"
        onClick={() => handleDelete(country.id)}
      >
        <span data-uk-icon="icon: trash; ratio: 1"></span>
      </button>
      <Link
        to={`/countries/edit/${country.id}`}
        className="uk-float-right uk-margin-right"
        data-uk-tooltip="title: Edit"
      >
        <span data-uk-icon="icon: file-edit; ratio: 1"></span>
      </Link>
      <Link
        to={`/countries/${country.id}`}
        className="uk-float-right uk-margin-right"
        data-uk-tooltip="title: See detail"
      >
        <span data-uk-icon="icon: search; ratio: 1"></span>
      </Link>
    </li>
  );
};

export default Country;
