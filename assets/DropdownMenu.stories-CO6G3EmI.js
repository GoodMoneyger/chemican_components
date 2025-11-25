import{j as n}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DBP_R2y0.js";import{B as r}from"./Button-C8kbE14J.js";import{D as e,a as t,b as d,c as o,d as b,e as m}from"./DropdownMenu-DfJWP1ah.js";import{I as L}from"./IconUser-By3hYGzJ.js";import{I as B}from"./IconSettings-7cNm_KDl.js";import{c as v}from"./createReactComponent-CPNGfXTf.js";import{I as N}from"./IconEdit-CEgCvpX7.js";import{I as z}from"./IconTrash-bjGl8fLu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CSjRTiw2.js";import"./utils-DhtLtMy2.js";import"./ProgressIndicator-Bk7bF86q.js";import"./index-C81ndPqT.js";import"./index-dblXaBD-.js";import"./index-GOL90b5o.js";import"./index-Cn-L9jiK.js";import"./index-DoWJ6TdF.js";import"./index-Djslualy.js";import"./index-C1VAHI6m.js";import"./index-UBQCSlRK.js";import"./index-8YH3xGhT.js";import"./index-Cq5BEDft.js";import"./index-Blgh_9_A.js";import"./index-BjWD7iMs.js";import"./index-CukDL2jb.js";import"./index-BYMk1BpR.js";import"./index-eNO7sFNv.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]],k=v("outline","dots","Dots",W);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M9 12h12l-3 -3",key:"svg-1"}],["path",{d:"M18 15l3 -3",key:"svg-2"}]],A=v("outline","logout","Logout",E),hn={title:"Components/DropdownMenu",component:e,parameters:{layout:"centered"},argTypes:{open:{control:{type:"boolean"},description:"Controls whether the dropdown is open"},modal:{control:{type:"boolean"},description:"Whether the dropdown is modal"}}},P=_=>n.jsxs(e,{..._,children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Open Menu"})}),n.jsxs(d,{children:[n.jsx(o,{icon:L,children:"Profile"}),n.jsx(o,{icon:B,children:"Settings"}),n.jsx(b,{}),n.jsx(o,{icon:A,intent:"danger",children:"Logout"})]})]}),s=P.bind({});s.args={};const i=()=>n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"text",icon:k})}),n.jsxs(d,{children:[n.jsx(o,{icon:N,children:"Edit"}),n.jsx(o,{icon:z,intent:"danger",children:"Delete"})]})]}),p=()=>n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Account Menu"})}),n.jsxs(d,{children:[n.jsx(m,{children:"Account"}),n.jsx(o,{icon:L,children:"Profile"}),n.jsx(o,{icon:B,children:"Settings"}),n.jsx(b,{}),n.jsx(m,{children:"Actions"}),n.jsx(o,{icon:A,intent:"danger",children:"Logout"})]})]}),a=()=>n.jsxs("div",{className:"gap-4 flex",children:[n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Default"})}),n.jsxs(d,{children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"With Disabled"})}),n.jsxs(d,{children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{disabled:!0,children:"Disabled Item"})]})]})]}),c=()=>n.jsxs("div",{className:"gap-4 flex",children:[n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Small"})}),n.jsxs(d,{size:"sm",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Medium"})}),n.jsxs(d,{size:"md",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]}),n.jsxs(e,{children:[n.jsx(t,{asChild:!0,children:n.jsx(r,{intent:"secondary",children:"Large"})}),n.jsxs(d,{size:"lg",children:[n.jsx(o,{children:"Menu Item"}),n.jsx(o,{children:"Another Item"})]})]})]});i.__docgenInfo={description:"",methods:[],displayName:"WithIcon"};p.__docgenInfo={description:"",methods:[],displayName:"WithLabels"};a.__docgenInfo={description:"",methods:[],displayName:"States"};c.__docgenInfo={description:"",methods:[],displayName:"Sizes"};var l,D,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`args => <Dropdown {...args}>
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
  </Dropdown>`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var w,g,I;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`() => <Dropdown>
    <DropdownTrigger asChild>
      <Button intent="text" icon={IconDots} />
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon={IconEdit}>Edit</DropdownItem>
      <DropdownItem icon={IconTrash} intent="danger">
        Delete
      </DropdownItem>
    </DropdownContent>
  </Dropdown>`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var u,x,j;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`() => <Dropdown>
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
  </Dropdown>`,...(j=(x=p.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var C,y,f;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => <div className="gap-4 flex">
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
  </div>`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var M,S,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => <div className="gap-4 flex">
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
  </div>`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const wn=["Default","WithIcon","WithLabels","States","Sizes"];export{s as Default,c as Sizes,a as States,i as WithIcon,p as WithLabels,wn as __namedExportsOrder,hn as default};
