import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        zIndex: 9999,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const ModalComponent = ({ children, modalIsOpen, closeModal }) => {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                appElement={document.getElementsByClassName('App')}
            >
                {children}
            </Modal>
        </div>
    );
};

export default ModalComponent;
