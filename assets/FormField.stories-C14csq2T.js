import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./iframe-B-aYOsp5.js";import{I as _}from"./Input-BKKpTelQ.js";import{T as G}from"./Textarea-BFbQVEJy.js";import{S as V}from"./Select-Cc0xTV9V.js";import{M as z}from"./MultiSelect-CIKWUq38.js";import{D as H}from"./DatePicker-DoEZ9Pmr.js";import{C as J,a as u}from"./Checkbox-Wix8snNn.js";import{a as K,R as b}from"./RadioButton-c1hEnmiQ.js";import{c as Q}from"./utils-CAnHumtr.js";import"./preload-helper-Dp1pzeXC.js";import"./createReactComponent-BPytYZRx.js";import"./index-byq7ciuf.js";import"./IconChevronDown-DgK3Rm0L.js";import"./index-B_MXe1T3.js";import"./index-CnMDEn2-.js";import"./index-DJ-pwj21.js";import"./index-DIDqM0ZN.js";import"./index-B0qmjQpe.js";import"./index-Dls7RPJm.js";import"./index-BBXkTh8N.js";import"./index-8tY7Vxoe.js";import"./index-opSNP-t-.js";import"./index-B3T24ovD.js";import"./index-Dgln-L8w.js";import"./index-Drzl08vI.js";import"./index-fVwckpiN.js";import"./index-CPgwYN7m.js";import"./index-5w3PDQv4.js";import"./Button-DnjeC-sQ.js";import"./Spinner-CpNchhN0.js";import"./Tag-DfS_U96-.js";import"./tokens-CXYA5Prz.js";import"./index-Py-p9dOw.js";import"./index-hxT36-PT.js";import"./index-DdT1gHMr.js";import"./IconSearch-DMTbrbOf.js";import"./Calendar-CVQSuWBC.js";import"./IconCheck-exhp6ZT-.js";import"./index-BvbaYCfn.js";const o=({label:e,children:t,className:m,name:q,error:x,description:f,optional:L})=>r.jsxs("div",{className:"flex flex-col",children:[e&&r.jsxs("label",{htmlFor:q,className:Q(`text-body-secondary gap-1 pb-2 text-xs font-normal flex
            items-center leading-none`,m),children:[r.jsx("span",{children:e}),L&&r.jsx("span",{className:"text-body-secondary",children:"(任意)"})]}),t,x&&r.jsx("div",{className:"pt-1",children:r.jsx("p",{className:"text-body-alert text-xs font-normal leading-[1.5]",children:x})}),f&&r.jsx("div",{className:"pt-1",children:r.jsx("p",{className:"text-body-secondary text-xs font-normal leading-[1.5]",children:f})})]});o.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},optional:{required:!1,tsType:{name:"boolean"},description:""}}};const Ge={title:"Components/FormField",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The label for the form field"},name:{control:"text",description:"The name attribute for the form field"},error:{control:"text",description:"Error message to display below the field"},description:{control:"text",description:"Description text to display below the field"},optional:{control:"boolean",description:"Whether to show the optional indicator"},componentType:{control:"select",options:["Input","Textarea","Select","MultiSelect","DatePicker","Checkboxes","RadioButtons"],description:"Type of input component to display"}}},U=({hasError:e=!1})=>r.jsx(_,{placeholder:"Placeholder",invalid:e,prefixIcon:void 0,trailingIcon:void 0,disabled:!1,onTrailingIconClick:()=>{}}),X=({hasError:e=!1})=>r.jsx(G,{placeholder:"Enter text here...",invalid:e}),Y=({hasError:e=!1})=>r.jsx(V,{placeholder:"Select an option",invalid:e,options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}]}),Z=({hasError:e=!1})=>{const[t,m]=A.useState([]);return r.jsx(z,{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],onValueChange:m,defaultValue:t,placeholder:"Select options",invalid:e})},E=({hasError:e=!1})=>r.jsx(H,{placeholder:"Select date",error:e}),ee=({hasError:e=!1})=>r.jsxs(J,{children:[r.jsx(u,{label:"Option 1",invalid:e}),r.jsx(u,{label:"Option 2",invalid:e}),r.jsx(u,{label:"Option 3",invalid:e})]}),re=({hasError:e=!1})=>r.jsxs(K,{children:[r.jsx(b,{value:"option1",label:"Option 1",invalid:e}),r.jsx(b,{value:"option2",label:"Option 2",invalid:e}),r.jsx(b,{value:"option3",label:"Option 3",invalid:e})]}),n=(e,t=!1)=>{switch(e){case"Textarea":return r.jsx(X,{hasError:t});case"Select":return r.jsx(Y,{hasError:t});case"MultiSelect":return r.jsx(Z,{hasError:t});case"DatePicker":return r.jsx(E,{hasError:t});case"Checkboxes":return r.jsx(ee,{hasError:t});case"RadioButtons":return r.jsx(re,{hasError:t});case"Input":default:return r.jsx(U,{hasError:t})}},l={args:{label:"Label",name:"default-field",componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},a={args:{label:"ラベル",name:"optional-field",optional:!0,componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},i={args:{label:"ラベル",name:"description-field",description:"日中に連絡のつきやすい電話番号を記入します",componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},s={args:{label:"ラベル",name:"error-field",error:"数字で入力してください。",componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},p={args:{label:"ラベル",name:"error-description-field",optional:!0,error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},c={args:{name:"no-label-field",error:"数字で入力してください。",description:"日中に連絡のつきやすい電話番号を記入します",componentType:"Input"},render:e=>r.jsx(o,{...e,children:n(e.componentType||"Input",!!e.error)})},d={args:{label:"Label",optional:!1,error:"",description:""},render:e=>r.jsxs("div",{className:"gap-6 flex w-[400px] flex-col",children:[r.jsx(o,{...e,label:e.label?`${e.label} (Input)`:"Input",name:"input-field",children:n("Input",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (Textarea)`:"Textarea",name:"textarea-field",children:n("Textarea",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (Select)`:"Select",name:"select-field",children:n("Select",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (MultiSelect)`:"MultiSelect",name:"multiselect-field",children:n("MultiSelect",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (DatePicker)`:"DatePicker",name:"datepicker-field",children:n("DatePicker",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (Checkboxes)`:"Checkboxes",name:"checkboxes-field",children:n("Checkboxes",!!e.error)}),r.jsx(o,{...e,label:e.label?`${e.label} (RadioButtons)`:"RadioButtons",name:"radiobuttons-field",children:n("RadioButtons",!!e.error)})]})};var F,h,g;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    name: 'default-field',
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var T,y,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(j=(y=a.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,k,S;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(S=(k=i.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var C,v,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(R=(v=s.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var D,M,N;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(N=(M=p.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,$,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input'
  },
  render: args => <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
}`,...(B=($=c.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var P,W,w;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    optional: false,
    error: '',
    description: ''
  },
  render: args => <div className="gap-6 flex w-[400px] flex-col">
      <FormField {...args} label={args.label ? \`\${args.label} (Input)\` : 'Input'} name="input-field">
        {renderComponent('Input', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (Textarea)\` : 'Textarea'} name="textarea-field">
        {renderComponent('Textarea', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (Select)\` : 'Select'} name="select-field">
        {renderComponent('Select', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (MultiSelect)\` : 'MultiSelect'} name="multiselect-field">
        {renderComponent('MultiSelect', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (DatePicker)\` : 'DatePicker'} name="datepicker-field">
        {renderComponent('DatePicker', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (Checkboxes)\` : 'Checkboxes'} name="checkboxes-field">
        {renderComponent('Checkboxes', !!args.error)}
      </FormField>
      <FormField {...args} label={args.label ? \`\${args.label} (RadioButtons)\` : 'RadioButtons'} name="radiobuttons-field">
        {renderComponent('RadioButtons', !!args.error)}
      </FormField>
    </div>
}`,...(w=(W=d.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const Ve=["Default","Optional","WithDescription","WithError","WithErrorAndDescription","WithoutLabel","AllTypes"];export{d as AllTypes,l as Default,a as Optional,i as WithDescription,s as WithError,p as WithErrorAndDescription,c as WithoutLabel,Ve as __namedExportsOrder,Ge as default};
