import{S as r,d as i,j as o}from"./WorkflowCanvas-cec48318.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const d={title:"Components/Select",component:r,parameters:{docs:{description:{component:"Dropdown select element with optional label."}}}},e={render:s=>i(r,{...s,children:[o("option",{value:"",children:"Choose one"}),o("option",{value:"a",children:"Option A"}),o("option",{value:"b",children:"Option B"})]}),args:{label:"Select option"}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Select {...args}>
      <option value="">Choose one</option>
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </Select>,
  args: {
    label: 'Select option'
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const m=["Basic"];export{e as Basic,m as __namedExportsOrder,d as default};
