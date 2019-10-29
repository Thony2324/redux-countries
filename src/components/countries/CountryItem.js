import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country, handleDelete, toggleCheckbox, selected }) => {
  return (
    <li>
      <input
        className="uk-checkbox uk-margin-small-right"
        type="checkbox"
        checked={selected}
        onChange={() => {
          toggleCheckbox(country.slug);
        }}
      />
      <strong>{country.name}</strong>
      <button
        className="btn-delete uk-button uk-button-link uk-float-right"
        data-uk-tooltip="title: Delete"
        onClick={() => handleDelete(country.id)}>
        <span data-uk-icon="icon: trash; ratio: 1"></span>
      </button>
      <Link
        to={`/countries/edit/${country.id}`}
        className="uk-float-right uk-margin-right"
        data-uk-tooltip="title: Edit">
        <span data-uk-icon="icon: file-edit; ratio: 1"></span>
      </Link>
      <Link
        to={`/countries/${country.id}`}
        className="uk-float-right uk-margin-right"
        data-uk-tooltip="title: See detail">
        <span data-uk-icon="icon: search; ratio: 1"></span>
      </Link>
    </li>
  );
};

export default Country;
