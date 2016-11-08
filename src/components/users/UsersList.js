import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class UsersList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: Object.assign({}, props.users),
      errors: {}
    };
  }

  render() {
    const {users} = this.props;

    return (
      <div>
      USERS
      </div>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
