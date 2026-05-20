import{j as e}from"./iframe-eoGo0yxG.js";import{T as F}from"./TextField-BKTcNngu.js";import{F as S}from"./FormField-G3czWBL_.js";import"./preload-helper-Dp1pzeXC.js";import"./useCompositionGuard-C7M4FOXA.js";const v={title:"Components/FormField",component:S,parameters:{layout:"centered"},argTypes:{label:{control:"text",description:"The label for the form field"},name:{control:"text",description:"The name attribute for the form field"},error:{control:"text",description:"Error message to display below the field"},description:{control:"text",description:"Description text to display below the field"},optional:{control:"boolean",description:"Whether to show the optional indicator"}}},r=()=>e.jsx(F,{placeholder:"Placeholder",prefixIcon:void 0,trailingIcon:void 0,disabled:!1,onTrailingIconClick:()=>{}}),o={args:{label:"Label",name:"default-field",children:e.jsx(r,{})}},n={args:{label:"ラベル",name:"optional-field",optional:!0,children:e.jsx(r,{})}},t={args:{label:"ラベル",name:"description-field",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{})}},a={args:{label:"ラベル",name:"error-field",error:"数字で入力してください。",children:e.jsx(r,{})}},i={args:{label:"ラベル",name:"error-description-field",optional:!0,error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{})}},s={args:{name:"no-label-field",error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var g,x,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    children: <MockInput />
  }
}`,...(I=(x=a.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,W,k;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(k=(W=i.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var D,E,M;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const A=["Default","Optional","WithDescription","WithError","WithErrorAndDescription","WithoutLabel"];export{o as Default,n as Optional,t as WithDescription,a as WithError,i as WithErrorAndDescription,s as WithoutLabel,A as __namedExportsOrder,v as default};
