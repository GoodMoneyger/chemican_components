import{T as o,j as e,q as p}from"./iframe-DHVYCqvJ.js";import{B as a}from"./Button-Dk8HBCC8.js";import"./preload-helper-Dp1pzeXC.js";import"./ProgressIndicator-DFt7OpXH.js";const g={title:"Components/Tooltip",component:o,parameters:{layout:"centered",radixDocs:{primitive:"Tooltip",url:"https://www.radix-ui.com/primitives/docs/components/tooltip"}},argTypes:{intent:{control:"select",options:["normal","accent"],description:"Visual style variant"},side:{control:"select",options:["top","right","bottom","left"],description:"Position relative to trigger element"},align:{control:"select",options:["start","center","end"],description:"Alignment along the side"},sideOffset:{control:"number",description:"Distance from the trigger element"},alignOffset:{control:"number",description:"Offset along the alignment axis"},delayDuration:{control:"number",description:"Delay before showing tooltip (ms)"},content:{control:"text",description:"Tooltip content"}},decorators:[s=>e.jsx(p,{children:e.jsx("div",{className:"p-20",children:e.jsx(s,{})})})]},t={args:{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",side:"top",className:"!w-[670px] !max-w-none"},render:s=>e.jsx(o,{...s,children:e.jsx(a,{intent:"secondary",children:"Hover me"})})},n={render:()=>e.jsxs("div",{className:"gap-8 flex flex-col items-start",children:[e.jsxs("div",{className:"gap-4 flex items-center",children:[e.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Normal"}),e.jsx("span",{className:"text-body-secondary text-sm",children:"通常タイプ"}),e.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",className:"!w-[670px] !max-w-none",children:e.jsx(a,{intent:"secondary",children:"Hover for Normal"})})]}),e.jsxs("div",{className:"gap-4 flex items-center",children:[e.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Accent"}),e.jsx("span",{className:"text-body-secondary text-sm",children:"強調タイプ"}),e.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"accent",side:"bottom",className:"!w-[670px] !max-w-none",children:e.jsx(a,{intent:"primary",children:"Hover for Accent"})})]})]})};var r,i,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    intent: 'normal',
    side: 'top',
    className: '!w-[670px] !max-w-none'
  },
  render: args => <Tooltip {...args}>
      <Button intent="secondary">Hover me</Button>
    </Tooltip>
}`,...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="gap-8 flex flex-col items-start">
      <div className="gap-4 flex items-center">
        <span className="text-body-primary font-medium min-w-20">Normal</span>
        <span className="text-body-secondary text-sm">通常タイプ</span>
        <Tooltip content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" intent="normal" className="!w-[670px] !max-w-none">
          <Button intent="secondary">Hover for Normal</Button>
        </Tooltip>
      </div>

      <div className="gap-4 flex items-center">
        <span className="text-body-primary font-medium min-w-20">Accent</span>
        <span className="text-body-secondary text-sm">強調タイプ</span>
        <Tooltip content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト" intent="accent" side="bottom" className="!w-[670px] !max-w-none">
          <Button intent="primary">Hover for Accent</Button>
        </Tooltip>
      </div>
    </div>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const N=["Default","BothVariants"];export{n as BothVariants,t as Default,N as __namedExportsOrder,g as default};
