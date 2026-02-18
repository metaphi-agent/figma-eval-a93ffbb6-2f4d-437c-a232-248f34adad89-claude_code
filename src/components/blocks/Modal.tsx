import { ReactNode, useState } from 'react';
import { Button, Input, Checkbox, CloseButton } from '../ui';

// Base modal container
interface ModalContainerProps {
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  width?: 'sm' | 'md' | 'lg';
}

export function ModalContainer({
  children,
  onClose,
  className = '',
  width = 'md',
}: ModalContainerProps) {
  const widthStyles = {
    sm: 'max-w-[440px]',
    md: 'max-w-[520px]',
    lg: 'max-w-[640px]',
  };

  return (
    <div
      className={`relative bg-white rounded-2xl border border-black/10 p-8 shadow-[20px_20px_20px_rgba(0,0,0,0.08)] ${widthStyles[width]} ${className}`}
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

// Confirmation Modal (Deactivate, etc.)
interface ConfirmModalProps {
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

export function ConfirmModal({
  icon,
  title,
  description,
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept',
  className = '',
}: ConfirmModalProps) {
  return (
    <ModalContainer onClose={onClose} width="lg" className={className}>
      <div className="flex flex-col gap-10">
        <div className="flex items-start gap-6 pr-8">
          {icon && (
            <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-yellow-100 flex items-center justify-center text-3xl">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-2xl font-semibold text-black">{title}</h3>
            <p className="text-base text-gray-500 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={onReject} className="flex-1">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="flex-1">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Success Modal (Order placed, etc.)
interface SuccessModalProps {
  icon?: ReactNode;
  title: string;
  onConfirm?: () => void;
  onClose?: () => void;
  confirmLabel?: string;
  className?: string;
}

export function SuccessModal({
  icon,
  title,
  onConfirm,
  onClose,
  confirmLabel = 'Thanks!',
  className = '',
}: SuccessModalProps) {
  return (
    <ModalContainer onClose={onClose} width="md" className={className}>
      <div className="flex flex-col items-center gap-10 py-4">
        {icon && (
          <div className="w-28 h-28 rounded-full bg-yellow-100 flex items-center justify-center text-5xl">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-black text-center">{title}</h3>
        <Button variant="primary" onClick={onConfirm} className="min-w-[248px]">
          {confirmLabel}
        </Button>
      </div>
    </ModalContainer>
  );
}

// Success Modal with Undo option
interface SuccessUndoModalProps {
  icon?: ReactNode;
  title: string;
  onUndo?: () => void;
  onConfirm?: () => void;
  onClose?: () => void;
  undoLabel?: string;
  confirmLabel?: string;
  className?: string;
}

export function SuccessUndoModal({
  icon,
  title,
  onUndo,
  onConfirm,
  onClose,
  undoLabel = 'Undo',
  confirmLabel = 'Thanks!',
  className = '',
}: SuccessUndoModalProps) {
  return (
    <ModalContainer onClose={onClose} width="md" className={className}>
      <div className="flex flex-col items-center gap-10 py-4">
        {icon && (
          <div className="w-28 h-28 rounded-full bg-yellow-100 flex items-center justify-center text-5xl">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-semibold text-black text-center">{title}</h3>
        <div className="flex gap-4">
          <Button variant="secondary" onClick={onUndo} className="min-w-[140px]">
            {undoLabel}
          </Button>
          <Button variant="primary" onClick={onConfirm} className="min-w-[140px]">
            {confirmLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Accept Modal (basic version)
interface AcceptModalProps {
  title: string;
  description: string;
  onReject?: () => void;
  onAccept?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  acceptLabel?: string;
  className?: string;
}

export function AcceptModal({
  title,
  description,
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept changes',
  className = '',
}: AcceptModalProps) {
  return (
    <ModalContainer onClose={onClose} width="sm" className={className}>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center pr-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-4 w-full">
          <Button variant="secondary" onClick={onReject} className="flex-1">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="flex-1">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Accept Modal with Checkbox (centered)
interface AcceptCheckboxModalProps {
  title: string;
  description: string;
  checkboxLabel: string;
  onReject?: () => void;
  onAccept?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  acceptLabel?: string;
  className?: string;
}

export function AcceptCheckboxModal({
  title,
  description,
  checkboxLabel,
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept changes',
  className = '',
}: AcceptCheckboxModalProps) {
  const [checked, setChecked] = useState(false);

  return (
    <ModalContainer onClose={onClose} width="sm" className={className}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center pr-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Checkbox
          label={checkboxLabel}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div className="flex gap-4 w-full">
          <Button variant="secondary" onClick={onReject} className="flex-1">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="flex-1">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Accept Modal with Checkbox (left aligned)
interface AcceptCheckboxLeftModalProps {
  title: string;
  description: string;
  checkboxLabel: string;
  onReject?: () => void;
  onAccept?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  acceptLabel?: string;
  className?: string;
}

export function AcceptCheckboxLeftModal({
  title,
  description,
  checkboxLabel,
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept changes',
  className = '',
}: AcceptCheckboxLeftModalProps) {
  const [checked, setChecked] = useState(false);

  return (
    <ModalContainer onClose={onClose} width="sm" className={className}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 pr-4">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Checkbox
          label={checkboxLabel}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div className="flex gap-4 w-full justify-center">
          <Button variant="secondary" onClick={onReject} className="min-w-[120px]">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="min-w-[120px]">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Accept Modal with Image
interface AcceptImageModalProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  onReject?: () => void;
  onAccept?: () => void;
  onClose?: () => void;
  rejectLabel?: string;
  acceptLabel?: string;
  className?: string;
}

export function AcceptImageModal({
  title,
  description,
  imageSrc,
  imageAlt = 'Preview',
  onReject,
  onAccept,
  onClose,
  rejectLabel = 'Reject',
  acceptLabel = 'Accept changes',
  className = '',
}: AcceptImageModalProps) {
  return (
    <ModalContainer onClose={onClose} width="sm" className={className}>
      <div className="flex flex-col items-center gap-8">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-40 object-cover rounded-xl"
        />
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="text-xl font-semibold text-black">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex gap-4 w-full justify-center">
          <Button variant="secondary" onClick={onReject} className="min-w-[120px]">
            {rejectLabel}
          </Button>
          <Button variant="primary" onClick={onAccept} className="min-w-[120px]">
            {acceptLabel}
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
}

// Newsletter Modal
interface NewsletterModalProps {
  title: string;
  description: string;
  placeholder?: string;
  onSubscribe?: (email: string) => void;
  onClose?: () => void;
  subscribeLabel?: string;
  className?: string;
}

export function NewsletterModal({
  title,
  description,
  placeholder = 'email@example.com',
  onSubscribe,
  onClose,
  subscribeLabel = 'Subscribe',
  className = '',
}: NewsletterModalProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(email);
    }
  };

  return (
    <ModalContainer onClose={onClose} width="md" className={className}>
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="text-base text-gray-500">{description}</p>
        </div>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
        <Button variant="primary" onClick={handleSubscribe} className="min-w-[180px]">
          {subscribeLabel}
        </Button>
      </div>
    </ModalContainer>
  );
}

// Newsletter Modal with Image
interface NewsletterImageModalProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  placeholder?: string;
  onSubscribe?: (email: string) => void;
  onClose?: () => void;
  subscribeLabel?: string;
  className?: string;
}

export function NewsletterImageModal({
  title,
  description,
  imageSrc,
  imageAlt = 'Newsletter',
  placeholder = 'email@example.com',
  onSubscribe,
  onClose,
  subscribeLabel = 'Subscribe',
  className = '',
}: NewsletterImageModalProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (onSubscribe) {
      onSubscribe(email);
    }
  };

  return (
    <ModalContainer onClose={onClose} width="md" className={className}>
      <div className="flex flex-col items-center gap-8">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          className="w-full h-48 object-cover rounded-xl"
        />
        <div className="flex flex-col items-center gap-5 text-center">
          <h3 className="text-2xl font-semibold text-black">{title}</h3>
          <p className="text-base text-gray-500">{description}</p>
        </div>
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full"
        />
        <Button variant="primary" onClick={handleSubscribe} className="min-w-[180px]">
          {subscribeLabel}
        </Button>
      </div>
    </ModalContainer>
  );
}