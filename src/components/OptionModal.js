import React from 'react';
import Modal from 'react-modal';

export const OptionModal = (props) => (
    <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        ariaHideApp={false}
        className="modal"
        >
        <div>
            <h3>Are you sure you want to remove it?</h3>
            <button className="button" onClick={props.handleRemove}>Yes</button>
            <button className="button" onClick={props.handleCancelRemove}>No</button>
        </div>
    </Modal>
);

export default OptionModal;