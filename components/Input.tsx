import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input = ({ label, ...props }: InputProps) => (
  <label className="form-control">
    {label && <span className="label-text">{label}</span>}
    <input
      className="input input-bordered w-full"
      aria-label={props["aria-label"] ?? label}
      {...props}
    />
  </label>
);

export default Input;
