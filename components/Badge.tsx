import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error";
  className?: string;
};

const Badge = ({ children, color, className = "" }: BadgeProps) => (
  <span className={`badge ${color ? `badge-${color}` : ""} ${className}`.trim()}>{children}</span>
);

export default Badge;
