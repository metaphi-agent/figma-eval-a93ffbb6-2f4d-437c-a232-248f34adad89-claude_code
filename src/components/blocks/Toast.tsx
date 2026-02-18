import { ReactNode } from 'react';
import { CloseButton } from '../ui';

interface ToastProps {
  icon?: ReactNode;
  message: string;
  onClose?: () => void;
  onUndo?: () => void;
  className?: string;
}

export function Toast({
  icon,
  message,
  onClose,
  onUndo,
  className = '',
}: ToastProps) {
  return (
    <div
      className={`flex items-center gap-4 bg-white rounded-2xl border border-black/10 px-3 py-3 shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {icon && (
        <div className="flex-shrink-0 w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
          {icon}
        </div>
      )}
      <span className="text-base text-black flex-grow">{message}</span>
      {onUndo && (
        <button
          onClick={onUndo}
          className="px-6 h-[42px] bg-gray-100 rounded-xl text-base font-medium text-black hover:bg-gray-200 transition-colors"
        >
          Undo
        </button>
      )}
      {onClose && <CloseButton onClick={onClose} />}
    </div>
  );
}

// Success checkmark icon for toasts
export function CheckIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="text-green-500"
    >
      <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.2" />
      <path
        d="M7 12.5L10.5 16L17 9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}