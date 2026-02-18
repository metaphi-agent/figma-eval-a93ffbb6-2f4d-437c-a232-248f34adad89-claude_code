import { ButtonHTMLAttributes } from 'react';

interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
}

export function CloseButton({ size = 'md', className = '', ...props }: CloseButtonProps) {
  const sizeStyles = {
    sm: 'w-6 h-6',
    md: 'w-6 h-6',
  };

  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-400 ${sizeStyles[size]} ${className}`}
      aria-label="Close"
      {...props}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <line x1="1" y1="1" x2="9" y2="9" />
        <line x1="9" y1="1" x2="1" y2="9" />
      </svg>
    </button>
  );
}