import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const CountryCompare = () => {
  return (
    <React.Fragment>
      <Nav currentRoute="countries" />
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">Compare countries</h1>
          <table className="uk-table uk-table-striped uk-table-hover uk-table-middle">
            <thead>
              <tr>
                <th></th>
                <th>Mexique</th>
                <th>Inde</th>
                <th>Thailande</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Currency</th>
                <td>Pesos</td>
                <td>Roupie</td>
                <td>Baht</td>
              </tr>
              <tr>
                <th>Jetlag</th>
                <td>6</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <th>Visa</th>
                <td>Non</td>
                <td>Oui</td>
                <td>Non</td>
              </tr>
            </tbody>
          </table>
          <Link to="/countries" className="uk-button uk-button-primary uk-margin-large-top">
            Back
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CountryCompare;
