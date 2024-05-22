import React from 'react';

interface ButtonProps {
  text?: string;
  onClick: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, type = "button", disabled = false, children }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200  ${className}`} 
      type={type} 
      disabled={disabled}
    >
      {children ? children : text}
    </button>
  );
};

export default Button;
