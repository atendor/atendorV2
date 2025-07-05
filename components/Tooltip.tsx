import React from "react";

type TooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

const Tooltip = ({ content, children, position = "top" }: TooltipProps) => (
  <div className={`tooltip tooltip-${position}`} data-tip={content}>
    {children}
  </div>
);

export default Tooltip;
