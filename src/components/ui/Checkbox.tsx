import { InputHTMLAttributes, forwardRef } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="flex items-center gap-2">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={`peer w-5 h-5 rounded border-2 border-black appearance-none cursor-pointer checked:bg-black checked:border-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors duration-150 ${className}`}
            {...props}
          />
          <svg
            className="absolute w-3 h-3 left-1 top-1 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2 6 5 9 10 3" />
          </svg>
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="text-base text-gray-700 cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';