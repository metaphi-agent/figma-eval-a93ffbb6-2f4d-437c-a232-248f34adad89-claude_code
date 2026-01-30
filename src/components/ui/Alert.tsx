import { ReactNode } from 'react';

export interface AlertProps {
  variant?: 'success' | 'warning' | 'info';
  icon?: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  onClose?: () => void;
  onUndo?: () => void;
  showUndo?: boolean;
}

export function Alert({
  variant = 'success',
  icon,
  title,
  description,
  children,
  onClose,
  onUndo,
  showUndo = false
}: AlertProps) {
  const variantClasses = {
    success: 'bg-green-50 border-green-100',
    warning: 'bg-yellow-50 border-yellow-100',
    info: 'bg-blue-50 border-blue-100'
  };

  const iconBgClasses = {
    success: 'bg-green-100',
    warning: 'bg-yellow-100',
    info: 'bg-blue-100'
  };

  return (
    <div className={`flex items-center gap-4 p-3 pr-8 rounded-2xl border ${variantClasses[variant]} relative shadow-lg animate-slide-in`}>
      {icon && (
        <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${iconBgClasses[variant]} flex items-center justify-center text-2xl`}>
          {icon}
        </div>
      )}

      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-base font-semibold text-black">
            {title}
          </p>
        )}
        {description && (
          <p className="text-sm text-gray-600 mt-0.5">
            {description}
          </p>
        )}
        {children}
      </div>

      {showUndo && onUndo && (
        <button
          onClick={onUndo}
          className="flex-shrink-0 px-4 py-1 text-sm font-medium text-black hover:underline transition-all"
        >
          Undo
        </button>
      )}

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center text-gray-500 hover:text-black transition-colors"
          aria-label="Close alert"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}
