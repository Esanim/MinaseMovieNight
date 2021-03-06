import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as movieActions from '../../actions/movieActions';
import {Media} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import StarRatingComponent from '../misc/StarRatingComponent';
import {firebaseStorage} from '../../services/firebase/index';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    rating: 1
    };

    this.onStarClick = this.onStarClick.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(event) {
    event.preventDefault();
    this.props.increment(this.props.movie.code);
  }

  decrement(event) {
    event.preventDefault();
    this.props.decrement(this.props.movie.code);
  }

  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }


  render() {
    const { rating } = this.state;
    const {movie, comments} = this.props;

    return (

<div>
      <Media>
       <Media.Left>
       <LinkContainer to={'/movies/' + movie.id}>
          <img className="handCursor" width={256} height={256} src={movie.img} alt="Image"/>
        </LinkContainer>
        </Media.Left>
        <Media.Body>
        <LinkContainer to={'/movies/' + movie.id}>
          <a>{movie.title} ({movie.year})</a>
        </LinkContainer>
          <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>

        </Media.Body>
        <Media.Body>

        <StarRatingComponent
               name="rate1"
               editing={false}
               renderStarIcon={<span></span>}
               starCount={7}
               value={rating}
               onStarClick={this.onStarClick}
           />
           <div>
             Rating: 3.44
           </div>
           <div>
            X Votes
           </div>
        </Media.Body>
        <Media.Body>
        <button>Add To Watchlist</button>
        </Media.Body>
      </Media>
      </div>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  Movie.propTypes = {
    movie: React.PropTypes.object,
    comments: React.PropTypes.arrayOf(React.PropTypes.object)
  };
}

Movie.propTypes = {
  increment: PropTypes.object,
  decrement: PropTypes.object
};

function mapStateToProps(state, props) {
  return {
    comments: []
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(movieActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie);
