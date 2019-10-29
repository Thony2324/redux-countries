import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import { selectCountryById, selectLanguages } from "../../selectors";
import { addCountry, editCountry } from "../../actions";
import cuid from "cuid";
import { Link } from "react-router-dom";
import slugify from "slugify";

const mapStateToProps = (state, ownProps) => ({
  country: selectCountryById(state, ownProps.match.params.id),
  languages: selectLanguages(state)
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
        language: "",
        jetlag: "",
        visa: false
      };
    } else {
      // Edit
      const { id, slug, name, currency, language, jetlag, visa } = props.country[0];
      this.state = {
        id: id,
        slug: slug,
        name: name,
        currency: currency,
        language: language,
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
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">
              {this.props.match.params.id !== undefined ? "Edit a country" : "Add a country"}
            </h1>
            <form>
              <div className="uk-margin">
                <label className="uk-form-label">Name</label>
                <div className="uk-form-controls">
                  <input
                    type="text"
                    className="uk-input uk-form-width-large"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={e => {
                      this.setState({
                        name: e.target.value
                      });
                    }}
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Currency</label>
                <div className="uk-form-controls">
                  <input
                    type="text"
                    className="uk-input uk-form-width-large"
                    placeholder="Currency"
                    value={this.state.currency}
                    onChange={e => {
                      this.setState({
                        currency: e.target.value
                      });
                    }}
                  />
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Language</label>
                <div className="uk-form-controls">
                  <select
                    className="uk-select uk-form-width-small"
                    value={this.state.language}
                    onChange={e => {
                      this.setState({
                        language: e.target.value
                      });
                    }}>
                    {this.props.languages.map((lang, index) => {
                      return (
                        <option key={index} value={lang.id}>
                          {lang.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="uk-margin">
                <label className="uk-form-label">Jetlag</label>
                <div className="uk-form-controls">
                  {/* <select class="uk-select uk-form-width-xsmall">
                    <option>-</option>
                    <option>+</option>
                  </select> */}
                  <input
                    type="text"
                    className="uk-input uk-form-width-small"
                    placeholder="Jetlag"
                    value={this.state.jetlag}
                    onChange={e => {
                      this.setState({
                        jetlag: e.target.value
                      });
                    }}
                  />
                </div>
              </div>
              <div className="uk-margin xuk-grid-small xuk-child-width-auto xuk-grid">
                <div className="uk-form-label">Visa</div>
                <div className="uk-form-controls">
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
                    />
                  </label>
                </div>
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
                      this.state.language,
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
                      this.state.language,
                      this.state.jetlag,
                      this.state.visa
                    );
                  }
                  // Redirect to list
                  this.props.history.push("/countries");
                }}>
                OK
              </button>
              <Link to="/countries" className="uk-button uk-button-default uk-margin-left">
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
