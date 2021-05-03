import { useState } from 'react';
import ModalTemplate from '../templates/ModalTemplate';

const useModalTemplate = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleModal = () => setIsOpen(!isOpen);

  return [{ ModalTemplate, isOpen, handleModal }];
};

export default useModalTemplate;
