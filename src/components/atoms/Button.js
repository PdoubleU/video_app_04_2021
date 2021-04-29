import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ButtonModel({
  handleClick,
  id = '',
  type = 'button',
  value = 'Hit enter!',
}) {
  return (
    <Button onClick={handleClick} type={type} target="_blank" id={id}>
      {value}
    </Button>
  );
}

ButtonModel.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  value: PropTypes.string,
};

export default ButtonModel;
