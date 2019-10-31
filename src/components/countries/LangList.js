import React from "react";
import { connect } from "react-redux";
import { selectLanguages } from "../../selectors";
import Nav from "../Nav";
import { Link } from "react-router-dom";

const mapStateToProps = state => ({
  languages: selectLanguages(state)
});

const mapDispatchToProps = {};

class LangList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="languages" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">
              List of languages
              <Link to="/languages/add" className="uk-button uk-button-primary uk-float-right uk-margin-top">
                Add a language
              </Link>
            </h1>

            {this.props.languages.length === 0 ? (
              <div className="uk-alert-warning" data-uk-alert>
                <p>
                  There are no languages ! <br />
                  Please add one.
                </p>
              </div>
            ) : (
              <ul className="uk-list uk-list-divider">
                {this.props.languages.map((lang, index) => {
                  return <li key={index}>{lang.langName}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangList);
