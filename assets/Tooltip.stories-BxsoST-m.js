import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Button-B0gPCUsW.js";import{T as o,a as d}from"./Tooltip-DEGqyOGr.js";import"./iframe-evp4v1qV.js";import"./preload-helper-Dp1pzeXC.js";import"./index-B-IGPsXC.js";import"./utils-DNMWgjTw.js";import"./ProgressIndicator-fNuO2i7O.js";import"./index-C7uyLT1w.js";import"./index-Db46fPhg.js";import"./index-CZ-STUBE.js";import"./index-Bnwr7FAb.js";import"./index-DGp50Tuz.js";import"./index-C_TRvHb7.js";import"./index-CdyQgHNb.js";import"./index-BwNtGPpD.js";import"./index-DN0YHE-d.js";import"./index-5WmFNliw.js";import"./index-BV16UHwP.js";import"./index-BH3qBekY.js";const S={title:"Components/Tooltip",component:o,parameters:{layout:"centered",radixDocs:{primitive:"Tooltip",url:"https://www.radix-ui.com/primitives/docs/components/tooltip"}},argTypes:{intent:{control:"select",options:["normal","accent"],description:"Visual style variant"},side:{control:"select",options:["top","right","bottom","left"],description:"Position relative to trigger element"},align:{control:"select",options:["start","center","end"],description:"Alignment along the side"},sideOffset:{control:"number",description:"Distance from the trigger element"},alignOffset:{control:"number",description:"Offset along the alignment axis"},delayDuration:{control:"number",description:"Delay before showing tooltip (ms)"},content:{control:"text",description:"Tooltip content"}},decorators:[s=>t.jsx(d,{children:t.jsx("div",{className:"p-20",children:t.jsx(s,{})})})]},e={args:{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",side:"top",className:"!w-[670px] !max-w-none"},render:s=>t.jsx(o,{...s,children:t.jsx(r,{intent:"secondary",children:"Hover me"})})},n={render:()=>t.jsxs("div",{className:"gap-8 flex flex-col items-start",children:[t.jsxs("div",{className:"gap-4 flex items-center",children:[t.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Normal"}),t.jsx("span",{className:"text-body-secondary text-sm",children:"通常タイプ"}),t.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"normal",className:"!w-[670px] !max-w-none",children:t.jsx(r,{intent:"secondary",children:"Hover for Normal"})})]}),t.jsxs("div",{className:"gap-4 flex items-center",children:[t.jsx("span",{className:"text-body-primary font-medium min-w-20",children:"Accent"}),t.jsx("span",{className:"text-body-secondary text-sm",children:"強調タイプ"}),t.jsx(o,{content:"テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",intent:"accent",side:"bottom",className:"!w-[670px] !max-w-none",children:t.jsx(r,{intent:"primary",children:"Hover for Accent"})})]})]})};var a,i,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
