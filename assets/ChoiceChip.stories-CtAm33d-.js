import{e as L,j as e,c as F,m as P,r as I}from"./iframe-D0ZFyYM5.js";import"./preload-helper-Dp1pzeXC.js";const J=P(`px-sm py-xxs text-md h-8 focus-visible:ring-interactive-focused inline-flex
  cursor-pointer items-center justify-center rounded-full border
  transition-colors select-none focus-visible:ring-4 focus-visible:outline-none`,{variants:{selected:{true:`border-interactive-selected bg-interactive-neutral-selected
        text-body-primary`,false:`border-interactive-default bg-surface-primary
        text-body-secondary hover:border-interactive-hover
        hover:bg-interactive-neutral-hover`},disabled:{true:"cursor-not-allowed opacity-50",false:""}},compoundVariants:[{selected:!0,disabled:!0,class:"hover:bg-interactive-neutral-selected"},{selected:!1,disabled:!0,class:"hover:border-interactive-default hover:bg-surface-primary"}],defaultVariants:{selected:!1,disabled:!1}}),s=L.forwardRef(({selected:i=!1,disabled:r=!1,className:l,children:a,onClick:t,...n},b)=>{const W=H=>{r||t==null||t(H)};return e.jsx("button",{ref:b,type:"button",role:"option","aria-selected":i,"aria-disabled":r,disabled:r,className:F(J({selected:i,disabled:r}),l),onClick:W,...n,children:a})});s.displayName="ChoiceChip";const c=({children:i,className:r})=>e.jsx("div",{role:"listbox",className:F("gap-xs flex flex-wrap",r),children:i});c.displayName="ChoiceChipGroup";s.__docgenInfo={description:"",methods:[],displayName:"ChoiceChip",props:{selected:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is selected
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is disabled
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content of the chip"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when the chip is clicked"}},composes:["Omit","VariantProps"]};c.__docgenInfo={description:"",methods:[],displayName:"ChoiceChipGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children chips"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"}}};const Q={title:"Components/ChoiceChip",component:s,parameters:{layout:"padded"},argTypes:{selected:{control:"boolean",description:"Whether the chip is selected"},disabled:{control:"boolean",description:"Whether the chip is disabled"},children:{control:"text",description:"The content of the chip"}}},o={args:{children:"すべて",selected:!1}},d={args:{children:"すべて",selected:!0}},h={args:{children:"すべて",disabled:!0}},p={args:{children:"すべて",selected:!0,disabled:!0}},O=()=>{const[i,r]=I.useState("all"),l=[{id:"all",label:"すべて"},{id:"popular",label:"人気"},{id:"legal",label:"法令該当"},{id:"business",label:"業務関連"}];return e.jsx(c,{children:l.map(a=>e.jsx(s,{selected:i===a.id,onClick:()=>r(a.id),children:a.label},a.id))})},u={render:()=>e.jsx(O,{})},U=()=>{const[i,r]=I.useState(["all"]),l=[{id:"all",label:"すべて"},{id:"popular",label:"人気"},{id:"legal",label:"法令該当"},{id:"business",label:"業務関連"}],a=t=>{r(n=>n.includes(t)?n.filter(b=>b!==t):[...n,t])};return e.jsx(c,{children:l.map(t=>e.jsx(s,{selected:i.includes(t.id),onClick:()=>a(t.id),children:t.label},t.id))})},m={render:()=>e.jsx(U,{})},C={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"States"}),e.jsxs(c,{children:[e.jsx(s,{selected:!1,children:"Unselected"}),e.jsx(s,{selected:!0,children:"Selected"}),e.jsx(s,{disabled:!0,children:"Disabled"}),e.jsx(s,{selected:!0,disabled:!0,children:"Selected Disabled"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Filter Example (Japanese)"}),e.jsxs(c,{children:[e.jsx(s,{selected:!0,children:"すべて"}),e.jsx(s,{children:"人気"}),e.jsx(s,{children:"法令該当"}),e.jsx(s,{children:"業務関連"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Category Filter (English)"}),e.jsxs(c,{children:[e.jsx(s,{selected:!0,children:"All"}),e.jsx(s,{children:"Popular"}),e.jsx(s,{children:"Compliance"}),e.jsx(s,{children:"Business"})]})]})]})};var f,x,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'すべて',
    selected: false
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,j,S;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'すべて',
    selected: true
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var y,N,E;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'すべて',
    disabled: true
  }
}`,...(E=(N=h.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var G,R,T;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'すべて',
    selected: true,
    disabled: true
  }
}`,...(T=(R=p.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var D,M,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InteractiveChipGroup />
}`,...(w=(M=u.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var V,q,_;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <MultiSelectChipGroup />
}`,...(_=(q=m.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var A,B,k;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium">States</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected={false}>Unselected</ChoiceChip>
          <ChoiceChip selected={true}>Selected</ChoiceChip>
          <ChoiceChip disabled>Disabled</ChoiceChip>
          <ChoiceChip selected disabled>
            Selected Disabled
          </ChoiceChip>
        </ChoiceChipGroup>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Filter Example (Japanese)</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected>すべて</ChoiceChip>
          <ChoiceChip>人気</ChoiceChip>
          <ChoiceChip>法令該当</ChoiceChip>
          <ChoiceChip>業務関連</ChoiceChip>
        </ChoiceChipGroup>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Category Filter (English)</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected>All</ChoiceChip>
          <ChoiceChip>Popular</ChoiceChip>
          <ChoiceChip>Compliance</ChoiceChip>
          <ChoiceChip>Business</ChoiceChip>
        </ChoiceChipGroup>
      </div>
    </div>
}`,...(k=(B=C.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const X=["Default","Selected","Disabled","DisabledSelected","SingleSelect","MultiSelect","AllVariants"];export{C as AllVariants,o as Default,h as Disabled,p as DisabledSelected,m as MultiSelect,d as Selected,u as SingleSelect,X as __namedExportsOrder,Q as default};
