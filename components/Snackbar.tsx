import React from "react";
import Button from "./Button";

type SnackbarProps = {
  message: string;
  open: boolean;
  onClose?: () => void;
};

const Snackbar = ({ message, open, onClose }: SnackbarProps) => (
  <div
    className={`toast toast-center transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
    role="status"
    aria-live="assertive"
  >
    <div className="alert alert-info flex items-center">
      <span>{message}</span>
      {onClose && (
        <Button aria-label="Close" className="btn-ghost btn-sm ml-2" onClick={onClose}>
          ✕
        </Button>
      )}
    </div>
  </div>
);

export default Snackbar;
