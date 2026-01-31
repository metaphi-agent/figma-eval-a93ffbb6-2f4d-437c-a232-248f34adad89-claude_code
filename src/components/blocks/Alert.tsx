import { ReactNode } from 'react';
import { CloseButton } from '../ui';

interface AlertProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  onClose?: () => void;
  learnMoreHref?: string;
  className?: string;
}

export function Alert({
  icon,
  title,
  description,
  onClose,
  learnMoreHref,
  className = '',
}: AlertProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border border-black/10 p-8 shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {onClose && (
        <CloseButton
          onClick={onClose}
          className="absolute top-6 right-6"
        />
      )}
      <div className="flex items-start gap-6">
        {icon && (
          <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center text-3xl">
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          {description && (
            <p className="text-base text-gray-500 leading-relaxed">{description}</p>
          )}
          {learnMoreHref && (
            <a
              href={learnMoreHref}
              className="text-base font-semibold text-black underline hover:no-underline mt-2"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Project Success Alert Variant
interface ProjectAlertProps {
  title: string;
  description?: string;
  onClose?: () => void;
  learnMoreHref?: string;
  className?: string;
}

export function ProjectAlert({
  title,
  description,
  onClose,
  learnMoreHref,
  className = '',
}: ProjectAlertProps) {
  return (
    <div
      className={`relative bg-white rounded-2xl border border-black/10 p-8 shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      {onClose && (
        <CloseButton
          onClick={onClose}
          className="absolute top-6 right-6"
        />
      )}
      <div className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        {description && (
          <p className="text-base text-gray-500 leading-relaxed">{description}</p>
        )}
        {learnMoreHref && (
          <a
            href={learnMoreHref}
            className="text-base font-semibold text-black underline hover:no-underline"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
}

// Simple horizontal alert bar
interface AlertBarProps {
  title: string;
  onClose?: () => void;
  className?: string;
}

export function AlertBar({
  title,
  onClose,
  className = '',
}: AlertBarProps) {
  return (
    <div
      className={`flex items-center justify-between bg-white rounded-2xl border border-black/10 px-8 h-[72px] shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      <span className="text-xl font-semibold text-black">{title}</span>
      {onClose && <CloseButton onClick={onClose} />}
    </div>
  );
}

// Alert bar with Undo button
interface AlertBarUndoProps {
  title: string;
  onUndo?: () => void;
  className?: string;
}

export function AlertBarUndo({
  title,
  onUndo,
  className = '',
}: AlertBarUndoProps) {
  return (
    <div
      className={`flex items-center justify-between bg-white rounded-2xl border border-black/10 px-8 h-[72px] shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${className}`}
    >
      <span className="text-xl font-semibold text-black">{title}</span>
      {onUndo && (
        <button
          onClick={onUndo}
          className="px-6 h-[42px] bg-gray-100 rounded-xl text-base font-medium text-black hover:bg-gray-200 transition-colors"
        >
          Undo
        </button>
      )}
    </div>
  );
}
