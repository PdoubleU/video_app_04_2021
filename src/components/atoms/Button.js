import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ButtonModel({ handleClick, id, type, value = 'Hit enter!' }) {
  return (
    <Button onClick={handleClick} type={type} target="_blank" id={id}>
      {value}
    </Button>
  );
}

ButtonModel.propTypes = {};

export default ButtonModel;
