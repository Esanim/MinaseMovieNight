import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../../actions/contactActions';
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

class ContactPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      data: {},
      errors: {}
    };

    this.setValue = this.setValue.bind(this);
    this.renderContactPageError = this.renderContactPageError.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit (event) {
    event.preventDefault();

    let errors={};
    errors = this.state.errors;

    let ers = validate(this.state.data);

    errors.email = ers.emaill;
    errors.password = ers.password;
    this.setState({errors: errors});

    if(!errors.email && !errors.message)
    {
      this.props.sendEmail(this.state.data);
    }
  }

  renderContactPageError() {
  if (this.props.ContactPageError) {
    return <div className="alert alert-danger">{this.props.ContactPageError}</div>;
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
   }

  render() {
    return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3">
      <h2 className="text-center">Send a Message</h2>

      {this.renderContactPageError()}

    <form onSubmit={this.handleFormSubmit}>
      <FormGroup controlId="subject">
        <ControlLabel>Subject:</ControlLabel>
        <FormControl type="text" onChange={this.setValue} />
        <HelpBlock>{this.state.errors.subject}</HelpBlock>
      </FormGroup>

      <FormGroup controlId="name">
        <ControlLabel>Name:</ControlLabel>
        <FormControl type="text" onChange={this.setValue} />
        <HelpBlock>{this.state.errors.name}</HelpBlock>
      </FormGroup>

      <FormGroup controlId="email">
        <ControlLabel>Email:</ControlLabel>
        <FormControl type="text" onChange={this.setValue} />
        <HelpBlock>{this.state.errors.email}</HelpBlock>
      </FormGroup>

      <FormGroup controlId="message">
        <ControlLabel>Message:</ControlLabel>
        <FormControl componentClass="textarea" placeholder="textarea" />
        <HelpBlock>{this.state.errors.message}</HelpBlock>
      </FormGroup>

      <button action="submit" className="btn btn-default">Send</button>
    </form>
    <p></p>
  </div>
</div>
);
  }
}

ContactPage.propTypes = {
    ContactPageError: PropTypes.string,
    sendEmail: PropTypes.func.isRequired
  };

function mapStateToProps(state) {
  return {
    ContactPageError: state.ContactPage
  };
}

export default connect(mapStateToProps, Actions)(ContactPage);
