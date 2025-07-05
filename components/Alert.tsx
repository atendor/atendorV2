import React from "react";

type AlertProps = {
  children: React.ReactNode;
  color?: "info" | "success" | "warning" | "error";
  className?: string;
};

const Alert = ({ children, color, className = "" }: AlertProps) => (
  <div role="alert" className={`alert ${color ? `alert-${color}` : ""} ${className}`.trim()}>
    {children}
  </div>
);

export default Alert;
