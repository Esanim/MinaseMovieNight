// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import Logo from './common/Logo';
import Footer from './common/Footer';
import {connect} from 'react-redux';
import _find from 'lodash';
import movieActions from '../actions/movieActions';

class App extends React.Component {

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
console.log('APP - search');
  // By assigning a "child" ref to <SearchForm />, we
  // can use that reference to gain access to the
  // .getQuery() method. See the code for
  // <SearchForm /> to see how it returns a value.
  console.log(this.refs.child.refs.search);
  let query = this.refs.child.refs;

  if (this.props.searchType === 'users') {
    //userApi.searchUsers(query);
  } else if (this.props.searchType === 'widgets') {
    //widgetApi.searchWidgets(query);
  }
}


  render() {
    return (
      this.props.processed ?
        <div className="container-fluid">
          <Logo />
          <Header ref="child"  />
          {this.props.children}
          <Footer />
        </div>
        :this.renderSpinnerIfProcessing()
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  //let val = _.find(state.auth, 'processed');
  //let processedBool = false;
  //if (val)
//    processedBool = val[Object.keys(val)[0]];
//  return {
    //loading: state.ajaxCallsInProgress > 0,
    //processed: val ? val[Object.keys(val)[0]] : false
  //};
  return {
    loading : state.ajaxCallsInProgress > 0,
    processed: state.auth.processed
  }
}

export default connect(mapStateToProps)(App);
