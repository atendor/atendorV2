import React from "react";

/**
 * Container for workflow nodes and connectors.
 * TODO: Add workflow rendering logic.
 */
type WorkflowCanvasProps = {
  children?: React.ReactNode;
};

const WorkflowCanvas = ({ children }: WorkflowCanvasProps) => (
  <div className="workflow-canvas">
    {/* TODO: render workflow nodes and connectors */}
    {children}
  </div>
);

export default WorkflowCanvas;
