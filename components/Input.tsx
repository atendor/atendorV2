import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: InputProps) => (
  <input className="input input-bordered w-full" {...props} />
);

export default Input;
