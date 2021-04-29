import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

function FormInput({
  name = '',
  id = '',
  type = 'text',
  placeholder,
  onchangeHandler,
}) {
  return (
    <Input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onchangeHandler(e)}
    />
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onchangeHandler: PropTypes.func,
};

export default FormInput;
