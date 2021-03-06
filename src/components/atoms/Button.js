import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ButtonModel(props) {
  const {
    handleClick,
    tagName,
    route,
    id = '',
    type = 'button',
    value = '',
    target = '',
    faIcon = '',
  } = props;
  return (
    <Button
      outline
      onClick={handleClick}
      tag={tagName}
      to={route}
      id={id}
      type={type}
      target={target}
      icon={faIcon}
    >
      {value}
      {faIcon ? <FontAwesomeIcon icon={faIcon} size="sm" /> : null}
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
  faIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default ButtonModel;
