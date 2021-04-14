import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function FormButton(props) {
  return (
    <Button type="submit" target="_blank">
      Submit
    </Button>
  );
}

FormButton.propTypes = {};

export default FormButton;
