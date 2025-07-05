import React from "react";

/**
 * Editor interface for node details.
 * TODO: implement node editing functionality.
 */
type NodeEditorProps = {
  children?: React.ReactNode;
};

const NodeEditor = ({ children }: NodeEditorProps) => (
  <div className="node-editor p-2">
    {/* TODO: create node editing form */}
    {children}
  </div>
);

export default NodeEditor;
