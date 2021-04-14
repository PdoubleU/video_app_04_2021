import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function ToggleViewButton(props) {
  const [TILES, LIST] = ['Display tiles', 'Display list'];

  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  return <Button onClick={() => setViewTiles(!viewTiles)}>{btnValue}</Button>;
}

ToggleViewButton.propTypes = {};

export default ToggleViewButton;
