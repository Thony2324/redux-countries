import React from "react";
import { connect } from "react-redux";
import Nav from "./Nav";
import { selectCountryById } from "../selectors";
import { addCountry, editCountry } from "../actions";
import cuid from "cuid";
import { Link } from "react-router-dom";
import slugify from "slugify";

const mapStateToProps = (state, ownProps) => ({
  country: selectCountryById(state, ownProps.match.params.id)
});

const mapDispatchToProps = {
  addCountry,
  editCountry
};

class CountryForm extends React.Component {
  constructor(props) {
    super(props);

    if (props.country[0] === undefined) {
      // Add
      this.state = {
        id: cuid.slug(),
        slug: "",
        name: "",
        currency: "",
        jetlag: 0,
        visa: false
      };
    } else {
      // Edit
      const { id, slug, name, currency, jetlag, visa } = props.country[0];
      this.state = {
        id: id,
        slug: slug,
        name: name,
        currency: currency,
        jetlag: jetlag,
        visa: visa
      };
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="countries" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-xlarge-bottom">
              {this.props.match.params.id !== undefined ? "Edit a country" : "Add a country"}
            </h1>
            <form>
              <div className="uk-margin">{this.props.match.params.id}</div>
              <div className="uk-margin">
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Enter name"
                  value={this.state.name}
                  onChange={e => {
                    this.setState({
                      name: e.target.value
                    });
                  }}
                />
              </div>

              <div className="uk-margin">
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Enter currency"
                  value={this.state.currency}
                  onChange={e => {
                    this.setState({
                      currency: e.target.value
                    });
                  }}
                />
              </div>

              <div className="uk-margin">
                <input
                  type="text"
                  className="uk-input"
                  placeholder="Enter jetlag"
                  value={this.state.jetlag}
                  onChange={e => {
                    this.setState({
                      jetlag: e.target.value
                    });
                  }}
                />
              </div>
              <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label>
                  <input
                    className="uk-checkbox"
                    type="checkbox"
                    checked={this.state.visa}
                    onChange={e => {
                      this.setState({
                        visa: !this.state.visa
                      });
                    }}
                  />{" "}
                  Visa
                </label>
              </div>

              <button
                type="button"
                className="uk-button uk-button-primary"
                onClick={() => {
                  // UPDATE STORE REDUX WITH THE CURRENT STATE
                  if (this.props.match.params.id !== undefined) {
                    // Edit
                    this.props.editCountry(
                      this.props.match.params.id,
                      slugify(this.state.name, { lower: true, remove: /[*+~.()'"!:@]/g }),
                      this.state.name,
                      this.state.currency,
                      this.state.jetlag,
                      this.state.visa
                    );
                  } else {
                    // Add
                    this.props.addCountry(
                      cuid.slug(),
                      slugify(this.state.name, { lower: true, remove: /[*+~.()'"!:@]/g }),
                      this.state.name,
                      this.state.currency,
                      this.state.jetlag,
                      this.state.visa
                    );
                  }
                  // Redirect to list
                  this.props.history.push("/countries");
                }}>
                {this.props.match.params.id !== undefined ? "Edit" : "Add"}
              </button>
              <Link to="/countries" className="uk-button uk-button-secondary uk-margin-left">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountryForm);
