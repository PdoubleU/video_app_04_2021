import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ButtonModel from '../atoms/Button';

function ToggleViewButton(props) {
  const [TILES, LIST] = ['Display tiles', 'Display list'];

  const [viewTiles, setViewTiles] = useState(true);
  const [btnValue, setBtnValue] = useState('Change display');

  useEffect(() => {
    setBtnValue(viewTiles ? LIST : TILES);
  }, [viewTiles]);

  const handleView = () => {
    setViewTiles(!viewTiles);
  };

  return (
    <>
      <ButtonModel handleClick={handleView} value={btnValue} />
      <ButtonModel handleClick={() => console.log('test')} value="Show demo" />
    </>
  );
}

ToggleViewButton.propTypes = {};

export default ToggleViewButton;
