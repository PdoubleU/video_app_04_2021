import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

function FormInput({ onchangeHandler }) {
  return (
    <Input
      type="text"
      name="id"
      id="exampleUrl"
      placeholder="Type video url or id..."
      onChange={(e) => onchangeHandler(e.target.value)}
    />
  );
}

FormInput.propTypes = {};

export default FormInput;
