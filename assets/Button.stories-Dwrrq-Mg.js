import{j as r}from"./jsx-runtime-BRtPMPcD.js";import{B as e,I as l}from"./Button-C9J00gzg.js";import{I as p}from"./IconCheck-C_JU1A8E.js";import{c}from"./createReactComponent-C-U1lqbQ.js";import"./index-BVKZFYvx.js";import"./index-B6zSntGL.js";import"./index-CRGxjvZy.js";import"./index-GW4lMJ8d.js";import"./index-CjjwPJL9.js";/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var d=c("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.30.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var m=c("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]]);const h={IconArrowLeft:d,IconArrowRight:m,IconX:l,IconCheck:p,None:void 0},B={title:"Components/Button",component:e,argTypes:{intent:{control:{type:"select"},options:["primary","secondary","tertiary","ghost"]},size:{control:{type:"select"},options:["xs","sm","md","lg"]},disabled:{control:{type:"boolean"}},icon:{control:{type:"select"},options:["None","IconArrowLeft","IconArrowRight","IconX","IconCheck"]}}},u=t=>{const n=h[t.icon||"None"];return t.asChild?r.jsx(e,{...t,icon:n,asChild:!0,children:r.jsx("a",{href:"#",children:"ラベル"})}):r.jsx(e,{...t,icon:n,children:"ラベル"})},o=u.bind({});o.args={intent:"primary",size:"md",disabled:!1,icon:void 0,asChild:!1};var s,i,a;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const icon = iconMap[args.icon || 'None'];
  const asChild = args.asChild;
  if (asChild) {
    return <Button {...args} icon={icon} asChild>
        <a href="#">ラベル</a>
      </Button>;
  }
  return <Button {...args} icon={icon}>
      ラベル
    </Button>;
}`,...(a=(i=o.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const A=["Primary"];export{o as Primary,A as __namedExportsOrder,B as default};
