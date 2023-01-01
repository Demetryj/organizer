import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, WindiwModal } from './StyledModal';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseModal, isModalOpen, children }) => {
  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, onCloseModal]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <WindiwModal>{children}</WindiwModal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};
