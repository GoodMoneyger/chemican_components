import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as v,e as h}from"./iframe-D8qJuWI3.js";import{c as E}from"./index-lnYcL0kX.js";import{c as N}from"./utils-CCJlgNnB.js";import{u as J,c as S}from"./index-asFILy3u.js";import{c as Q,P as g}from"./index-CinCMbhD.js";import{c as D,R as U,I as W}from"./index-BW4IZKl4.js";import{P as X}from"./index-yX2YSHUy.js";import{u as Y}from"./index-HY7yF2kK.js";import{u as Z}from"./index-Yaqrvp-q.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DrEC1Ud8.js";import"./index-C-TfqteI.js";import"./index-BCowv-3P.js";import"./index-BBT3Ch3x.js";import"./index-BKtjU641.js";var j="Tabs",[ee]=Q(j,[D]),M=D(),[ae,y]=ee(j),F=v.forwardRef((a,l)=>{const{__scopeTabs:i,value:s,onValueChange:o,defaultValue:n,orientation:r="horizontal",dir:d,activationMode:p="automatic",...x}=a,c=Y(d),[b,m]=J({prop:s,onChange:o,defaultProp:n??"",caller:j});return e.jsx(ae,{scope:i,baseId:Z(),value:b,onValueChange:m,orientation:r,dir:c,activationMode:p,children:e.jsx(g.div,{dir:c,"data-orientation":r,...x,ref:l})})});F.displayName=j;var G="TabsList",k=v.forwardRef((a,l)=>{const{__scopeTabs:i,loop:s=!0,...o}=a,n=y(G,i),r=M(i);return e.jsx(U,{asChild:!0,...r,orientation:n.orientation,dir:n.dir,loop:s,children:e.jsx(g.div,{role:"tablist","aria-orientation":n.orientation,...o,ref:l})})});k.displayName=G;var L="TabsTrigger",$=v.forwardRef((a,l)=>{const{__scopeTabs:i,value:s,disabled:o=!1,...n}=a,r=y(L,i),d=M(i),p=q(r.baseId,s),x=O(r.baseId,s),c=s===r.value;return e.jsx(W,{asChild:!0,...d,focusable:!o,active:c,children:e.jsx(g.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":x,"data-state":c?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...n,ref:l,onMouseDown:S(a.onMouseDown,b=>{!o&&b.button===0&&b.ctrlKey===!1?r.onValueChange(s):b.preventDefault()}),onKeyDown:S(a.onKeyDown,b=>{[" ","Enter"].includes(b.key)&&r.onValueChange(s)}),onFocus:S(a.onFocus,()=>{const b=r.activationMode!=="manual";!c&&!o&&b&&r.onValueChange(s)})})})});$.displayName=L;var K="TabsContent",te=v.forwardRef((a,l)=>{const{__scopeTabs:i,value:s,forceMount:o,children:n,...r}=a,d=y(K,i),p=q(d.baseId,s),x=O(d.baseId,s),c=s===d.value,b=v.useRef(c);return v.useEffect(()=>{const m=requestAnimationFrame(()=>b.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(X,{present:o||c,children:({present:m})=>e.jsx(g.div,{"data-state":c?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!m,id:x,tabIndex:0,...r,ref:l,style:{...a.style,animationDuration:b.current?"0s":void 0},children:m&&n})})});te.displayName=K;function q(a,l){return`${a}-trigger-${l}`}function O(a,l){return`${a}-content-${l}`}var se=F,le=k,re=$;const H=h.createContext({size:"normal"}),oe=()=>h.useContext(H),ie=E("inline-flex",{variants:{size:{normal:"h-12",small:"h-10"}},defaultVariants:{size:"normal"}}),ne=E(`text-body-primary border-divider-default hover:border-interactive-hover
  data-[state=active]:border-interactive-selected data-[state=active]:font-bold
  disabled:text-interactive-disabled disabled:hover:border-divider-default
  relative inline-flex cursor-pointer items-center justify-center border-b pb-px
  leading-[100%] tracking-[0] transition-colors hover:border-b-2
  disabled:cursor-not-allowed disabled:hover:border-b
  data-[state=active]:border-b-2
  data-[state=active]:text-[var(--chemican-green-800)]`,{variants:{size:{normal:`p-md h-12 text-lg hover:pb-[calc(1rem-1px)]
        data-[state=active]:pb-[calc(1rem-1px)]`,small:`p-sm h-9.5 text-md hover:pb-[calc(0.75rem-1px)]
        data-[state=active]:pb-[calc(0.75rem-1px)]`}},defaultVariants:{size:"normal"}}),u=h.forwardRef(({className:a,size:l,children:i,...s},o)=>{const n=l?{size:l}:{};return e.jsx(H.Provider,{value:n,children:e.jsx(se,{ref:o,className:N("w-full",a),...s,children:e.jsx(le,{className:N(ie({size:l})),role:"tablist",children:i})})})});u.displayName="TabBar";const t=h.forwardRef(({className:a,size:l,label:i,disabled:s,...o},n)=>{const{size:r}=oe(),d=l??r;return e.jsx(re,{ref:n,className:N(ne({size:d}),a),disabled:s,...o,children:i})});t.displayName="Tab";u.__docgenInfo={description:"",methods:[],displayName:"TabBar",composes:["VariantProps"]};t.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}},composes:["VariantProps"]};const ye={title:"Components/TabBar",component:u,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},f={render:a=>e.jsxs(u,{...a,children:[e.jsx(t,{value:"tab1",label:"タブ1"}),e.jsx(t,{value:"tab2",label:"タブ2"}),e.jsx(t,{value:"tab3",label:"タブ3"}),e.jsx(t,{value:"tab4",label:"タブ4"}),e.jsx(t,{value:"tab5",label:"タブ5"}),e.jsx(t,{value:"tab6",label:"タブ6"}),e.jsx(t,{value:"tab7",label:"タブ7"})]})},T={args:{size:"small"},render:a=>e.jsxs(u,{...a,children:[e.jsx(t,{value:"tab1",label:"タブ1",size:a.size}),e.jsx(t,{value:"tab2",label:"タブ2",size:a.size}),e.jsx(t,{value:"tab3",label:"タブ3",size:a.size}),e.jsx(t,{value:"tab4",label:"タブ4",size:a.size}),e.jsx(t,{value:"tab5",label:"タブ5",size:a.size}),e.jsx(t,{value:"tab6",label:"タブ6",size:a.size}),e.jsx(t,{value:"tab7",label:"タブ7",size:a.size})]})},z={render:()=>e.jsxs("div",{className:"space-y-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),e.jsxs(u,{defaultValue:"tab3",children:[e.jsx(t,{value:"tab1",label:"デフォルト"}),e.jsx(t,{value:"tab2",label:"ホバー時"}),e.jsx(t,{value:"tab3",label:"選択中"}),e.jsx(t,{value:"tab4",label:"利用不可時",disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),e.jsxs(u,{size:"small",defaultValue:"tab3",children:[e.jsx(t,{value:"tab1",label:"デフォルト",size:"small"}),e.jsx(t,{value:"tab2",label:"ホバー時",size:"small"}),e.jsx(t,{value:"tab3",label:"選択中",size:"small"}),e.jsx(t,{value:"tab4",label:"利用不可時",size:"small",disabled:!0})]})]})]})};var C,V,R;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1" label="タブ1" />
      <Tab value="tab2" label="タブ2" />
      <Tab value="tab3" label="タブ3" />
      <Tab value="tab4" label="タブ4" />
      <Tab value="tab5" label="タブ5" />
      <Tab value="tab6" label="タブ6" />
      <Tab value="tab7" label="タブ7" />
    </TabBar>
}`,...(R=(V=f.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var I,_,A;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(A=(_=T.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var w,B,P;z.parameters={...z.parameters,docs:{...(w=z.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(B=z.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const Ce=["Default","Small","AllStates"];export{z as AllStates,f as Default,T as Small,Ce as __namedExportsOrder,ye as default};
