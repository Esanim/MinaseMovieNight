import React, {PropTypes} from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationAdvanced = ({itemCount, maxButtons, activePage, onSelect}) => {
  // getInitialState() {
  //   return {
  //     activePage: 1
  //   };
  // },
  //
  // handleSelect(eventKey) {
  //   this.setState({
  //     activePage: eventKey
  //   });
  // },

  //render() {
    return (
      <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={itemCount}
        maxButtons={maxButtons}
        activePage={activePage}
        onSelect={onSelect} />
    );
  //}
};

PaginationAdvanced.propTypes = {
    itemCount: PropTypes.number,
    maxButtons: PropTypes.number,
    activePage: PropTypes.number,
    onSelect: PropTypes.func.isRequired
  };

export default PaginationAdvanced;
