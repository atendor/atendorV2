import React from "react";

/**
 * Displays the output log of workflow execution.
 * TODO: style and enhance log display.
 */
type ExecutionLogProps = {
  entries?: string[];
};

const ExecutionLog = ({ entries = [] }: ExecutionLogProps) => (
  <ul className="execution-log list-disc pl-4">
    {/* TODO: add better formatting for entries */}
    {entries.map((entry, index) => (
      <li key={index}>{entry}</li>
    ))}
  </ul>
);

export default ExecutionLog;
