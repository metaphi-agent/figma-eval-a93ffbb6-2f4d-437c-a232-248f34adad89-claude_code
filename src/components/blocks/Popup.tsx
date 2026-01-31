import { ReactNode, useState } from 'react';
import { Button, Input, CloseButton } from '../ui';

// Base popup container
interface PopupContainerProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
}

export function PopupContainer({
  children,
  onClose,
  className = '',
}: PopupContainerProps) {
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
      {children}
    </div>
  );
}

// Accept Changes Popup
interface AcceptChangesPopupProps {
  icon?: ReactNode;
  title: string;
  description: string;
  onReject?: () => void;
  onAccept?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  acceptLabel?: string;
  className?: string;
}

export function AcceptChangesPopup({
  icon,
  title,
  description,
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept',
  className = '',
}: AcceptChangesPopupProps) {
  return (
    <PopupContainer onClose={onClose} className={`max-w-[640px] ${className}`}>
      <div className="flex flex-col gap-10">
        <div className="flex items-start gap-6">
          {icon && (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center text-3xl">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-2 flex-1 pr-8">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="text-base text-gray-500 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={onReject} className="min-w-[140px]">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="min-w-[140px]">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </PopupContainer>
  );
}

// Verify Identity Popup with Password Input
interface VerifyIdentityPopupProps {
  title: string;
  description: string;
  onContinue?: (password: string) => void;
  onClose?: () => void;
  className?: string;
}

export function VerifyIdentityPopup({
  title,
  description,
  onContinue,
  onClose,
  className = '',
}: VerifyIdentityPopupProps) {
  const [password, setPassword] = useState('');

  const handleContinue = () => {
    if (onContinue) {
      onContinue(password);
    }
  };

  return (
    <PopupContainer onClose={onClose} className={`max-w-[640px] ${className}`}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 pr-8">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="text-base text-gray-500 leading-relaxed">{description}</p>
        </div>
        <div className="flex flex-col gap-10">
          <Input
            label="Your password"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle
          />
          <div className="flex justify-end">
            <Button variant="primary" onClick={handleContinue} className="min-w-[180px]">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </PopupContainer>
  );
}

// Terms and Agreements Popup
interface TermsPopupProps {
  title: string;
  terms: string[];
  onReject?: () => void;
  onAgree?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  agreeLabel?: string;
  className?: string;
}

export function TermsPopup({
  title,
  terms,
  onReject,
  onAgree,
  onClose,
  rejectLabel = 'Nope',
  agreeLabel = 'I agree',
  className = '',
}: TermsPopupProps) {
  return (
    <PopupContainer onClose={onClose} className={`max-w-[640px] ${className}`}>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6 pr-8">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <div className="flex flex-col gap-6">
            {terms.map((term, index) => (
              <p key={index} className="text-base text-gray-500 leading-relaxed">
                {term}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" onClick={onReject} className="min-w-[160px]">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAgree} className="min-w-[160px]">
            {agreeLabel}
          </Button>
        </div>
      </div>
    </PopupContainer>
  );
}
