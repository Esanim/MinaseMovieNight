import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userActions from '../../actions/userActions';
import {Link} from 'react-router';

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user, comments} = this.props

    return (

<div>
USER
      </div>
    )
  }
}

if (process.env.NODE_ENV !== 'production') {
  User.propTypes = {
    user: React.PropTypes.object,
    comments: React.PropTypes.arrayOf(React.PropTypes.object)
  }
}

function mapStateToProps(state, props) {
  return {
    comments: []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
