import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-oUf_B29S.js";import{f as i}from"./index_react-D77VLUqq.js";import{B as r}from"./Button-ShJ5Haov.js";import{I as h}from"./IconCheck-BhRx5goo.js";import{I as u}from"./IconX-BvKsqCFX.js";import{I as f}from"./IconArrowRight-luHBKBUz.js";import{c as y}from"./createReactComponent-BETpUTHM.js";import"./preload-helper-Dp1pzeXC.js";import"./index-C07PqX-n.js";import"./utils-C7-Zur__.js";import"./Spinner-CgChd3sr.js";import"./index-B8NXG9jQ.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]],C=y("outline","arrow-left","ArrowLeft",I),a={IconArrowLeft:C,IconArrowRight:f,IconX:u,IconCheck:h,None:void 0},z={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{children:{control:{type:"text"}},intent:{control:{type:"select"},options:["primary","secondary","tertiary","text"]},size:{control:{type:"select"},options:["xs","sm","md","lg","xl"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:a},trailingIcon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:a}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-2237&m=dev",examples:[r],props:{size:i.enum("Size",{"X-Small":"xs",Small:"sm",Medium:"md",Large:"lg"}),label:i.string("Label"),icon:i.boolean("Show front icon",{true:"IconArrowLeft",false:"None"})}},radixDocs:{primitive:"Slot",url:"https://www.radix-ui.com/primitives/docs/utilities/slot"}}},g=t=>t.asChild?n.jsx(r,{...t,asChild:!0,children:n.jsx("a",{href:"#",children:t.children})}):n.jsx(r,{...t,children:t.children}),e=g.bind({});e.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:void 0,trailingIcon:void 0,asChild:!1,children:"ラベル",danger:!1};const o=g.bind({});o.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:h,trailingIcon:void 0,asChild:!1,danger:!1};o.parameters={docs:{description:{story:"Icon-only buttons are automatically styled when a single icon is provided without any text. The button becomes square (1:1 aspect ratio) with appropriate padding. To create an icon-only button, provide either the `icon` or `trailingIcon` prop (not both) and omit the `children` prop."}}};var s,c,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const O=["Primary","IconOnly"];export{o as IconOnly,e as Primary,O as __namedExportsOrder,z as default};
