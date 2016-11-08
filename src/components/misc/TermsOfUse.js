import React, {PropTypes} from 'react';
import {FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

class TermsOfUse extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
    <div className="container">
      <div className="col-md-6 col-md-offset-3">
      <h2 className="text-center">Terms of Use here....</h2>
  </div>
</div>
);
  }
}

export default(TermsOfUse);
