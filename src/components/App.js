import React, {PropTypes} from 'react';
import Header from './common/Header';
import Logo from './common/Logo';
import Footer from './common/Footer';
import {connect} from 'react-redux';
import _find from 'lodash';
import * as movieActions from '../actions/movieActions';

class App extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  renderSpinnerIfProcessing() {
  return (
    <div className="loading-spinner-backdrop">
      <div className="loading-spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
}

search(event) {
  event.preventDefault();
  // By assigning a "child" ref to <SearchForm />, we
  // can use that reference to gain access to the
  // .getQuery() method. See the code for
  // <SearchForm /> to see how it returns a value.
  let query = this.refs.child.refs;
}


  render() {
    return (
      this.props.processed ?
        <div className="container-fluid">
          <Logo />
          <Header ref="child" />
          {this.props.children}
          <Footer />
        </div>
        :this.renderSpinnerIfProcessing()
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  processed: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading : state.ajaxCallsInProgress > 0,
    processed: state.auth.processed
  };
}

export default connect(mapStateToProps)(App);
