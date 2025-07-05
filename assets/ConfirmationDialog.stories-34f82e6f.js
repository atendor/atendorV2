import{f as a}from"./WorkflowCanvas-cec48318.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const s={title:"Components/ConfirmationDialog",component:a,parameters:{docs:{description:{component:"Modal dialog asking the user to confirm or cancel an action."}}}},e={args:{open:!0,title:"Delete item",message:"Are you sure you want to delete this item?",confirmLabel:"Delete",cancelLabel:"Cancel",onConfirm:()=>alert("Confirmed"),onCancel:()=>alert("Cancelled")}};var n,o,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Delete item',
    message: 'Are you sure you want to delete this item?',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel',
    onConfirm: () => alert('Confirmed'),
    onCancel: () => alert('Cancelled')
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const c=["Open"];export{e as Open,c as __namedExportsOrder,s as default};
