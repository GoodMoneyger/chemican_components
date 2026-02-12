import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-BYg0B92I.js";import{T as o,a as d}from"./Tooltip-Di7jBDT3.js";import"./iframe-Cqlg9hZs.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BWguj-VB.js";import"./utils-Bh3XjSgd.js";import"./ProgressIndicator-CMXb1vpT.js";import"./index-D0p2Qkf-.js";import"./index-BF6v7Xcu.js";import"./index-BXNy5GXx.js";import"./index-CNONMOzq.js";import"./index-C7cmb6kc.js";import"./index-BWhk8RTU.js";import"./index-KmQ-j2V4.js";import"./index-PzVi0Xlv.js";import"./index-BhaBgIoh.js";import"./index-B6k5l7Bw.js";import"./index-Cg9s43yo.js";import"./index-C7f6hcVX.js";const S={title:"Components/Tooltip",component:o,parameters:{layout:"centered",radixDocs:{primitive:"Tooltip",url:"https://www.radix-ui.com/primitives/docs/components/tooltip"}},argTypes:{intent:{control:"select",options:["normal","accent"],description:"Visual style variant"},side:{control:"select",options:["top","right","bottom","left"],description:"Position relative to trigger element"},align:{control:"select",options:["start","center","end"],description:"Alignment along the side"},sideOffset:{control:"number",description:"Distance from the trigger element"},alignOffset:{control:"number",description:"Offset along the alignment axis"},delayDuration:{control:"number",description:"Delay before showing tooltip (ms)"},content:{control:"text",description:"Tooltip content"}},decorators:[s=>t.jsx(d,{children:t.jsx("div",{className:"p-20",children:t.jsx(s,{})})})]},e={args:{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",side:"top",className:"!w-[670px] !max-w-none"},render:s=>t.jsx(o,{...s,children:t.jsx(r,{intent:"secondary",children:"Hover me"})})},n={render:()=>t.jsxs("div",{className:"gap-8 flex flex-col items-start",children:[t.jsxs("div",{className:"gap-4 flex items-center",children:[t.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Normal"}),t.jsx("span",{className:"text-body-secondary text-sm",children:"通常タイプ"}),t.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",className:"!w-[670px] !max-w-none",children:t.jsx(r,{intent:"secondary",children:"Hover for Normal"})})]}),t.jsxs("div",{className:"gap-4 flex items-center",children:[t.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Accent"}),t.jsx("span",{className:"text-body-secondary text-sm",children:"強調タイプ"}),t.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"accent",side:"bottom",className:"!w-[670px] !max-w-none",children:t.jsx(r,{intent:"primary",children:"Hover for Accent"})})]})]})};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    content: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    intent: 'normal',
    side: 'top',
    className: '!w-[670px] !max-w-none'
  },
  render: args => <Tooltip {...args}>
      <Button intent="secondary">Hover me</Button>
    </Tooltip>
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,l,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const _=["Default","BothVariants"];export{n as BothVariants,e as Default,_ as __namedExportsOrder,S as default};
