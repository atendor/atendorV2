import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  children: React.ReactNode;
};

const Select = ({ label, children, ...props }: SelectProps) => (
  <label className="form-control">
    {label && <span className="label-text">{label}</span>}
    <select
      className="select select-bordered w-full"
      aria-label={props["aria-label"] ?? label}
      {...props}
    >
      {children}
    </select>
  </label>
);

export default Select;
