import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/authActions';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import toastr from 'toastr';
import {withRouter} from 'react-router';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email addresss';
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter a password confirmation.";
  }

  if (values.password !== values.passwordConfirmation ) {
    errors.password = 'Passwords do not match';
    errors.passwordConfirmation = 'Passwords do not match';
  }

  return errors;
};

class Register extends React.Component {
constructor(props, context)
{
  super(props, context);

  this.state = {
    data: {},
    errors: {},
    dirty: false
  };

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.renderAuthenticationError = this.renderAuthenticationError.bind(this);
  this.setValue = this.setValue.bind(this);
}

componentDidMount() {
  this.props.actions.cleanError();
  this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave.bind(this));
 }

 routerWillLeave(nextLocation) {
  // return false to prevent a transition w/o prompting the user,
  // or return a string to allow the user to decide:
  if (this.state.dirty)
    return 'You have unsaved information, are you sure you want to leave this page?';
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
      this.props.actions.signUpUser(this.state.data);
      this.setState({dirty: false});
    }
}

renderField ({ input, label, type, meta: { touched, error } })  {
  return (
  <fieldset className={`form-group ${touched && error ? 'has-error' : ''}`}>
    <label className="control-label">{label}</label>
    <div>
      <input {...input} placeholder={label} className="form-control" type={type} />
      {touched && error && <div className="help-block">{error}</div>}
    </div>
  </fieldset>
);
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
   let object = this.state.data;
   object[field] = event.target.value;
   this.setState({data: object});
   this.setState({dirty: true});
 }


render() {
  return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3">
        <h2 className="text-center">Sign Up</h2>

        {this.renderAuthenticationError()}

        <form onSubmit={this.handleFormSubmit}>
          <FormGroup controlId="email" >
            <ControlLabel>E-mail address:</ControlLabel>
            <FormControl type="text" onChange={this.setValue.bind(this, 'email')} />
            <HelpBlock>{this.state.errors.email}</HelpBlock>
          </FormGroup>

          <FormGroup controlId="password" >
            <ControlLabel>Password:</ControlLabel>
            <FormControl type="password" onChange={this.setValue.bind(this, 'password')} />
            <HelpBlock>{this.state.errors.password}</HelpBlock>
          </FormGroup>

          <FormGroup controlId="passwordConfirmation" >
            <ControlLabel>Confirm Password:</ControlLabel>
            <FormControl type="password" onChange={this.setValue.bind(this, 'passwordConfirmation')} />
            <HelpBlock>{this.state.errors.passwordConfirmation}</HelpBlock>
          </FormGroup>

          <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
      </div>
    </div>
  );
}
}

Register.propTypes = {
  actions: PropTypes.object.isRequired,
  authenticationError: PropTypes.string,
  route : PropTypes.object,
  router : PropTypes.object
};

//Pull in the React Router context so router is available on this.context.router.
Register.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    authenticationError: state.auth.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
