import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ButtonModel({ id, type, value = 'Hit enter!' }) {
  return (
    <Button type={type} target="_blank" id={id}>
      {value}
    </Button>
  );
}

ButtonModel.propTypes = {};

export default ButtonModel;
