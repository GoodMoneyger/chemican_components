import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./utils-DxsQ5Fm2.js";import"./bundle-mjs-DAWI7bSt.js";import"./index-tqeX7r1O.js";import"./iframe-DTkE2WZ2.js";const D=({label:o,children:F,className:M,name:w,error:c,description:d,optional:S})=>e.jsxs("div",{className:"flex flex-col",children:[o&&e.jsxs("label",{htmlFor:w,className:v(`text-body-secondary flex items-center gap-1 pb-2 text-xs
            leading-none font-normal`,M),children:[e.jsx("span",{children:o}),S&&e.jsx("span",{className:"text-body-secondary",children:"(任意)"})]}),F,c&&e.jsx("div",{className:"pt-1",children:e.jsx("p",{className:"text-body-alert text-xs leading-[1.5] font-normal",children:c})}),d&&e.jsx("div",{className:"pt-1",children:e.jsx("p",{className:"text-body-secondary text-xs leading-[1.5] font-normal",children:d})})]});D.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},optional:{required:!1,tsType:{name:"boolean"},description:""}}};const $={title:"Components/FormField",component:D,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form field"},name:{control:"text",description:"The name attribute for the form field"},error:{control:"text",description:"Error message to display below the field"},description:{control:"text",description:"Description text to display below the field"},optional:{control:"boolean",description:"Whether to show the optional indicator"}}},r=({hasError:o=!1})=>e.jsx("input",{type:"text",className:`bg-surface-primary text-body-primary focus:ring-input-focused
      h-12 w-full rounded border px-4 py-3 text-sm outline-none focus:ring-2 ${o?"border-input-alert":"border-input-default"}`,placeholder:"Enter value"}),t={args:{label:"Label",name:"default-field",children:e.jsx(r,{})}},a={args:{label:"ラベル",name:"optional-field",optional:!0,children:e.jsx(r,{})}},n={args:{label:"ラベル",name:"description-field",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{})}},s={args:{label:"ラベル",name:"error-field",error:"数字で入力してください。",children:e.jsx(r,{hasError:!0})}},i={args:{label:"ラベル",name:"error-description-field",optional:!0,error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{hasError:!0})}},l={args:{name:"no-label-field",error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",children:e.jsx(r,{hasError:!0})}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'default-field',
    children: <MockInput />
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    children: <MockInput />
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,g,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />
  }
}`,...(y=(g=n.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var j,E,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    children: <MockInput hasError />
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var T,R,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(W=(R=i.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var I,k,q;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />
  }
}`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const z=["Default","Optional","WithDescription","WithError","WithErrorAndDescription","WithoutLabel"];export{t as Default,a as Optional,n as WithDescription,s as WithError,i as WithErrorAndDescription,l as WithoutLabel,z as __namedExportsOrder,$ as default};
