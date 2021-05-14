import { useState } from 'react';
import ModalTemplate from '../templates/ModalTemplate';
import PropTypes from 'prop-types';

const useModalTemplate = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleModal = () => setIsOpen(!isOpen);

  return [{ ModalTemplate, isOpen, handleModal }];
};

useModalTemplate.proptypes = {
  initialState: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
    .isRequired,
};

export default useModalTemplate;
