import{r as R,i as Pe,j as e,P as _,g as ke,h as $,d as Fe,m as Le,e as l,c as S,b as G}from"./iframe-D7gHdX4A.js";import{u as $e,S as Ge}from"./ScrollEdgeShadows-hzTD_NFP.js";import{a as He,b as Ke,c as qe,D as U}from"./DropdownMenu-Dou64scv.js";import{I as Je}from"./IconDotsVertical-DV2zxZ4a.js";import{R as Qe,I as Ue,c as we}from"./index-Du3MyrAA.js";import{u as Xe}from"./index-CBb9euac.js";import"./preload-helper-Dp1pzeXC.js";import"./index-KHUfv-w_.js";import"./index-lQjD775t.js";import"./createReactComponent-Blq4bVNU.js";var W="Tabs",[Ye]=Fe(W,[we]),je=we(),[Ze,H]=Ye(W),ye=R.forwardRef((t,r)=>{const{__scopeTabs:n,value:o,onValueChange:i,defaultValue:h,orientation:c="horizontal",dir:b,activationMode:v="automatic",...w}=t,d=Xe(b),[u,j]=Pe({prop:o,onChange:i,defaultProp:h??"",caller:W});return e.jsx(Ze,{scope:n,baseId:ke(),value:u,onValueChange:j,orientation:c,dir:d,activationMode:v,children:e.jsx(_.div,{dir:d,"data-orientation":c,...w,ref:r})})});ye.displayName=W;var Se="TabsList",Re=R.forwardRef((t,r)=>{const{__scopeTabs:n,loop:o=!0,...i}=t,h=H(Se,n),c=je(n);return e.jsx(Qe,{asChild:!0,...c,orientation:h.orientation,dir:h.dir,loop:o,children:e.jsx(_.div,{role:"tablist","aria-orientation":h.orientation,...i,ref:r})})});Re.displayName=Se;var Ve="TabsTrigger",Ce=R.forwardRef((t,r)=>{const{__scopeTabs:n,value:o,disabled:i=!1,...h}=t,c=H(Ve,n),b=je(n),v=ze(c.baseId,o),w=Ee(c.baseId,o),d=o===c.value;return e.jsx(Ue,{asChild:!0,...b,focusable:!i,active:d,children:e.jsx(_.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":w,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:v,...h,ref:r,onMouseDown:$(t.onMouseDown,u=>{!i&&u.button===0&&u.ctrlKey===!1?c.onValueChange(o):u.preventDefault()}),onKeyDown:$(t.onKeyDown,u=>{[" ","Enter"].includes(u.key)&&c.onValueChange(o)}),onFocus:$(t.onFocus,()=>{const u=c.activationMode!=="manual";!d&&!i&&u&&c.onValueChange(o)})})})});Ce.displayName=Ve;var Ne="TabsContent",ea=R.forwardRef((t,r)=>{const{__scopeTabs:n,value:o,forceMount:i,children:h,...c}=t,b=H(Ne,n),v=ze(b.baseId,o),w=Ee(b.baseId,o),d=o===b.value,u=R.useRef(d);return R.useEffect(()=>{const j=requestAnimationFrame(()=>u.current=!1);return()=>cancelAnimationFrame(j)},[]),e.jsx(Le,{present:i||d,children:({present:j})=>e.jsx(_.div,{"data-state":d?"active":"inactive","data-orientation":b.orientation,role:"tabpanel","aria-labelledby":v,hidden:!j,id:w,tabIndex:0,...c,ref:r,style:{...t.style,animationDuration:u.current?"0s":void 0},children:j&&h})})});ea.displayName=Ne;function ze(t,r){return`${t}-trigger-${r}`}function Ee(t,r){return`${t}-content-${r}`}var aa=ye,ta=Re,ra=Ce;const sa=G("inline-flex",{variants:{size:{normal:"h-12 max-md:h-10",small:"h-10"}},defaultVariants:{size:"normal"}}),na=G(`text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 hover:after:bg-shape-interactive-primary-default
  data-[state=active]:text-interactive-primary-default
  data-[state=active]:after:bg-shape-interactive-primary-selected relative
  inline-flex cursor-pointer items-center justify-center border-b leading-[100%]
  tracking-[0] whitespace-nowrap transition-colors after:absolute
  after:bottom-[-1px] after:w-full after:transition-all after:content-['']
  hover:after:h-[2px] disabled:cursor-not-allowed
  data-[state=active]:after:h-[2px]`,{variants:{size:{normal:"p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}}),oa=G(`text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,{variants:{size:{normal:"p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md",small:"p-sm h-9.5 text-md"}},defaultVariants:{size:"normal"}});function la(){const[t,r]=l.useState(()=>typeof window<"u"&&window.matchMedia("(pointer: fine)").matches);return l.useEffect(()=>{const n=window.matchMedia("(pointer: fine)"),o=()=>r(n.matches);return n.addEventListener("change",o),()=>n.removeEventListener("change",o)},[]),t}function ia(t){const r=[];return l.Children.forEach(t,n=>{l.isValidElement(n)&&n.type===a&&r.push(n)}),r}const x=l.forwardRef(({className:t,size:r,children:n,moreLabel:o,...i},h)=>{const c=r??"normal",b=la(),v=l.useRef(null),w=l.useRef(null),d=l.useRef(new Map),u=l.useRef(new Map),{hasOverflow:j,startShadow:Ae,endShadow:Be}=$e(v),g=l.useMemo(()=>ia(n),[n]),[K,P]=l.useState(g.length),[q,k]=l.useState(!1),F=l.useCallback(()=>{if(!b){P(g.length),k(!0);return}const s=v.current;if(!s)return;d.current.forEach((V,N)=>{const Q=V.offsetWidth;Q>0&&u.current.set(N,Q)});const m=s.clientWidth,f=w.current,y=f?f.offsetWidth+8:80;let p=0;for(const V of g)p+=u.current.get(V.props.value)??0;if(p<=m){P(g.length),k(!0);return}let T=0,J=0;for(const V of g){const N=u.current.get(V.props.value)??0;if(T+N+y<=m)T+=N,J++;else break}P(Math.max(J,1)),k(!0)},[g,b]);l.useEffect(()=>{const s=v.current;if(!s)return;const m=new ResizeObserver(()=>{F()});return m.observe(s),F(),()=>m.disconnect()},[F]);const L=i.value??i.defaultValue,De=g.map(s=>s.props.value).join(`
`);l.useEffect(()=>{if(b)return;const s=v.current;if(!s)return;const m=()=>{const y=s.querySelector('[role="tab"][data-state="active"]');if(!y)return;const p=s.getBoundingClientRect(),T=y.getBoundingClientRect();T.left<p.left?s.scrollLeft+=T.left-p.left:T.right>p.right&&(s.scrollLeft+=T.right-p.right)},f=new ResizeObserver(m);return d.current.forEach(y=>f.observe(y)),()=>f.disconnect()},[L,b,De]);const C=g.slice(K),Oe=C.length>0,_e=C.some(s=>s.props.value===L),We=o??(s=>`${s} more`);return e.jsxs(aa,{ref:h,className:S("relative w-full",t),...i,children:[e.jsxs(ta,{ref:v,className:S(sa({size:c}),"w-full",!b&&`overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden`),role:"tablist",children:[g.map((s,m)=>l.cloneElement(s,{key:s.props.value,size:c,ref:f=>{f?d.current.set(s.props.value,f):d.current.delete(s.props.value)},className:S(s.props.className,q&&m>=K&&"hidden")})),Oe&&q&&e.jsx("div",{ref:w,className:"inline-flex shrink-0",children:e.jsxs(He,{children:[e.jsx(Ke,{asChild:!0,children:e.jsxs("button",{type:"button",className:S(oa({size:c}),_e&&"font-bold text-interactive-primary-default"),children:[e.jsx(Je,{size:c==="small"?16:20,className:"mr-xxs"}),We(C.length)]})}),e.jsx(qe,{align:"end",size:"sm",children:C.map(s=>{const{value:m,disabled:f,asChild:y,children:p}=s.props,T=S(m===L&&"font-bold text-interactive-primary-default");return y&&l.isValidElement(p)?e.jsx(U,{disabled:f??!1,asChild:!0,className:T,children:p},m):e.jsx(U,{disabled:f??!1,onSelect:()=>{i.onValueChange&&i.onValueChange(m)},className:T,children:p},m)})})]})})]}),!b&&j&&e.jsx(Ge,{startShadow:Ae,endShadow:Be})]})});x.displayName="TabBar";const a=l.forwardRef(({className:t,size:r,...n},o)=>{const i=r??"normal";return e.jsx(ra,{ref:o,className:S(na({size:i}),t),...n})});a.displayName="Tab";x.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{moreLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(count: number) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"count"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:'Label for the overflow "more" button. Receives the count of hidden tabs. Defaults to `(count) => \\`${count} more\\``'}},composes:["VariantProps"]};a.__docgenInfo={description:"",methods:[],displayName:"Tab",composes:["VariantProps"]};const ga={title:"Components/TabBar",component:x,parameters:{layout:"padded",radixDocs:{primitive:"Tabs",url:"https://www.radix-ui.com/primitives/docs/components/tabs"}},argTypes:{size:{control:"radio",options:["normal","small"],description:"Size variant of the tab bar"},defaultValue:{control:"text",description:"The default active tab value"},value:{control:"text",description:"The controlled active tab value"},onValueChange:{action:"tab changed",description:"Callback when tab selection changes"}},args:{size:"normal",defaultValue:"tab1"}},z={render:t=>e.jsxs(x,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},E={args:{size:"small"},render:t=>e.jsxs(x,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})},I={render:()=>e.jsxs("div",{className:"space-y-lg",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Normal Size - All States"}),e.jsxs(x,{defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium mb-md",children:"Small Size - All States"}),e.jsxs(x,{size:"small",defaultValue:"tab3",children:[e.jsx(a,{value:"tab1",children:"デフォルト"}),e.jsx(a,{value:"tab2",children:"ホバー時"}),e.jsx(a,{value:"tab3",children:"選択中"}),e.jsx(a,{value:"tab4",disabled:!0,children:"利用不可時"})]})]})]})},M={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(x,{...t,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},ca=()=>{const[t,r]=l.useState("tab6");return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(x,{value:t,onValueChange:r,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},A={render:()=>e.jsx(ca,{})},B={render:t=>e.jsx("div",{style:{maxWidth:400},children:e.jsxs(x,{...t,moreLabel:r=>`他${r}件`,children:[e.jsx(a,{value:"tab1",children:"タブ1"}),e.jsx(a,{value:"tab2",children:"タブ2"}),e.jsx(a,{value:"tab3",children:"タブ3"}),e.jsx(a,{value:"tab4",children:"タブ4"}),e.jsx(a,{value:"tab5",children:"タブ5"}),e.jsx(a,{value:"tab6",children:"タブ6"}),e.jsx(a,{value:"tab7",children:"タブ7"})]})})},Ie=({initialValue:t="profile"})=>{const[r,n]=l.useState(t);return e.jsxs(x,{value:r,onValueChange:n,children:[e.jsx(a,{value:"profile",children:"プロフィール"}),e.jsx(a,{value:"email",children:"メール配信設定"}),e.jsx(a,{value:"two-factor",children:"二要素認証設定"}),e.jsx(a,{value:"language",children:"言語設定"}),e.jsx(a,{value:"notifications",children:"通知設定"})]})},Me=()=>{const t=window.matchMedia;return window.matchMedia=r=>t.call(window,r==="(pointer: fine)"?"not all":r),()=>{window.matchMedia=t}},D={render:()=>e.jsx(Ie,{}),beforeEach:Me,globals:{viewport:{value:"mobile",isRotated:!1}},parameters:{docs:{story:{inline:!1,height:"120px"},description:{story:'The normal size at 375px, as on a phone: 14px labels and 38px tabs. The bar scrolls sideways without a scrollbar and shades the edge that hides more tabs. The story reports no fine pointer, so it scrolls even with a mouse; on a real desktop the bar collapses into the "more" dropdown instead.'}}}},O={render:()=>e.jsx(Ie,{initialValue:"notifications"}),beforeEach:Me,globals:{viewport:{value:"mobile",isRotated:!1}},parameters:{docs:{story:{inline:!1,height:"120px"},description:{story:"Opened with the last tab selected, as from a deep link. The bar starts scrolled so the selected tab is in view."}}}};var X,Y,Z;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <TabBar {...args}>
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
    </TabBar>
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,se,ne;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ne=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(le=M.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <OverflowWithActiveInDropdownRender />
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var be,me,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(me=B.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ve,fe,pe;D.parameters={...D.parameters,docs:{...(ve=D.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(pe=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var xe,Te,ge;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <MobileRender initialValue="notifications" />,
  beforeEach: withoutFinePointer,
  globals: {
    viewport: {
      value: 'mobile',
      isRotated: false
    }
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        height: '120px'
      },
      description: {
        story: 'Opened with the last tab selected, as from a deep link. The bar starts scrolled so the selected tab is in view.'
      }
    }
  }
}`,...(ge=(Te=O.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};const wa=["Default","Small","AllStates","Overflow","OverflowWithActiveInDropdown","OverflowCustomLabel","Mobile","MobileActiveTabOutOfView"];export{I as AllStates,z as Default,D as Mobile,O as MobileActiveTabOutOfView,M as Overflow,B as OverflowCustomLabel,A as OverflowWithActiveInDropdown,E as Small,wa as __namedExportsOrder,ga as default};
