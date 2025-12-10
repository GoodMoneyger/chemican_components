import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g,e as m}from"./iframe-MKBDwe-X.js";import{c as L}from"./utils-DO-d40IJ.js";import{I as Ue}from"./IconChevronDown-Cx6w7n7L.js";import{c as ue,P as j}from"./index-D4ZOjkGd.js";import{c as We}from"./index-BVFgMn6F.js";import{u as ge}from"./index-Bdsn9oWE.js";import{c as he,u as q,a as He}from"./index-BYVLBXKz.js";import{P as Le}from"./index-Z36LXw7Z.js";import{u as fe}from"./index-b79n6x0Y.js";import{u as qe}from"./index-CrM4691d.js";import"./preload-helper-Dp1pzeXC.js";import"./createReactComponent-FrHIM0tk.js";import"./index-B68GxY1f.js";import"./index-CUHMHGHs.js";var D="Collapsible",[Ve,Ae]=ue(D),[$e,V]=Ve(D),ve=g.forwardRef((o,s)=>{const{__scopeCollapsible:i,open:r,defaultOpen:c,disabled:t,onOpenChange:a,...l}=o,[p,u]=q({prop:r,defaultProp:c??!1,onChange:a,caller:D});return e.jsx($e,{scope:i,disabled:t,contentId:fe(),open:p,onOpenToggle:g.useCallback(()=>u(h=>!h),[u]),children:e.jsx(j.div,{"data-state":z(p),"data-disabled":t?"":void 0,...l,ref:s})})});ve.displayName=D;var be="CollapsibleTrigger",xe=g.forwardRef((o,s)=>{const{__scopeCollapsible:i,...r}=o,c=V(be,i);return e.jsx(j.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":z(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...r,ref:s,onClick:he(o.onClick,c.onOpenToggle)})});xe.displayName=be;var $="CollapsibleContent",Ce=g.forwardRef((o,s)=>{const{forceMount:i,...r}=o,c=V($,o.__scopeCollapsible);return e.jsx(Le,{present:i||c.open,children:({present:t})=>e.jsx(ze,{...r,ref:s,present:t})})});Ce.displayName=$;var ze=g.forwardRef((o,s)=>{const{__scopeCollapsible:i,present:r,children:c,...t}=o,a=V($,i),[l,p]=g.useState(r),u=g.useRef(null),h=ge(s,u),f=g.useRef(0),y=f.current,v=g.useRef(0),w=v.current,b=a.open||l,x=g.useRef(b),C=g.useRef(void 0);return g.useEffect(()=>{const d=requestAnimationFrame(()=>x.current=!1);return()=>cancelAnimationFrame(d)},[]),He(()=>{const d=u.current;if(d){C.current=C.current||{transitionDuration:d.style.transitionDuration,animationName:d.style.animationName},d.style.transitionDuration="0s",d.style.animationName="none";const I=d.getBoundingClientRect();f.current=I.height,v.current=I.width,x.current||(d.style.transitionDuration=C.current.transitionDuration,d.style.animationName=C.current.animationName),p(r)}},[a.open,r]),e.jsx(j.div,{"data-state":z(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!b,...t,ref:h,style:{"--radix-collapsible-content-height":y?`${y}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...o.style},children:b&&c})});function z(o){return o?"open":"closed"}var Be=ve,Fe=xe,Ge=Ce,A="Accordion",Je=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[B,Ke,Ye]=We(A),[E]=ue(A,[Ye,Ae]),F=Ae(),ye=m.forwardRef((o,s)=>{const{type:i,...r}=o,c=r,t=r;return e.jsx(B.Provider,{scope:o.__scopeAccordion,children:i==="multiple"?e.jsx(eo,{...t,ref:s}):e.jsx(Ze,{...c,ref:s})})});ye.displayName=A;var[Ie,Qe]=E(A),[je,Xe]=E(A,{collapsible:!1}),Ze=m.forwardRef((o,s)=>{const{value:i,defaultValue:r,onValueChange:c=()=>{},collapsible:t=!1,...a}=o,[l,p]=q({prop:i,defaultProp:r??"",onChange:c,caller:A});return e.jsx(Ie,{scope:o.__scopeAccordion,value:m.useMemo(()=>l?[l]:[],[l]),onItemOpen:p,onItemClose:m.useCallback(()=>t&&p(""),[t,p]),children:e.jsx(je,{scope:o.__scopeAccordion,collapsible:t,children:e.jsx(we,{...a,ref:s})})})}),eo=m.forwardRef((o,s)=>{const{value:i,defaultValue:r,onValueChange:c=()=>{},...t}=o,[a,l]=q({prop:i,defaultProp:r??[],onChange:c,caller:A}),p=m.useCallback(h=>l((f=[])=>[...f,h]),[l]),u=m.useCallback(h=>l((f=[])=>f.filter(y=>y!==h)),[l]);return e.jsx(Ie,{scope:o.__scopeAccordion,value:a,onItemOpen:p,onItemClose:u,children:e.jsx(je,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(we,{...t,ref:s})})})}),[oo,O]=E(A),we=m.forwardRef((o,s)=>{const{__scopeAccordion:i,disabled:r,dir:c,orientation:t="vertical",...a}=o,l=m.useRef(null),p=ge(l,s),u=Ke(i),f=qe(c)==="ltr",y=he(o.onKeyDown,v=>{var K;if(!Je.includes(v.key))return;const w=v.target,b=u().filter(W=>{var Y;return!((Y=W.ref.current)!=null&&Y.disabled)}),x=b.findIndex(W=>W.ref.current===w),C=b.length;if(x===-1)return;v.preventDefault();let d=x;const I=0,k=C-1,M=()=>{d=x+1,d>k&&(d=I)},U=()=>{d=x-1,d<I&&(d=k)};switch(v.key){case"Home":d=I;break;case"End":d=k;break;case"ArrowRight":t==="horizontal"&&(f?M():U());break;case"ArrowDown":t==="vertical"&&M();break;case"ArrowLeft":t==="horizontal"&&(f?U():M());break;case"ArrowUp":t==="vertical"&&U();break}const Me=d%C;(K=b[Me].ref.current)==null||K.focus()});return e.jsx(oo,{scope:i,disabled:r,direction:c,orientation:t,children:e.jsx(B.Slot,{scope:i,children:e.jsx(j.div,{...a,"data-orientation":t,ref:p,onKeyDown:r?void 0:y})})})}),P="AccordionItem",[no,G]=E(P),Te=m.forwardRef((o,s)=>{const{__scopeAccordion:i,value:r,...c}=o,t=O(P,i),a=Qe(P,i),l=F(i),p=fe(),u=r&&a.value.includes(r)||!1,h=t.disabled||o.disabled;return e.jsx(no,{scope:i,open:u,disabled:h,triggerId:p,children:e.jsx(Be,{"data-orientation":t.orientation,"data-state":De(u),...l,...c,ref:s,disabled:h,open:u,onOpenChange:f=>{f?a.onItemOpen(r):a.onItemClose(r)}})})});Te.displayName=P;var Se="AccordionHeader",Re=m.forwardRef((o,s)=>{const{__scopeAccordion:i,...r}=o,c=O(A,i),t=G(Se,i);return e.jsx(j.h3,{"data-orientation":c.orientation,"data-state":De(t.open),"data-disabled":t.disabled?"":void 0,...r,ref:s})});Re.displayName=Se;var H="AccordionTrigger",Ne=m.forwardRef((o,s)=>{const{__scopeAccordion:i,...r}=o,c=O(A,i),t=G(H,i),a=Xe(H,i),l=F(i);return e.jsx(B.ItemSlot,{scope:i,children:e.jsx(Fe,{"aria-disabled":t.open&&!a.collapsible||void 0,"data-orientation":c.orientation,id:t.triggerId,...l,...r,ref:s})})});Ne.displayName=H;var _e="AccordionContent",Pe=m.forwardRef((o,s)=>{const{__scopeAccordion:i,...r}=o,c=O(A,i),t=G(_e,i),a=F(i);return e.jsx(Ge,{role:"region","aria-labelledby":t.triggerId,"data-orientation":c.orientation,...a,...r,ref:s,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});Pe.displayName=_e;function De(o){return o?"open":"closed"}var Q=ye,io=Te,ro=Re,to=Ne,co=Pe;const J=m.forwardRef(({type:o="multiple",collapsible:s=!0,value:i,defaultValue:r,onValueChange:c,...t},a)=>o==="single"?e.jsx(Q,{ref:a,type:"single",collapsible:s,...i!==void 0&&{value:i},...r!==void 0&&{defaultValue:r},...c!==void 0&&{onValueChange:c},...t}):e.jsx(Q,{ref:a,type:"multiple",...i!==void 0&&{value:i},...r!==void 0&&{defaultValue:r},...c!==void 0&&{onValueChange:c},...t}));J.displayName="Accordion";const Ee=m.forwardRef(({className:o,...s},i)=>e.jsx(io,{ref:i,className:L(`bg-surface-primary data-[disabled]:bg-surface-tertiary rounded-sm mt-2
        first:mt-0 overflow-hidden`,o),...s}));Ee.displayName="AccordionItem";const Oe=m.forwardRef(({className:o,children:s,...i},r)=>e.jsx(ro,{className:"flex",children:e.jsxs(to,{ref:r,className:L(`text-body-primary py-sm px-md text-lg font-bold
        focus-visible:ring-interactive-focused flex flex-1 items-center
        justify-between leading-[1.2] transition-all focus-visible:ring-4
        focus-visible:outline-none data-[disabled]:pointer-events-none
        [&[data-state=open]>svg]:rotate-180`,o),...i,children:[s,e.jsx(Ue,{size:22,className:`text-shape-primary shrink-0 transition-transform
          duration-200`})]})}));Oe.displayName="AccordionTrigger";const ke=m.forwardRef(({className:o,children:s,...i},r)=>e.jsx(co,{ref:r,className:L("text-body-secondary px-md pt-md pb-xl overflow-hidden",o),...i,children:s}));ke.displayName="AccordionContent";const n=Object.assign(J,{Item:Ee,Trigger:Oe,Content:ke});J.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"",defaultValue:{value:"'multiple'",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const Io={title:"Components/Accordion",component:n,decorators:[o=>e.jsx("div",{className:"bg-surface-secondary p-md",children:e.jsx(o,{})})],parameters:{design:{type:"figma",url:"https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=9118-18599"},radixDocs:{primitive:"Accordion",url:"https://www.radix-ui.com/primitives/docs/components/accordion"}},argTypes:{type:{control:{type:"select"},options:["single","multiple"],description:"Determines whether one or multiple items can be opened at the same time"},collapsible:{control:{type:"boolean"},description:'When type is "single", allows closing content by clicking on the open trigger'},disabled:{control:{type:"boolean"},description:"When true, prevents the user from interacting with the accordion"}}},T={render:()=>e.jsxs(n,{children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"0. 基礎情報"}),e.jsx(n.Content,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("div",{className:"text-body-secondary mb-xxs",children:"SDS作成日"}),e.jsx("div",{children:"2025/01/08"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-body-secondary mb-xxs",children:"SDS改訂日"}),e.jsx("div",{children:"2025/01/08"})]})]})})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"1. 化学品及び会社情報"}),e.jsx(n.Content,{children:"Chemical product and company identification information would be displayed here."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"2. 危険有害性の要約"}),e.jsx(n.Content,{children:"Hazards identification information would be displayed here."})]})]})},S={args:{type:"single",collapsible:!0,disabled:!0},render:o=>e.jsxs(n,{...o,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"Disabled Accordion"}),e.jsx(n.Content,{children:"This content cannot be accessed because the entire accordion is disabled."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"Another Disabled Item"}),e.jsx(n.Content,{children:"All items are non-interactive when the accordion is disabled."})]})]})},R={args:{},render:o=>e.jsxs(n,{...o,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"Active Item"}),e.jsx(n.Content,{children:"This item can be opened and closed normally."})]}),e.jsxs(n.Item,{value:"item-2",disabled:!0,children:[e.jsx(n.Trigger,{children:"Disabled Item"}),e.jsx(n.Content,{children:"This content cannot be accessed because this specific item is disabled."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"Another Active Item"}),e.jsx(n.Content,{children:"This item is interactive even though the middle item is disabled."})]})]})},N={args:{type:"single",collapsible:!0,defaultValue:"item-1"},render:o=>e.jsxs(n,{...o,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"What is React?"}),e.jsx(n.Content,{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"What is Radix UI?"}),e.jsx(n.Content,{children:"Radix UI is an open-source UI component library for building high-quality, accessible design systems and web applications with React."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"What is TailwindCSS?"}),e.jsx(n.Content,{children:"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML."})]})]})},_={args:{type:"single",collapsible:!1,defaultValue:"item-1"},render:o=>e.jsxs(n,{...o,children:[e.jsxs(n.Item,{value:"item-1",children:[e.jsx(n.Trigger,{children:"What is React?"}),e.jsx(n.Content,{children:"React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components."})]}),e.jsxs(n.Item,{value:"item-2",children:[e.jsx(n.Trigger,{children:"What is Radix UI?"}),e.jsx(n.Content,{children:"Radix UI is an open-source UI component library for building high-quality, accessible design systems and web applications with React."})]}),e.jsxs(n.Item,{value:"item-3",children:[e.jsx(n.Trigger,{children:"What is TailwindCSS?"}),e.jsx(n.Content,{children:"Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML."})]})]})};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>0. 基礎情報</Accordion.Trigger>
        <Accordion.Content>
          <div className="space-y-4">
            <div>
              <div className="text-body-secondary mb-xxs">SDS作成日</div>
              <div>2025/01/08</div>
            </div>
            <div>
              <div className="text-body-secondary mb-xxs">SDS改訂日</div>
              <div>2025/01/08</div>
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>1. 化学品及び会社情報</Accordion.Trigger>
        <Accordion.Content>
          Chemical product and company identification information would be
          displayed here.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>2. 危険有害性の要約</Accordion.Trigger>
        <Accordion.Content>
          Hazards identification information would be displayed here.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,ne,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    disabled: true
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Disabled Accordion</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because the entire accordion is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Another Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          All items are non-interactive when the accordion is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,te,ce;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {},
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item can be opened and closed normally.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because this specific item is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Another Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item is interactive even though the middle item is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(ce=(te=R.parameters)==null?void 0:te.docs)==null?void 0:ce.source}}};var se,ae,de;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1'
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(de=(ae=N.parameters)==null?void 0:ae.docs)==null?void 0:de.source}}};var le,me,pe;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1'
  },
  render: (args: AccordionProps) => <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
}`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const jo=["Default","Disabled","DisabledItem","WithSingleAndCollapsible","WithSingleNotCollapsible"];export{T as Default,S as Disabled,R as DisabledItem,N as WithSingleAndCollapsible,_ as WithSingleNotCollapsible,jo as __namedExportsOrder,Io as default};
