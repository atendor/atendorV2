import React from "react";

/**
 * Basic block representing a workflow node.
 * TODO: expand node block functionality.
 */
type NodeBlockProps = {
  title: string;
  children?: React.ReactNode;
};

const NodeBlock = ({ title, children }: NodeBlockProps) => (
  <div className="node-block border rounded p-2">
    {/* TODO: display node content */}
    <h3 className="font-bold mb-2">{title}</h3>
    {children}
  </div>
);

export default NodeBlock;
