import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

function FormInput(props) {
  const {
    name = '',
    id = '',
    type = 'text',
    placeholder,
    onchangeHandler,
    ariaLabelledby = '',
  } = props;

  return (
    <Input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onchangeHandler(e)}
      ariaLabelledby={ariaLabelledby}
    />
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onchangeHandler: PropTypes.func,
  ariaLabelledby: PropTypes.string.isRequired,
};

export default FormInput;
