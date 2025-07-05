import React from "react";

/**
 * Sidebar containing available nodes or settings.
 * TODO: add sidebar controls and styling.
 */
type NodeSidebarProps = {
  children?: React.ReactNode;
};

const NodeSidebar = ({ children }: NodeSidebarProps) => (
  <aside className="node-sidebar w-64 p-2">
    {/* TODO: populate sidebar */}
    {children}
  </aside>
);

export default NodeSidebar;
