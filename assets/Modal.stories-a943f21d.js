import{M as r,d as l,j as e,c as p}from"./WorkflowCanvas-cec48318.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const m={title:"Components/Modal",component:r,parameters:{docs:{description:{component:"Dialog overlay for displaying content on top of the page."}}}},o={render:n=>l(r,{...n,children:[e("h3",{className:"font-bold text-lg",children:"Modal Title"}),e("p",{className:"py-4",children:"This is an open modal."}),e(p,{onClick:n.onClose,children:"Close"})]}),args:{open:!0}};var s,a,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Modal {...args}>
      <h3 className="font-bold text-lg">Modal Title</h3>
      <p className="py-4">This is an open modal.</p>
      <Button onClick={args.onClose}>Close</Button>
    </Modal>,
  args: {
    open: true
  }
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const g=["Open"];export{o as Open,g as __namedExportsOrder,m as default};
