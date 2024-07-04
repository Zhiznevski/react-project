import React, { ComponentProps, forwardRef } from 'react';
import { clsx } from '@shared/lib/clsx';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>(function Button(
  { children, disabled = false, variant = 'secondary', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      disabled={disabled}
      className={clsx(
        'rounded-lg px-4 py-2 font-semibold text-white shadow-md focus:outline-none',
        {
          'bg-blue-500 hover:bg-blue-700': variant === 'primary',
          'bg-gray-500 hover:bg-gray-700': variant === 'secondary',
          'bg-red-500 hover:bg-red-700': variant === 'danger',
          'cursor-not-allowed opacity-50': disabled,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
