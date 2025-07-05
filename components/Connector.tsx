import React from "react";

/**
 * Visual link between two nodes.
 * TODO: implement connector drawing.
 */
type ConnectorProps = {
  from: string;
  to: string;
};

const Connector = ({ from, to }: ConnectorProps) => (
  <div className="connector">
    {/* TODO: draw connector line */}
    {from} -&gt; {to}
  </div>
);

export default Connector;
