import React from "react";

type SwitchProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Switch = ({ label, ...props }: SwitchProps) => (
  <label className="label cursor-pointer">
    <input type="checkbox" className="toggle" {...props} />
    {label && <span className="label-text ml-2">{label}</span>}
  </label>
);

export default Switch;
