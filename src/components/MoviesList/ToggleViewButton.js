import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ToggleViewButton(props) {
  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState();

  useEffect(() => {
    setBtnValue(viewTiles ? 'Display list' : 'Display tiles');
  });
  return <Button onClick={() => setViewTiles(!viewTiles)}>{btnValue}</Button>;
}

ToggleViewButton.propTypes = {};

export default ToggleViewButton;
