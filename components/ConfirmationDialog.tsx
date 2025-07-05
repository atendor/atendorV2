import React from "react";
import Button from "./Button";

export type ConfirmationDialogProps = {
  open: boolean;
  title?: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialog = ({
  open,
  title = "Confirm",
  message,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) => (
  <div
    className={`modal ${open ? "modal-open" : ""}`}
    role="alertdialog"
    aria-modal="true"
    aria-labelledby="confirm-dialog-title"
    aria-describedby="confirm-dialog-desc"
  >
    <div className="modal-box">
      <h3 id="confirm-dialog-title" className="font-bold text-lg">
        {title}
      </h3>
      <p id="confirm-dialog-desc" className="py-4">
        {message}
      </p>
      <div className="flex justify-end gap-2">
        <Button onClick={onCancel}>{cancelLabel}</Button>
        <Button onClick={onConfirm}>{confirmLabel}</Button>
      </div>
    </div>
  </div>
);

export default ConfirmationDialog;
