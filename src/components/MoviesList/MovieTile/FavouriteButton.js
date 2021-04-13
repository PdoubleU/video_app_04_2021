import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

function FavouriteButton(props) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState('Add to favourite');

  useEffect(() => {
    setCurrentValue(
      isFavourite ? 'Remove from favourites' : 'Add to favourites'
    );
  });

  return (
    <Button onClick={() => setIsFavourite(!isFavourite)}>{currentValue}</Button>
  );
}

FavouriteButton.propTypes = {};

export default FavouriteButton;
