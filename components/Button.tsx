import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => (
  <button className="btn btn-primary" {...props}>
    {children}
  </button>
);

export default Button;
