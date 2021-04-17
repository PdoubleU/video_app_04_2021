import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ButtonModel({ id, type }) {
  return (
    <Button type="submit" target="_blank" id={id}>
      Submit
    </Button>
  );
}

ButtonModel.propTypes = {};

export default ButtonModel;
