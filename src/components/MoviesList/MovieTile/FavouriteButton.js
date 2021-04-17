import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const ADD_TO_FAVS = 'Add to favourites',
  RM_FROM_FAVS = 'Remove from favourites';

function FavouriteButton(props) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState('Add to favourite');

  useEffect(() => {
    setCurrentValue(isFavourite ? ADD_TO_FAVS : RM_FROM_FAVS);
  }, [isFavourite]);

  return (
    <Button onClick={() => setIsFavourite(!isFavourite)}>{currentValue}</Button>
  );
}

FavouriteButton.propTypes = {};

export default FavouriteButton;
