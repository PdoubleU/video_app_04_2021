import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'reactstrap';

function FormLabel({ id }) {
  return <Label htmlFor={id}>URL/ID</Label>;
}

FormLabel.propTypes = {};

export default FormLabel;
