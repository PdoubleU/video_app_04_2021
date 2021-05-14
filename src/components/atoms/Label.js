import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'reactstrap';

function FormLabel(props) {
  const { id = '', labelValue = '' } = props;
  return (
    <Label htmlFor={id} hidden>
      {labelValue}
    </Label>
  );
}

FormLabel.propTypes = {
  id: PropTypes.string.isRequired,
  labelValue: PropTypes.string,
};

export default FormLabel;
