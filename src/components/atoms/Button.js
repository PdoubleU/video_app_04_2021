import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ButtonModel({ ...props }) {
  const {
    handleClick,
    tagName,
    route,
    id = '',
    type = 'button',
    value = 'Hit enter!',
    target = '',
  } = props;
  return (
    <Button
      onClick={handleClick}
      tag={tagName}
      to={route}
      id={id}
      type={type}
      target={target}
    >
      {value}
    </Button>
  );
}

ButtonModel.propTypes = {
  handleClick: PropTypes.func,
  tagName: PropTypes.object,
  route: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  value: PropTypes.string,
  target: PropTypes.string,
};

export default ButtonModel;
