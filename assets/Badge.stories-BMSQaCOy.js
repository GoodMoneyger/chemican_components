import{e as E,j as e,S as F,c as f,n as M,m as O}from"./iframe-D3AB6Ne7.js";import{c as P}from"./createReactComponent-C5k6TuXX.js";import{I as G}from"./IconAlertTriangle-BjBSNvJZ.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z",key:"svg-0"}]],J=P("filled","alert-circle-filled","AlertCircleFilled",H),p=O(`px-xxs text-xs font-bold h-4.5 relative inline-flex flex-shrink-0
  items-center justify-center leading-none`,{variants:{intent:{default:`rounded-sm bg-shape-accent-lime-pale
        text-shape-interactive-primary-selected`,new:"rounded-sm text-accent-purple-soft bg-shape-accent-purple-pale",autofill:"rounded-sm bg-shape-accent-green-pale text-accent-green-soft",danger:`rounded-sm border-interactive-alert-default text-body-alert
        pl-4.5 border border-dashed`}},defaultVariants:{intent:"default"}}),a=E.forwardRef(({intent:n="default",icon:U,className:o,children:m,asChild:W=!1,...h},u)=>{const g=U||(n==="danger"?J:void 0);return W?e.jsx(F,{className:f(p({intent:n}),o),ref:u,...h,children:m}):e.jsxs("span",{className:f(p({intent:n}),o),ref:u,...h,children:[n==="danger"&&g&&M(g,{className:"w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"}),m]})});a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{intent:{required:!1,tsType:{name:"union",raw:"'default' | 'new' | 'danger' | 'autofill'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'new'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'autofill'"}]},description:`The intent of the badge
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | TablerIcon",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"TablerIcon"}]},description:`Icon to display (only for danger intent in regular mode)
Note: Icons are not rendered when using asChild mode`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the badge"},asChild:{required:!1,tsType:{name:"boolean"},description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

When true, the Badge will not render its own element. Instead, it will pass its styling
to the child element using Radix UI's Slot pattern.

@example
// Regular badge
<Badge intent="new">New Item</Badge>

// AsChild with button
<Badge asChild intent="new">
  <button onClick={handleClick}>Clickable Badge</button>
</Badge>

// AsChild with link
<Badge asChild intent="default">
  <a href="/path">Link Badge</a>
</Badge>

@default false`,defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const $={title:"Components/Badge",component:a,parameters:{layout:"padded"},argTypes:{intent:{control:"select",options:["default","new","danger","autofill"]},icon:{control:!1},asChild:{control:"boolean",description:"Change the default rendered element for the one passed as a child"}}},t={args:{children:"Default",intent:"default"}},s={args:{children:"New",intent:"new"}},l={args:{children:"Danger",intent:"danger"}},i={args:{children:"自動入力",intent:"autofill"}},d={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"AsChild with Button"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("button",{children:"Clickable Default Badge"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("button",{children:"Clickable New Badge"})}),e.jsx(a,{asChild:!0,intent:"autofill",children:e.jsx("button",{children:"Clickable Autofill Badge"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"AsChild with Link"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("a",{href:"#",className:"cursor-pointer",children:"Link Badge"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("a",{href:"#",className:"cursor-pointer",children:"New Link"})}),e.jsx(a,{asChild:!0,intent:"autofill",children:e.jsx("a",{href:"#",className:"cursor-pointer",children:"Autofill Link"})})]})]})]})},r={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Status Indicators"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{intent:"default",children:"承認済み"}),e.jsx(a,{intent:"new",children:"新規"}),e.jsx(a,{intent:"danger",children:"要注意"}),e.jsx(a,{intent:"autofill",children:"自動入力"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Notification Badges"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{intent:"default",children:"5"}),e.jsx(a,{intent:"new",children:"99+"}),e.jsx(a,{intent:"danger",icon:G,children:"!"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Interactive Badges (asChild)"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("button",{className:"cursor-pointer",onClick:()=>alert("Default clicked!"),children:"クリック可能"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("a",{href:"#",className:"cursor-pointer",onClick:n=>{n.preventDefault(),alert("New clicked!")},children:"リンクバッジ"})}),e.jsx(a,{intent:"danger",children:"警告バッジ (通常)"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Inline with Text"}),e.jsxs("p",{className:"text-body-primary",children:["このアイテムは ",e.jsx(a,{intent:"new",children:"新着"})," です。"," ",e.jsx(a,{intent:"danger",children:"注意"})," が必要な場合があります。"]})]})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold",children:"All Badge Variants"}),e.jsxs("div",{className:"gap-4 flex flex-wrap items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Default"}),e.jsx(a,{intent:"default",children:"Default Badge"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"New"}),e.jsx(a,{intent:"new",children:"New Badge"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Danger"}),e.jsx("div",{className:"space-y-1",children:e.jsx(a,{intent:"danger",children:"With Icon"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Autofill"}),e.jsx(a,{intent:"autofill",children:"Autofill Badge"})]})]})]})};var x,N,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    intent: 'default'
  }
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var B,j,w;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'New',
    intent: 'new'
  }
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,C,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Danger',
    intent: 'danger'
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var k,A,I;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: '自動入力',
    intent: 'autofill'
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var D,R,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">AsChild with Button</h3>
        <div className="space-x-2">
          <Badge asChild intent="default">
            <button>Clickable Default Badge</button>
          </Badge>
          <Badge asChild intent="new">
            <button>Clickable New Badge</button>
          </Badge>
          <Badge asChild intent="autofill">
            <button>Clickable Autofill Badge</button>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">AsChild with Link</h3>
        <div className="space-x-2">
          <Badge asChild intent="default">
            <a href="#" className="cursor-pointer">
              Link Badge
            </a>
          </Badge>
          <Badge asChild intent="new">
            <a href="#" className="cursor-pointer">
              New Link
            </a>
          </Badge>
          <Badge asChild intent="autofill">
            <a href="#" className="cursor-pointer">
              Autofill Link
            </a>
          </Badge>
        </div>
      </div>
    </div>
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var S,L,V;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Status Indicators</h3>
        <div className="space-x-2">
          <Badge intent="default">承認済み</Badge>
          <Badge intent="new">新規</Badge>
          <Badge intent="danger">要注意</Badge>
          <Badge intent="autofill">自動入力</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Notification Badges</h3>
        <div className="space-x-2">
          <Badge intent="default">5</Badge>
          <Badge intent="new">99+</Badge>
          <Badge intent="danger" icon={IconAlertTriangle}>
            !
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Interactive Badges (asChild)
        </h3>
        <div className="space-x-2">
          <Badge asChild intent="default">
            <button className="cursor-pointer" onClick={() => alert('Default clicked!')}>
              クリック可能
            </button>
          </Badge>
          <Badge asChild intent="new">
            <a href="#" className="cursor-pointer" onClick={e => {
            e.preventDefault();
            alert('New clicked!');
          }}>
              リンクバッジ
            </a>
          </Badge>
          <Badge intent="danger">警告バッジ (通常)</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Inline with Text</h3>
        <p className="text-body-primary">
          このアイテムは <Badge intent="new">新着</Badge> です。{' '}
          <Badge intent="danger">注意</Badge> が必要な場合があります。
        </p>
      </div>
    </div>
}`,...(V=(L=r.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var _,q,z;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <h2 className="text-lg font-bold">All Badge Variants</h2>
      <div className="gap-4 flex flex-wrap items-center">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Badge intent="default">Default Badge</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">New</h3>
          <Badge intent="new">New Badge</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Danger</h3>
          <div className="space-y-1">
            <Badge intent="danger">With Icon</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Autofill</h3>
          <Badge intent="autofill">Autofill Badge</Badge>
        </div>
      </div>
    </div>
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ee=["Default","New","Danger","Autofill","AsChild","UseCases","AllVariants"];export{c as AllVariants,d as AsChild,i as Autofill,l as Danger,t as Default,s as New,r as UseCases,ee as __namedExportsOrder,$ as default};
