import React, { useState } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'white',
    opacity: 0.5,
    ZIndex: '1000'
  }
};


const ImageModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
      >
        <h2>Hello</h2>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        <div>I am a modal</div>
      </Modal>
    </>
  )
}

export default ImageModal;