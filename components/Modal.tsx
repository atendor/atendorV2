import React from "react";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
};

const Modal = ({ children, open, onClose }: ModalProps) => (
  <div className={`modal ${open ? "modal-open" : ""}`} role="dialog">
    <div className="modal-box relative">
      {onClose && (
        <button
          aria-label="Close"
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
      )}
      {children}
    </div>
  </div>
);

export default Modal;
