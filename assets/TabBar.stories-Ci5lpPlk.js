import{r as y,i as Ee,j as e,P as D,g as Ae,h as O,d as Be,m as De,e as i,c as w,b as L}from"./iframe-BM8tNP8b.js";import{u as _e,S as We}from"./ScrollEdgeShadows-CYWuvqRG.js";import{a as Pe,b as ke,c as Fe,D as Q}from"./DropdownMenu-B6r3VZfJ.js";import{I as Oe}from"./IconDotsVertical-5BzPsv4c.js";import{R as Le,I as $e,c as fe}from"./index-DjePAP7Z.js";import{u as Ge}from"./index-C8xC679-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-sSTCDpT3.js";import"./index-Xe_2x2Gk.js";import"./createReactComponent-GG7yTbqD.js";var _="Tabs",[He]=Be(_,[fe]),xe=fe(),[Ke,$]=He(_),Te=y.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,onValueChange:o,defaultValue:v,orientation:l="horizontal",dir:b,activationMode:p="automatic",...f}=t,u=Ge(b),[d,x]=Ee({prop:n,onChange:o,defaultProp:v??"",caller:_});return e.jsx(Ke,{scope:s,baseId:Ae(),value:d,onValueChange:x,orientation:l,dir:u,activationMode:p,children:e.jsx(D.div,{dir:u,"data-orientation":l,...f,ref:r})})});Te.displayName=_;var ge="TabsList",je=y.forwardRef((t,r)=>{const{__scopeTabs:s,loop:n=!0,...o}=t,v=$(ge,s),l=xe(s);return e.jsx(Le,{asChild:!0,...l,orientation:v.orientation,dir:v.dir,loop:n,children:e.jsx(D.div,{role:"tablist","aria-orientation":v.orientation,...o,ref:r})})});je.displayName=ge;var we="TabsTrigger",ye=y.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,disabled:o=!1,...v}=t,l=$(we,s),b=xe(s),p=Ne(l.baseId,n),f=Re(l.baseId,n),u=n===l.value;return e.jsx($e,{asChild:!0,...b,focusable:!o,active:u,children:e.jsx(D.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":f,"data-state":u?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:p,...v,ref:r,onMouseDown:O(t.onMouseDown,d=>{!o&&d.button===0&&d.ctrlKey===!1?l.onValueChange(n):d.preventDefault()}),onKeyDown:O(t.onKeyDown,d=>{[" ","Enter"].includes(d.key)&&l.onValueChange(n)}),onFocus:O(t.onFocus,()=>{const d=l.activationMode!=="manual";!u&&!o&&d&&l.onValueChange(n)})})})});ye.displayName=we;var Se="TabsContent",qe=y.forwardRef((t,r)=>{const{__scopeTabs:s,value:n,forceMount:o,children:v,...l}=t,b=$(Se,s),p=Ne(b.baseId,n),f=Re(b.baseId,n),u=n===b.value,d=y.useRef(u);return y.useEffect(()=>{const x=requestAnimationFrame(()=>d.current=!1);return()=>cancelAnimationFrame(x)},[]),e.jsx(De,{present:o||u,children:({present:x})=>e.jsx(D.div,{"data-state":u?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":p,hidden:!x,id:f,tabIndex:0,...l,ref:r,style:{...t.style,animationDuration:d.current?"0s":void 0},children:x&&v})})});qe.displayName=Se;function Ne(t,r){return`${t}-trigger-${r}`}function Re(t,r){return`${t}-content-${r}`}var Je=Te,Qe=je,Ue=ye;const Xe=L("inline-flex",{variants:{size:{normal:"h-12 max-md:h-10",small:"h-10"}},defaultVariants:{size:"normal"}}),Ye=L(`text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 hover:after:bg-shape-interactive-primary-default
  data-[state=active]:text-interactive-primary-default
  data-[state=active]:after:bg-shape-interactive-primary-selected relative
  inline-flex cursor-pointer items-center justify-center border-b leading-[100%]
  tracking-[0] whitespace-nowrap transition-colors after:absolute
  after:bottom-[-1px] after:w-full after:transition-all after:content-['']
  hover:after:h-[2px] disabled:cursor-not-allowed
  data-[state=active]:after:h-[2px]`,{variants:{size:{normal:"p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}}),Ze=L(`text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,{variants:{size:{normal:"p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}});function ea(){const[t,r]=i.useState(()=>typeof window<"u"&&window.matchMedia("(pointer: fine)").matches);return i.useEffect(()=>{const s=window.matchMedia("(pointer: fine)"),n=()=>r(s.matches);return s.addEventListener("change",n),()=>s.removeEventListener("change",n)},[]),t}function aa(t){const r=[];return i.Children.forEach(t,s=>{i.isValidElement(s)&&s.type===a&&r.push(s)}),r}const h=i.forwardRef(({className:t,size:r,children:s,moreLabel:n,...o},v)=>{const l=r??"normal",b=ea(),p=i.useRef(null),f=i.useRef(null),u=i.useRef(new Map),d=i.useRef(new Map),{hasOverflow:x,startShadow:Ce,endShadow:Ve}=_e(p),T=i.useMemo(()=>aa(s),[s]),[G,W]=i.useState(T.length),[H,P]=i.useState(!1),k=i.useCallback(()=>{if(!b){W(T.length),P(!0);return}const c=p.current;if(!c)return;u.current.forEach((N,C)=>{const J=N.offsetWidth;J>0&&d.current.set(C,J)});const m=c.clientWidth,g=f.current,F=g?g.offsetWidth+8:80;let j=0;for(const N of T)j+=d.current.get(N.props.value)??0;if(j<=m){W(T.length),P(!0);return}let S=0,q=0;for(const N of T){const C=d.current.get(N.props.value)??0;if(S+C+F<=m)S+=C,q++;else break}W(Math.max(q,1)),P(!0)},[T,b]);i.useEffect(()=>{const c=p.current;if(!c)return;const m=new ResizeObserver(()=>{k()});return m.observe(c),k(),()=>m.disconnect()},[k]);const R=T.slice(G),ze=R.length>0,K=o.value??o.defaultValue,Ie=R.some(c=>c.props.value===K),Me=n??(c=>`${c} more`);return e.jsxs(Je,{ref:v,className:w("relative w-full",t),...o,children:[e.jsxs(Qe,{ref:p,className:w(Xe({size:l}),"w-full",!b&&`overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden`),role:"tablist",children:[T.map((c,m)=>i.cloneElement(c,{key:c.props.value,size:l,ref:g=>{g?u.current.set(c.props.value,g):u.current.delete(c.props.value)},className:w(c.props.className,H&&m>=G&&"hidden")})),ze&&H&&e.jsx("div",{ref:f,className:"inline-flex shrink-0",children:e.jsxs(Pe,{children:[e.jsx(ke,{asChild:!0,children:e.jsxs("button",{type:"button",className:w(Ze({size:l}),Ie&&"font-bold text-interactive-primary-default"),children:[e.jsx(Oe,{size:l==="small"?16:20,className:"mr-xxs"}),Me(R.length)]})}),e.jsx(Fe,{align:"end",size:"sm",children:R.map(c=>{const{value:m,disabled:g,asChild:F,children:j}=c.props,S=w(m===K&&"font-bold text-interactive-primary-default");return F&&i.isValidElement(j)?e.jsx(Q,{disabled:g??!1,asChild:!0,className:S,children:j},m):e.jsx(Q,{disabled:g??!1,onSelect:()=>{o.onValueChange&&o.onValueChange(m)},className:S,children:j},m)})})]})})]}),!b&&x&&e.jsx(We,{startShadow:Ce,endShadow:Ve})]})});h.displayName="TabBar";const a=i.forwardRef(({className:t,size:r,...s},n)=>{const o=r??"normal";return e.jsx(Ue,{ref:n,className:w(Ye({size:o}),t),...s})});a.displayName="Tab";h.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{moreLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:'Label for the overflow "more" button. Receives the count of hidden tabs. Defaults to `(count) => \\`${count} more\\``'}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"Tab",composes:["VariantProps"]};const ha={title:"Components/TabBar",component:h,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},V={render:t=>e.jsxs(h,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},z={args:{size:"small"},render:t=>e.jsxs(h,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},I={render:()=>e.jsxs("div",{className:"space-y-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),e.jsxs(h,{defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),e.jsxs(h,{size:"small",defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]})]})},M={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(h,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},ta=()=>{const[t,r]=i.useState("tab6");return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(h,{value:t,onValueChange:r,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},E={render:()=>e.jsx(ta,{})},A={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(h,{...t,moreLabel:r=>`他${r}件`,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},ra=()=>{const[t,r]=i.useState("profile");return e.jsxs(h,{value:t,onValueChange:r,children:[e.jsx(a,{value:"profile",children:"プロフィール"}),e.jsx(a,{value:"email",children:"メール配信設定"}),e.jsx(a,{value:"two-factor",children:"二要素認証設定"}),e.jsx(a,{value:"language",children:"言語設定"}),e.jsx(a,{value:"notifications",children:"通知設定"})]})},sa=()=>{const t=window.matchMedia;return window.matchMedia=r=>t.call(window,r==="(pointer: fine)"?"not all":r),()=>{window.matchMedia=t}},B={render:()=>e.jsx(ra,{}),beforeEach:sa,globals:{viewport:{value:"mobile",isRotated:!1}},parameters:{docs:{story:{inline:!1,height:"120px"},description:{story:'The normal size at 375px, as on a phone: 14px labels and 38px tabs. The bar scrolls sideways without a scrollbar and shades the edge that hides more tabs. The story reports no fine pointer, so it scrolls even with a mouse; on a real desktop the bar collapses into the "more" dropdown instead.'}}}};var U,X,Y;V.parameters={...V.parameters,docs:{...(U=V.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
    </TabBar>
}`,...(Y=(X=V.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;z.parameters={...z.parameters,docs:{...(Z=z.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <TabBar {...args}>
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
    </TabBar>
}`,...(ae=(ee=z.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,se;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="space-y-lg">
      {/* Normal size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Normal Size - All States</h3>
        <TabBar defaultValue="tab3">
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>

      {/* Small size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Small Size - All States</h3>
        <TabBar size="small" defaultValue="tab3">
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>
    </div>
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,le;M.parameters={...M.parameters,docs:{...(ne=M.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 400
  }}>
      <TabBar {...args}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
}`,...(le=(oe=M.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ce,de;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <OverflowWithActiveInDropdownRender />
}`,...(de=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,be,me;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <div style={{
    maxWidth: 400
  }}>
      <TabBar {...args} moreLabel={count => \`他\${count}件\`}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
}`,...(me=(be=A.parameters)==null?void 0:be.docs)==null?void 0:me.source}}};var ve,he,pe;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <MobileRender />,
  beforeEach: withoutFinePointer,
  globals: {
    viewport: {
      value: 'mobile',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      // Its own iframe keeps the pointer override away from the other stories.
      story: {
        inline: false,
        height: '120px'
      },
      description: {
        story: 'The normal size at 375px, as on a phone: 14px labels and 38px tabs. The bar scrolls sideways without a scrollbar and shades the edge that hides more tabs. The story reports no fine pointer, so it scrolls even with a mouse; on a real desktop the bar collapses into the "more" dropdown instead.'
      }
    }
  }
}`,...(pe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};const pa=["Default","Small","AllStates","Overflow","OverflowWithActiveInDropdown","OverflowCustomLabel","Mobile"];export{I as AllStates,V as Default,B as Mobile,M as Overflow,A as OverflowCustomLabel,E as OverflowWithActiveInDropdown,z as Small,pa as __namedExportsOrder,ha as default};
