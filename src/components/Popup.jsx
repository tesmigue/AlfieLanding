import React from 'react';

const Popup = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto">
        <button className="absolute top-2 right-2" onClick={onClose}>Cerrar</button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Popup;