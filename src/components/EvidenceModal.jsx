import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function EvidenceModal({ open, onClose, src, alt, caption }) {
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const prevActive = document.activeElement;
    closeBtnRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      if (prevActive instanceof HTMLElement) prevActive.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={caption || 'Project evidence'}
        ref={dialogRef}
      >
        <button className="modal__close" onClick={onClose} ref={closeBtnRef} aria-label="Close evidence viewer">
          <X size={22} strokeWidth={2.2} />
        </button>
        <img src={src} alt={alt} className="modal__img" />
        {caption && <p className="modal__caption">{caption}</p>}
      </div>
    </div>
  );
}
