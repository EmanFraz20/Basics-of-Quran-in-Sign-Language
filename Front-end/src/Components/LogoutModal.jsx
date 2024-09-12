import React from 'react';


const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 text-serif">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-80">
        <h2 className="text-2xl mb-4">Confirm Logout</h2>
        <p className="text-lg mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-between">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={onConfirm}>
            Confirm
          </button>
          <button className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
