import{r as v,u as J,j as a,c as g,a as Q,f as S,g as U,P as W,e as z,l as N,m as E}from"./iframe-BcwhqWL-.js";import{R as X,I as Y,c as D}from"./index--wklvlC1.js";import{u as Z}from"./index-EFCUFp16.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRS78eyU.js";var j="Tabs",[aa]=U(j,[D]),M=D(),[ea,y]=aa(j),F=v.forwardRef((e,l)=>{const{__scopeTabs:i,value:s,onValueChange:n,defaultValue:o,orientation:r="horizontal",dir:d,activationMode:p="automatic",...x}=e,c=Z(d),[b,m]=J({prop:s,onChange:n,defaultProp:o??"",caller:j});return a.jsx(ea,{scope:i,baseId:Q(),value:b,onValueChange:m,orientation:r,dir:c,activationMode:p,children:a.jsx(g.div,{dir:c,"data-orientation":r,...x,ref:l})})});F.displayName=j;var G="TabsList",k=v.forwardRef((e,l)=>{const{__scopeTabs:i,loop:s=!0,...n}=e,o=y(G,i),r=M(i);return a.jsx(X,{asChild:!0,...r,orientation:o.orientation,dir:o.dir,loop:s,children:a.jsx(g.div,{role:"tablist","aria-orientation":o.orientation,...n,ref:l})})});k.displayName=G;var L="TabsTrigger",$=v.forwardRef((e,l)=>{const{__scopeTabs:i,value:s,disabled:n=!1,...o}=e,r=y(L,i),d=M(i),p=q(r.baseId,s),x=O(r.baseId,s),c=s===r.value;return a.jsx(Y,{asChild:!0,...d,focusable:!n,active:c,children:a.jsx(g.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":x,"data-state":c?"active":"inactive","data-disabled":n?"":void 0,disabled:n,id:p,...o,ref:l,onMouseDown:S(e.onMouseDown,b=>{!n&&b.button===0&&b.ctrlKey===!1?r.onValueChange(s):b.preventDefault()}),onKeyDown:S(e.onKeyDown,b=>{[" ","Enter"].includes(b.key)&&r.onValueChange(s)}),onFocus:S(e.onFocus,()=>{const b=r.activationMode!=="manual";!c&&!n&&b&&r.onValueChange(s)})})})});$.displayName=L;var K="TabsContent",ta=v.forwardRef((e,l)=>{const{__scopeTabs:i,value:s,forceMount:n,children:o,...r}=e,d=y(K,i),p=q(d.baseId,s),x=O(d.baseId,s),c=s===d.value,b=v.useRef(c);return v.useEffect(()=>{const m=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(m)},[]),a.jsx(W,{present:n||c,children:({present:m})=>a.jsx(g.div,{"data-state":c?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!m,id:x,tabIndex:0,...r,ref:l,style:{...e.style,animationDuration:b.current?"0s":void 0},children:m&&o})})});ta.displayName=K;function q(e,l){return`${e}-trigger-${l}`}function O(e,l){return`${e}-content-${l}`}var sa=F,la=k,ra=$;const H=z.createContext({size:"normal"}),na=()=>z.useContext(H),ia=E("inline-flex",{variants:{size:{normal:"h-12",small:"h-10"}},defaultVariants:{size:"normal"}}),oa=E(`text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 relative inline-flex cursor-pointer items-center
  justify-center border-b leading-[100%] tracking-[0] transition-colors
  after:absolute after:bottom-[-1px] after:w-full after:transition-all
  after:content-[''] hover:after:h-[2px]
  hover:after:bg-[var(--chemican-green-800)] disabled:cursor-not-allowed
  data-[state=active]:text-[var(--chemican-green-800)]
  data-[state=active]:after:h-[2px]
  data-[state=active]:after:bg-[var(--chemican-green-800)]`,{variants:{size:{normal:"p-md h-12 text-lg",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}}),u=z.forwardRef(({className:e,size:l,children:i,...s},n)=>{const o=l?{size:l}:{};return a.jsx(H.Provider,{value:o,children:a.jsx(sa,{ref:n,className:N("w-full",e),...s,children:a.jsx(la,{className:N(ia({size:l})),role:"tablist",children:i})})})});u.displayName="TabBar";const t=z.forwardRef(({className:e,size:l,label:i,disabled:s,...n},o)=>{const{size:r}=na(),d=l??r;return a.jsx(ra,{ref:o,className:N(oa({size:d}),e),disabled:s,...n,children:i})});t.displayName="Tab";u.__docgenInfo={description:"",methods:[],displayName:"TabBar",composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const va={title:"Components/TabBar",component:u,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},f={render:e=>a.jsxs(u,{...e,children:[a.jsx(t,{value:"tab1",label:"タブ1"}),a.jsx(t,{value:"tab2",label:"タブ2"}),a.jsx(t,{value:"tab3",label:"タブ3"}),a.jsx(t,{value:"tab4",label:"タブ4"}),a.jsx(t,{value:"tab5",label:"タブ5"}),a.jsx(t,{value:"tab6",label:"タブ6"}),a.jsx(t,{value:"tab7",label:"タブ7"})]})},T={args:{size:"small"},render:e=>a.jsxs(u,{...e,children:[a.jsx(t,{value:"tab1",label:"タブ1",size:e.size}),a.jsx(t,{value:"tab2",label:"タブ2",size:e.size}),a.jsx(t,{value:"tab3",label:"タブ3",size:e.size}),a.jsx(t,{value:"tab4",label:"タブ4",size:e.size}),a.jsx(t,{value:"tab5",label:"タブ5",size:e.size}),a.jsx(t,{value:"tab6",label:"タブ6",size:e.size}),a.jsx(t,{value:"tab7",label:"タブ7",size:e.size})]})},h={render:()=>a.jsxs("div",{className:"space-y-lg",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),a.jsxs(u,{defaultValue:"tab3",children:[a.jsx(t,{value:"tab1",label:"デフォルト"}),a.jsx(t,{value:"tab2",label:"ホバー時"}),a.jsx(t,{value:"tab3",label:"選択中"}),a.jsx(t,{value:"tab4",label:"利用不可時",disabled:!0})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),a.jsxs(u,{size:"small",defaultValue:"tab3",children:[a.jsx(t,{value:"tab1",label:"デフォルト",size:"small"}),a.jsx(t,{value:"tab2",label:"ホバー時",size:"small"}),a.jsx(t,{value:"tab3",label:"選択中",size:"small"}),a.jsx(t,{value:"tab4",label:"利用不可時",size:"small",disabled:!0})]})]})]})};var C,V,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1" label="タブ1" />
      <Tab value="tab2" label="タブ2" />
      <Tab value="tab3" label="タブ3" />
      <Tab value="tab4" label="タブ4" />
      <Tab value="tab5" label="タブ5" />
      <Tab value="tab6" label="タブ6" />
      <Tab value="tab7" label="タブ7" />
    </TabBar>
}`,...(R=(V=f.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var I,_,w;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(w=(_=T.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var A,B,P;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(B=h.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const pa=["Default","Small","AllStates"];export{h as AllStates,f as Default,T as Small,pa as __namedExportsOrder,va as default};
