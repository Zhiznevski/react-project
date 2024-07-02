import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
}) => {
  const baseStyles =
    'py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none';
  let variantStyles = '';

  switch (variant) {
    case 'primary':
      variantStyles = 'bg-blue-500 text-white hover:bg-blue-700';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-500 text-white hover:bg-gray-700';
      break;
    case 'danger':
      variantStyles = 'bg-red-500 text-white hover:bg-red-700';
      break;
    default:
      variantStyles = 'bg-blue-500 text-white hover:bg-blue-700';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
};

export default Button;
