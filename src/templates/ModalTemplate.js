import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalTemplate = ({ isOpen, toggleVisibility, title, iframeUrl }) => {
  const modalNode = document.getElementById('modal-container');

  return ReactDOM.createPortal(
    <Modal
      isOpen={isOpen}
      toggle={toggleVisibility}
      className="modal-xl modal-dialog-centered"
      min-height="900px"
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
    >
      {' '}
      <ModalHeader toggle={toggleVisibility}>{title}</ModalHeader>
      <ModalBody>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title={title}
            src={iframeUrl}
            width={'100%'}
            height={'100%'}
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>
      </ModalBody>
    </Modal>,
    modalNode
  );
};

ModalTemplate.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  title: PropTypes.string,
  iframeUrl: PropTypes.string,
};

export default ModalTemplate;
