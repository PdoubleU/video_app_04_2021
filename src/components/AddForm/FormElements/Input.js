import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

function FormInput({
  name,
  id,
  type = 'text',
  placeholder,
  value,
  onchangeHandler,
}) {
  return (
    <Input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onchangeHandler(e)}
    />
  );
}

FormInput.propTypes = {};

export default FormInput;
