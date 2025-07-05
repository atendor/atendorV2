import{W as a,d,j as e,N as r,g as i}from"./WorkflowCanvas-cec48318.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const f={title:"Components/WorkflowCanvas",component:a,parameters:{docs:{description:{component:"Container for nodes and connectors."}}}},o={render:c=>d(a,{...c,children:[e(r,{title:"Node A"}),e(i,{from:"A",to:"B"}),e(r,{title:"Node B"})]})};var s,n,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <WorkflowCanvas {...args}>
      <NodeBlock title="Node A" />
      <Connector from="A" to="B" />
      <NodeBlock title="Node B" />
    </WorkflowCanvas>
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};const B=["Basic"];export{o as Basic,B as __namedExportsOrder,f as default};
