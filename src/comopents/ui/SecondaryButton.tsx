import React from 'react';

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
}

const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick, className, type, disabled = false, children }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded-lg shadow-lg text-sm hover:scale-105 transition duration-200 ${className}`} 
      type={type} 
      disabled={disabled}
    >
      {children ? children : text}
    </button>
  );
};

export default SecondaryButton;
