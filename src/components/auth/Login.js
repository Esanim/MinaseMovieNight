import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/authActions';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import toastr from 'toastr';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {},
      errors: {}
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderAuthenticationError = this.renderAuthenticationError.bind(this);
    this.renderField = this.renderField.bind(this);
  }

  componentDidMount() {
    this.props.cleanError();
   }

  handleFormSubmit (event) {
    event.preventDefault();

    let errors={};
    errors = this.state.errors;

    let ers = validate(this.state.data);

    errors.email = ers.emaill;
    errors.password = ers.password;
    this.setState({errors: errors});

    /* eslint-disable no-console */

    /* eslint-enable no-console */
    if(!errors.email && !errors.password)
    {
      this.props.signInUser(this.state.data);
    }
  }

  renderAuthenticationError() {
  if (this.props.authenticationError) {
    return <div className="alert alert-danger">{this.props.authenticationError}</div>;
  }
    return <div></div>;
  }

  setValue(field, event) {
     //If the input fields were directly within this
     //this component, we could use this.refs.[FIELD].value
     //Instead, we want to save the data for when the form is submitted
     var object = this.state.data;
     object[field] = event.target.value;
     this.setState({data: object});
   }

  renderField ({ input, label, type, meta: { touched, error } }) {
    return(
    <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
      <label className="control-label">{label}</label>
      <div>
        <input {...input} placeholder={label} className="form-control" type={type} />
        {touched && error && <div className="help-block">{error}</div>}
      </div>
    </fieldset>
  );
}

  render() {
    return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3">
      <h2 className="text-center">Log In</h2>

      {this.renderAuthenticationError()}

    <form onSubmit={this.handleFormSubmit}>
      <FormGroup controlId="email">
        <ControlLabel>E-mail address:</ControlLabel>
        <FormControl type="text" onChange={this.setValue.bind(this, 'email')} />
        <HelpBlock>{this.state.errors.email}</HelpBlock>
      </FormGroup>

      <FormGroup controlId="password">
        <ControlLabel>Password:</ControlLabel>
        <FormControl type="password" onChange={this.setValue.bind(this, 'password')} />
        <HelpBlock>{this.state.errors.password}</HelpBlock>
      </FormGroup>

      <button action="submit" className="btn btn-primary">Sign In</button>
    </form>
  </div>
</div>
);
  }
}

Login.propTypes = {
  signInUser: React.PropTypes.func.isRequired,
  authenticationError: PropTypes.string
};


function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  };
}

export default connect(mapStateToProps, Actions)(Login);
