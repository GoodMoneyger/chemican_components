import{e as a,j as e,c as H,n as re,m as J,r as K}from"./iframe-DNqeAnO-.js";import{I as ae}from"./IconCalendar-DSXYMheN.js";import{c as Q}from"./createReactComponent-B9yWCRtV.js";import"./preload-helper-Dp1pzeXC.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M8 14v4",key:"svg-4"}],["path",{d:"M12 14v4",key:"svg-5"}],["path",{d:"M16 14v4",key:"svg-6"}]],se=Q("outline","calendar-month","CalendarMonth",le);/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M7 14h.013",key:"svg-4"}],["path",{d:"M10.01 14h.005",key:"svg-5"}],["path",{d:"M13.01 14h.005",key:"svg-6"}],["path",{d:"M16.015 14h.005",key:"svg-7"}],["path",{d:"M13.015 17h.005",key:"svg-8"}],["path",{d:"M7.01 17h.005",key:"svg-9"}],["path",{d:"M10.01 17h.005",key:"svg-10"}]],ie=Q("outline","calendar-week","CalendarWeek",de),T=a.createContext(null),ce=()=>{const t=a.useContext(T);if(!t)throw new Error("SegmentedControl.Option must be rendered inside SegmentedControl.Group");return t},ue=J(`rounded [&>*+*]:border-surface-default [&>*:first-child]:rounded-l
  [&>*:last-child]:rounded-r flex w-full border [&>*+*]:border-l`,{variants:{invalid:{true:"border-surface-alert",false:"border-surface-default"}},defaultVariants:{invalid:!1}}),X=a.forwardRef(({name:t,value:r,defaultValue:i,onValueChange:l,invalid:s=!1,disabled:d=!1,id:o,className:c,children:u,...p},Z)=>{const ee=a.useId(),x=o??`segmented-control-${ee}`,S=r!==void 0,[ne,te]=a.useState(i),O=S?r:ne,b=a.useCallback(j=>{S||te(j),l==null||l(j)},[S,l]),oe=a.useMemo(()=>({name:t,idPrefix:x,value:O,disabled:d,invalid:s,onValueChange:b}),[t,x,O,d,s,b]);return e.jsx(T.Provider,{value:oe,children:e.jsx("div",{ref:Z,id:o,role:"radiogroup","aria-invalid":s||void 0,"aria-disabled":d||void 0,className:H(ue({invalid:s}),c),...p,children:u})})});X.displayName="SegmentedControl.Group";const pe=J(`gap-xxs px-lg py-sm text-md
  has-[input:focus-visible]:ring-interactive-focused flex flex-1 cursor-pointer
  items-center justify-center select-none has-[input:focus-visible]:relative
  has-[input:focus-visible]:z-10 has-[input:focus-visible]:ring-4`,{variants:{selected:{true:"font-medium",false:""},disabled:{true:"cursor-not-allowed",false:""}},compoundVariants:[{selected:!0,disabled:!1,class:"bg-interactive-primary-default text-body-inverse"},{selected:!1,disabled:!1,class:`bg-surface-primary text-body-primary
        hover:bg-interactive-neutral-hover`},{selected:!0,disabled:!0,class:"bg-interactive-primary-default/50 text-body-inverse opacity-50"},{selected:!1,disabled:!0,class:"bg-surface-disabled text-body-primary opacity-50"}],defaultVariants:{selected:!1,disabled:!1}}),Y=({value:t,disabled:r=!1,leadingIcon:i,id:l,className:s,children:d})=>{const o=ce(),c=o.value!==void 0&&String(o.value)===String(t),u=r||o.disabled,p=l??`${o.idPrefix}-${encodeURIComponent(String(t))}`;return e.jsxs("label",{htmlFor:p,className:H(pe({selected:c,disabled:u}),s),children:[e.jsx("input",{id:p,type:"radio",name:o.name,value:String(t),checked:c,disabled:u,"aria-invalid":o.invalid||void 0,onChange:()=>o.onValueChange(t),className:"sr-only"}),i&&re(i,{size:16,className:"shrink-0"}),d]})};Y.displayName="SegmentedControl.Option";const n={Group:X,Option:Y},fe={title:"Components/SegmentedControl",component:n.Group,parameters:{layout:"padded"}},me=()=>{const[t,r]=K.useState("daily");return e.jsxs(n.Group,{name:"frequency",value:t,onValueChange:r,children:[e.jsx(n.Option,{value:"daily",children:"毎日"}),e.jsx(n.Option,{value:"weekly",children:"毎週"}),e.jsx(n.Option,{value:"monthly",children:"毎月"})]})},m={render:()=>e.jsx(me,{})},v={render:()=>e.jsxs(n.Group,{name:"frequency-uncontrolled",defaultValue:"weekly",children:[e.jsx(n.Option,{value:"daily",children:"毎日"}),e.jsx(n.Option,{value:"weekly",children:"毎週"}),e.jsx(n.Option,{value:"monthly",children:"毎月"})]})},g={render:()=>e.jsxs(n.Group,{name:"frequency-disabled",value:"daily",disabled:!0,children:[e.jsx(n.Option,{value:"daily",children:"毎日"}),e.jsx(n.Option,{value:"weekly",children:"毎週"}),e.jsx(n.Option,{value:"monthly",children:"毎月"})]})},h={render:()=>e.jsxs(n.Group,{name:"frequency-partial",defaultValue:"daily",children:[e.jsx(n.Option,{value:"daily",children:"毎日"}),e.jsx(n.Option,{value:"weekly",children:"毎週"}),e.jsx(n.Option,{value:"monthly",disabled:!0,children:"毎月"})]})},y={render:()=>e.jsxs(n.Group,{name:"frequency-invalid",defaultValue:"daily",invalid:!0,children:[e.jsx(n.Option,{value:"daily",children:"毎日"}),e.jsx(n.Option,{value:"weekly",children:"毎週"}),e.jsx(n.Option,{value:"monthly",children:"毎月"})]})},C={render:()=>e.jsxs(n.Group,{name:"frequency-icons",defaultValue:"daily",children:[e.jsx(n.Option,{value:"daily",leadingIcon:ae,children:"毎日"}),e.jsx(n.Option,{value:"weekly",leadingIcon:ie,children:"毎週"}),e.jsx(n.Option,{value:"monthly",leadingIcon:se,children:"毎月"})]})},ve=()=>{const[t,r]=K.useState(1);return e.jsxs(n.Group,{name:"step",value:t,onValueChange:r,children:[e.jsx(n.Option,{value:1,children:"1"}),e.jsx(n.Option,{value:2,children:"2"}),e.jsx(n.Option,{value:3,children:"3"}),e.jsx(n.Option,{value:4,children:"4"})]})},f={render:()=>e.jsx(ve,{})};var k,G,I;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Frequencies />
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var M,V,w;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Group name="frequency-uncontrolled" defaultValue="weekly">
      <SegmentedControl.Option value="daily">毎日</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">毎週</SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">毎月</SegmentedControl.Option>
    </SegmentedControl.Group>
}`,...(w=(V=v.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var q,N,W;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Group name="frequency-disabled" value="daily" disabled>
      <SegmentedControl.Option value="daily">毎日</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">毎週</SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">毎月</SegmentedControl.Option>
    </SegmentedControl.Group>
}`,...(W=(N=g.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var D,_,z;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Group name="frequency-partial" defaultValue="daily">
      <SegmentedControl.Option value="daily">毎日</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">毎週</SegmentedControl.Option>
      <SegmentedControl.Option value="monthly" disabled>
        毎月
      </SegmentedControl.Option>
    </SegmentedControl.Group>
}`,...(z=(_=h.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var E,R,$;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Group name="frequency-invalid" defaultValue="daily" invalid>
      <SegmentedControl.Option value="daily">毎日</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">毎週</SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">毎月</SegmentedControl.Option>
    </SegmentedControl.Group>
}`,...($=(R=y.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var F,P,U;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <SegmentedControl.Group name="frequency-icons" defaultValue="daily">
      <SegmentedControl.Option value="daily" leadingIcon={IconCalendar}>
        毎日
      </SegmentedControl.Option>
      <SegmentedControl.Option value="weekly" leadingIcon={IconCalendarWeek}>
        毎週
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly" leadingIcon={IconCalendarMonth}>
        毎月
      </SegmentedControl.Option>
    </SegmentedControl.Group>
}`,...(U=(P=C.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var L,A,B;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <NumberValues />
}`,...(B=(A=f.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const Se=["Default","Uncontrolled","Disabled","SingleOptionDisabled","Invalid","WithLeadingIcons","WithNumberValues"];export{m as Default,g as Disabled,y as Invalid,h as SingleOptionDisabled,v as Uncontrolled,C as WithLeadingIcons,f as WithNumberValues,Se as __namedExportsOrder,fe as default};
