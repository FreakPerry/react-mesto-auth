import { useEffect } from 'react';

const Popup = ({ isOpen, name, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? 'popup_is-opened' : ''}`}
      id={`popup-${name}`}
      onClick={handleOverlay}
    >
      <div className="popup__container">
        <button
          className="button popup__close-button"
          type="button"
          id={`${name}-close-button`}
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
