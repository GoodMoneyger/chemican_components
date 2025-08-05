import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{I as w}from"./Input-Ce7L-FBs.js";import{c as L}from"./utils-V2iVRJzI.js";import"./iframe-Cqf0DyNd.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CRGxjvZy.js";import"./bundle-mjs-DAWI7bSt.js";const D=({label:o,children:F,className:M,name:v,error:c,description:d,optional:S})=>e.jsxs("div",{className:"flex flex-col",children:[o&&e.jsxs("label",{htmlFor:v,className:L(`text-body-secondary flex items-center gap-1 pb-2 text-xs
            leading-none font-normal`,M),children:[e.jsx("span",{children:o}),S&&e.jsx("span",{className:"text-body-secondary",children:"(任意)"})]}),F,c&&e.jsx("div",{className:"pt-1",children:e.jsx("p",{className:"text-body-alert text-xs leading-[1.5] font-normal",children:c})}),d&&e.jsx("div",{className:"pt-1",children:e.jsx("p",{className:"text-body-secondary text-xs leading-[1.5] font-normal",children:d})})]});D.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},optional:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Components/FormField",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form field"},name:{control:"text",description:"The name attribute for the form field"},error:{control:"text",description:"Error message to display below the field"},description:{control:"text",description:"Description text to display below the field"},optional:{control:"boolean",description:"Whether to show the optional indicator"}}},r=({hasError:o=!1})=>e.jsx(w,{placeholder:"Placeholder",invalid:o,prefixIcon:void 0,trailingIcon:void 0,disabled:!1,onTrailingIconClick:()=>{}}),a={args:{label:"Label",name:"default-field",children:e.jsx(r,{})}},n={args:{label:"ラベル",name:"optional-field",optional:!0,children:e.jsx(r,{})}},t={args:{label:"ラベル",name:"description-field",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{})}},s={args:{label:"ラベル",name:"error-field",error:"数字で入力してください。",children:e.jsx(r,{hasError:!0})}},i={args:{label:"ラベル",name:"error-description-field",optional:!0,error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{hasError:!0})}},l={args:{name:"no-label-field",error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{hasError:!0})}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'default-field',
    children: <MockInput />
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,x;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    children: <MockInput />
  }
}`,...(x=(f=n.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,E,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    children: <MockInput hasError />
  }
}`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var N,T,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var W,k,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const H=["Default","Optional","WithDescription","WithError","WithErrorAndDescription","WithoutLabel"];export{a as Default,n as Optional,t as WithDescription,s as WithError,i as WithErrorAndDescription,l as WithoutLabel,H as __namedExportsOrder,G as default};
