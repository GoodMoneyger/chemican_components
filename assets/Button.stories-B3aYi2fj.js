import{j as a}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-BkOz4_K4.js";import{f as i}from"./index_react-Dtgb1XTx.js";import{B as t}from"./Button-CHfjCCfk.js";import{I as s}from"./IconCheck-H4QM2DcH.js";import{I as C}from"./IconX-DpgGUiAi.js";import{I as b}from"./IconArrowRight-M25nALVX.js";import{c as w}from"./createReactComponent-Kjs7ao6y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CwSnwGEX.js";import"./utils-CXhk-AHn.js";import"./Spinner--uFAhkOu.js";import"./index-B_kkSCJf.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]],x=w("outline","arrow-left","ArrowLeft",B),l={IconArrowLeft:x,IconArrowRight:b,IconX:C,IconCheck:s,None:void 0},P={title:"Components/Button",component:t,tags:["autodocs"],argTypes:{children:{control:{type:"text"}},intent:{control:{type:"select"},options:["primary","secondary","tertiary","text"]},size:{control:{type:"select"},options:["icon","xs","sm","md","lg","xl"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:l},trailingIcon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:l}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-2237&m=dev",examples:[t],props:{size:i.enum("Size",{"X-Small":"xs",Small:"sm",Medium:"md",Large:"lg"}),label:i.string("Label"),icon:i.boolean("Show front icon",{true:"IconArrowLeft",false:"None"})}},radixDocs:{primitive:"Slot",url:"https://www.radix-ui.com/primitives/docs/utilities/slot"}}},c=n=>n.asChild?a.jsx(t,{...n,asChild:!0,children:a.jsx("a",{href:"#",children:n.children})}):a.jsx(t,{...n,children:n.children}),r=c.bind({});r.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:void 0,trailingIcon:void 0,asChild:!1,children:"ラベル",danger:!1};const o=c.bind({});o.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:s,trailingIcon:void 0,asChild:!1,danger:!1};o.parameters={docs:{description:{story:"Icon-only buttons are automatically styled when a single icon is provided without any text. The button becomes square (1:1 aspect ratio) with appropriate padding. To create an icon-only button, provide either the `icon` or `trailingIcon` prop (not both) and omit the `children` prop."}}};const e=c.bind({});e.args={intent:"primary",size:"icon",disabled:!1,loading:!1,icon:s,trailingIcon:void 0,asChild:!1,danger:!1};e.parameters={docs:{description:{story:"The `icon` size variant is specifically designed for icon-only buttons. It should only be used when there is an icon and no children/text content."}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,y,I;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(I=(y=e.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const X=["Primary","IconOnly","IconSize"];export{o as IconOnly,e as IconSize,r as Primary,X as __namedExportsOrder,P as default};
