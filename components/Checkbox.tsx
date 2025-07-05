import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = ({ label, ...props }: CheckboxProps) => (
  <label className="label cursor-pointer">
    <input type="checkbox" className="checkbox" {...props} />
    {label && <span className="label-text ml-2">{label}</span>}
  </label>
);

export default Checkbox;
