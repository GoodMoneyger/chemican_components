import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as F}from"./Input-C1Eytrb_.js";import{F as y}from"./FormField-WpcO7ciC.js";import"./iframe-9Hncxsb8.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DpPH1Yfi.js";import"./utils-024pnGpB.js";const _={title:"Components/FormField",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form field"},name:{control:"text",description:"The name attribute for the form field"},error:{control:"text",description:"Error message to display below the field"},description:{control:"text",description:"Description text to display below the field"},optional:{control:"boolean",description:"Whether to show the optional indicator"}}},e=({hasError:S=!1})=>r.jsx(F,{placeholder:"Placeholder",invalid:S,prefixIcon:void 0,trailingIcon:void 0,disabled:!1,onTrailingIconClick:()=>{}}),o={args:{label:"Label",name:"default-field",children:r.jsx(e,{})}},n={args:{label:"ラベル",name:"optional-field",optional:!0,children:r.jsx(e,{})}},a={args:{label:"ラベル",name:"description-field",description:"日中に連絡のつきやすい電話番号を記入します",children:r.jsx(e,{})}},t={args:{label:"ラベル",name:"error-field",error:"数字で入力してください。",children:r.jsx(e,{hasError:!0})}},s={args:{label:"ラベル",name:"error-description-field",optional:!0,error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:r.jsx(e,{hasError:!0})}},i={args:{name:"no-label-field",error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:r.jsx(e,{hasError:!0})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'default-field',
    children: <MockInput />
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    children: <MockInput />
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,x,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    children: <MockInput hasError />
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var I,j,W;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(W=(j=s.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var k,D,M;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const P=["Default","Optional","WithDescription","WithError","WithErrorAndDescription","WithoutLabel"];export{o as Default,n as Optional,a as WithDescription,t as WithError,s as WithErrorAndDescription,i as WithoutLabel,P as __namedExportsOrder,_ as default};
