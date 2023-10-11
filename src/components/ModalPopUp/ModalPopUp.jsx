import React from 'react';
import './ModalPopUp.css';

const ModalPopUp = ({contentMessage,onClose }) => {
    return (
        <div className="ModalOverlay">
            <div className="ModalContent">
                <p>{contentMessage}</p>
                <button id='CloseModalBtn' onClick={onClose}>Close</button>
            </div>
            
        </div>
    );
}

export default ModalPopUp;
