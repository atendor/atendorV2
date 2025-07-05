import React from "react";

type LoadingSpinnerProps = {
  size?: "xs" | "sm" | "md" | "lg";
  label?: string;
  className?: string;
};

const LoadingSpinner = ({ size = "md", label = "Loading", className = "" }: LoadingSpinnerProps) => (
  <span
    role="status"
    aria-live="polite"
    aria-label={label}
    className={`loading loading-spinner loading-${size} ${className}`.trim()}
  />
);

export default LoadingSpinner;
