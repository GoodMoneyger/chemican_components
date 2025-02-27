import{j as o}from"./jsx-runtime-BRtPMPcD.js";import{I as c,B as e}from"./Button-DVlSVBsY.js";import{I as l}from"./IconCheck-CsFtBZeY.js";import{c as a}from"./createReactComponent-CrMlDral.js";import"./index-BVKZFYvx.js";import"./index-BbByKtjX.js";import"./index-CRGxjvZy.js";import"./index-GW4lMJ8d.js";import"./index-B43uF3j_.js";import"./bundle-mjs-AdmevC4f.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var p=a("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var d=a("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]);const h={IconArrowLeft:p,IconArrowRight:d,IconX:c,IconCheck:l,None:void 0},M={title:"Components/Button",component:e,argTypes:{children:{control:{type:"text"}},intent:{control:{type:"select"},options:["primary","secondary","tertiary","ghost"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},disabled:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"],mapping:h}}},m=t=>t.asChild?o.jsx(e,{...t,asChild:!0,children:o.jsx("a",{href:"#",children:t.children})}):o.jsx(e,{...t,children:t.children}),r=m.bind({});r.args={intent:"primary",size:"md",disabled:!1,icon:void 0,asChild:!1,children:"ラベル"};var n,s,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`args => {
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>;
  }
  return <Button {...args}>{args.children}</Button>;
}`,...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const A=["Primary"];export{r as Primary,A as __namedExportsOrder,M as default};
