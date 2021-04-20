import React from 'react';
import PropTypes from 'prop-types';

function NextVisit({ name }) {
  return (
    <>
      <h4>Welcome, {name}! This is your movies library</h4>
    </>
  );
}

NextVisit.propTypes = {};

export default NextVisit;
