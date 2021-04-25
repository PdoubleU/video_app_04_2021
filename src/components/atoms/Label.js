import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'reactstrap';

function FormLabel({ id, labelValue }) {
  return <Label htmlFor={id}>{labelValue}</Label>;
}

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  labelValue: PropTypes.string,
};

export default FormLabel;
