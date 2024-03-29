import React from "react";
import { connect } from "react-redux";
import Nav from "../Nav";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { addLang } from "../../actions";
import cuid from "cuid";

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
  addLang
};

const validSchema = Yup.object().shape({
  name: Yup.string().required("This field is required !")
});

class LangForm extends React.Component {
  state = {
    id: cuid.slug(),
    name: ""
  };

  handleSubmit = values => {
    this.props.addLang(values);
    // Redirect to list
    this.props.history.push("/languages");
  };

  render() {
    return (
      <React.Fragment>
        <Nav currentRoute="languages" />
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <h1 className="uk-heading-medium uk-heading-bullet uk-margin-large-bottom">
              {this.props.match.params.id !== undefined ? "Edit a language" : "Add a language"}
            </h1>
            <Formik
              initialValues={this.state}
              validationSchema={validSchema}
              onSubmit={values => this.handleSubmit(values)}>
              {({ errors, touched }) => (
                <Form>
                  <div className="uk-margin">
                    <label className="uk-form-label">Name</label>
                    <div className="uk-form-controls">
                      <Field name="name" placeholder="Name" className="uk-input uk-form-width-large" />
                    </div>
                    {errors.name && touched.name ? <div className="uk-text-danger">{errors.name}</div> : null}
                  </div>
                  <div className="uk-margin">
                    <button className="uk-button uk-button-primary" type="submit">
                      OK
                    </button>
                    <Link to="/languages" className="uk-button uk-button-default uk-margin-left">
                      Cancel
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangForm);
