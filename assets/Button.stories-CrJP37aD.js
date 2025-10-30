import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DMYWUF7w.js";import{f as a}from"./index_react-BjriApX3.js";import{B as n}from"./Button-CKDhOlrp.js";import{I as s}from"./IconCheck-iNVKsfll.js";import{I as C}from"./IconX-DMYDL7hB.js";import{I as b}from"./IconArrowRight-Od07VRVI.js";import{c as w}from"./createReactComponent-CE1qD6Cm.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP91VJlx.js";import"./utils-B-kTA-Ij.js";import"./ProgressIndicator-BHEWvt9p.js";import"./index-CYUDGLiF.js";import"./index-B0Lt564T.js";import"./index-C8Prwpr2.js";import"./index-qp8IEN2i.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]],x=w("outline","arrow-left","ArrowLeft",B),l={IconArrowLeft:x,IconArrowRight:b,IconX:C,IconCheck:s,None:void 0},F={title:"Components/Button",component:n,tags:["autodocs"],argTypes:{children:{control:{type:"text"}},intent:{control:{type:"select"},options:["primary","secondary","tertiary","text"]},size:{control:{type:"select"},options:["icon","xs","sm","md","lg","xl"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:l},trailingIcon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:l}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-2237&m=dev",examples:[n],props:{size:a.enum("Size",{"X-Small":"xs",Small:"sm",Medium:"md",Large:"lg"}),label:a.string("Label"),icon:a.boolean("Show front icon",{true:"IconArrowLeft",false:"None"})}},radixDocs:{primitive:"Slot",url:"https://www.radix-ui.com/primitives/docs/utilities/slot"}}},c=r=>r.asChild?i.jsx(n,{...r,asChild:!0,children:i.jsx("a",{href:"#",children:r.children})}):i.jsx(n,{...r,children:r.children}),t=c.bind({});t.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:void 0,trailingIcon:void 0,asChild:!1,children:"ラベル",danger:!1};const o=c.bind({});o.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:s,trailingIcon:void 0,asChild:!1,danger:!1};o.parameters={docs:{description:{story:"Icon-only buttons are automatically styled when a single icon is provided without any text. The button becomes square (1:1 aspect ratio) with appropriate padding. To create an icon-only button, provide either the `icon` or `trailingIcon` prop (not both) and omit the `children` prop."}}};const e=c.bind({});e.args={intent:"primary",size:"icon",disabled:!1,loading:!1,icon:s,trailingIcon:void 0,asChild:!1,danger:!1};e.parameters={docs:{description:{story:"The `icon` size variant is specifically designed for icon-only buttons. It should only be used when there is an icon and no children/text content."}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var h,g,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
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
}`,...(I=(y=e.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const q=["Primary","IconOnly","IconSize"];export{o as IconOnly,e as IconSize,t as Primary,q as __namedExportsOrder,F as default};
