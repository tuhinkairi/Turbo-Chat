'use client'
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProps {
  message: string;
  type: 'success' | 'info' | 'warning' | 'error'; // Define the allowed toast types
}

const ToastNotify: React.FC<ToastProps> = ({ message, type }) => {

  const showToast = () => {
    switch (type) {
      case 'success':
        toast.success(message, {
          autoClose: 3000,
        });
        break;
      case 'info':
        toast.info(message, {
          autoClose: 3000,
        });
        break;
      case 'warning':
        toast.warning(message, {
          autoClose: 3000,
        });
        break;
      case 'error':
        toast.error(message, {
          autoClose: 3000,
        });
        break;
      default:
        break;
    }
  };

  // Show the toast message whenever the component renders or the message/type changes
  useEffect(() => {
    showToast();
  }, [message, type]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default ToastNotify;
