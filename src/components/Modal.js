import React from 'react';

const Modal = ({ setIsModalOpen, children }) => {

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  return (
    <div className='overlay' onClick={handleClose}>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}

export default Modal;