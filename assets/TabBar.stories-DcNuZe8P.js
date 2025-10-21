import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as v,e as P}from"./iframe-rQOkucdy.js";import{c as E}from"./index-CV1ttAla.js";import{c as S}from"./utils-CjB0_VjR.js";import{u as H,c as j}from"./index-D96shWaG.js";import{c as J,P as h}from"./index-Cb8g0QzL.js";import{c as D,R as Q,I as U}from"./index-gHICYauS.js";import{P as W}from"./index-C6z1e9Pc.js";import{u as X}from"./index-DJ5r4tI3.js";import{u as Y}from"./index-D38wwG3y.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DtFCyLOj.js";import"./index-mkNjAvsk.js";import"./index-D9WsQlvf.js";import"./index-CnhLAh1N.js";import"./index-R8bAhLcD.js";var g="Tabs",[Z]=J(g,[D]),M=D(),[aa,N]=Z(g),F=v.forwardRef((e,l)=>{const{__scopeTabs:o,value:s,onValueChange:r,defaultValue:b,orientation:i="horizontal",dir:c,activationMode:p="automatic",...f}=e,d=X(c),[n,m]=H({prop:s,onChange:r,defaultProp:b??"",caller:g});return a.jsx(aa,{scope:o,baseId:Y(),value:n,onValueChange:m,orientation:i,dir:d,activationMode:p,children:a.jsx(h.div,{dir:d,"data-orientation":i,...f,ref:l})})});F.displayName=g;var G="TabsList",k=v.forwardRef((e,l)=>{const{__scopeTabs:o,loop:s=!0,...r}=e,b=N(G,o),i=M(o);return a.jsx(Q,{asChild:!0,...i,orientation:b.orientation,dir:b.dir,loop:s,children:a.jsx(h.div,{role:"tablist","aria-orientation":b.orientation,...r,ref:l})})});k.displayName=G;var L="TabsTrigger",$=v.forwardRef((e,l)=>{const{__scopeTabs:o,value:s,disabled:r=!1,...b}=e,i=N(L,o),c=M(o),p=q(i.baseId,s),f=O(i.baseId,s),d=s===i.value;return a.jsx(U,{asChild:!0,...c,focusable:!r,active:d,children:a.jsx(h.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":f,"data-state":d?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:p,...b,ref:l,onMouseDown:j(e.onMouseDown,n=>{!r&&n.button===0&&n.ctrlKey===!1?i.onValueChange(s):n.preventDefault()}),onKeyDown:j(e.onKeyDown,n=>{[" ","Enter"].includes(n.key)&&i.onValueChange(s)}),onFocus:j(e.onFocus,()=>{const n=i.activationMode!=="manual";!d&&!r&&n&&i.onValueChange(s)})})})});$.displayName=L;var K="TabsContent",ea=v.forwardRef((e,l)=>{const{__scopeTabs:o,value:s,forceMount:r,children:b,...i}=e,c=N(K,o),p=q(c.baseId,s),f=O(c.baseId,s),d=s===c.value,n=v.useRef(d);return v.useEffect(()=>{const m=requestAnimationFrame(()=>n.current=!1);return()=>cancelAnimationFrame(m)},[]),a.jsx(W,{present:r||d,children:({present:m})=>a.jsx(h.div,{"data-state":d?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":p,hidden:!m,id:f,tabIndex:0,...i,ref:l,style:{...e.style,animationDuration:n.current?"0s":void 0},children:m&&b})})});ea.displayName=K;function q(e,l){return`${e}-trigger-${l}`}function O(e,l){return`${e}-content-${l}`}var ta=F,sa=k,la=$;const ra=E("inline-flex",{variants:{size:{normal:"h-12",small:"h-10"}},defaultVariants:{size:"normal"}}),ia=E(`text-body-primary border-divider-default hover:border-interactive-hover
  data-[state=active]:border-interactive-selected data-[state=active]:font-bold
  disabled:text-interactive-disabled disabled:hover:border-divider-default
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  disabled:cursor-not-allowed disabled:hover:border-b
  data-[state=active]:border-b-2
  data-[state=active]:text-[var(--chemican-green-800)]`,{variants:{size:{normal:"p-md min-h-12 text-lg",small:"p-sm min-h-10 text-md"}},defaultVariants:{size:"normal"}}),u=P.forwardRef(({className:e,size:l,children:o,...s},r)=>a.jsx(ta,{ref:r,className:S("w-full",e),...s,children:a.jsx(sa,{className:S(ra({size:l})),role:"tablist",children:o})}));u.displayName="TabBar";const t=P.forwardRef(({className:e,size:l,label:o,disabled:s,...r},b)=>a.jsx(la,{ref:b,className:S(ia({size:l}),e),disabled:s,...r,children:o}));t.displayName="Tab";u.__docgenInfo={description:"",methods:[],displayName:"TabBar",composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const Sa={title:"Components/TabBar",component:u,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},x={render:e=>a.jsxs(u,{...e,children:[a.jsx(t,{value:"tab1",label:"タブ1"}),a.jsx(t,{value:"tab2",label:"タブ2"}),a.jsx(t,{value:"tab3",label:"タブ3"}),a.jsx(t,{value:"tab4",label:"タブ4"}),a.jsx(t,{value:"tab5",label:"タブ5"}),a.jsx(t,{value:"tab6",label:"タブ6"}),a.jsx(t,{value:"tab7",label:"タブ7"})]})},T={args:{size:"small"},render:e=>a.jsxs(u,{...e,children:[a.jsx(t,{value:"tab1",label:"タブ1",size:e.size}),a.jsx(t,{value:"tab2",label:"タブ2",size:e.size}),a.jsx(t,{value:"tab3",label:"タブ3",size:e.size}),a.jsx(t,{value:"tab4",label:"タブ4",size:e.size}),a.jsx(t,{value:"tab5",label:"タブ5",size:e.size}),a.jsx(t,{value:"tab6",label:"タブ6",size:e.size}),a.jsx(t,{value:"tab7",label:"タブ7",size:e.size})]})},z={render:()=>a.jsxs("div",{className:"space-y-lg",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),a.jsxs(u,{defaultValue:"tab3",children:[a.jsx(t,{value:"tab1",label:"デフォルト"}),a.jsx(t,{value:"tab2",label:"ホバー時"}),a.jsx(t,{value:"tab3",label:"選択中"}),a.jsx(t,{value:"tab4",label:"利用不可時",disabled:!0})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),a.jsxs(u,{size:"small",defaultValue:"tab3",children:[a.jsx(t,{value:"tab1",label:"デフォルト",size:"small"}),a.jsx(t,{value:"tab2",label:"ホバー時",size:"small"}),a.jsx(t,{value:"tab3",label:"選択中",size:"small"}),a.jsx(t,{value:"tab4",label:"利用不可時",size:"small",disabled:!0})]})]})]})};var y,R,V;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1" label="タブ1" />
      <Tab value="tab2" label="タブ2" />
      <Tab value="tab3" label="タブ3" />
      <Tab value="tab4" label="タブ4" />
      <Tab value="tab5" label="タブ5" />
      <Tab value="tab6" label="タブ6" />
      <Tab value="tab7" label="タブ7" />
    </TabBar>
}`,...(V=(R=x.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var C,I,_;T.parameters={...T.parameters,docs:{...(C=T.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <TabBar {...args}>
      <Tab value="tab1" label="タブ1" size={args.size} />
      <Tab value="tab2" label="タブ2" size={args.size} />
      <Tab value="tab3" label="タブ3" size={args.size} />
      <Tab value="tab4" label="タブ4" size={args.size} />
      <Tab value="tab5" label="タブ5" size={args.size} />
      <Tab value="tab6" label="タブ6" size={args.size} />
      <Tab value="tab7" label="タブ7" size={args.size} />
    </TabBar>
}`,...(_=(I=T.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,w,B;z.parameters={...z.parameters,docs:{...(A=z.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-lg">
      {/* Normal size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Normal Size - All States</h3>
        <TabBar defaultValue="tab3">
          <Tab value="tab1" label="デフォルト" />
          <Tab value="tab2" label="ホバー時" />
          <Tab value="tab3" label="選択中" />
          <Tab value="tab4" label="利用不可時" disabled />
        </TabBar>
      </div>

      {/* Small size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Small Size - All States</h3>
        <TabBar size="small" defaultValue="tab3">
          <Tab value="tab1" label="デフォルト" size="small" />
          <Tab value="tab2" label="ホバー時" size="small" />
          <Tab value="tab3" label="選択中" size="small" />
          <Tab value="tab4" label="利用不可時" size="small" disabled />
        </TabBar>
      </div>
    </div>
}`,...(B=(w=z.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const Na=["Default","Small","AllStates"];export{z as AllStates,x as Default,T as Small,Na as __namedExportsOrder,Sa as default};
