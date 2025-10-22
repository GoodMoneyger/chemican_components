import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as q}from"./iframe-CGLGmI_6.js";import{c as M}from"./index-DjaWEFSa.js";import{c as g,r as U}from"./utils-DcIGLQET.js";import{I as W}from"./IconAlertCircle-L5dWlIKW.js";import{S as E}from"./index-ByTpOCjA.js";import{c as z}from"./createReactComponent-Bu5hp9NY.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M12 9v4",key:"svg-0"}],["path",{d:"M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",key:"svg-1"}],["path",{d:"M12 16h.01",key:"svg-2"}]],P=z("outline","alert-triangle","AlertTriangle",O),p=M(`px-xxs text-xs font-bold h-4.5 relative inline-flex flex-shrink-0
  items-center justify-center leading-none`,{variants:{intent:{default:`rounded-sm bg-shape-accent-lime-pale
        text-shape-interactive-primary-selected`,new:"rounded-sm text-accent-purple-soft bg-shape-accent-purple-pale",danger:`rounded-sm border-interactive-alert-default text-body-alert
        pl-4.5 border border-dashed`}},defaultVariants:{intent:"default"}}),a=q.forwardRef(({intent:n="default",icon:L,className:c,children:o,asChild:_=!1,...m},h)=>{const u=L||(n==="danger"?W:void 0);return _?e.jsx(E,{className:g(p({intent:n}),c),ref:h,...m,children:o}):e.jsxs("span",{className:g(p({intent:n}),c),ref:h,...m,children:[n==="danger"&&u&&U(u,{className:"w-3 h-3 absolute left-1 top-1/2 transform -translate-y-1/2"}),o]})});a.displayName="Badge";a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{intent:{required:!1,tsType:{name:"union",raw:"'default' | 'new' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'new'"},{name:"literal",value:"'danger'"}]},description:`The intent of the badge
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

@default false`,defaultValue:{value:"false",computed:!1}}},composes:["VariantProps"]};const $={title:"Components/Badge",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["default","new","danger"]},icon:{control:!1},asChild:{control:"boolean",description:"Change the default rendered element for the one passed as a child"}}},t={args:{children:"Default",intent:"default"}},s={args:{children:"New",intent:"new"}},d={args:{children:"Danger",intent:"danger"}},i={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"AsChild with Button"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("button",{children:"Clickable Default Badge"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("button",{children:"Clickable New Badge"})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"AsChild with Link"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("a",{href:"#",className:"cursor-pointer",children:"Link Badge"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("a",{href:"#",className:"cursor-pointer",children:"New Link"})})]})]})]})},r={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Status Indicators"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{intent:"default",children:"承認済み"}),e.jsx(a,{intent:"new",children:"新規"}),e.jsx(a,{intent:"danger",children:"要注意"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Notification Badges"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{intent:"default",children:"5"}),e.jsx(a,{intent:"new",children:"99+"}),e.jsx(a,{intent:"danger",icon:P,children:"!"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Interactive Badges (asChild)"}),e.jsxs("div",{className:"space-x-2",children:[e.jsx(a,{asChild:!0,intent:"default",children:e.jsx("button",{className:"cursor-pointer",onClick:()=>alert("Default clicked!"),children:"クリック可能"})}),e.jsx(a,{asChild:!0,intent:"new",children:e.jsx("a",{href:"#",className:"cursor-pointer",onClick:n=>{n.preventDefault(),alert("New clicked!")},children:"リンクバッジ"})}),e.jsx(a,{intent:"danger",children:"警告バッジ (通常)"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-4",children:"Inline with Text"}),e.jsxs("p",{className:"text-body-primary",children:["このアイテムは ",e.jsx(a,{intent:"new",children:"新着"})," です。"," ",e.jsx(a,{intent:"danger",children:"注意"})," が必要な場合があります。"]})]})]})},l={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold",children:"All Badge Variants"}),e.jsxs("div",{className:"gap-4 flex flex-wrap items-center",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Default"}),e.jsx(a,{intent:"default",children:"Default Badge"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"New"}),e.jsx(a,{intent:"new",children:"New Badge"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-sm font-medium",children:"Danger"}),e.jsx("div",{className:"space-y-1",children:e.jsx(a,{intent:"danger",children:"With Icon"})})]})]})]})};var f,x,N;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Default',
    intent: 'default'
  }
}`,...(N=(x=t.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var v,B,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'New',
    intent: 'new'
  }
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var w,b,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Danger',
    intent: 'danger'
  }
}`,...(C=(b=d.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var y,k,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        </div>
      </div>
    </div>
}`,...(I=(k=i.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var D,A,R;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Status Indicators</h3>
        <div className="space-x-2">
          <Badge intent="default">承認済み</Badge>
          <Badge intent="new">新規</Badge>
          <Badge intent="danger">要注意</Badge>
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
}`,...(R=(A=r.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var T,S,V;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
      </div>
    </div>
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ee=["Default","New","Danger","AsChild","UseCases","AllVariants"];export{l as AllVariants,i as AsChild,d as Danger,t as Default,s as New,r as UseCases,ee as __namedExportsOrder,$ as default};
