import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-sZhx56Wl.js";import{B as r}from"./Button-BxMWoew4.js";import{D as e,a as t,b as d,c as o,d as b,e as m}from"./DropdownMenu-Czk_J29j.js";import{I as B}from"./IconUser-nL_ilYIs.js";import{I as L}from"./IconSettings-DuQoYVbn.js";import{I as A}from"./IconLogout-B2DPJS9E.js";import{c as v}from"./createReactComponent-DDhBytYG.js";import{I as z}from"./IconEdit-PP0__KL8.js";import{I as N}from"./IconTrash-S-w0XZka.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Boh_HylS.js";import"./utils-CRpphj8Q.js";import"./ProgressIndicator-31SJm-Kl.js";import"./index-D4B264Hc.js";import"./index-hNt_DFIF.js";import"./index-DR7ay0VC.js";import"./index-CcOq6klo.js";import"./index-DbrePb1t.js";import"./index-8f0iC-n7.js";import"./index-BxDuSytz.js";import"./index-C5Sbfvha.js";import"./index-BYvV8LHu.js";import"./index-VXHO9D8J.js";import"./index-BCkHtHNm.js";import"./index-DaQggCYJ.js";import"./index-n-SR9pEW.js";import"./index-DHquiNEr.js";import"./index-C7bIFcsN.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],E=v("outline","dots","Dots",W),hn={title:"Components/DropdownMenu",component:e,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dropdown is open"},modal:{control:{type:"boolean"},description:"Whether the dropdown is modal"}}},P=_=>n.jsxs(e,{..._,children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(o,{icon:B,children:"Profile"}),n.jsx(o,{icon:L,children:"Settings"}),n.jsx(b,{}),n.jsx(o,{icon:A,intent:"danger",children:"Logout"})]})]}),s=P.bind({});s.args={};const i=()=>n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"text",icon:E})}),n.jsxs(d,{children:[n.jsx(o,{icon:z,children:"Edit"}),n.jsx(o,{icon:N,intent:"danger",children:"Delete"})]})]}),p=()=>n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Account Menu"})}),n.jsxs(d,{children:[n.jsx(m,{children:"Account"}),n.jsx(o,{icon:B,children:"Profile"}),n.jsx(o,{icon:L,children:"Settings"}),n.jsx(b,{}),n.jsx(m,{children:"Actions"}),n.jsx(o,{icon:A,intent:"danger",children:"Logout"})]})]}),a=()=>n.jsxs("div",{className:"gap-4 flex",children:[n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Default"})}),n.jsxs(d,{children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"With Disabled"})}),n.jsxs(d,{children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{disabled:!0,children:"Disabled Item"})]})]})]}),c=()=>n.jsxs("div",{className:"gap-4 flex",children:[n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Small"})}),n.jsxs(d,{size:"sm",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Medium"})}),n.jsxs(d,{size:"md",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Large"})}),n.jsxs(d,{size:"lg",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]})]});i.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};p.__docgenInfo={description:"",methods:[],displayName:"WithLabels"};a.__docgenInfo={description:"",methods:[],displayName:"States"};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var l,D,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Dropdown {...args}>
    <DropdownTrigger asChild>
      <Button intent="secondary">Open Menu</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon={IconUser}>Profile</DropdownItem>
      <DropdownItem icon={IconSettings}>Settings</DropdownItem>
      <DropdownSeparator />
      <DropdownItem icon={IconLogout} intent="danger">
        Logout
      </DropdownItem>
    </DropdownContent>
  </Dropdown>`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var w,I,g;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Dropdown>
    <DropdownTrigger asChild>
      <Button intent="text" icon={IconDots} />
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon={IconEdit}>Edit</DropdownItem>
      <DropdownItem icon={IconTrash} intent="danger">
        Delete
      </DropdownItem>
    </DropdownContent>
  </Dropdown>`,...(g=(I=i.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var u,x,j;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Dropdown>
    <DropdownTrigger asChild>
      <Button intent="secondary">Account Menu</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownLabel>Account</DropdownLabel>
      <DropdownItem icon={IconUser}>Profile</DropdownItem>
      <DropdownItem icon={IconSettings}>Settings</DropdownItem>
      <DropdownSeparator />
      <DropdownLabel>Actions</DropdownLabel>
      <DropdownItem icon={IconLogout} intent="danger">
        Logout
      </DropdownItem>
    </DropdownContent>
  </Dropdown>`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var C,f,y;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="gap-4 flex">
    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Default</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">With Disabled</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem disabled>Disabled Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,T,M;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div className="gap-4 flex">
    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Small</Button>
      </DropdownTrigger>
      <DropdownContent size="sm">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Medium</Button>
      </DropdownTrigger>
      <DropdownContent size="md">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Large</Button>
      </DropdownTrigger>
      <DropdownContent size="lg">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>`,...(M=(T=c.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};const wn=["Default","WithIcon","WithLabels","States","Sizes"];export{s as Default,c as Sizes,a as States,i as WithIcon,p as WithLabels,wn as __namedExportsOrder,hn as default};
