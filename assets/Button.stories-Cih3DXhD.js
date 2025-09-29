import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-FY7ut-By.js";import{f as n}from"./index_react-D9PYuTeI.js";import{B as e}from"./Button-D2XRJ5kI.js";import{I as c}from"./IconCheck-DWsfCSAZ.js";import{I as d}from"./IconX-Bb9xQ-ov.js";import{c as l}from"./createReactComponent-ZrSB69Te.js";import"./preload-helper-Dp1pzeXC.js";import"./index-YATcduDS.js";import"./utils-BUuiPi5j.js";import"./bundle-mjs-DAWI7bSt.js";import"./Spinner-Cx9L5bJ3.js";import"./index-BXlQ47Wd.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]],m=l("outline","arrow-left","ArrowLeft",p);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]],g=l("outline","arrow-right","ArrowRight",h),f={IconArrowLeft:m,IconArrowRight:g,IconX:d,IconCheck:c,None:void 0},L={title:"Components/Button",component:e,argTypes:{children:{control:{type:"text"}},intent:{control:{type:"select"},options:["primary","secondary","tertiary","ghost"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},danger:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:f}},parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-2237&m=dev",examples:[e],props:{size:n.enum("Size",{"X-Small":"xs",Small:"sm",Medium:"md",Large:"lg"}),label:n.string("Label"),icon:n.boolean("Show front icon",{true:"IconArrowLeft",false:"None"})}},radixDocs:{primitive:"Slot",url:"https://www.radix-ui.com/primitives/docs/utilities/slot"}}},u=o=>o.asChild?r.jsx(e,{...o,asChild:!0,children:r.jsx("a",{href:"#",children:o.children})}):r.jsx(e,{...o,children:o.children}),t=u.bind({});t.args={intent:"primary",size:"md",disabled:!1,loading:!1,icon:void 0,asChild:!1,children:"ラベル",danger:!1};var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const N=["Primary"];export{t as Primary,N as __namedExportsOrder,L as default};
