import React from "react";

type DropdownMenuProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  alignEnd?: boolean;
};

const DropdownMenu = ({ label, children, alignEnd = false }: DropdownMenuProps) => (
  <div className={`dropdown${alignEnd ? " dropdown-end" : ""}`}>
    <label tabIndex={0} className="btn m-1">
      {label}
    </label>
    <ul
      tabIndex={0}
      className="menu dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      {children}
    </ul>
  </div>
);

export default DropdownMenu;
