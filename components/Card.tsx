import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`card bg-base-100 shadow-xl ${className}`}>{children}</div>
);

export default Card;
