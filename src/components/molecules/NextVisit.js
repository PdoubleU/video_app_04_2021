import React from 'react';
import PropTypes from 'prop-types';

function NextVisit({ name }) {
  return (
    <div>
      <h4>Welcome, {name}! This is your movies library</h4>
    </div>
  );
}

NextVisit.propTypes = {};

export default NextVisit;
